# `bilibili.app.view.v1.View`

中文说明：应用 查看 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AddContract` | 一元调用 | `com.bapis.bilibili.app.view.v1.AddContractReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 添加 |
| `CacheView` | 一元调用 | `com.bapis.bilibili.app.view.v1.CacheViewReq` | `com.bapis.bilibili.app.view.v1.CacheViewReply` | 查看 |
| `ChronosPkg` | 一元调用 | `com.bapis.bilibili.app.view.v1.ChronosPkgReq` | `com.bapis.bilibili.app.view.v1.Chronos` | 资源包 |
| `ClickActivitySeason` | 一元调用 | `com.bapis.bilibili.app.view.v1.ClickActivitySeasonReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 点击 活动 剧集 |
| `ClickPlayerCard` | 一元调用 | `com.bapis.bilibili.app.view.v1.ClickPlayerCardReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 点击 播放器 卡片 |
| `ClickPlayerCardV2` | 一元调用 | `com.bapis.bilibili.app.view.v1.ClickPlayerCardReq` | `com.bapis.bilibili.app.view.v1.ClickPlayerCardReply` | 点击 播放器 卡片 |
| `ContinuousPlay` | 一元调用 | `com.bapis.bilibili.app.view.v1.ContinuousPlayReq` | `com.bapis.bilibili.app.view.v1.ContinuousPlayReply` | 播放 |
| `ExposePlayerCard` | 一元调用 | `com.bapis.bilibili.app.view.v1.ExposePlayerCardReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 播放器 卡片 |
| `FeedView` | 一元调用 | `com.bapis.bilibili.app.view.v1.FeedViewReq` | `com.bapis.bilibili.app.view.v1.FeedViewReply` | 信息流 查看 |
| `GetArcsPlayer` | 一元调用 | `com.bapis.bilibili.app.view.v1.GetArcsPlayerReq` | `com.bapis.bilibili.app.view.v1.GetArcsPlayerReply` | 获取 播放器 |
| `GetUser` | 一元调用 | `com.bapis.bilibili.app.view.v1.GetUserReq` | `com.bapis.bilibili.app.view.v1.GetUserReply` | 获取 用户 |
| `PlayerRelates` | 一元调用 | `com.bapis.bilibili.app.view.v1.PlayerRelatesReq` | `com.bapis.bilibili.app.view.v1.PlayerRelatesReply` | 播放器 |
| `PremiereArchive` | 一元调用 | `com.bapis.bilibili.app.view.v1.PremiereArchiveReq` | `com.bapis.bilibili.app.view.v1.PremiereArchiveReply` | 稿件 |
| `RelatesFeed` | 一元调用 | `com.bapis.bilibili.app.view.v1.RelatesFeedReq` | `com.bapis.bilibili.app.view.v1.RelatesFeedReply` | 信息流 |
| `Reserve` | 一元调用 | `com.bapis.bilibili.app.view.v1.ReserveReq` | `com.bapis.bilibili.app.view.v1.ReserveReply` | `Reserve` 调用 |
| `Season` | 一元调用 | `com.bapis.bilibili.app.view.v1.SeasonReq` | `com.bapis.bilibili.app.view.v1.SeasonReply` | 剧集 |
| `SeasonActivityRecord` | 一元调用 | `com.bapis.bilibili.app.view.v1.SeasonActivityRecordReq` | `com.bapis.bilibili.app.view.v1.SeasonActivityRecordReply` | 剧集 活动 |
| `SeasonWidgetExpose` | 一元调用 | `com.bapis.bilibili.app.view.v1.SeasonWidgetExposeReq` | `com.bapis.bilibili.app.view.v1.SeasonWidgetExposeReply` | 剧集 |
| `ShortFormVideoDownload` | 一元调用 | `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReq` | `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReply` | 视频 下载 |
| `TFInfo` | 一元调用 | `com.bapis.bilibili.app.view.v1.TFInfoReq` | `com.bapis.bilibili.app.view.v1.TFInfoReply` | 信息 |
| `View` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewReq` | `com.bapis.bilibili.app.view.v1.ViewReply` | 查看 |
| `ViewMaterial` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewMaterialReq` | `com.bapis.bilibili.app.view.v1.ViewMaterialReply` | 查看 |
| `ViewProgress` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewProgressReq` | `com.bapis.bilibili.app.view.v1.ViewProgressReply` | 查看 进度 |
| `ViewTag` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewTagReq` | `com.bapis.bilibili.app.view.v1.ViewTagReply` | 查看 标签 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.view.v1.AddContractReq`

