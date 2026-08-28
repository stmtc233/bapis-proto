# `bilibili.broadcast.v1.ModManager`

中文说明：广播 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `WatchResource` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.v1.ModResourceResp` | 资源 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.v1.ModResourceResp`

中文说明：资源 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `atcion` | `Action` | - | 业务字段 `atcion`（名称未提供可靠中文语义） |
| 2 | `appKey` | `string` | - | 应用 |
| 3 | `poolName` | `string` | - | 名称 |
| 4 | `moduleName` | `string` | - | 模块 名称 |
| 5 | `moduleVersion` | `int64` | - | 模块 版本 |
| 6 | `listVersion` | `int64` | - | 列表 版本 |
