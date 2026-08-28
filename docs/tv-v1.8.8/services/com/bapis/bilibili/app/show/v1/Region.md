# `com.bapis.bilibili.app.show.v1.Region`

中文说明：应用 分区 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Region` | 一元调用 | `com.bapis.bilibili.app.show.region.v1.RegionReq` | `com.bapis.bilibili.app.show.region.v1.RegionReply` | 分区 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.show.region.v1.RegionReq`

中文说明：分区 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `lang` | `string` | - | 语言 |

### 响应 `com.bapis.bilibili.app.show.region.v1.RegionReply`

中文说明：分区 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `regions` | `RegionInfo` | repeated | 业务字段 `regions`（名称未提供可靠中文语义） |
