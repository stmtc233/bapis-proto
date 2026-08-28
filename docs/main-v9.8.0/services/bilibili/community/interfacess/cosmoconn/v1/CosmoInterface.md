# `bilibili.community.interfacess.cosmoconn.v1.CosmoInterface`

中文说明：社区 接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Ping` | 一元调用 | `google.protobuf.Empty` | `google.protobuf.Empty` | `Ping` 调用 |
| `SimpleAction` | 一元调用 | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SimpleActionReq` | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SimpleActionRsp` | 操作 |
| `Subscribe` | 一元调用 | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeReq` | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeRsp` | `Subscribe` 调用 |
| `SubscribeCard` | 一元调用 | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeCardReq` | `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeCardRsp` | 卡片 |

## 请求与响应字段

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SimpleActionReq`

中文说明：操作 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `entity` | `Entity` | - | 业务字段 `entity`（名称未提供可靠中文语义） |
| 2 | `action` | `Action` | - | 操作 |
| 3 | `meta` | `CosmoParaMeta` | - | 元数据 |

### 响应 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SimpleActionRsp`

中文说明：操作 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `CosmoBusiness` | - | 业务 |
| 2 | `uniqueId` | `string` | - | 标识 |
| 3 | `button` | `Button` | - | 业务字段 `button`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `button` | `Button` | - | 业务字段 `button`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeCardReq`

中文说明：卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `CosmoBusiness` | - | 业务 |

### 响应 `com.bapis.bilibili.community.interfacess.cosmoconn.v1.SubscribeCardRsp`

中文说明：卡片 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uniqueId` | `string` | - | 标识 |
| 2 | `card` | `SubscribeCard` | - | 卡片 |
