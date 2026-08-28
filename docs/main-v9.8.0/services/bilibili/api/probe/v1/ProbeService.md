# `bilibili.api.probe.v1.ProbeService`

中文说明：接口 探测 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Echo` | 一元调用 | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | `Echo` 调用 |
| `EchoBody` | 一元调用 | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | `EchoBody` 调用 |
| `EchoDelete` | 一元调用 | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | `com.bapis.bilibili.api.probe.v1.SimpleMessage` | 删除 |
| `EchoError` | 一元调用 | `com.bapis.bilibili.api.probe.v1.ErrorMessage` | `com.bapis.bilibili.api.probe.v1.ErrorMessage` | 错误 |
| `EchoPatch` | 一元调用 | `com.bapis.bilibili.api.probe.v1.DynamicMessageUpdate` | `com.bapis.bilibili.api.probe.v1.DynamicMessageUpdate` | `EchoPatch` 调用 |

## 请求与响应字段

### 响应 `com.bapis.bilibili.api.probe.v1.SimpleMessage`

中文说明：消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int32` | - | 标识 |
| 2 | `num` | `int64` | - | 业务字段 `num`（名称未提供可靠中文语义） |
| 3 | `lang` | `string` | - | 语言 |
| 4 | `cate` | `Category` | - | 业务字段 `cate`（名称未提供可靠中文语义） |
| 5 | `embedded` | `Embedded` | - | 业务字段 `embedded`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.api.probe.v1.ErrorMessage`

中文说明：错误 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int64` | - | 状态码 |
| 2 | `reason` | `string` | - | 原因 |
| 3 | `message_` | `string` | - | 消息 |

### 响应 `com.bapis.bilibili.api.probe.v1.DynamicMessageUpdate`

中文说明：动态 消息 更新。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `body` | `SimpleMessage` | - | 业务字段 `body`（名称未提供可靠中文语义） |
