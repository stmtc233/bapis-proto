# `bilibili.app.resource.v1.Module`

中文说明：应用 资源 模块 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `List` | 一元调用 | `com.bapis.bilibili.app.resource.v1.ListReq` | `com.bapis.bilibili.app.resource.v1.ListReply` | 列表 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.resource.v1.ListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `poolName` | `string` | - | 名称 |
| 2 | `moduleName` | `string` | - | 模块 名称 |
| 3 | `versionList` | `VersionListReq` | repeated | 版本 列表 |
| 4 | `env` | `EnvType` | - | 业务字段 `env`（名称未提供可靠中文语义） |
| 5 | `sysVer` | `int32` | - | 业务字段 `sysVer`（名称未提供可靠中文语义） |
| 6 | `scale` | `int32` | - | 业务字段 `scale`（名称未提供可靠中文语义） |
| 7 | `arch` | `int32` | - | 业务字段 `arch`（名称未提供可靠中文语义） |
| 8 | `listVersion` | `int64` | - | 列表 版本 |
| 9 | `lite` | `int32` | - | 业务字段 `lite`（名称未提供可靠中文语义） |
| 10 | `supportType` | `int64` | - | 类型 |
| 11 | `supportUnzipPassword` | `bool` | - | 业务字段 `supportUnzipPassword`（名称未提供可靠中文语义） |
| 12 | `supportPeak` | `bool` | - | 业务字段 `supportPeak`（名称未提供可靠中文语义） |
| 13 | `region` | `string` | - | 分区 |
| 14 | `unusedManualFilter` | `bool` | - | 筛选 |

### 响应 `com.bapis.bilibili.app.resource.v1.ListReply`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `env` | `string` | - | 业务字段 `env`（名称未提供可靠中文语义） |
| 2 | `pools` | `PoolReply` | repeated | 业务字段 `pools`（名称未提供可靠中文语义） |
| 3 | `listVersion` | `int64` | - | 列表 版本 |
| 4 | `host` | `Host` | - | 业务字段 `host`（名称未提供可靠中文语义） |
