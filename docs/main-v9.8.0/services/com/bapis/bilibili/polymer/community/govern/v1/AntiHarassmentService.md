# `com.bapis.bilibili.polymer.community.govern.v1.AntiHarassmentService`

中文说明：社区 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `LoadAntiHarassmentSettings` | 一元调用 | `com.bapis.bilibili.polymer.community.govern.v1.LoadAntiHarassmentSettingsReq` | `com.bapis.bilibili.polymer.community.govern.v1.LoadAntiHarassmentSettingsRsp` | 加载 |
| `StoreAntiHarassmentSettings` | 一元调用 | `com.bapis.bilibili.polymer.community.govern.v1.StoreAntiHarassmentSettingsReq` | `com.bapis.bilibili.polymer.community.govern.v1.StoreAntiHarassmentSettingsRsp` | `StoreAntiHarassmentSettings` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.polymer.community.govern.v1.LoadAntiHarassmentSettingsReq`

中文说明：加载 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizType` | `BizType` | - | 类型 |
| 2 | `recvMid` | `int64` | - | 用户 ID |
| 3 | `sendMid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.polymer.community.govern.v1.LoadAntiHarassmentSettingsRsp`

中文说明：加载 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `antiHarassmentRet` | `bool` | - | 业务字段 `antiHarassmentRet`（名称未提供可靠中文语义） |
| 2 | `antiHarassmentSetting` | `AntiHarassmentSetting` | - | 设置 |
| 3 | `showWindow` | `int32` | - | 业务字段 `showWindow`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.polymer.community.govern.v1.StoreAntiHarassmentSettingsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizType` | `BizType` | - | 类型 |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `antiHarassmentSetting` | `AntiHarassmentSetting` | - | 设置 |

### 响应 `com.bapis.bilibili.polymer.community.govern.v1.StoreAntiHarassmentSettingsRsp`

中文说明：响应。

该消息没有声明字段。
