# `com.bapis.bilibili.mall.tab3.viewunite.v1.View`

中文说明：商城 查看 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ArcRefresh` | 一元调用 | `com.bapis.bilibili.mall.tab3.viewunite.v1.ArcRefreshReq` | `com.bapis.bilibili.mall.tab3.viewunite.v1.ArcRefreshReply` | 稿件 |
| `RelatesFeed` | 一元调用 | `com.bapis.bilibili.mall.tab3.viewunite.v1.RelatesFeedReq` | `com.bapis.bilibili.mall.tab3.viewunite.v1.RelatesFeedReply` | 信息流 |
| `View` | 一元调用 | `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewReq` | `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewReply` | 查看 |
| `ViewProgress` | 一元调用 | `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewProgressReq` | `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewProgressReply` | 查看 进度 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.mall.tab3.viewunite.v1.ArcRefreshReq`

中文说明：稿件 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |

### 响应 `com.bapis.bilibili.mall.tab3.viewunite.v1.ArcRefreshReply`

中文说明：稿件 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `stat` | `com.bapis.bilibili.mall.tab3.viewunite.common.Stat` | - | 业务字段 `stat`（名称未提供可靠中文语义） |
| 2 | `reqUser` | `SimpleReqUser` | - | 请求 用户 |
| 3 | `arc` | `SimpleArc` | - | 稿件 |
| 4 | `online` | `Online` | - | 业务字段 `online`（名称未提供可靠中文语义） |
| 5 | `likeConfig` | `LikeConfig` | - | 点赞 配置 |

### 请求 `com.bapis.bilibili.mall.tab3.viewunite.v1.RelatesFeedReq`

中文说明：信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 7 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 8 | `sessionId` | `string` | - | 标识 |
| 9 | `autoPlay` | `int64` | - | 播放 |
| 10 | `fromTrackId` | `string` | - | 来源 标识 |

### 响应 `com.bapis.bilibili.mall.tab3.viewunite.v1.RelatesFeedReply`

中文说明：信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `relates` | `com.bapis.bilibili.mall.tab3.viewunite.common.RelateCard` | repeated | 业务字段 `relates`（名称未提供可靠中文语义） |
| 2 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewReq`

中文说明：查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `sessionId` | `string` | - | 标识 |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 8 | `trackId` | `string` | - | 标识 |
| 9 | `extraContent` | `map<string, string>` | map | 扩展数据 内容 |
| 10 | `playMode` | `string` | - | 播放 模式 |
| 11 | `relate` | `Relate` | - | 业务字段 `relate`（名称未提供可靠中文语义） |
| 12 | `bizExtra` | `string` | - | 扩展数据 |
| 13 | `adExtra` | `string` | - | 广告 扩展数据 |

### 响应 `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewReply`

中文说明：查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `viewBase` | `ViewBase` | - | 查看 |
| 2 | `arc` | `Arc` | - | 稿件 |
| 3 | `reqUser` | `ReqUser` | - | 请求 用户 |
| 4 | `owner` | `com.bapis.bilibili.mall.tab3.viewunite.common.Owner` | - | 所有者 |
| 5 | `tab` | `Tab` | - | 标签页 |
| 6 | `supplement` | `google.protobuf.Any` | - | 业务字段 `supplement`（名称未提供可靠中文语义） |
| 7 | `cm` | `CM` | - | 业务字段 `cm`（名称未提供可靠中文语义） |
| 8 | `ecode` | `ECode` | - | 业务字段 `ecode`（名称未提供可靠中文语义） |
| 9 | `ecodeConfig` | `ECodeConfig` | - | 配置 |
| 10 | `report` | `map<string, string>` | map | 业务字段 `report`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewProgressReq`

中文说明：查看 进度 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `chronosParam` | `ChronosParam` | - | 资源包 参数 |
| 5 | `type` | `UnionType` | - | 类型 |

### 响应 `com.bapis.bilibili.mall.tab3.viewunite.v1.ViewProgressReply`

中文说明：查看 进度 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoGuide` | `VideoGuide` | - | 视频 |
| 2 | `chronos` | `Chronos` | - | 资源包 |
| 3 | `arcShot` | `VideoShot` | - | 稿件 |
| 4 | `dm` | `DmResource` | - | 弹幕 |
