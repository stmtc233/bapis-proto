# `bilibili.app.resource.v1.LegacyResource`

中文说明：应用 资源 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Download` | 一元调用 | `com.bapis.bilibili.app.resource.v1.DownloadReq` | `com.bapis.bilibili.app.resource.v1.DownloadReply` | 下载 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.resource.v1.DownloadReq`

中文说明：下载 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ver` | `string` | - | 业务字段 `ver`（名称未提供可靠中文语义） |
| 2 | `type` | `string` | - | 类型 |
| 3 | `screenWidth` | `int64` | - | 业务字段 `screenWidth`（名称未提供可靠中文语义） |
| 4 | `screenHeight` | `int64` | - | 业务字段 `screenHeight`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.resource.v1.DownloadReply`

中文说明：下载 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ver` | `string` | - | 业务字段 `ver`（名称未提供可靠中文语义） |
| 2 | `resource` | `Download` | repeated | 资源 |
| 3 | `dwtime` | `map<string, DwTime>` | map | 业务字段 `dwtime`（名称未提供可靠中文语义） |