中文说明：添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `upMid` | `int64` | - | 用户 ID |
| 3 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.NoReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.view.v1.CacheViewReq`

中文说明：查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 5 | `adExtra` | `string` | - | 广告 扩展数据 |
| 6 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 7 | `fromSpmid` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.view.v1.CacheViewReply`

中文说明：查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `arc` | `com.bapis.bilibili.app.archive.v1.Arc` | - | 稿件 |
| 2 | `pages` | `ViewPage` | repeated | 业务字段 `pages`（名称未提供可靠中文语义） |
| 3 | `ownerExt` | `OnwerExt` | - | 所有者 扩展 |
| 4 | `reqUser` | `ReqUser` | - | 请求 用户 |
| 5 | `season` | `Season` | - | 剧集 |
| 6 | `elecRank` | `ElecRank` | - | 排行 |
| 7 | `history` | `History` | - | 历史记录 |
| 8 | `dislike` | `Dislike` | - | 业务字段 `dislike`（名称未提供可靠中文语义） |
| 9 | `playerIcon` | `PlayerIcon` | - | 播放器 |
| 10 | `bvid` | `string` | - | BV 号 |
| 11 | `shortLink` | `string` | - | 链接 |
| 12 | `shareSubtitle` | `string` | - | 分享 |
| 13 | `tfPanelCustomized` | `TFPanelCustomized` | - | 业务字段 `tfPanelCustomized`（名称未提供可靠中文语义） |
| 14 | `online` | `Online` | - | 业务字段 `online`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ChronosPkgReq`

中文说明：资源包 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `serviceKey` | `string` | - | 业务字段 `serviceKey`（名称未提供可靠中文语义） |
| 2 | `engineVersion` | `string` | - | 版本 |
| 3 | `messageProtocol` | `string` | - | 消息 |

### 响应 `com.bapis.bilibili.app.view.v1.Chronos`

中文说明：资源包。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `md5` | `string` | - | 业务字段 `md5`（名称未提供可靠中文语义） |
| 2 | `file` | `string` | - | 业务字段 `file`（名称未提供可靠中文语义） |
| 3 | `sign` | `string` | - | 业务字段 `sign`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ClickActivitySeasonReq`

中文说明：点击 活动 剧集 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `orderType` | `BizType` | - | 排序 类型 |
| 2 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 3 | `reserve` | `BizReserveActivityParam` | oneof: `oneof_0` | 业务字段 `reserve`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 4 | `favSeason` | `BizFavSeasonParam` | oneof: `oneof_0` | 收藏 剧集；与同一 oneof 中的字段互斥。 |
| 5 | `action` | `int64` | - | 操作 |

### 请求 `com.bapis.bilibili.app.view.v1.ClickPlayerCardReq`

中文说明：点击 播放器 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `cid` | `int64` | - | 分 P ID |
| 4 | `action` | `int64` | - | 操作 |
| 5 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.ClickPlayerCardReply`

中文说明：点击 播放器 卡片 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.view.v1.ContinuousPlayReq`

中文说明：播放 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `from` | `string` | - | 来源 |
| 3 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `autoplay` | `int32` | - | 业务字段 `autoplay`（名称未提供可靠中文语义） |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 8 | `deviceType` | `int64` | - | 设备 类型 |
| 9 | `sessionId` | `string` | - | 标识 |
| 10 | `displayId` | `int64` | - | 展示 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.ContinuousPlayReply`

中文说明：播放 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `relates` | `Relate` | repeated | 业务字段 `relates`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ExposePlayerCardReq`

中文说明：播放器 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cardType` | `PlayerCardType` | - | 卡片 类型 |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `cid` | `int64` | - | 分 P ID |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.FeedViewReq`

