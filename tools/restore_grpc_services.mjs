import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputRoot = path.resolve(root, process.env.BAPIS_OUTPUT_ROOT ?? 'extracted_proto/com/bapis');
const catalogPath = path.resolve(root, process.env.BAPIS_GRPC_SERVICE_CATALOG ?? 'grpc_service_catalog.json');

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(target));
    else if (entry.isFile()) files.push(target);
  }
  return files;
}

if (!fs.existsSync(outputRoot)) throw new Error(`Missing proto output directory: ${outputRoot}`);
if (!fs.existsSync(catalogPath)) throw new Error(`Missing gRPC service catalog: ${catalogPath}`);

const packages = new Map();
for (const file of walk(outputRoot)) {
  if (!file.endsWith('.proto')) continue;
  if (path.basename(file) === 'services.proto') {
    fs.unlinkSync(file);
    continue;
  }
  const source = fs.readFileSync(file, 'utf8');
  const packageName = source.match(/^package ([\w.]+);$/m)?.[1];
  if (!packageName) continue;
  const types = new Set([...source.matchAll(/^message (\w+) \{$/gm)].map(match => match[1]));
  if (!types.size) continue;
  packages.set(packageName, {
    file: path.relative(outputRoot, file).replace(/\\/g, '/'),
    types,
  });
}

function messageType(type, packageName) {
  return type.includes('.') ? type : `${packageName}.${type}`;
}

function typeData(type) {
  if (type === 'google.protobuf.Empty') return { importPath: 'google/protobuf/empty.proto' };
  const separator = type.lastIndexOf('.');
  const owner = packages.get(type.slice(0, separator));
  if (!owner?.types.has(type.slice(separator + 1))) return null;
  return { importPath: owner.file };
}

const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const renderedPackages = new Map();
let serviceCount = 0;
let rpcCount = 0;
let skippedRpcCount = 0;
for (const catalogService of catalog.services) {
  const packageName = catalogService.package;
  const messagePackageName = `com.bapis.${catalogService.package}`;
  const candidatesByName = new Map();
  for (const method of catalogService.methods) {
    const request = messageType(method.request, messagePackageName);
    const response = messageType(method.response, messagePackageName);
    if (!typeData(request) || !typeData(response)) {
      skippedRpcCount++;
      continue;
    }
    const candidates = candidatesByName.get(method.name) ?? [];
    candidates.push({ ...method, request, response });
    candidatesByName.set(method.name, candidates);
  }
  const methods = [...candidatesByName.values()].map(candidates => candidates.sort((left, right) => {
    const leftDepth = left.source.split('/').length;
    const rightDepth = right.source.split('/').length;
    return leftDepth - rightDepth || left.source.localeCompare(right.source);
  })[0]).sort((left, right) => left.name.localeCompare(right.name));
  if (!methods.length) continue;

  const rendered = renderedPackages.get(packageName) ?? { imports: new Set(), services: [] };
  for (const method of methods) {
    rendered.imports.add(typeData(method.request).importPath);
    rendered.imports.add(typeData(method.response).importPath);
  }
  rendered.services.push({ name: catalogService.name, methods });
  renderedPackages.set(packageName, rendered);
  serviceCount++;
  rpcCount += methods.length;
}

for (const [packageName, rendered] of renderedPackages) {
  const target = path.join(outputRoot, ...packageName.replace(/^com\.bapis\.?/, '').split('.'), 'services.proto');
  const renderType = type => type.startsWith(`${packageName}.`) ? type.slice(packageName.length + 1) : `.${type}`;
  const renderStream = enabled => enabled ? 'stream ' : '';
  const body = [
    '// Reconstructed from the checked-in gRPC service catalog.',
    'syntax = "proto3";',
    '',
    `package ${packageName};`,
    '',
    ...[...rendered.imports].sort().map(importPath => `import "${importPath}";`),
    '',
    ...rendered.services.sort((left, right) => left.name.localeCompare(right.name)).flatMap(service => [
      `service ${service.name} {`,
      ...service.methods.map(method => `  rpc ${method.name}(${renderStream(method.clientStreaming)}${renderType(method.request)}) returns (${renderStream(method.serverStreaming)}${renderType(method.response)});`),
      '}',
      '',
    ]),
  ];
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, body.join('\n'));
}

const manifestPath = path.join(outputRoot, 'MANIFEST.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.serviceCount = serviceCount;
manifest.rpcCount = rpcCount;
manifest.apkServiceCount = 0;
manifest.catalogServiceCount = serviceCount;
manifest.skippedCatalogRpcCount = skippedRpcCount;
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({ serviceCount, rpcCount, skippedCatalogRpcCount: skippedRpcCount }, null, 2));
