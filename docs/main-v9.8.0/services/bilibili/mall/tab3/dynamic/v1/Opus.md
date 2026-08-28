# `bilibili.mall.tab3.dynamic.v1.Opus`

中文说明：商城 动态 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `OpusDetail` | 一元调用 | `com.bapis.bilibili.mall.tab3.dynamic.v1.OpusDetailReq` | `com.bapis.bilibili.mall.tab3.dynamic.v1.OpusDetailResp` | 详情 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.mall.tab3.dynamic.v1.OpusDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `adExtra` | `string` | - | 广告 扩展数据 |
| 3 | `localTime` | `int32` | - | 时间 |

### 响应 `com.bapis.bilibili.mall.tab3.dynamic.v1.OpusDetailResp`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `opusItem` | `com.bapis.bilibili.app.dynamic.v2.OpusItem` | - | 条目 |
| 2 | `title` | `TitleInfo` | - | 标题 |
| 3 | `authorInfo` | `AuthorInfo` | - | 作者 信息 |
| 4 | `ipCity` | `IpCity` | - | IP 地址 |
| 5 | `bottom` | `Bottom` | - | 业务字段 `bottom`（名称未提供可靠中文语义） |
| 6 | `itemInfoDescvo` | `bytes` | - | 条目 信息 |
| 7 | `itemsInfovos` | `bytes` | repeated | 业务字段 `itemsInfovos`（名称未提供可靠中文语义） |
| 8 | `pic` | `Pic` | - | 业务字段 `pic`（名称未提供可靠中文语义） |
| 9 | `pubTime` | `int64` | - | 发布 时间 |
| 10 | `topicInfo` | `TopicInfo` | - | 话题 信息 |
| 11 | `itemscene` | `string` | - | 业务字段 `itemscene`（名称未提供可靠中文语义） |
| 12 | `reserveInfo` | `ReserveInfo` | - | 信息 |
| 13 | `shareinfo` | `bytes` | - | 业务字段 `shareinfo`（名称未提供可靠中文语义） |
| 14 | `mallbenefit` | `bytes` | - | 业务字段 `mallbenefit`（名称未提供可靠中文语义） |
| 15 | `trackMap` | `map<string, string>` | map | 业务字段 `trackMap`（名称未提供可靠中文语义） |
| 16 | `itemType` | `string` | - | 条目 类型 |
| 17 | `supportInfo` | `SupportInfo` | - | 信息 |
| 18 | `smallShop` | `CreatorSmallShopEntry` | - | 业务字段 `smallShop`（名称未提供可靠中文语义） |
| 19 | `rightButtonStamp` | `RightButtonStamp` | - | 业务字段 `rightButtonStamp`（名称未提供可靠中文语义） |
