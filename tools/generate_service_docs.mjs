import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsRoot = path.resolve(root, process.env.BAPIS_DOCS_ROOT ?? 'docs');
const versions = [
  { key: 'main-v9.8.0', title: '大陆版 v9.8.0', ref: 'v9.8.0' },
  { key: 'international-v6.3.0', title: '国际版 v6.3.0', ref: 'international-v6.3.0' },
  { key: 'tv-v1.8.8', title: 'TV 版 v1.8.8', ref: 'tv-v1.8.8' },
];

const translations = new Map(Object.entries({
  account: '账户', action: '操作', activity: '活动', ad: '广告', add: '添加', aid: '稿件 ID',
  avid: 'AV视频 ID', appid: '应用 ID', app: '应用', api: '接口', arc: '稿件',
  all: '全部', app: '应用', archive: '稿件', area: '地区', author: '作者', avatar: '头像',
  bvid: 'BV 号', buvid: '设备标识', card: '卡片', category: '分类', cid: '分 P ID', code: '状态码',
  channel: '频道', check: '校验', click: '点击', client: '客户端', coin: '投币', command: '指令',
  comment: '评论', config: '配置', content: '内容', count: '数量', cover: '封面', create: '创建',
  cursor: '游标', data: '数据', delete: '删除', desc: '描述', detail: '详情', device: '设备',
  display: '展示', download: '下载', edit: '编辑', episode: '剧集', epid: '剧集 ID',
  dm: '弹幕', dynamic: '动态', end: '结束', error: '错误', event: '事件', extra: '扩展数据',
  fav: '收藏', favorite: '收藏', feed: '信息流', filter: '筛选', follow: '关注', from: '来源',
  get: '获取', history: '历史记录', id: '标识', image: '图片', info: '信息', interface: '接口',
  ip: 'IP 地址', item: '条目', keep: '保留', level: '等级', limit: '限制', load: '加载',
  item: '条目', lang: '语言', like: '点赞', list: '列表', live: '直播', locale: '地区语言',
  message: '消息', mid: '用户 ID', mode: '模式', module: '模块', name: '名称', network: '网络',
  oid: '对象 ID', pageid: '页面 ID', param: '参数', position: '位置', preview: '预览',
  next: '下一页', offset: '偏移量', order: '排序', page: '分页', play: '播放', player: '播放器',
  progress: '进度', rank: '排行', region: '分区', reply: '响应', request: '请求', response: '响应',
  result: '结果', room: '直播间', search: '搜索', season: '剧集', setting: '设置', share: '分享',
  req: '请求', resp: '响应', rsp: '响应', sid: '会话 ID', sub: '订阅', test: '测试',
  source: '来源', state: '状态', status: '状态', stream: '流', tab: '标签页', tag: '标签',
  time: '时间', timestamp: '时间戳', title: '标题', token: '凭据', topic: '话题', total: '总数',
  type: '类型', uid: '用户 ID', update: '更新', uri: 'URI', url: '地址', user: '用户',
  value: '值', version: '版本', video: '视频', view: '查看', web: '网页', enable: '启用',
  disable: '禁用', has: '是否具有', is: '是否', pub: '发布', publish: '发布', sort: '排序',
  start: '开始', text: '文本', owner: '所有者', reason: '原因', business: '业务', metadata: '元数据',
  meta: '元数据', ext: '扩展', jump: '跳转', link: '链接', color: '颜色', size: '大小',
  sequence: '序号', sequenceid: '序列 ID', messageid: '消息 ID', server: '服务端',
  tunnel: '通道', broadcast: '广播', popular: '热门', wall: '壁纸', probe: '探测', chronos: '资源包',
  community: '社区', relation: '关系', mall: '商城', ticket: '票务', resource: '资源', home: '首页',
  mine: '我的', listener: '听播', fission: '裂变', gateway: '网关', privacy: '隐私',
}));

function runGit(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' });
}

function braceDelta(line) {
  return [...line].reduce((depth, character) => depth + (character === '{' ? 1 : character === '}' ? -1 : 0), 0);
}

function splitIdentifier(value) {
  return value
    .replace(/\$/g, '_')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .split(/[_\s]+/)
    .filter(Boolean)
    .map(token => token.toLowerCase());
}

