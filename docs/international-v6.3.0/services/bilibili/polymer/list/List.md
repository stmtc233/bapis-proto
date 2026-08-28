# `bilibili.polymer.list.List`

中文说明：列表 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CheckAccount` | 一元调用 | `com.bapis.bilibili.polymer.list.CheckAccountReq` | `com.bapis.bilibili.polymer.list.CheckAccountReply` | 校验 账户 |
| `FavoriteTab` | 一元调用 | `com.bapis.bilibili.polymer.list.FavoriteTabReq` | `com.bapis.bilibili.polymer.list.FavoriteTabReply` | 收藏 标签页 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.polymer.list.CheckAccountReq`

中文说明：校验 账户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `periods` | `string` | - | 业务字段 `periods`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.polymer.list.CheckAccountReply`

中文说明：校验 账户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `isNew` | `bool` | - | 是否 |

### 请求 `com.bapis.bilibili.polymer.list.FavoriteTabReq`

中文说明：收藏 标签页 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.polymer.list.FavoriteTabReply`

中文说明：收藏 标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `FavoriteTabItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
