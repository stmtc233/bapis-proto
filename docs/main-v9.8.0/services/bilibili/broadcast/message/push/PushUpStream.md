# `bilibili.broadcast.message.push.PushUpStream`

中文说明：广播 消息 流 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PushUpStream` | 客户端流 | `com.bapis.bilibili.broadcast.message.push.UpStreamMessage` | `google.protobuf.Empty` | 流 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.broadcast.message.push.UpStreamMessage`

中文说明：流 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `taskid` | `string` | - | 业务字段 `taskid`（名称未提供可靠中文语义） |
| 2 | `type` | `Type` | - | 类型 |
| 3 | `extra` | `string` | - | 扩展数据 |
| 4 | `timestamp` | `int64` | - | 时间戳 |
| 5 | `job` | `int64` | - | 业务字段 `job`（名称未提供可靠中文语义） |
| 6 | `msgSource` | `string` | - | 来源 |
| 7 | `bid` | `int64` | - | 业务字段 `bid`（名称未提供可靠中文语义） |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。
