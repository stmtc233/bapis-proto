# `com.bapis.bilibili.broadcast.message.archive.VideoUp`

中文说明：广播 消息 稿件 视频 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `VideoData` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.archive.VideoDataReply` | 视频 数据 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.message.archive.VideoDataReply`

中文说明：视频 数据 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `type` | `int64` | - | 类型 |
| 2 | `data` | `string` | - | 数据 |