中文说明：信息流 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 7 | `displayId` | `int64` | - | 展示 标识 |
| 8 | `sessionId` | `string` | - | 标识 |
| 9 | `pageVersion` | `string` | - | 分页 版本 |
| 10 | `fromTrackId` | `string` | - | 来源 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.FeedViewReply`

中文说明：信息流 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `FeedViewItem` | repeated | 列表 |
| 2 | `hasNext` | `bool` | - | 是否具有 下一页 |

### 请求 `com.bapis.bilibili.app.view.v1.GetArcsPlayerReq`

中文说明：获取 播放器 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `playAvs` | `PlayAv` | repeated | 播放 |
| 2 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.view.v1.GetArcsPlayerReply`

中文说明：获取 播放器 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `arcsPlayer` | `ArcsPlayer` | repeated | 播放器 |

### 请求 `com.bapis.bilibili.app.view.v1.GetUserReq`

中文说明：获取 用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mids` | `int64` | repeated | 业务字段 `mids`（名称未提供可靠中文语义） |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `onlyFans` | `bool` | - | 业务字段 `onlyFans`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.GetUserReply`

中文说明：获取 用户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `likeList` | `User` | repeated | 点赞 列表 |
| 2 | `title` | `string` | - | 标题 |

### 请求 `com.bapis.bilibili.app.view.v1.PlayerRelatesReq`

中文说明：播放器 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 7 | `sessionId` | `string` | - | 标识 |
| 8 | `fromTrackId` | `string` | - | 来源 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.PlayerRelatesReply`

中文说明：播放器 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `Relate` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.view.v1.PremiereArchiveReq`

中文说明：稿件 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |

### 响应 `com.bapis.bilibili.app.view.v1.PremiereArchiveReply`

中文说明：稿件 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `premiere` | `Premiere` | - | 业务字段 `premiere`（名称未提供可靠中文语义） |
| 2 | `riskStatus` | `bool` | - | 状态 |
| 3 | `riskReason` | `string` | - | 原因 |

### 请求 `com.bapis.bilibili.app.view.v1.RelatesFeedReq`

中文说明：信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 7 | `relatesPage` | `int64` | - | 分页 |
| 8 | `sessionId` | `string` | - | 标识 |
| 9 | `autoplay` | `int32` | - | 业务字段 `autoplay`（名称未提供可靠中文语义） |
| 10 | `fromTrackId` | `string` | - | 来源 标识 |
| 11 | `bizExtra` | `string` | - | 扩展数据 |
| 12 | `deviceType` | `int64` | - | 设备 类型 |
| 13 | `adExtra` | `string` | - | 广告 扩展数据 |
| 14 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 15 | `refreshNum` | `int32` | - | 业务字段 `refreshNum`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.RelatesFeedReply`

中文说明：信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `Relate` | repeated | 列表 |
| 2 | `hasNext` | `bool` | - | 是否具有 下一页 |
| 3 | `pagination` | `com.bapis.bilibili.pagination.PaginationReply` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ReserveReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reserveId` | `int64` | - | 标识 |
| 2 | `reserveAction` | `int64` | - | 操作 |
| 3 | `upId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.ReserveReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reserveId` | `int64` | - | 标识 |

### 请求 `com.bapis.bilibili.app.view.v1.SeasonReq`

中文说明：剧集 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `seasonId` | `int64` | - | 剧集 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.SeasonReply`

中文说明：剧集 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `season` | `UgcSeason` | - | 剧集 |

### 请求 `com.bapis.bilibili.app.view.v1.SeasonActivityRecordReq`

中文说明：剧集 活动 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `seasonId` | `int64` | - | 剧集 标识 |
| 2 | `activityId` | `int64` | - | 活动 标识 |
| 3 | `action` | `int32` | - | 操作 |
| 4 | `aid` | `int64` | - | 稿件 ID |
| 5 | `cid` | `int64` | - | 分 P ID |
| 6 | `scene` | `int64` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 7 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 8 | `fromSpmid` | `string` | - | 来源 |
| 9 | `actionId` | `string` | - | 操作 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.SeasonActivityRecordReply`

