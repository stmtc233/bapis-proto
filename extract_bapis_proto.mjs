import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.resolve(process.env.BAPIS_SOURCE_ROOT ?? path.join(root, 'decompiled', 'sources', 'com', 'bapis'));
const outputRoot = path.resolve(process.env.BAPIS_OUTPUT_ROOT ?? path.join(root, 'extracted_proto', 'com', 'bapis'));
const scalar = new Map([
  [0, 'double'], [1, 'float'], [2, 'int64'], [3, 'uint64'], [4, 'int32'],
  [5, 'fixed64'], [6, 'fixed32'], [7, 'bool'], [8, 'string'], [10, 'bytes'],
  [11, 'uint32'], [13, 'sfixed32'], [14, 'sfixed64'], [15, 'sint32'], [16, 'sint64'],
]);
const wellKnownTypes = new Map([
  ['Any', { type: 'google.protobuf.Any', import: 'google/protobuf/any.proto' }],
  ['BoolValue', { type: 'google.protobuf.BoolValue', import: 'google/protobuf/wrappers.proto' }],
  ['BytesValue', { type: 'google.protobuf.BytesValue', import: 'google/protobuf/wrappers.proto' }],
  ['Duration', { type: 'google.protobuf.Duration', import: 'google/protobuf/duration.proto' }],
  ['DoubleValue', { type: 'google.protobuf.DoubleValue', import: 'google/protobuf/wrappers.proto' }],
  ['Empty', { type: 'google.protobuf.Empty', import: 'google/protobuf/empty.proto' }],
  ['FieldMask', { type: 'google.protobuf.FieldMask', import: 'google/protobuf/field_mask.proto' }],
  ['FloatValue', { type: 'google.protobuf.FloatValue', import: 'google/protobuf/wrappers.proto' }],
  ['Int32Value', { type: 'google.protobuf.Int32Value', import: 'google/protobuf/wrappers.proto' }],
  ['Int64Value', { type: 'google.protobuf.Int64Value', import: 'google/protobuf/wrappers.proto' }],
  ['ListValue', { type: 'google.protobuf.ListValue', import: 'google/protobuf/struct.proto' }],
  ['StringValue', { type: 'google.protobuf.StringValue', import: 'google/protobuf/wrappers.proto' }],
  ['Struct', { type: 'google.protobuf.Struct', import: 'google/protobuf/struct.proto' }],
  ['Timestamp', { type: 'google.protobuf.Timestamp', import: 'google/protobuf/timestamp.proto' }],
  ['UInt32Value', { type: 'google.protobuf.UInt32Value', import: 'google/protobuf/wrappers.proto' }],
  ['UInt64Value', { type: 'google.protobuf.UInt64Value', import: 'google/protobuf/wrappers.proto' }],
  ['Value', { type: 'google.protobuf.Value', import: 'google/protobuf/struct.proto' }],
]);
const wellKnownImports = new Map([...wellKnownTypes.values()].map(value => [value.type, value.import]));
const keywords = new Set(['bool', 'bytes', 'double', 'enum', 'extend', 'fixed32', 'fixed64', 'float', 'group', 'import', 'int32', 'int64', 'map', 'message', 'oneof', 'option', 'package', 'public', 'repeated', 'returns', 'rpc', 'service', 'sfixed32', 'sfixed64', 'sint32', 'sint64', 'string', 'syntax', 'uint32', 'uint64']);
const javaScalars = new Map([
  ['boolean', 'bool'], ['Boolean', 'bool'], ['byte[]', 'bytes'], ['ByteString', 'bytes'],
  ['double', 'double'], ['Double', 'double'], ['float', 'float'], ['Float', 'float'],
  ['int', 'int32'], ['Integer', 'int32'], ['long', 'int64'], ['Long', 'int64'],
  ['String', 'string'],
]);
const typeRegistry = new Map();
const typeImports = new Map(wellKnownImports);

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(target));
    else if (entry.isFile() && entry.name.endsWith('.java')) files.push(target);
  }
  return files;
}

