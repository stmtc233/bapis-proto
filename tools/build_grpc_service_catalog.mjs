import fs from 'node:fs';
import path from 'node:path';

const [sourceRoot, outputFile] = process.argv.slice(2);
if (!sourceRoot || !outputFile) {
  throw new Error('Usage: node tools/build_grpc_service_catalog.mjs <grpc-go-root> <output-file>');
}

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(target));
    else if (entry.isFile() && entry.name.endsWith('_grpc.pb.go')) files.push(target);
  }
  return files;
}

const services = new Map();
for (const file of walk(sourceRoot)) {
  const source = fs.readFileSync(file, 'utf8');
  const imports = new Map([...source.matchAll(/^\s*(\w+)\s+"github\.com\/stmtc233\/bili-grpc-api-go\/([^"]+)"$/gm)]
    .map(match => [match[1], `com.bapis.${match[2].replaceAll('/', '.')}`]));
  const descriptors = new Map([...source.matchAll(
    /var (\w+)_ServiceDesc = grpc\.ServiceDesc\{\s*ServiceName:\s*"([^"]+)",/gs,
  )].map(match => [match[1], match[2]]));
  const protoType = goType => {
    if (goType === 'emptypb.Empty') return 'google.protobuf.Empty';
    const [alias, name] = goType.split('.');
    if (!name) return goType;
    const packageName = imports.get(alias);
    if (!packageName) throw new Error(`Cannot resolve Go type ${goType} in ${file}`);
    return `${packageName}.${name}`;
  };
  const interfaceBody = name => source.match(new RegExp(`type ${name} interface \\{([\\s\\S]*?)^\\}`, 'm'))?.[1] ?? '';

  for (const match of source.matchAll(/type (\w+)Client interface \{([\s\S]*?)^\}/gm)) {
    const [, serviceName, body] = match;
    const fullName = descriptors.get(serviceName);
    if (!fullName) continue;
    const methods = [];
    for (const line of body.split('\n').map(line => line.trim()).filter(Boolean)) {
      const unary = line.match(/^(\w+)\(ctx context\.Context, in \*(\S+), opts \.\.\.grpc\.CallOption\) \(\*(\S+), error\)$/);
      if (unary) {
        methods.push({ name: unary[1], request: protoType(unary[2]), response: protoType(unary[3]), source: path.relative(sourceRoot, file) });
        continue;
      }
      const serverStream = line.match(/^(\w+)\(ctx context\.Context, in \*(\S+), opts \.\.\.grpc\.CallOption\) \((\w+), error\)$/);
      if (serverStream) {
        const stream = interfaceBody(serverStream[3]);
        const response = stream.match(/^\s*Recv\(\) \(\*(\S+), error\)$/m)?.[1];
        if (!response) throw new Error(`Cannot resolve server stream ${fullName}/${serverStream[1]} in ${file}`);
        methods.push({ name: serverStream[1], request: protoType(serverStream[2]), response: protoType(response), serverStreaming: true, source: path.relative(sourceRoot, file) });
        continue;
      }
      const clientStream = line.match(/^(\w+)\(ctx context\.Context, opts \.\.\.grpc\.CallOption\) \((\w+), error\)$/);
      if (clientStream) {
        const stream = interfaceBody(clientStream[2]);
        const request = stream.match(/^\s*Send\(\*(\S+)\) error$/m)?.[1];
        const response = stream.match(/^\s*(?:Recv|CloseAndRecv)\(\) \(\*(\S+), error\)$/m)?.[1];
        if (!request || !response) throw new Error(`Cannot resolve client stream ${fullName}/${clientStream[1]} in ${file}`);
        methods.push({ name: clientStream[1], request: protoType(request), response: protoType(response), clientStreaming: true, serverStreaming: /^\s*Recv\(\) /m.test(stream), source: path.relative(sourceRoot, file) });
      }
    }
    if (!methods.length) throw new Error(`Unable to read RPCs for ${fullName} from ${file}`);
    const existing = services.get(fullName) ?? new Map();
    for (const method of methods) {
      const key = JSON.stringify([method.name, method.request, method.response, method.clientStreaming, method.serverStreaming]);
      existing.set(key, method);
    }
    services.set(fullName, existing);
  }
}

const catalog = {
  source: {
    repository: 'https://github.com/stmtc233/bili-grpc-api-go',
    revision: process.env.BAPIS_GRPC_SOURCE_REVISION ?? 'unknown',
  },
  services: [...services].map(([fullName, methods]) => {
    const parts = fullName.split('.');
    return {
      package: parts.slice(0, -1).join('.'),
      name: parts.at(-1),
      methods: [...methods.values()].sort((left, right) => `${left.name}/${left.source}`.localeCompare(`${right.name}/${right.source}`)),
    };
  }).sort((left, right) => `${left.package}.${left.name}`.localeCompare(`${right.package}.${right.name}`)),
};

fs.writeFileSync(outputFile, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Wrote ${catalog.services.length} service definitions to ${outputFile}`);