中文说明：剧集 活动 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `activity` | `UgcSeasonActivity` | - | 活动 |

### 请求 `com.bapis.bilibili.app.view.v1.SeasonWidgetExposeReq`

中文说明：剧集 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `type` | `int32` | - | 类型 |
| 3 | `seasonId` | `int64` | - | 剧集 标识 |
| 4 | `activityId` | `int64` | - | 活动 标识 |
| 5 | `aid` | `int64` | - | 稿件 ID |
| 6 | `cid` | `int64` | - | 分 P ID |
| 7 | `scene` | `int64` | - | 业务字段 `scene`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.SeasonWidgetExposeReply`

中文说明：剧集 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `seasonId` | `int64` | - | 剧集 标识 |
| 2 | `activityId` | `int64` | - | 活动 标识 |

### 请求 `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReq`

中文说明：视频 下载 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `mid` | `int64` | - | 用户 ID |
| 4 | `buvid` | `string` | - | 设备标识 |
| 5 | `mobiApp` | `string` | - | 应用 |
| 6 | `build` | `int64` | - | 业务字段 `build`（名称未提供可靠中文语义） |
| 7 | `device` | `string` | - | 设备 |
| 8 | `platform` | `string` | - | 业务字段 `platform`（名称未提供可靠中文语义） |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `restriction` | `Restriction` | - | 业务字段 `restriction`（名称未提供可靠中文语义） |
| 11 | `tfIsp` | `string` | - | 业务字段 `tfIsp`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReply`

中文说明：视频 下载 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hasDownloadUrl` | `bool` | - | 是否具有 下载 地址 |
| 2 | `downloadUrl` | `string` | - | 下载 地址 |
| 3 | `md5` | `string` | - | 业务字段 `md5`（名称未提供可靠中文语义） |
| 4 | `size` | `uint64` | - | 大小 |
| 5 | `backupDownloadUrl` | `string` | - | 下载 地址 |

### 请求 `com.bapis.bilibili.app.view.v1.TFInfoReq`

中文说明：信息 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.view.v1.TFInfoReply`

中文说明：信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tipsId` | `int64` | - | 标识 |
| 2 | `tfToast` | `TFToast` | - | 业务字段 `tfToast`（名称未提供可靠中文语义） |
| 3 | `tfPanelCustomized` | `TFPanelCustomized` | - | 业务字段 `tfPanelCustomized`（名称未提供可靠中文语义） |
| 4 | `userFlagNew` | `bool` | - | 用户 |

### 请求 `com.bapis.bilibili.app.view.v1.ViewReq`

中文说明：查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 5 | `adExtra` | `string` | - | 广告 扩展数据 |
| 6 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 7 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 8 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 9 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 10 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 11 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 12 | `fromSpmid` | `string` | - | 来源 |
| 13 | `autoplay` | `int32` | - | 业务字段 `autoplay`（名称未提供可靠中文语义） |
| 14 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 15 | `pageVersion` | `string` | - | 分页 版本 |
| 16 | `bizExtra` | `string` | - | 扩展数据 |
| 17 | `deviceType` | `int64` | - | 设备 类型 |
| 18 | `relatesPage` | `int64` | - | 分页 |
| 19 | `sessionId` | `string` | - | 标识 |
| 20 | `inFeedPlay` | `int32` | - | 信息流 播放 |
| 21 | `playMode` | `string` | - | 播放 模式 |
| 22 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 23 | `refresh` | `int32` | - | 业务字段 `refresh`（名称未提供可靠中文语义） |
| 24 | `refreshNum` | `int32` | - | 业务字段 `refreshNum`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.ViewReply`

