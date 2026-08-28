# `bilibili.broadcast.message.main.Search`

中文说明：广播 消息 搜索 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ChatResultPush` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.main.ChatResult` | 结果 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.message.main.ChatResult`

中文说明：结果。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `sessionId` | `string` | - | 标识 |
| 3 | `bubbles` | `Bubble` | repeated | 业务字段 `bubbles`（名称未提供可靠中文语义） |
| 4 | `rewriteWord` | `string` | - | 业务字段 `rewriteWord`（名称未提供可靠中文语义） |
| 5 | `title` | `string` | - | 标题 |
| 6 | `business` | `string` | - | 业务 |
| 7 | `messageId` | `int64` | - | 消息 标识 |
| 8 | `likeState` | `LikeState` | - | 点赞 状态 |
| 9 | `likeNumber` | `int64` | - | 点赞 |
