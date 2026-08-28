#!/usr/bin/env node

import childProcess from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const protoPrefix = 'extracted_proto/com/bapis/';
const versions = [
  { key: 'main', label: '大陆版 v9.8.0', ref: 'v9.8.0', aliases: ['main', 'cn', 'v9.8.0'] },
  { key: 'international', label: '国际版 v6.3.0', ref: 'international-v6.3.0', aliases: ['international', 'intl', 'international-v6.3.0'] },
  { key: 'tv', label: 'TV 版 v1.8.8', ref: 'tv-v1.8.8', aliases: ['tv', 'tv-v1.8.8'] },
];
const scalarDefaults = new Map([
  ['string', ''], ['bytes', ''], ['bool', false],
  ['double', 0], ['float', 0], ['int32', 0], ['int64', 0], ['uint32', 0], ['uint64', 0],
  ['sint32', 0], ['sint64', 0], ['fixed32', 0], ['fixed64', 0], ['sfixed32', 0], ['sfixed64', 0],
]);
const booleanOptions = new Set(['help', 'json', 'plaintext', 'insecure', 'dry-run']);

function fail(message) {
  throw new Error(message);
}

function runGit(args, { encoding = 'utf8' } = {}) {
  try {
    return childProcess.execFileSync('git', args, { cwd: repositoryRoot, encoding, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (error) {
    const details = error.stderr?.toString().trim();
    fail(`无法读取 Git 中的 proto：${details || error.message}`);
  }
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const options = { header: [] };
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) fail(`无法识别的参数：${token}`);
    const [rawName, inlineValue] = token.slice(2).split(/=(.*)/s, 2);
    if (!rawName) fail('参数名不能为空。');
    if (booleanOptions.has(rawName)) {
      if (inlineValue !== undefined) fail(`布尔参数 --${rawName} 不接受值。`);
      options[rawName] = true;
      continue;
    }
    const value = inlineValue ?? rest[++index];
    if (value === undefined || value.startsWith('--')) fail(`参数 --${rawName} 缺少值。`);
    if (rawName === 'header') options.header.push(value);
    else if (options[rawName] !== undefined) fail(`参数 --${rawName} 不能重复。`);
    else options[rawName] = value;
  }
  return { command, options };
}

function printUsage() {
  console.log(`BAPIS gRPC 快速调试工具

用法：
  node tools/grpc_debug.mjs list [--version main|international|tv] [--query 关键词] [--json]
  node tools/grpc_debug.mjs describe --service 完整服务名 [--method RPC] [--version 版本] [--json]
  node tools/grpc_debug.mjs template --service 完整服务名 --method RPC [--version 版本] [--output 请求.json]
  node tools/grpc_debug.mjs call --target 主机:端口 --service 完整服务名 --method RPC [选项]

call 选项：
  --data 文件.json          读取请求体；客户端流可使用每行一个 JSON 消息
  --data-json JSON          直接传入单个 JSON 请求体
  --header '名称: 值'        可重复，传给 grpcurl 的元数据头
  --plaintext               使用明文 HTTP/2，而非 TLS
  --insecure                TLS 下跳过证书校验
  --authority 主机名         覆盖 HTTP/2 authority
  --max-time 秒数            调用超时，默认 15
  --dry-run                 只校验请求和输出调用摘要，不实际发送

版本别名：main（大陆版）、international（国际版）、tv（TV 版）。
实际调用需要本机安装 protoc 和 grpcurl；工具会从对应 Git 标签生成临时描述符，不会修改仓库。`);
}

function option(options, name, { required = false, fallback } = {}) {
  const value = options[name] ?? fallback;
  if (required && !value) fail(`缺少必填参数 --${name}。`);
  return value;
}

function resolveVersion(value = 'main') {
  const normalized = value.toLowerCase();
  const version = versions.find(candidate => candidate.aliases.includes(normalized));
  if (!version) fail(`未知版本 ${value}。可选值：${versions.map(candidate => candidate.key).join(', ')}。`);
  return version;
}

function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
}

function resolveType(type, packageName) {
  const normalized = type.replace(/^\./, '');
  if (normalized.startsWith('com.bapis.') || normalized.startsWith('google.protobuf.')) return normalized;
  return normalized.includes('.') ? `com.bapis.${normalized}` : `${packageName}.${normalized}`;
}

function mode(method) {
  if (method.clientStreaming && method.serverStreaming) return '双向流';
  if (method.clientStreaming) return '客户端流';
  if (method.serverStreaming) return '服务端流';
  return '一元调用';
}