function inferChinese(value, fallback) {
  const words = splitIdentifier(value).map(word => translations.get(word)).filter(Boolean);
  return words.length ? words.join(' ') : fallback;
}

function fieldDescription(field) {
  const meaning = inferChinese(field.name, `业务字段 \`${field.name}\`（名称未提供可靠中文语义）`);
  return field.oneof ? `${meaning}；与同一 oneof 中的字段互斥。` : meaning;
}

function messageDescription(name) {
  return inferChinese(name, `\`${name}\` 消息`);
}

function serviceDescription(service) {
  const byName = inferChinese(service.name, '业务');
  const byPackage = inferChinese(service.fullName.split('.').slice(0, -1).join('_'), '');
  return `${[...new Set([byPackage, byName].flatMap(value => value.split(' ')).filter(Boolean))].join(' ')} 服务`;
}

function rpcDescription(method) {
  return inferChinese(method.name, `\`${method.name}\` 调用`);
}

function parseMessages(file, source) {
  const packageName = source.match(/^package ([\w.]+);$/m)?.[1];
  if (!packageName) return [];
  const lines = source.split('\n');
  const messages = [];
  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(/^message (\w+) \{$/);
    if (!match) continue;
    const message = { fullName: `${packageName}.${match[1]}`, name: match[1], packageName, fields: [], file };
    let depth = 1;
    let oneof = null;
    for (index += 1; index < lines.length && depth > 0; index++) {
      const line = lines[index].replace(/\/\/.*$/, '').trim();
      if (depth === 1) {
        const oneofMatch = line.match(/^oneof (\w+) \{$/);
        if (oneofMatch) oneof = oneofMatch[1];
        const mapMatch = line.match(/^map<([^,]+),\s*([^>]+)>\s+(\w+)\s+=\s+(\d+);$/);
        const fieldMatch = line.match(/^(repeated\s+)?([.\w]+)\s+(\w+)\s+=\s+(\d+);$/);
        if (mapMatch) {
          message.fields.push({ name: mapMatch[3], number: mapMatch[4], type: `map<${mapMatch[1]}, ${mapMatch[2]}>`, label: 'map', oneof: null });
        } else if (fieldMatch) {
          message.fields.push({ name: fieldMatch[3], number: fieldMatch[4], type: fieldMatch[2], label: fieldMatch[1] ? 'repeated' : '', oneof: null });
        }
      } else if (depth === 2 && oneof) {
        const fieldMatch = line.match(/^([.\w]+)\s+(\w+)\s+=\s+(\d+);$/);
        if (fieldMatch) message.fields.push({ name: fieldMatch[2], number: fieldMatch[3], type: fieldMatch[1], label: '', oneof });
      }
      depth += braceDelta(line);
      if (depth === 1) oneof = null;
    }
    messages.push(message);
    index -= 1;
  }
  return messages;
}

function parseServices(file, source) {
  const packageName = source.match(/^package ([\w.]+);$/m)?.[1];
  if (!packageName) return [];
  const lines = source.split('\n');
  const services = [];
  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(/^service (\w+) \{$/);
    if (!match) continue;
    const service = { fullName: `${packageName}.${match[1]}`, name: match[1], packageName, methods: [], file };
    let depth = 1;
    for (index += 1; index < lines.length && depth > 0; index++) {
      const line = lines[index].trim();
      if (depth === 1) {
        const rpc = line.match(/^rpc (\w+)\((stream )?([.\w]+)\) returns \((stream )?([.\w]+)\);$/);
        if (rpc) {
          service.methods.push({
            name: rpc[1],
            request: rpc[3].replace(/^\./, ''),
            response: rpc[5].replace(/^\./, ''),
            clientStreaming: Boolean(rpc[2]),
            serverStreaming: Boolean(rpc[4]),
          });
        }
      }
      depth += braceDelta(line);
    }
    services.push(service);
    index -= 1;
  }
  return services;
}

function fullType(type, packageName) {
  return type.includes('.') ? type : `${packageName}.${type}`;
}

function renderFields(message) {
  if (!message) return ['该消息来自 protobuf 标准库或当前归档未包含的定义。', ''];
  if (!message.fields.length) return ['该消息没有声明字段。', ''];
  return [
    '| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |',
    '| --- | --- | --- | --- | --- |',
    ...message.fields.map(field => `| ${field.number} | \`${field.name}\` | \`${field.type}\` | ${field.label || (field.oneof ? `oneof: \`${field.oneof}\`` : '-')} | ${fieldDescription(field)} |`),
    '',
  ];
}

function renderService(service, messages) {
  const referenced = new Map();
  const mode = method => method.clientStreaming && method.serverStreaming ? '双向流' : method.clientStreaming ? '客户端流' : method.serverStreaming ? '服务端流' : '一元调用';
  const lines = [
    `# \`${service.fullName}\``,
    '',
    `中文说明：${serviceDescription(service)}。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。`,
    '',
    '## RPC',
    '',
    '| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |',
    '| --- | --- | --- | --- | --- |',
  ];
  for (const method of service.methods) {
    const request = fullType(method.request, service.packageName);
    const response = fullType(method.response, service.packageName);
    referenced.set(request, '请求');
    referenced.set(response, '响应');
    lines.push(`| \`${method.name}\` | ${mode(method)} | \`${request}\` | \`${response}\` | ${rpcDescription(method)} |`);
  }
  lines.push('', '## 请求与响应字段', '');
  for (const [type, role] of referenced) {
    const message = messages.get(type);
    lines.push(`### ${role} \`${type}\``, '', `中文说明：${messageDescription(type.split('.').at(-1))}。`, '', ...renderFields(message));
  }
  return lines.join('\n');
}

