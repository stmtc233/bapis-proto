# `com.bapis.bilibili.account.fission.v1.Fission`

中文说明：账户 裂变 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Entrance` | 一元调用 | `com.bapis.bilibili.account.fission.v1.EntranceReq` | `com.bapis.bilibili.account.fission.v1.EntranceReply` | `Entrance` 调用 |
| `Privacy` | 一元调用 | `com.bapis.bilibili.account.fission.v1.PrivacyReq` | `com.bapis.bilibili.account.fission.v1.PrivacyReply` | 隐私 |
| `Window` | 一元调用 | `com.bapis.bilibili.account.fission.v1.WindowReq` | `com.bapis.bilibili.account.fission.v1.WindowReply` | `Window` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.account.fission.v1.EntranceReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.account.fission.v1.EntranceReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `icon` | `string` | - | 业务字段 `icon`（名称未提供可靠中文语义） |
| 2 | `name` | `string` | - | 名称 |
| 3 | `url` | `string` | - | 地址 |
| 4 | `animateIcon` | `AnimateIcon` | - | 业务字段 `animateIcon`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.account.fission.v1.PrivacyReq`

中文说明：隐私 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `activityUid` | `string` | - | 活动 用户 ID |

### 响应 `com.bapis.bilibili.account.fission.v1.PrivacyReply`

中文说明：隐私 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.account.fission.v1.WindowReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.account.fission.v1.WindowReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `type` | `int32` | - | 类型 |
| 2 | `url` | `string` | - | 地址 |
| 3 | `reportData` | `string` | - | 数据 |