class ProtoArchive {
  constructor(version) {
    this.version = version;
    this.sources = new Map();
    this.messages = new Map();
    this.enums = new Map();
    this.services = this.loadServices();
  }

  source(file) {
    if (!this.sources.has(file)) this.sources.set(file, runGit(['show', `${this.version.ref}:${file}`]));
    return this.sources.get(file);
  }

  files(suffix) {
    return runGit(['ls-tree', '-r', '--name-only', this.version.ref, 'extracted_proto/com/bapis'])
      .split('\n')
      .filter(file => file.endsWith(suffix));
  }

  loadServices() {
    const services = [];
    for (const file of this.files('/services.proto')) {
      const source = stripComments(this.source(file));
      const packageName = source.match(/\bpackage\s+([\w.]+)\s*;/)?.[1];
      if (!packageName) fail(`${file} 未包含 package 声明。`);
      for (const serviceMatch of source.matchAll(/\bservice\s+(\w+)\s*\{([\s\S]*?)^\}/gm)) {
        const [, name, body] = serviceMatch;
        const methods = [];
        for (const rpcMatch of body.matchAll(/\brpc\s+(\w+)\s*\(\s*(stream\s+)?([\w.]+)\s*\)\s*returns\s*\(\s*(stream\s+)?([\w.]+)\s*\)\s*;/g)) {
          const [, methodName, requestStream, request, responseStream, response] = rpcMatch;
          methods.push({
            name: methodName,
            request: resolveType(request, packageName),
            response: resolveType(response, packageName),
            clientStreaming: Boolean(requestStream),
            serverStreaming: Boolean(responseStream),
          });
        }
        services.push({ file, packageName, name, fullName: `${packageName}.${name}`, methods });
      }
    }
    return services.sort((left, right) => left.fullName.localeCompare(right.fullName));
  }

  findService(value) {
    const normalized = value.replace(/^\./, '');
    const fullName = normalized.startsWith('com.bapis.') ? normalized : `com.bapis.${normalized}`;
    const exact = this.services.find(service => service.fullName === fullName);
    if (exact) return exact;
    const matches = this.services.filter(service => service.fullName.toLowerCase().includes(normalized.toLowerCase()));
    if (matches.length === 1) return matches[0];
    if (matches.length > 1) fail(`服务名不唯一：${matches.map(service => service.fullName).join(', ')}。请使用完整服务名。`);
    fail(`未找到服务 ${value}。使用 list --query ${value} 搜索。`);
  }

  findMethod(service, name) {
    const matches = service.methods.filter(method => method.name === name);
    if (matches.length === 1) return matches[0];
    if (matches.length > 1) fail(`服务 ${service.fullName} 中的 ${name} 存在多个声明。`);
    fail(`服务 ${service.fullName} 不包含 RPC ${name}。`);
  }

  findMessage(fullName) {
    if (fullName.startsWith('google.protobuf.')) return { fullName, fields: [], standard: true };
    if (this.messages.has(fullName)) return this.messages.get(fullName);
    const parts = fullName.split('.');
    const name = parts.at(-1);
    const packageName = parts.slice(0, -1).join('.');
    const matchingSources = this.files('/messages.proto').filter(file => {
      const source = this.source(file);
      return source.match(/\bpackage\s+([\w.]+)\s*;/)?.[1] === packageName;
    });
    for (const file of matchingSources) {
      const message = extractMessage(file, this.source(file), name, fullName);
      if (message) {
        this.messages.set(fullName, message);
        return message;
      }
    }
    return { fullName, fields: [], missing: true };
  }