function writeFile(target, content) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

const rootIndex = [
  '# BAPIS gRPC 接口文档',
  '',
  '本文档从已发布的 proto 标签生成，覆盖 service、RPC 请求/响应及其直接字段。中文说明主要基于标识符推断，不代表官方业务文档。',
  '',
  '## 版本',
  '',
];

for (const version of versions) {
  const versionRoot = path.join(docsRoot, version.key);
  // Service paths derive from their wire package names. Remove previous
  // generated pages so a package-name correction cannot leave stale pages.
  fs.rmSync(path.join(versionRoot, 'services'), { recursive: true, force: true });
  const sourceFiles = runGit(['ls-tree', '-r', '--name-only', version.ref, 'extracted_proto/com/bapis'])
    .split('\n')
    .filter(file => file.endsWith('/messages.proto') || file.endsWith('/services.proto'));
  const messages = new Map();
  const services = [];
  for (const file of sourceFiles) {
    const source = runGit(['show', `${version.ref}:${file}`]);
    if (file.endsWith('/messages.proto')) {
      for (const message of parseMessages(file, source)) messages.set(message.fullName, message);
    } else {
      services.push(...parseServices(file, source));
    }
  }
  services.sort((left, right) => left.fullName.localeCompare(right.fullName));
  const versionIndex = [
    `# ${version.title}`, '',
    `来源标签：\`${version.ref}\`。共 ${services.length} 个 service，${services.reduce((count, service) => count + service.methods.length, 0)} 个 RPC。`, '',
    '中文说明基于名称自动推断；字段号、类型、重复与 oneof 信息来自对应 proto。', '',
    '## Service', '',
  ];
  for (const service of services) {
    const relative = path.join('services', ...service.fullName.split('.')).replace(/\\/g, '/') + '.md';
    versionIndex.push(`- [\`${service.fullName}\`](${relative})：${serviceDescription(service)}，${service.methods.length} 个 RPC`);
    writeFile(path.join(versionRoot, relative), renderService(service, messages));
  }
  writeFile(path.join(versionRoot, 'README.md'), `${versionIndex.join('\n')}\n`);
  rootIndex.push(`- [${version.title}](${version.key}/README.md)：${services.length} 个 service，${services.reduce((count, service) => count + service.methods.length, 0)} 个 RPC`);
}

writeFile(path.join(docsRoot, 'README.md'), `${rootIndex.join('\n')}\n`);
console.log(`Generated documentation for ${versions.length} released versions in ${docsRoot}`);