中文说明：查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `arc` | `com.bapis.bilibili.app.archive.v1.Arc` | - | 稿件 |
| 2 | `pages` | `ViewPage` | repeated | 业务字段 `pages`（名称未提供可靠中文语义） |
| 3 | `ownerExt` | `OnwerExt` | - | 所有者 扩展 |
| 4 | `reqUser` | `ReqUser` | - | 请求 用户 |
| 5 | `tag` | `Tag` | repeated | 标签 |
| 6 | `tIcon` | `map<string, TIcon>` | map | 业务字段 `tIcon`（名称未提供可靠中文语义） |
| 7 | `season` | `Season` | - | 剧集 |
| 8 | `elecRank` | `ElecRank` | - | 排行 |
| 9 | `history` | `History` | - | 历史记录 |
| 10 | `relates` | `Relate` | repeated | 业务字段 `relates`（名称未提供可靠中文语义） |
| 11 | `dislike` | `Dislike` | - | 业务字段 `dislike`（名称未提供可靠中文语义） |
| 12 | `playerIcon` | `PlayerIcon` | - | 播放器 |
| 13 | `vipActive` | `string` | - | 业务字段 `vipActive`（名称未提供可靠中文语义） |
| 14 | `bvid` | `string` | - | BV 号 |
| 15 | `honor` | `Honor` | - | 业务字段 `honor`（名称未提供可靠中文语义） |
| 16 | `relateTab` | `RelateTab` | repeated | 标签页 |
| 17 | `activityUrl` | `string` | - | 活动 地址 |
| 18 | `bgm` | `Bgm` | repeated | 业务字段 `bgm`（名称未提供可靠中文语义） |
| 19 | `staff` | `Staff` | repeated | 业务字段 `staff`（名称未提供可靠中文语义） |
| 20 | `argueMsg` | `string` | - | 业务字段 `argueMsg`（名称未提供可靠中文语义） |
| 21 | `shortLink` | `string` | - | 链接 |
| 22 | `playParam` | `int32` | - | 播放 参数 |
| 23 | `label` | `Label` | - | 业务字段 `label`（名称未提供可靠中文语义） |
| 24 | `ugcSeason` | `UgcSeason` | - | 剧集 |
| 25 | `config` | `Config` | - | 配置 |
| 26 | `shareSubtitle` | `string` | - | 分享 |
| 27 | `interaction` | `Interaction` | - | 业务字段 `interaction`（名称未提供可靠中文语义） |
| 28 | `ecode` | `ECode` | - | 业务字段 `ecode`（名称未提供可靠中文语义） |
| 29 | `customConfig` | `CustomConfig` | - | 配置 |
| 30 | `cms` | `CM` | repeated | 业务字段 `cms`（名称未提供可靠中文语义） |
| 31 | `cmConfig` | `CMConfig` | - | 配置 |
| 32 | `tab` | `Tab` | - | 标签页 |
| 33 | `rank` | `Rank` | - | 排行 |
| 34 | `tfPanelCustomized` | `TFPanelCustomized` | - | 业务字段 `tfPanelCustomized`（名称未提供可靠中文语义） |
| 35 | `upAct` | `UpAct` | - | 业务字段 `upAct`（名称未提供可靠中文语义） |
| 36 | `userGarb` | `UserGarb` | - | 用户 |
| 37 | `activitySeason` | `ActivitySeason` | - | 活动 剧集 |
| 38 | `badgeUrl` | `string` | - | 地址 |
| 39 | `liveOrderInfo` | `LiveOrderInfo` | - | 直播 排序 信息 |
| 40 | `descV2` | `DescV2` | repeated | 描述 |
| 41 | `cmIpad` | `CmIpad` | - | 业务字段 `cmIpad`（名称未提供可靠中文语义） |
| 42 | `sticker` | `ViewMaterial` | repeated | 业务字段 `sticker`（名称未提供可靠中文语义） |
| 43 | `upLikeImg` | `UpLikeImg` | - | 点赞 |
| 44 | `likeCustom` | `LikeCustom` | - | 点赞 |
| 45 | `descTag` | `Tag` | repeated | 描述 标签 |
| 46 | `specialCell` | `SpecialCell` | - | 业务字段 `specialCell`（名称未提供可靠中文语义） |
| 47 | `online` | `Online` | - | 业务字段 `online`（名称未提供可靠中文语义） |
| 48 | `cmUnderPlayer` | `google.protobuf.Any` | - | 播放器 |
| 49 | `videoSource` | `ViewMaterial` | repeated | 视频 来源 |
| 50 | `specialCellNew` | `SpecialCell` | repeated | 业务字段 `specialCellNew`（名称未提供可靠中文语义） |
| 51 | `premiere` | `PremiereResource` | - | 业务字段 `premiere`（名称未提供可靠中文语义） |
| 52 | `refreshSpecialCell` | `bool` | - | 业务字段 `refreshSpecialCell`（名称未提供可靠中文语义） |
| 53 | `materialLeft` | `MaterialLeft` | - | 业务字段 `materialLeft`（名称未提供可靠中文语义） |
| 54 | `notesCount` | `int64` | - | 数量 |
| 55 | `pullAction` | `PullClientAction` | - | 操作 |
| 56 | `arcExtra` | `ArcExtra` | - | 稿件 扩展数据 |
| 57 | `pagination` | `com.bapis.bilibili.pagination.PaginationReply` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 58 | `likeAnimation` | `LikeAnimation` | - | 点赞 |
| 59 | `replyPreface` | `ReplyStyle` | - | 响应 |
| 60 | `refreshPage` | `RefreshPage` | - | 分页 |
| 61 | `coinCustom` | `CoinCustom` | - | 投币 |
| 62 | `controlConfig` | `ControlConfig` | - | 配置 |
| 63 | `upViewMaterial` | `UpViewMaterial` | - | 查看 |
| 64 | `userRelation` | `UserRelation` | - | 用户 关系 |
| 65 | `coinStyle` | `CoinStyle` | - | 投币 |
| 66 | `rabbitYear` | `RabbitYear` | - | 业务字段 `rabbitYear`（名称未提供可靠中文语义） |
| 67 | `statV2` | `ArchiveStat` | - | 业务字段 `statV2`（名称未提供可靠中文语义） |
| 68 | `chargingPlus` | `ChargingPlus` | - | 业务字段 `chargingPlus`（名称未提供可靠中文语义） |
| 69 | `rejectPage` | `RejectPage` | - | 分页 |
| 70 | `playToast` | `PlayToast` | repeated | 播放 |
| 71 | `viewState` | `ViewState` | - | 查看 状态 |
| 72 | `argueBar` | `ArgueBar` | - | 业务字段 `argueBar`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ViewMaterialReq`

中文说明：查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `cid` | `int64` | - | 分 P ID |

### 响应 `com.bapis.bilibili.app.view.v1.ViewMaterialReply`

中文说明：查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `materialRes` | `MaterialRes` | repeated | 业务字段 `materialRes`（名称未提供可靠中文语义） |
| 2 | `materialLeft` | `MaterialLeft` | - | 业务字段 `materialLeft`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ViewProgressReq`