  isEnum(type, packageName) {
    const fullName = resolveType(type, packageName);
    if (this.enums.has(fullName)) return this.enums.get(fullName);
    const parts = fullName.split('.');
    const name = parts.at(-1);
    const targetPackage = parts.slice(0, -1).join('.');
    for (const file of this.files('/messages.proto')) {
      const source = this.source(file);
      const filePackage = source.match(/\bpackage\s+([\w.]+)\s*;/)?.[1];
      if (filePackage !== targetPackage) continue;
      const present = new RegExp(`\\benum\\s+${escapeRegExp(name)}\\s*\\{`).test(stripComments(source));
      this.enums.set(fullName, present);
      return present;
    }
    this.enums.set(fullName, false);
    return false;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function balancedBlock(source, openIndex) {
  let depth = 0;
  for (let index = openIndex; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(openIndex + 1, index);
    }
  }
  fail('proto 中存在未闭合的消息块。');
}

function parseField(statement, oneof) {
  const match = statement.trim().match(/^(?:(repeated|optional)\s+)?(map\s*<\s*[\w.]+\s*,\s*[\w.]+\s*>|[\w.]+)\s+(\w+)\s*=\s*(\d+)\b/);
  if (!match) return null;
  const [, label, type, name, number] = match;
  return { number: Number(number), name, type: type.replace(/\s+/g, ''), label: label ?? '', oneof };
}

function extractMessage(file, source, name, fullName) {
  const clean = stripComments(source);
  const match = new RegExp(`\\bmessage\\s+${escapeRegExp(name)}\\s*\\{`).exec(clean);
  if (!match) return null;
  const openIndex = clean.indexOf('{', match.index);
  const body = balancedBlock(clean, openIndex);
  const oneofFields = [];
  let flattened = body;
  for (const oneofMatch of body.matchAll(/\boneof\s+(\w+)\s*\{/g)) {
    const oneofBody = balancedBlock(body, oneofMatch.index + oneofMatch[0].length - 1);
    for (const statement of oneofBody.split(';')) {
      const field = parseField(statement, oneofMatch[1]);
      if (field) oneofFields.push(field);
    }
    const start = oneofMatch.index;
    const end = start + oneofMatch[0].length + oneofBody.length + 1;
    flattened = `${flattened.slice(0, start)}${' '.repeat(end - start)}${flattened.slice(end)}`;
  }
  const fields = [...flattened.split(';').map(statement => parseField(statement)).filter(Boolean), ...oneofFields]
    .sort((left, right) => left.number - right.number);
  return { file, fullName, packageName: fullName.split('.').slice(0, -1).join('.'), fields };
}

function renderFields(message) {
  if (message.standard) return ['protobuf 标准类型。'];
  if (message.missing) return ['当前归档没有找到该消息定义。'];
  if (!message.fields.length) return ['没有声明字段。'];
  return message.fields.map(field => {
    const modifier = field.label || (field.oneof ? `oneof: ${field.oneof}` : '-');
    return `${String(field.number).padStart(3)}  ${field.name}  ${field.type}  [${modifier}]`;
  });
}

function templateFor(archive, message) {
  if (message.standard || message.missing) return {};
  return Object.fromEntries(message.fields.map(field => [field.name, templateValue(archive, message, field)]));
}

function templateValue(archive, message, field) {
  if (field.label === 'repeated') return [];
  if (field.type.startsWith('map<')) return {};
  if (scalarDefaults.has(field.type)) return scalarDefaults.get(field.type);
  if (archive.isEnum(field.type, message.packageName)) return 0;
  if (field.type === 'google.protobuf.Timestamp') return '1970-01-01T00:00:00Z';
  if (field.type === 'google.protobuf.Duration') return '0s';
  if (field.type === 'google.protobuf.FieldMask') return '';
  if (field.type === 'google.protobuf.Value') return null;
  if (field.type === 'google.protobuf.ListValue') return [];
  return {};
}

function list(archive, options) {
  const query = (options.query ?? '').toLowerCase();
  const rows = archive.services.flatMap(service => service.methods.map(method => ({
    service: service.fullName,
    method: method.name,
    mode: mode(method),
    request: method.request,
    response: method.response,
  }))).filter(row => !query || Object.values(row).some(value => value.toLowerCase().includes(query)));
  if (options.json) return console.log(JSON.stringify(rows, null, 2));
  if (!rows.length) return console.log('没有匹配的 RPC。');
  console.log(`版本：${archive.version.label}（${rows.length} 个 RPC）\n`);
  for (const row of rows) console.log(`${row.service}/${row.method}\n  ${row.mode}  ${row.request} -> ${row.response}`);
}

function describe(archive, options) {
  const service = archive.findService(option(options, 'service', { required: true }));
  const methodName = options.method;
  const methods = methodName ? [archive.findMethod(service, methodName)] : service.methods;
  const payload = {
    version: archive.version.ref,
    service: service.fullName,
    protoFile: service.file,
    methods: methods.map(method => ({
      name: method.name,
      mode: mode(method),
      request: { type: method.request, fields: archive.findMessage(method.request).fields },
      response: { type: method.response, fields: archive.findMessage(method.response).fields },
    })),
  };
  if (options.json) return console.log(JSON.stringify(payload, null, 2));
  console.log(`服务：${payload.service}\n来源：${payload.protoFile}`);
  for (const method of methods) {
    const request = archive.findMessage(method.request);
    const response = archive.findMessage(method.response);
    console.log(`\nRPC：${method.name}（${mode(method)}）`);
    console.log(`请求：${method.request}`);
    for (const field of renderFields(request)) console.log(`  ${field}`);
    console.log(`响应：${method.response}`);
    for (const field of renderFields(response)) console.log(`  ${field}`);
  }
}

function template(archive, options) {
  const service = archive.findService(option(options, 'service', { required: true }));
  const method = archive.findMethod(service, option(options, 'method', { required: true }));
  const result = `${JSON.stringify(templateFor(archive, archive.findMessage(method.request)), null, 2)}\n`;
  if (options.output) {
    const output = path.resolve(repositoryRoot, options.output);
    fs.writeFileSync(output, result);
    console.log(`已生成 ${method.request} 的请求模板：${output}`);
  } else {
    process.stdout.write(result);
  }
}

function checkCommand(command) {
  const result = childProcess.spawnSync(command, ['--version'], { stdio: 'ignore' });
  if (result.error?.code === 'ENOENT') fail(`未找到 ${command}。请先安装后再执行 call。`);
}

function requestData(options, method) {
  if (options.data && options['data-json']) fail('--data 和 --data-json 不能同时使用。');
  const data = options.data
    ? fs.readFileSync(path.resolve(repositoryRoot, options.data), 'utf8')
    : options['data-json'] ?? '{}';
  if (!method.clientStreaming) {
    try {
      JSON.parse(data);
    } catch {
      fail('请求体必须是合法 JSON；流式调用可使用 --data 文件并采用每行一个 JSON 消息。');
    }
  }
  return data;
}

function archiveProto(version, directory) {
  const archive = runGit(['archive', '--format=tar', version.ref, 'extracted_proto'], { encoding: 'buffer' });
  const tarFile = path.join(directory, 'proto.tar');
  fs.writeFileSync(tarFile, archive);
  const unpack = childProcess.spawnSync('tar', ['-xf', tarFile, '-C', directory], { stdio: 'inherit' });
  if (unpack.error) fail(`无法解压临时 proto：${unpack.error.message}`);
  if (unpack.status !== 0) fail('无法解压临时 proto。');
  return path.join(directory, 'extracted_proto', 'com', 'bapis');
}

function call(archive, options) {
  const service = archive.findService(option(options, 'service', { required: true }));
  const method = archive.findMethod(service, option(options, 'method', { required: true }));
  const target = option(options, 'target', { required: true });
  const data = requestData(options, method);
  if (options['dry-run']) {
    console.log(`调用校验通过：${service.fullName}/${method.name}`);
    console.log(`目标：${target}\n模式：${mode(method)}\n请求：${method.request}\n响应：${method.response}\n元数据头：${options.header.length} 个`);
    return;
  }
  checkCommand('protoc');
  checkCommand('grpcurl');
  const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'bapis-grpc-debug-'));
  try {
    const sourceRoot = archiveProto(archive.version, temporaryDirectory);
    const descriptor = path.join(temporaryDirectory, 'service.protoset');
    const relativeServiceFile = service.file.slice(protoPrefix.length);
    const compile = childProcess.spawnSync('protoc', [
      `--descriptor_set_out=${descriptor}`, '--include_imports', `-I${sourceRoot}`, relativeServiceFile,
    ], { cwd: sourceRoot, stdio: 'inherit' });
    if (compile.error) fail(`protoc 执行失败：${compile.error.message}`);
    if (compile.status !== 0) fail('protoc 未能生成服务描述符。');
    const grpcurlArgs = ['-protoset', descriptor, '-d', '@', '-max-time', option(options, 'max-time', { fallback: '15' })];
    for (const header of options.header) grpcurlArgs.push('-H', header);
    if (options.plaintext) grpcurlArgs.push('-plaintext');
    if (options.insecure) grpcurlArgs.push('-insecure');
    if (options.authority) grpcurlArgs.push('-authority', options.authority);
    grpcurlArgs.push(target, `${service.fullName}/${method.name}`);
    const result = childProcess.spawnSync('grpcurl', grpcurlArgs, { input: data, stdio: ['pipe', 'inherit', 'inherit'] });
    if (result.error) fail(`grpcurl 执行失败：${result.error.message}`);
    if (result.status !== 0) process.exitCode = result.status || 1;
  } finally {
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
  }
}

try {
  const { command, options } = parseArgs(process.argv.slice(2));
  if (!command || command === '--help' || options.help) {
    printUsage();
  } else {
    const archive = new ProtoArchive(resolveVersion(options.version));
    if (command === 'list') list(archive, options);
    else if (command === 'describe') describe(archive, options);
    else if (command === 'template') template(archive, options);
    else if (command === 'call') call(archive, options);
    else fail(`未知命令 ${command}。使用 --help 查看帮助。`);
  }
} catch (error) {
  console.error(`错误：${error.message}`);
  process.exitCode = 1;
}
