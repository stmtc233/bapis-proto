# `bilibili.broadcast.message.bgroup.BGroup`

中文说明：广播 消息 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AppEventStream` | 客户端流 | `com.bapis.bilibili.broadcast.message.bgroup.AppEventMessage` | `google.protobuf.Empty` | 应用 事件 流 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.broadcast.message.bgroup.AppEventMessage`

中文说明：应用 事件 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `eventType` | `AppEvent` | - | 事件 类型 |
| 2 | `timestamp` | `int64` | - | 时间戳 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。
