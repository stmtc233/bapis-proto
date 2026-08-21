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

function nestedType(javaType, source) {
  const type = javaType.replace(/<.*>/g, '').replace(/\[\]/g, '').trim();
  const simple = type.split('.').pop();
  const wellKnown = wellKnownTypes.get(simple);
  if (wellKnown && (type === `com.google.protobuf.${simple}` || new RegExp(`^import com\\.google\\.protobuf\\.${simple};`, 'm').test(source))) return wellKnown.type;
  const importedBapis = type.startsWith('com.bapis.') ? type : source.match(new RegExp(`^import (com\\.bapis\\.[\\w$.]*\\.${simple});`, 'm'))?.[1];
  if (importedBapis) return protoType(importedBapis);
  return ['Object', 'String', 'Integer', 'Long', 'Boolean', 'Float', 'Double', 'ByteString'].includes(simple) ? null : protoType(simple);
}

function mapType(javaType, source) {
  const name = javaType.replace(/<.*>/g, '').trim().split('.').pop();
  return new Map([['String', 'string'], ['Integer', 'int32'], ['Long', 'int64'], ['Boolean', 'bool'], ['Float', 'float'], ['Double', 'double']]).get(name) ?? nestedType(javaType, source) ?? 'bytes';
}

function fieldJavaType(source, member, property) {
  const escaped = member.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const getter = property[0].toUpperCase() + property.slice(1);
  const getterMatch = source.match(new RegExp(`^    public ([A-Za-z0-9_$.]+) get${getter}\\(\\)`, 'm'));
  const getterType = getterMatch ? nestedType(getterMatch[1], source) : null;
  const declaration = source.match(new RegExp(`^    private (?:final )?(.+?) ${escaped}(?:\\s*=.*)?;`, 'm'));
  if (declaration) {
    const type = declaration[1];
    const list = type.match(/(?:Internal\\.)?ProtobufList<(.+)>/);
    const map = type.match(/MapFieldLite<(.+),\s*(.+)>/);
    if (list) return { repeated: true, type: nestedType(list[1], source), getterType };
    if (map) return { map: [mapType(map[1], source), mapType(map[2], source)], getterType };
    return { type: nestedType(type, source), getterType };
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

function parseMessage(file, source) {
  const packageName = source.match(/^package ([\w.]+);/m)?.[1];
  const name = source.match(/public (?:static )?(?:final )?class ([\w$]+) extends GeneratedMessageLite/)?.[1];
  const infoMatch = source.match(/newMessageInfo\(DEFAULT_INSTANCE,\s*"((?:\\.|[^"\\])*)",\s*(?:new Object\[\]\{[\s\S]*?\}|null)\)/);
  if (!packageName || !name || !infoMatch) return null;

  const data = ints(javaString(infoMatch[1]));
  const fieldCount = data[1];
  if (data.length < 11 && fieldCount !== 0) return null;
  const oneofCount = data[2];
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
  const constants = [...source.matchAll(/^    public static final int ([A-Z0-9_]+)_FIELD_NUMBER = (\d+);/gm)]
    .map(match => ({ property: lowerCamel(match[1]), number: Number(match[2]) }))
    .sort((a, b) => a.number - b.number);
  const descriptorByNumber = new Map(descriptors.map(item => [item.number, item]));
  const fields = constants.map(field => {
    const descriptor = descriptorByNumber.get(field.number) ?? { type: 4, oneof: false };
    const member = `${field.property}_`;
    const java = fieldJavaType(source, member, field.property);
    const typeCode = descriptor.type;
    const repeated = typeCode >= 18 && typeCode <= 48;
    const scalarCode = typeCode >= 18 && typeCode <= 34 ? typeCode - 18 : typeCode >= 35 && typeCode <= 48 ? typeCode - 35 : typeCode;
    let type = scalar.get(scalarCode);
    if (typeCode === 9 || typeCode === 27 || typeCode === 17 || typeCode === 49) type = java.type ?? 'bytes';
    if (typeCode === 12 || typeCode === 30 || typeCode === 44) type = java.getterType ?? (java.type === 'int' ? 'int32' : java.type) ?? 'int32';
    if (typeCode === 50 && java.map) return { ...field, descriptor, map: java.map };
    return { ...field, descriptor, type: type ?? java.type ?? 'bytes', repeated: repeated || java.repeated };
  });
  return { packageName, name, file, fields, enums: parseEnums(source) };
}

function renderField(field) {
  if (field.map) return `  map<${field.map[0]}, ${field.map[1]}> ${sanitize(field.property)} = ${field.number};`;
  return `  ${field.repeated ? 'repeated ' : ''}${field.type} ${sanitize(field.property)} = ${field.number};`;
}

function renderMessage(message) {
  const lines = [`// Source: ${path.relative(path.join(root, 'decompiled', 'sources'), message.file).replace(/\\/g, '/')}`, `message ${protoType(message.name)} {`];
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
  for (const definition of message.enums) lines.push(...renderEnum(definition, '  '));
  lines.push('}', '');
  return lines;
}

function renderEnum(definition, indent = '') {
  return [
    `${indent}enum ${protoType(definition.name)} {`,
    ...definition.values.map(value => `${indent}  ${value.name} = ${value.number};`),
    `${indent}}`,
    '',
  ];
}

if (!fs.existsSync(sourceRoot)) throw new Error(`Missing decompiled source directory: ${sourceRoot}`);
const sources = walk(sourceRoot).map(file => ({ file, source: fs.readFileSync(file, 'utf8') }));
const messages = sources
  .map(({ file, source }) => parseMessage(file, source))
  .filter(Boolean);
const topLevelEnums = sources.flatMap(({ file, source }) => {
  const packageName = source.match(/^package ([\w.]+);/m)?.[1];
  return packageName ? parseEnums(source, true).map(definition => ({ ...definition, file, packageName })) : [];
});
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
  if (wellKnownImports.has(type)) return wellKnownImports.get(type);
  if (type.startsWith('com.bapis.')) return `${type.split('.').slice(2, -1).join('/')}/messages.proto`;
  return null;
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
  for (const definition of items.enums.sort((a, b) => a.name.localeCompare(b.name))) body.push(...renderEnum(definition));
  for (const message of items.messages.sort((a, b) => a.name.localeCompare(b.name))) {
    body.push(...renderMessage(message));
  }
  fs.writeFileSync(target, `${body.join('\n')}\n`);
}
const manifest = { sourceRoot, generatedAt: new Date().toISOString(), messageCount: messages.length, topLevelEnumCount: topLevelEnums.length, packageCount: packages.size };
fs.mkdirSync(outputRoot, { recursive: true });
fs.writeFileSync(path.join(outputRoot, 'MANIFEST.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest, null, 2));
