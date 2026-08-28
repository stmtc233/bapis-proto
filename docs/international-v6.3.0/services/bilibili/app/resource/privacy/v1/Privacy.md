# `bilibili.app.resource.privacy.v1.Privacy`

中文说明：应用 资源 隐私 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PrivacyConfig` | 一元调用 | `com.bapis.bilibili.app.resource.privacy.v1.NoArgRequest` | `com.bapis.bilibili.app.resource.privacy.v1.PrivacyConfigReply` | 隐私 配置 |
| `SetPrivacyConfig` | 一元调用 | `com.bapis.bilibili.app.resource.privacy.v1.SetPrivacyConfigRequest` | `com.bapis.bilibili.app.resource.privacy.v1.NoReply` | 隐私 配置 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.resource.privacy.v1.NoArgRequest`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.resource.privacy.v1.PrivacyConfigReply`

中文说明：隐私 配置 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `privacyConfigItem` | `PrivacyConfigItem` | repeated | 隐私 配置 条目 |

### 请求 `com.bapis.bilibili.app.resource.privacy.v1.SetPrivacyConfigRequest`

中文说明：隐私 配置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `privacyConfigType` | `PrivacyConfigType` | - | 隐私 配置 类型 |
| 2 | `state` | `PrivacyConfigState` | - | 状态 |

### 响应 `com.bapis.bilibili.app.resource.privacy.v1.NoReply`

中文说明：响应。

该消息没有声明字段。
