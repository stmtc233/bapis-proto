# `com.bapis.bilibili.tv.interface.v1.CardView`

中文说明：接口 卡片 查看 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CardViewV2` | 一元调用 | `com.bapis.bilibili.tv.CardViewV2Req` | `com.bapis.bilibili.tv.CardViewV2Reply` | 卡片 查看 |
| `MockMetaData` | 一元调用 | `com.bapis.bilibili.tv.MockMetaDataReq` | `com.bapis.bilibili.tv.MockMetaDataReply` | 元数据 数据 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.tv.CardViewV2Req`

中文说明：卡片 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `viewType` | `int64` | - | 查看 类型 |
| 2 | `cardType` | `int64` | - | 卡片 类型 |
| 3 | `objectId` | `int64` | - | 标识 |
| 4 | `fromSpmid` | `string` | - | 来源 |
| 5 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 6 | `autoPlay` | `string` | - | 播放 |
| 7 | `searchTrace` | `int64` | - | 搜索 |
| 8 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 9 | `term` | `string` | - | 业务字段 `term`（名称未提供可靠中文语义） |
| 10 | `keywordFrom` | `string` | - | 来源 |
| 11 | `extra` | `string` | - | 扩展数据 |
| 12 | `accessKey` | `string` | - | 业务字段 `accessKey`（名称未提供可靠中文语义） |
| 13 | `sugFrom` | `string` | - | 来源 |
| 14 | `isAd` | `bool` | - | 是否 广告 |
| 15 | `videoId` | `int64` | - | 视频 标识 |
| 16 | `progress` | `int64` | - | 进度 |
| 17 | `serialAid` | `int64` | - | 稿件 ID |
| 18 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 19 | `eightk` | `int32` | - | 业务字段 `eightk`（名称未提供可靠中文语义） |
| 20 | `upMid` | `int64` | - | 用户 ID |
| 21 | `playStyle` | `int64` | - | 播放 |
| 22 | `device` | `Device` | - | 设备 |
| 23 | `comeFromOutside` | `int32` | - | 来源 |
| 24 | `stay` | `int32` | - | 业务字段 `stay`（名称未提供可靠中文语义） |
| 25 | `childLock` | `int32` | - | 业务字段 `childLock`（名称未提供可靠中文语义） |
| 26 | `projNew` | `bool` | - | 业务字段 `projNew`（名称未提供可靠中文语义） |
| 27 | `mobiAccessKey` | `string` | - | 业务字段 `mobiAccessKey`（名称未提供可靠中文语义） |
| 28 | `projCode` | `string` | - | 状态码 |
| 29 | `deviceId` | `string` | - | 设备 标识 |
| 30 | `deviceName` | `string` | - | 设备 名称 |
| 31 | `separate` | `int32` | - | 业务字段 `separate`（名称未提供可靠中文语义） |
| 32 | `goodsCid` | `string` | - | 分 P ID |
| 33 | `needRecommend` | `int32` | - | 业务字段 `needRecommend`（名称未提供可靠中文语义） |
| 34 | `entryScene` | `int32` | - | 业务字段 `entryScene`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.tv.CardViewV2Reply`

中文说明：卡片 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cardType` | `int64` | - | 卡片 类型 |
| 2 | `cardFrom` | `int64` | - | 卡片 来源 |
| 3 | `attribute` | `int64` | - | 业务字段 `attribute`（名称未提供可靠中文语义） |
| 4 | `cardId` | `int64` | - | 卡片 标识 |
| 5 | `title` | `string` | - | 标题 |
| 6 | `hoverTitle` | `string` | - | 标题 |
| 7 | `subtitle` | `string` | - | 业务字段 `subtitle`（名称未提供可靠中文语义） |
| 8 | `subtitle2` | `string` | - | 业务字段 `subtitle2`（名称未提供可靠中文语义） |
| 9 | `hoverSubtitle` | `string` | - | 业务字段 `hoverSubtitle`（名称未提供可靠中文语义） |
| 10 | `horizontalUrl` | `string` | - | 地址 |
| 11 | `verticalUrl` | `string` | - | 地址 |
| 12 | `desc` | `string` | - | 描述 |
| 13 | `watchProgress` | `WatchProgressV2` | - | 进度 |
| 14 | `catalog` | `Catalog` | - | 业务字段 `catalog`（名称未提供可靠中文语义） |
| 15 | `jumps` | `Jumps` | repeated | 业务字段 `jumps`（名称未提供可靠中文语义） |
| 16 | `cornermark` | `Labels` | - | 业务字段 `cornermark`（名称未提供可靠中文语义） |
| 17 | `labels` | `Labels` | repeated | 业务字段 `labels`（名称未提供可靠中文语义） |
| 18 | `uploader` | `Uploader` | - | 业务字段 `uploader`（名称未提供可靠中文语义） |
| 19 | `payment` | `PaymentV2` | - | 业务字段 `payment`（名称未提供可靠中文语义） |
| 20 | `autoPlay` | `AutoPlay` | - | 播放 |
| 21 | `cheeseExt` | `CheeseExt` | - | 扩展 |
| 22 | `pgcExt` | `PgcExt` | - | 扩展 |
| 23 | `ugcExt` | `UgcExt` | - | 扩展 |
| 24 | `liveExt` | `LiveExt` | - | 直播 扩展 |
| 25 | `adExt` | `AdExtra` | - | 广告 扩展 |
| 26 | `esportExt` | `EsportExt` | - | 扩展 |
| 27 | `serialExt` | `SerialExt` | - | 扩展 |
| 28 | `multiplePageCount` | `int64` | - | 分页 数量 |
| 29 | `schema` | `string` | - | 业务字段 `schema`（名称未提供可靠中文语义） |
| 30 | `recommendSceneCard` | `SceneCard` | - | 卡片 |
| 31 | `userProfileInternalTrackId` | `int64` | - | 用户 标识 |
| 32 | `toast` | `ViewToast` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 33 | `searchExt` | `SearchExt` | - | 搜索 扩展 |
| 34 | `shareExt` | `ShareExt` | - | 分享 扩展 |
| 35 | `ogvCollection` | `OgvCollection` | - | 业务字段 `ogvCollection`（名称未提供可靠中文语义） |
| 36 | `playScenePage` | `PlayScenePageViewV2` | - | 播放 分页 |
| 37 | `playSceneCard` | `SceneCard` | - | 播放 卡片 |
| 38 | `highLight` | `HLRange` | repeated | 业务字段 `highLight`（名称未提供可靠中文语义） |
| 39 | `infocExt` | `InfocExt` | - | 扩展 |
| 40 | `playlistTab` | `PlaylistTab` | repeated | 标签页 |
| 41 | `playList` | `CardViewPlayListResp` | repeated | 播放 列表 |
| 42 | `endpageButton` | `Button` | repeated | 业务字段 `endpageButton`（名称未提供可靠中文语义） |
| 43 | `shopExt` | `ShopExt` | - | 扩展 |
| 44 | `projExt` | `ProjExt` | - | 扩展 |
| 45 | `recommendSceneCardStr` | `string` | - | 卡片 |
| 46 | `playScenePageStr` | `string` | - | 播放 分页 |
| 47 | `playSceneCardStr` | `string` | - | 播放 卡片 |
| 48 | `jumpLine` | `JumpLine` | - | 跳转 |
| 49 | `projExtra` | `MediaExtra` | - | 扩展数据 |
| 50 | `projToken` | `AuthInfo` | - | 凭据 |
| 51 | `chargingExt` | `ChargingExt` | - | 扩展 |
| 52 | `channelExt` | `ChannelExt` | - | 频道 扩展 |
| 53 | `operationExt` | `OperationExt` | - | 扩展 |
| 54 | `upDownMode` | `int64` | - | 模式 |
| 55 | `ogv186PlayControl` | `Ogv186PlayControl` | - | 播放 |
| 56 | `bottomButtons` | `OgvBottomButton` | repeated | 业务字段 `bottomButtons`（名称未提供可靠中文语义） |
| 57 | `extendedDesc` | `ExtendedDesc` | - | 描述 |

### 请求 `com.bapis.bilibili.tv.MockMetaDataReq`

中文说明：元数据 数据 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `buvid` | `string` | - | 设备标识 |

### 响应 `com.bapis.bilibili.tv.MockMetaDataReply`

中文说明：元数据 数据 响应。

该消息没有声明字段。
