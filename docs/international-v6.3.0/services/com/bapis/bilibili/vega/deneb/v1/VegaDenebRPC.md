# `com.bapis.bilibili.vega.deneb.v1.VegaDenebRPC`

中文说明：业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `MessagePulls` | 一元调用 | `com.bapis.bilibili.vega.deneb.v1.MessagePullsReq` | `com.bapis.bilibili.vega.deneb.v1.MessagePullsReply` | 消息 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.vega.deneb.v1.MessagePullsReq`

中文说明：消息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `startSeqId` | `int64` | - | 开始 标识 |
| 2 | `endSeqId` | `int64` | - | 结束 标识 |
| 3 | `pn` | `int32` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 4 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.vega.deneb.v1.MessagePullsReply`

中文说明：消息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `data` | `google.protobuf.Any` | repeated | 数据 |
| 2 | `pn` | `int32` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 3 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |
| 4 | `count` | `int64` | - | 数量 |
| 5 | `hasNext` | `bool` | - | 是否具有 下一页 |
