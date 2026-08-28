# `com.bapis.bilibili.app.view.v1.View`

中文说明：应用 查看 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ChronosPkg` | 一元调用 | `com.bapis.bilibili.app.view.v1.ChronosPkgReq` | `com.bapis.bilibili.app.view.v1.Chronos` | 资源包 |
| `ClickActivitySeason` | 一元调用 | `com.bapis.bilibili.app.view.v1.ClickActivitySeasonReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 点击 活动 剧集 |
| `ClickPlayerCard` | 一元调用 | `com.bapis.bilibili.app.view.v1.ClickPlayerCardReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 点击 播放器 卡片 |
| `ExposePlayerCard` | 一元调用 | `com.bapis.bilibili.app.view.v1.ExposePlayerCardReq` | `com.bapis.bilibili.app.view.v1.NoReply` | 播放器 卡片 |
| `Season` | 一元调用 | `com.bapis.bilibili.app.view.v1.SeasonReq` | `com.bapis.bilibili.app.view.v1.SeasonReply` | 剧集 |
| `ShortFormVideoDownload` | 一元调用 | `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReq` | `com.bapis.bilibili.app.view.v1.ShortFormVideoDownloadReply` | 视频 下载 |
| `View` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewReq` | `com.bapis.bilibili.app.view.v1.ViewReply` | 查看 |
| `ViewProgress` | 一元调用 | `com.bapis.bilibili.app.view.v1.ViewProgressReq` | `com.bapis.bilibili.app.view.v1.ViewProgressReply` | 查看 进度 |

## 请求与响应字段

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

### 响应 `com.bapis.bilibili.app.view.v1.NoReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.view.v1.ClickPlayerCardReq`

中文说明：点击 播放器 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `cid` | `int64` | - | 分 P ID |
| 4 | `action` | `int64` | - | 操作 |
| 5 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.view.v1.ExposePlayerCardReq`

中文说明：播放器 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cardType` | `PlayerCardType` | - | 卡片 类型 |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `cid` | `int64` | - | 分 P ID |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

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
| 15 | `pageVersion` | `string` | - | 分页 版本 |
| 16 | `bizExtra` | `string` | - | 扩展数据 |
| 17 | `deviceType` | `int64` | - | 设备 类型 |

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
