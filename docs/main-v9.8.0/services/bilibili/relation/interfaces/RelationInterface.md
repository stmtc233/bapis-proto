# `bilibili.relation.interfaces.RelationInterface`

中文说明：关系 接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AtSearch` | 一元调用 | `com.bapis.bilibili.relation.interfaces.AtSearchReq` | `com.bapis.bilibili.relation.interfaces.AtSearchReply` | 搜索 |
| `ModifyRelation` | 一元调用 | `com.bapis.bilibili.relation.interfaces.FollowingReq` | `com.bapis.bilibili.relation.interfaces.ModifyRelationReply` | 关系 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.relation.interfaces.AtSearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 3 | `scene` | `int32` | - | 业务字段 `scene`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.relation.interfaces.AtSearchReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `groups` | `AtGroup` | repeated | 业务字段 `groups`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.relation.interfaces.FollowingReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `act` | `Act` | - | 业务字段 `act`（名称未提供可靠中文语义） |
| 3 | `source` | `uint32` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `extendContent` | `string` | - | 内容 |
| 6 | `fromSpmid` | `string` | - | 来源 |
| 7 | `fromScmid` | `string` | - | 来源 |
| 8 | `actionId` | `string` | - | 操作 标识 |

### 响应 `com.bapis.bilibili.relation.interfaces.ModifyRelationReply`

中文说明：关系 响应。

该消息没有声明字段。
