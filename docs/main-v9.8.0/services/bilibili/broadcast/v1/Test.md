# `bilibili.broadcast.v1.Test`

中文说明：广播 测试 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `WatchTestEvent` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.v1.TestResp` | 测试 事件 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.v1.TestResp`

中文说明：测试 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `taskid` | `int64` | - | 业务字段 `taskid`（名称未提供可靠中文语义） |
| 2 | `timestamp` | `int64` | - | 时间戳 |
| 3 | `message_` | `string` | - | 消息 |
| 4 | `extra` | `google.protobuf.Any` | - | 扩展数据 |
