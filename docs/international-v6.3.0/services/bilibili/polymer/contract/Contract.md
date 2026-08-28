# `bilibili.polymer.contract.Contract`

中文说明：业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AddContract` | 一元调用 | `com.bapis.bilibili.polymer.contract.AddContractReq` | `google.protobuf.Empty` | 添加 |
| `AddContractV2` | 一元调用 | `com.bapis.bilibili.polymer.contract.AddContractReq` | `com.bapis.bilibili.polymer.contract.AddContractReply` | 添加 |
| `ContractConfig` | 一元调用 | `com.bapis.bilibili.polymer.contract.ContractConfigReq` | `com.bapis.bilibili.polymer.contract.ContractConfigReply` | 配置 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.polymer.contract.AddContractReq`

中文说明：添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `common` | `CommonReq` | - | 业务字段 `common`（名称未提供可靠中文语义） |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `aid` | `int64` | - | 稿件 ID |
| 5 | `source` | `Source` | - | 来源 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.polymer.contract.AddContractReply`

中文说明：添加 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `allowMessage` | `bool` | - | 消息 |
| 2 | `allowReply` | `bool` | - | 响应 |
| 3 | `inputText` | `string` | - | 文本 |
| 4 | `inputTitle` | `string` | - | 标题 |

### 请求 `com.bapis.bilibili.polymer.contract.ContractConfigReq`

中文说明：配置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `common` | `CommonReq` | - | 业务字段 `common`（名称未提供可靠中文语义） |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `aid` | `int64` | - | 稿件 ID |
| 5 | `source` | `Source` | - | 来源 |

### 响应 `com.bapis.bilibili.polymer.contract.ContractConfigReply`

中文说明：配置 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `isFollowDisplay` | `int32` | - | 是否 关注 展示 |
| 2 | `isTripleDisplay` | `int32` | - | 是否 展示 |
| 3 | `contractCard` | `ContractCard` | - | 卡片 |
