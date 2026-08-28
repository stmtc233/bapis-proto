# `com.bapis.bilibili.main.community.reply.v1.Reply`

中文说明：社区 响应 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `MainList` | 一元调用 | `com.bapis.bilibili.community.reply.v1.MainListReq` | `com.bapis.bilibili.community.reply.v1.MainListReply` | 列表 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.community.reply.v1.MainListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `cursor` | `CursorReq` | - | 游标 |
| 4 | `mode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.community.reply.v1.MainListReply`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `CursorReply` | - | 游标 |
| 2 | `replies` | `ReplyInfo` | repeated | 业务字段 `replies`（名称未提供可靠中文语义） |
| 3 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |
| 4 | `tops` | `ReplyInfo` | repeated | 业务字段 `tops`（名称未提供可靠中文语义） |
| 5 | `notice` | `Notice` | - | 业务字段 `notice`（名称未提供可靠中文语义） |
| 6 | `lottery` | `Lottery` | - | 业务字段 `lottery`（名称未提供可靠中文语义） |
