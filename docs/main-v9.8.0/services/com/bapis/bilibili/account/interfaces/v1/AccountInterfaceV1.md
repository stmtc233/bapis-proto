# `com.bapis.bilibili.account.interfaces.v1.AccountInterfaceV1`

中文说明：账户 接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `MidByName` | 一元调用 | `com.bapis.bilibili.account.interfaces.v1.MidByNameReq` | `com.bapis.bilibili.account.interfaces.v1.MidByNameReply` | 用户 ID 名称 |
| `UnameMessage` | 一元调用 | `com.bapis.bilibili.account.interfaces.v1.UnameMessageReq` | `com.bapis.bilibili.account.interfaces.v1.UnameMessageReply` | 消息 |
| `UpdateNameV2` | 一元调用 | `com.bapis.bilibili.account.interfaces.v1.UpdateNameReq` | `com.bapis.bilibili.account.interfaces.v1.UpdateNameReply` | 更新 名称 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.account.interfaces.v1.MidByNameReq`

中文说明：用户 ID 名称 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `names` | `string` | repeated | 业务字段 `names`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.account.interfaces.v1.MidByNameReply`

中文说明：用户 ID 名称 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `nameMap` | `map<string, int64>` | map | 名称 |

### 请求 `com.bapis.bilibili.account.interfaces.v1.UnameMessageReq`

中文说明：消息 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.account.interfaces.v1.UnameMessageReply`

中文说明：消息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `allow` | `bool` | - | 业务字段 `allow`（名称未提供可靠中文语义） |
| 2 | `realnameOrTel` | `bool` | - | 业务字段 `realnameOrTel`（名称未提供可靠中文语义） |
| 3 | `unameMessage` | `string` | - | 消息 |
| 4 | `confirmMessage` | `string` | - | 消息 |
| 5 | `conditionMessage` | `string` | - | 消息 |
| 6 | `bindTel` | `string` | - | 业务字段 `bindTel`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.account.interfaces.v1.UpdateNameReq`

中文说明：更新 名称 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uname` | `string` | - | 业务字段 `uname`（名称未提供可靠中文语义） |
| 2 | `source` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.account.interfaces.v1.UpdateNameReply`

中文说明：更新 名称 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int64` | - | 状态码 |
| 2 | `msg` | `string` | - | 业务字段 `msg`（名称未提供可靠中文语义） |
| 3 | `nameList` | `string` | repeated | 名称 列表 |
| 4 | `name` | `string` | - | 名称 |