中文说明：查看 进度 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `engineVersion` | `string` | - | 版本 |
| 5 | `messageProtocol` | `string` | - | 消息 |
| 6 | `serviceKey` | `string` | - | 业务字段 `serviceKey`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.ViewProgressReply`

中文说明：查看 进度 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoGuide` | `VideoGuide` | - | 视频 |
| 2 | `chronos` | `Chronos` | - | 资源包 |
| 3 | `arcShot` | `VideoShot` | - | 稿件 |
| 4 | `points` | `VideoPoint` | repeated | 业务字段 `points`（名称未提供可靠中文语义） |
| 5 | `pointMaterial` | `PointMaterial` | - | 业务字段 `pointMaterial`（名称未提供可靠中文语义） |
| 6 | `pointPermanent` | `bool` | - | 业务字段 `pointPermanent`（名称未提供可靠中文语义） |
| 7 | `buzzwordPeriods` | `BuzzwordConfig` | repeated | 业务字段 `buzzwordPeriods`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ViewTagReq`

中文说明：查看 标签 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |
| 3 | `cid` | `int64` | - | 分 P ID |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.view.v1.ViewTagReply`

中文说明：查看 标签 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `specialCellNew` | `SpecialCell` | repeated | 业务字段 `specialCellNew`（名称未提供可靠中文语义） |
| 2 | `materialLeft` | `MaterialLeft` | - | 业务字段 `materialLeft`（名称未提供可靠中文语义） |
