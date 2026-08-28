# `bilibili.app.distribution.Distribution`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `GetUserPreference` | 一元调用 | `com.bapis.bilibili.app.distribution.GetUserPreferenceReq` | `com.bapis.bilibili.app.distribution.GetUserPreferenceReply` | 获取 用户 |
| `SetUserPreference` | 一元调用 | `com.bapis.bilibili.app.distribution.SetUserPreferenceReq` | `com.bapis.bilibili.app.distribution.SetUserPreferenceReply` | 用户 |
| `UserPreference` | 一元调用 | `com.bapis.bilibili.app.distribution.UserPreferenceReq` | `com.bapis.bilibili.app.distribution.UserPreferenceReply` | 用户 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.distribution.GetUserPreferenceReq`

中文说明：获取 用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `typeUrl` | `string` | repeated | 类型 地址 |
| 2 | `extraContext` | `map<string, string>` | map | 扩展数据 |

### 响应 `com.bapis.bilibili.app.distribution.GetUserPreferenceReply`

中文说明：获取 用户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `value` | `google.protobuf.Any` | repeated | 值 |

### 请求 `com.bapis.bilibili.app.distribution.SetUserPreferenceReq`

中文说明：用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `preference` | `google.protobuf.Any` | repeated | 业务字段 `preference`（名称未提供可靠中文语义） |
| 2 | `extraContext` | `map<string, string>` | map | 扩展数据 |

### 响应 `com.bapis.bilibili.app.distribution.SetUserPreferenceReply`

中文说明：用户 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.distribution.UserPreferenceReq`

中文说明：用户 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.distribution.UserPreferenceReply`

中文说明：用户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `preference` | `google.protobuf.Any` | repeated | 业务字段 `preference`（名称未提供可靠中文语义） |
