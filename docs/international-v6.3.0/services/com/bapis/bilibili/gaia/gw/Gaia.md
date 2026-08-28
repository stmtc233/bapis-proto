# `com.bapis.bilibili.gaia.gw.Gaia`

中文说明：业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ExClimbAppleTrees` | 一元调用 | `com.bapis.bilibili.gaia.gw.GaiaEncryptMsgReq` | `com.bapis.bilibili.gaia.gw.UploadAppListReply` | `ExClimbAppleTrees` 调用 |
| `ExFetchPublicKey` | 一元调用 | `google.protobuf.Empty` | `com.bapis.bilibili.gaia.gw.FetchPublicKeyReply` | `ExFetchPublicKey` 调用 |
| `ExGetAxe` | 一元调用 | `google.protobuf.Empty` | `com.bapis.bilibili.gaia.gw.FetchPublicKeyReply` | 获取 |
| `ExUploadAppList` | 一元调用 | `com.bapis.bilibili.gaia.gw.GaiaEncryptMsgReq` | `com.bapis.bilibili.gaia.gw.UploadAppListReply` | 应用 列表 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.gaia.gw.GaiaEncryptMsgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `header` | `GaiaMsgHeader` | - | 业务字段 `header`（名称未提供可靠中文语义） |
| 2 | `encryptPayload` | `bytes` | - | 业务字段 `encryptPayload`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.gaia.gw.UploadAppListReply`

中文说明：应用 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `traceId` | `string` | - | 标识 |

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.gaia.gw.FetchPublicKeyReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `version` | `string` | - | 版本 |
| 2 | `publicKey` | `string` | - | 业务字段 `publicKey`（名称未提供可靠中文语义） |
| 3 | `deadline` | `int64` | - | 业务字段 `deadline`（名称未提供可靠中文语义） |