function javaString(value) {
  return value.replace(/\\u([0-9a-fA-F]{4})|\\([btnfr\\"'])/g, (_, unicode, escape) => {
    if (unicode) return String.fromCharCode(parseInt(unicode, 16));
    return ({ b: '\b', t: '\t', n: '\n', f: '\f', r: '\r' })[escape] ?? escape;
  });
}

function ints(info) {
  const values = [];
  for (let pos = 0; pos < info.length;) {
    let char = info.charCodeAt(pos++);
    if (char < 0xd800) { values.push(char); continue; }
    let value = char & 0x1fff;
    let shift = 13;
    do {
      char = info.charCodeAt(pos++);
      value |= (char & 0x1fff) << shift;
      shift += 13;
    } while (char >= 0xd800);
    values.push(value);
  }
  return values;
}

function lowerCamel(constant) {
  const words = constant.toLowerCase().split('_');
  return words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
}

function sanitize(name) {
  return keywords.has(name) ? `${name}_` : name;
}

function protoType(name) {
  return name.replace(/\$/g, '_');
}

function resolveJavaType(javaType, record, node) {
  const type = javaType.replace(/<.*>/g, '').trim();
  const simple = type.split('.').pop();
  const scalarType = javaScalars.get(type) ?? javaScalars.get(simple);
  if (scalarType) return scalarType;
  if (simple === 'Object') return null;

  const wellKnown = wellKnownTypes.get(simple);
  if (wellKnown && (type === `com.google.protobuf.${simple}` || new RegExp(`^import com\\.google\\.protobuf\\.${simple};`, 'm').test(record.source))) return wellKnown.type;

  const candidates = [];
  if (type.startsWith('com.bapis.')) {
    candidates.push(type);
  } else if (type.includes('.')) {
    candidates.push(`${record.packageName}.${type}`);
  } else {
    for (let scope = node; scope; scope = scope.parent) candidates.push(`${record.packageName}.${scope.javaName}.${type}`);
    for (const candidate of record.nodes) {
      if (candidate.name === type) candidates.push(`${record.packageName}.${candidate.javaName}`);
    }
    candidates.push(`${record.packageName}.${type}`);
    const imported = record.source.match(new RegExp(`^import (com\\.bapis\\.[\\w$.]*\\.${simple});`, 'm'))?.[1];
    if (imported) candidates.push(imported);
  }

  for (const candidate of candidates) {
    const definition = typeRegistry.get(candidate) ?? typeRegistry.get(candidate.replace(/\$/g, '.'));
    if (!definition) continue;
    if (definition.packageName !== record.packageName) return definition.type;
    if (definition.kind === 'enum' && definition.ownerProto === node.protoName) return definition.name;
    return definition.localType;
  }
  return null;
}

function resolveMapType(javaType, record, node) {
  return resolveJavaType(javaType, record, node) ?? 'bytes';
}

function inspectFieldJavaType(source, record, node, member, property) {
  const escaped = member.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const getter = property[0].toUpperCase() + property.slice(1);
  const getterMatch = source.match(new RegExp(`^\\s+public ([A-Za-z0-9_$.]+) get${getter}\\((?:int [A-Za-z_$][\\w$]*)?\\)`, 'm'));
  const getterType = getterMatch ? resolveJavaType(getterMatch[1], record, node) : null;
  const declaration = source.match(new RegExp(`^\\s+private (?:final )?(.+?) ${escaped}(?:\\s*=.*)?;`, 'm'));
  if (declaration) {
    const type = declaration[1];
    const list = type.match(/(?:Internal\\.)?ProtobufList<(.+)>/);
    const map = type.match(/MapFieldLite<(.+),\s*(.+)>/);
    if (list) return { repeated: true, type: resolveJavaType(list[1], record, node), getterType };
    if (map) return { map: [resolveMapType(map[1], record, node), resolveMapType(map[2], record, node)], getterType };
    return { type: resolveJavaType(type, record, node), getterType };
  }
  return { type: getterType, getterType };
}

function closingBrace(source, open) {
  let depth = 0;
  for (let index = open; index < source.length; index++) {
    if (source[index] === '{') depth++;
    else if (source[index] === '}' && --depth === 0) return index;
  }
  return -1;
}

function discoverMessages(source) {
  const nodes = [];
  const matcher = /\b(?:public\s+)?(?:static\s+)?(?:final\s+)?class\s+([\w$]+)\s+extends\s+GeneratedMessageLite\s*</g;
  for (const match of source.matchAll(matcher)) {
    const open = source.indexOf('{', match.index);
    const close = closingBrace(source, open);
    if (open >= 0 && close >= 0) nodes.push({ name: match[1], index: match.index, open, close, parent: null, children: [] });
  }
  for (const node of nodes) {
    node.parent = nodes
      .filter(candidate => candidate.open < node.index && candidate.close > node.close)
      .sort((left, right) => (left.close - left.open) - (right.close - right.open))[0] ?? null;
    if (node.parent) node.parent.children.push(node);
  }
  for (const node of nodes) {
    const hierarchy = [];
    for (let scope = node; scope; scope = scope.parent) hierarchy.unshift(scope.name);
    node.javaName = hierarchy.join('.');
    node.protoName = hierarchy.join('_').replace(/\$/g, '_');
  }
  return nodes;
}

function ownMessageSource(source, node) {
  const chunks = [];
  let cursor = node.open + 1;
  for (const child of [...node.children].sort((left, right) => left.index - right.index)) {
    chunks.push(source.slice(cursor, child.index));
    cursor = child.close + 1;
  }
  chunks.push(source.slice(cursor, node.close));
  return chunks.join('\n');
}

function parseEnums(source, topLevelOnly = false) {
  const enums = [];
  const matcher = topLevelOnly ? /^public enum ([\w$]+)[^{]*\{/gm : /public enum ([\w$]+)[^{]*\{/g;
  for (const match of source.matchAll(matcher)) {
    const open = source.indexOf('{', match.index);
    const close = closingBrace(source, open);
    if (close < 0) continue;
    const body = source.slice(open + 1, close);
    const constants = new Map([...body.matchAll(/^\s*public static final int ([A-Za-z_][A-Za-z0-9_]*) = (-?\d+);/gm)]
      .map(value => [value[1], Number(value[2])]));
    const values = [...body.matchAll(/^\s*([A-Za-z_][A-Za-z0-9_]*)\((-?\d+|[A-Za-z_][A-Za-z0-9_]*)\)\s*[,;]/gm)]
      .map(value => ({ name: value[1], number: constants.get(value[2]) ?? Number(value[2]) }))
      // Java's protobuf runtime adds this synthetic sentinel; it is not schema data.
      .filter(value => Number.isFinite(value.number) && value.name !== 'UNRECOGNIZED');
    if (values.length) {
      const zeroIndex = values.findIndex(value => value.number === 0);
      if (zeroIndex < 0) throw new Error(`Enum ${match[1]} does not declare a zero value`);
      enums.push({ name: match[1], values: [values[zeroIndex], ...values.slice(0, zeroIndex), ...values.slice(zeroIndex + 1)] });
    }
  }
  return enums;
}

function parseMessage(record, node) {
  const source = ownMessageSource(record.source, node);
  const infoMatches = [...source.matchAll(/newMessageInfo\(DEFAULT_INSTANCE,\s*"((?:\\.|[^"\\])*)",\s*(?:new Object\[\]\{[\s\S]*?\}|null)\)/g)];
  const infoMatch = infoMatches.at(-1);
  if (!record.packageName || !infoMatch) return null;

  const data = ints(javaString(infoMatch[1]));
  const fieldCount = data[1];
  if (data.length < 11 && fieldCount !== 0) return null;
  let cursor = 10;
  const descriptors = [];
  for (let index = 0; index < fieldCount && cursor + 1 < data.length; index++) {
    const number = data[cursor++];
    const encodedType = data[cursor++];
    const rawFieldType = encodedType & 0xff;
    const oneof = rawFieldType >= 51 && rawFieldType <= 68;
    const type = oneof ? rawFieldType - 51 : rawFieldType;
    const oneofIndex = oneof ? data[cursor++] : null;
    if ((encodedType & 0x1000) !== 0) cursor++;
    descriptors.push({ number, type, oneof, oneofIndex });
  }
  const constants = [...source.matchAll(/^\s+public static final int ([A-Z0-9_]+)_FIELD_NUMBER = (\d+);/gm)]
    .map(match => ({ property: lowerCamel(match[1]), number: Number(match[2]) }))
    .sort((a, b) => a.number - b.number);
  const descriptorByNumber = new Map(descriptors.map(item => [item.number, item]));
  const fields = constants.map(field => {
    const descriptor = descriptorByNumber.get(field.number) ?? { type: 4, oneof: false };
    const member = `${field.property}_`;
    const java = inspectFieldJavaType(source, record, node, member, field.property);
    const typeCode = descriptor.type;
    const repeated = typeCode >= 18 && typeCode <= 48;
    const scalarCode = typeCode >= 18 && typeCode <= 34 ? typeCode - 18 : typeCode >= 35 && typeCode <= 48 ? typeCode - 35 : typeCode;
    let type = scalar.get(scalarCode);
    if (typeCode === 9 || typeCode === 27 || typeCode === 17 || typeCode === 49) type = java.type ?? 'bytes';
    if (typeCode === 12 || typeCode === 30 || typeCode === 44) type = java.getterType ?? (java.type === 'int' ? 'int32' : java.type) ?? 'int32';
    if (typeCode === 50 && java.map) return { ...field, descriptor, map: java.map };
    return { ...field, descriptor, type: type ?? java.type ?? 'bytes', repeated: repeated || java.repeated };
  });
  return { packageName: record.packageName, name: node.protoName, file: record.file, fields, enums: parseEnums(source) };
}

function renderField(field) {
  if (field.map) return `  map<${field.map[0]}, ${field.map[1]}> ${sanitize(field.property)} = ${field.number};`;
  return `  ${field.repeated ? 'repeated ' : ''}${field.type} ${sanitize(field.property)} = ${field.number};`;
}

function renderMessage(message) {
  const lines = [`// Source: ${path.relative(path.join(root, 'decompiled', 'sources'), message.file).replace(/\\/g, '/')}`, `message ${message.name} {`];
  const groups = new Map();
  for (const field of message.fields) {
    if (!field.descriptor.oneof || field.repeated || field.map) continue;
    const key = field.descriptor.oneofIndex ?? 0;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(field);
  }
  const rendered = new Set();
  for (const field of message.fields) {
    if (!field.descriptor.oneof || field.repeated || field.map) { lines.push(renderField(field)); continue; }
    const key = field.descriptor.oneofIndex ?? 0;
    if (rendered.has(key)) continue;
    rendered.add(key);
    lines.push(`  oneof oneof_${key} {`);
    lines.push(...groups.get(key).map(item => `    ${renderField(item).trim()}`));
    lines.push('  }');
  }
  for (const definition of disambiguateEnumValues(message.enums)) lines.push(...renderEnum(definition, '  '));
  lines.push('}', '');
  return lines;
}

function renderEnum(definition, indent = '') {
  const numbers = new Set(definition.values.map(value => value.number));
  return [
    `${indent}enum ${protoType(definition.name)} {`,
    ...(numbers.size < definition.values.length ? [`${indent}  option allow_alias = true;`] : []),
    ...definition.values.map(value => `${indent}  ${value.name} = ${value.number};`),
    `${indent}}`,
    '',
  ];
}

function upperSnake(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/\$/g, '_').toUpperCase();
}

function disambiguateEnumValues(definitions) {
  const counts = new Map();
  for (const definition of definitions) {
    for (const value of definition.values) counts.set(value.name, (counts.get(value.name) ?? 0) + 1);
  }
  const used = new Set();
  return definitions.map(definition => ({
    ...definition,
    values: definition.values.map(value => {
      let name = value.name;
      if ((counts.get(name) ?? 0) > 1 || used.has(name)) name = `${upperSnake(definition.name)}_${name}`;
      const base = name;
      for (let suffix = 2; used.has(name); suffix++) name = `${base}_${suffix}`;
      used.add(name);
      return { ...value, name };
    }),
  }));
}

if (!fs.existsSync(sourceRoot)) throw new Error(`Missing decompiled source directory: ${sourceRoot}`);
const sources = walk(sourceRoot).map(file => {
  const source = fs.readFileSync(file, 'utf8');
  return { file, source, packageName: source.match(/^package ([\w.]+);/m)?.[1], nodes: discoverMessages(source) };
});
for (const record of sources) {
  if (!record.packageName) continue;
  const importPath = `${record.packageName.split('.').slice(2).join('/')}/messages.proto`;
  for (const node of record.nodes) {
    const definition = { kind: 'message', type: `${record.packageName}.${node.protoName}`, localType: node.protoName, packageName: record.packageName };
    typeRegistry.set(`${record.packageName}.${node.javaName}`, definition);
    typeRegistry.set(`${record.packageName}.${node.javaName.replace(/\./g, '$')}`, definition);
    typeImports.set(definition.type, importPath);
  }
  const enumMatcher = /(?:^|\s)public enum ([\w$]+)[^{]*\{/g;
  for (const match of record.source.matchAll(enumMatcher)) {
    const owner = record.nodes
      .filter(node => node.open < match.index && node.close > match.index)
      .sort((left, right) => (left.close - left.open) - (right.close - right.open))[0] ?? null;
    const javaName = owner ? `${owner.javaName}.${match[1]}` : match[1];
    const enumName = match[1].replace(/\$/g, '_');
    const localType = owner ? `${owner.protoName}.${enumName}` : enumName;
    const definition = { kind: 'enum', name: enumName, ownerProto: owner?.protoName, type: `${record.packageName}.${localType}`, localType, packageName: record.packageName };
    typeRegistry.set(`${record.packageName}.${javaName}`, definition);
    typeRegistry.set(`${record.packageName}.${javaName.replace(/\./g, '$')}`, definition);
    typeImports.set(definition.type, importPath);
  }
}
const messages = sources.flatMap(record => record.nodes.map(node => parseMessage(record, node)).filter(Boolean));
const topLevelEnums = sources.flatMap(record => record.packageName
  ? parseEnums(record.source, true).map(definition => ({ ...definition, file: record.file, packageName: record.packageName }))
  : []);
const packages = new Map();
for (const message of messages) {
  if (!packages.has(message.packageName)) packages.set(message.packageName, { messages: [], enums: [] });
  packages.get(message.packageName).messages.push(message);
}
for (const definition of topLevelEnums) {
  if (!packages.has(definition.packageName)) packages.set(definition.packageName, { messages: [], enums: [] });
  packages.get(definition.packageName).enums.push(definition);
}
function protoImport(type) {
  return typeImports.get(type) ?? null;
}
for (const [packageName, items] of packages) {
  const relative = packageName.replace(/^com\.bapis\.?/, '').split('.');
  const target = path.join(outputRoot, ...relative, 'messages.proto');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const imports = new Set(items.messages.flatMap(message => message.fields.flatMap(field => {
    const types = field.map ?? [field.type];
    return types.map(protoImport).filter(Boolean);
  })));
  const body = ['// Reconstructed from protobuf-lite metadata in the APK.', 'syntax = "proto3";', '', `package ${packageName};`, ''];
  for (const importPath of [...imports].sort()) body.push(`import "${importPath}";`);
  if (imports.size) body.push('');
  for (const definition of disambiguateEnumValues(items.enums.sort((a, b) => a.name.localeCompare(b.name)))) body.push(...renderEnum(definition));
  for (const message of items.messages.sort((a, b) => a.name.localeCompare(b.name))) {
    body.push(...renderMessage(message));
  }
  fs.writeFileSync(target, `${body.join('\n')}\n`);
}
const manifest = { sourceRoot, generatedAt: new Date().toISOString(), messageCount: messages.length, topLevelEnumCount: topLevelEnums.length, packageCount: packages.size };
fs.mkdirSync(outputRoot, { recursive: true });
fs.writeFileSync(path.join(outputRoot, 'MANIFEST.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest, null, 2));
