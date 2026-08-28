# `bilibili.app.show.popular.v1.Popular`

中文说明：应用 热门 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Index` | 一元调用 | `com.bapis.bilibili.app.show.popular.v1.PopularResultReq` | `com.bapis.bilibili.app.show.popular.v1.PopularReply` | `Index` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.show.popular.v1.PopularResultReq`

中文说明：热门 结果 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `idx` | `int64` | - | 业务字段 `idx`（名称未提供可靠中文语义） |
| 2 | `loginEvent` | `int32` | - | 事件 |
| 3 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 4 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 5 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 6 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 7 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 8 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 9 | `lastParam` | `string` | - | 参数 |
| 10 | `ver` | `string` | - | 业务字段 `ver`（名称未提供可靠中文语义） |
| 11 | `entranceId` | `int64` | - | 标识 |
| 12 | `locationIds` | `string` | - | 业务字段 `locationIds`（名称未提供可靠中文语义） |
| 13 | `sourceId` | `int32` | - | 来源 标识 |
| 14 | `flush` | `int32` | - | 业务字段 `flush`（名称未提供可靠中文语义） |
| 15 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 16 | `popularAd` | `PopularAd` | - | 热门 广告 |
| 17 | `isAdaptWide` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.app.show.popular.v1.PopularReply`

中文说明：热门 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `com.bapis.bilibili.app.card.v1.Card` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `config` | `Config` | - | 配置 |
| 3 | `ver` | `string` | - | 业务字段 `ver`（名称未提供可靠中文语义） |
