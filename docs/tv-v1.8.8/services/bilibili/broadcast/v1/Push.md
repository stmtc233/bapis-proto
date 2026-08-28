# `bilibili.broadcast.v1.Push`

中文说明：广播 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `WatchMessage` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.v1.PushMessageResp` | 消息 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.v1.PushMessageResp`

中文说明：消息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oldTaskid` | `int64` | - | 业务字段 `oldTaskid`（名称未提供可靠中文语义） |
| 2 | `biz` | `Biz` | - | 业务字段 `biz`（名称未提供可靠中文语义） |
| 3 | `type` | `Type` | - | 类型 |
| 4 | `title` | `string` | - | 标题 |
| 5 | `summary` | `string` | - | 业务字段 `summary`（名称未提供可靠中文语义） |
| 6 | `img` | `string` | - | 业务字段 `img`（名称未提供可靠中文语义） |
| 7 | `link` | `string` | - | 链接 |
| 8 | `position` | `Position` | - | 位置 |
| 9 | `duration` | `int32` | - | 业务字段 `duration`（名称未提供可靠中文语义） |
| 10 | `expire` | `int64` | - | 业务字段 `expire`（名称未提供可靠中文语义） |
| 11 | `taskid` | `string` | - | 业务字段 `taskid`（名称未提供可靠中文语义） |
