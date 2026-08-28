# `bilibili.app.wall.v1.Wall`

中文说明：应用 壁纸 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `RuleInfo` | 一元调用 | `com.bapis.bilibili.app.wall.v1.RuleRequest` | `com.bapis.bilibili.app.wall.v1.RulesReply` | 信息 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.wall.v1.RuleRequest`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.wall.v1.RulesReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rulesinfo` | `bytes` | - | 业务字段 `rulesinfo`（名称未提供可靠中文语义） |
| 2 | `hashvalue` | `string` | - | 业务字段 `hashvalue`（名称未提供可靠中文语义） |
