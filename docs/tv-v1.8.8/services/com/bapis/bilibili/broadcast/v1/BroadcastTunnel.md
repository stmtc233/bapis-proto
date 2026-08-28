# `com.bapis.bilibili.broadcast.v1.BroadcastTunnel`

中文说明：广播 通道 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CreateTunnel` | 双向流 | `com.bapis.bilibili.broadcast.v1.BroadcastFrame` | `com.bapis.bilibili.broadcast.v1.BroadcastFrame` | 创建 通道 |

## 请求与响应字段

### 响应 `com.bapis.bilibili.broadcast.v1.BroadcastFrame`

中文说明：广播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `options` | `FrameOption` | - | 业务字段 `options`（名称未提供可靠中文语义） |
| 2 | `targetPath` | `string` | - | 业务字段 `targetPath`（名称未提供可靠中文语义） |
| 3 | `body` | `google.protobuf.Any` | - | 业务字段 `body`（名称未提供可靠中文语义） |
