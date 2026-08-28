# `com.bapis.bilibili.app.listener.v1.Listener`

中文说明：应用 听播 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `BkarcDetails` | 一元调用 | `com.bapis.bilibili.app.listener.v1.BKArcDetailsReq` | `com.bapis.bilibili.app.listener.v1.BKArcDetailsResp` | `BkarcDetails` 调用 |
| `BKArcDetails` | 一元调用 | `com.bapis.bilibili.app.listener.v1.BKArcDetailsReq` | `com.bapis.bilibili.app.listener.v1.BKArcDetailsResp` | 稿件 |
| `CoinAdd` | 一元调用 | `com.bapis.bilibili.app.listener.v1.CoinAddReq` | `com.bapis.bilibili.app.listener.v1.CoinAddResp` | 投币 添加 |
| `Event` | 一元调用 | `com.bapis.bilibili.app.listener.v1.EventReq` | `com.bapis.bilibili.app.listener.v1.EventResp` | 事件 |
| `FavFolderCreate` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavFolderCreateReq` | `com.bapis.bilibili.app.listener.v1.FavFolderCreateResp` | 收藏 创建 |
| `FavFolderDelete` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavFolderDeleteReq` | `com.bapis.bilibili.app.listener.v1.FavFolderDeleteResp` | 收藏 删除 |
| `FavFolderDetail` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavFolderDetailReq` | `com.bapis.bilibili.app.listener.v1.FavFolderDetailResp` | 收藏 详情 |
| `FavFolderList` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavFolderListReq` | `com.bapis.bilibili.app.listener.v1.FavFolderListResp` | 收藏 列表 |
| `FavItemAdd` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavItemAddReq` | `com.bapis.bilibili.app.listener.v1.FavItemAddResp` | 收藏 条目 添加 |
| `FavItemBatch` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavItemBatchReq` | `com.bapis.bilibili.app.listener.v1.FavItemBatchResp` | 收藏 条目 |
| `FavItemDel` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavItemDelReq` | `com.bapis.bilibili.app.listener.v1.FavItemDelResp` | 收藏 条目 |
| `FavoredInAnyFolders` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavoredInAnyFoldersReq` | `com.bapis.bilibili.app.listener.v1.FavoredInAnyFoldersResp` | `FavoredInAnyFolders` 调用 |
| `Medialist` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MedialistReq` | `com.bapis.bilibili.app.listener.v1.MedialistResp` | `Medialist` 调用 |
| `PickCardDetail` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PickCardDetailReq` | `com.bapis.bilibili.app.listener.v1.PickCardDetailResp` | 卡片 详情 |
| `PickFeed` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PickFeedReq` | `com.bapis.bilibili.app.listener.v1.PickFeedResp` | 信息流 |
| `Ping` | 一元调用 | `google.protobuf.Empty` | `google.protobuf.Empty` | `Ping` 调用 |
| `PlayActionReport` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayActionReportReq` | `google.protobuf.Empty` | 播放 操作 |
| `PlayHistory` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayHistoryReq` | `com.bapis.bilibili.app.listener.v1.PlayHistoryResp` | 播放 历史记录 |
| `PlayHistoryAdd` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayHistoryAddReq` | `google.protobuf.Empty` | 播放 历史记录 添加 |
| `PlayHistoryDel` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayHistoryDelReq` | `google.protobuf.Empty` | 播放 历史记录 |
| `Playlist` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlaylistReq` | `com.bapis.bilibili.app.listener.v1.PlaylistResp` | `Playlist` 调用 |
| `PlaylistAdd` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlaylistAddReq` | `google.protobuf.Empty` | 添加 |
| `PlaylistDel` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlaylistDelReq` | `google.protobuf.Empty` | `PlaylistDel` 调用 |
| `PlayUrl` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayURLReq` | `com.bapis.bilibili.app.listener.v1.PlayURLResp` | 播放 地址 |
| `PlayURL` | 一元调用 | `com.bapis.bilibili.app.listener.v1.PlayURLReq` | `com.bapis.bilibili.app.listener.v1.PlayURLResp` | 播放 地址 |
| `RcmdPlaylist` | 一元调用 | `com.bapis.bilibili.app.listener.v1.RcmdPlaylistReq` | `com.bapis.bilibili.app.listener.v1.RcmdPlaylistResp` | `RcmdPlaylist` 调用 |
| `ThumbUp` | 一元调用 | `com.bapis.bilibili.app.listener.v1.ThumbUpReq` | `com.bapis.bilibili.app.listener.v1.ThumbUpResp` | `ThumbUp` 调用 |
| `TripleLike` | 一元调用 | `com.bapis.bilibili.app.listener.v1.TripleLikeReq` | `com.bapis.bilibili.app.listener.v1.TripleLikeResp` | 点赞 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.listener.v1.BKArcDetailsReq`

中文说明：稿件 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `PlayItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.listener.v1.BKArcDetailsResp`

中文说明：稿件 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DetailItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.listener.v1.CoinAddReq`

中文说明：投币 添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `num` | `int32` | - | 业务字段 `num`（名称未提供可靠中文语义） |
| 3 | `thumbUp` | `bool` | - | 业务字段 `thumbUp`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.listener.v1.CoinAddResp`

中文说明：投币 添加 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.EventReq`

中文说明：事件 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `eventType` | `EventType` | - | 事件 类型 |
| 2 | `item` | `PlayItem` | - | 条目 |

### 响应 `com.bapis.bilibili.app.listener.v1.EventResp`

中文说明：事件 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.listener.v1.FavFolderCreateReq`

中文说明：收藏 创建 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `name` | `string` | - | 名称 |
| 2 | `desc` | `string` | - | 描述 |
| 3 | `public_` | `int32` | - | 业务字段 `public_`（名称未提供可靠中文语义） |
| 4 | `folderType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavFolderCreateResp`

中文说明：收藏 创建 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `folderType` | `int32` | - | 类型 |
| 3 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavFolderDeleteReq`

中文说明：收藏 删除 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `folderType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavFolderDeleteResp`

中文说明：收藏 删除 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavFolderDetailReq`

中文说明：收藏 详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `folderType` | `int32` | - | 类型 |
| 3 | `favMid` | `int64` | - | 收藏 用户 ID |
| 4 | `lastItem` | `FavItem` | - | 条目 |
| 5 | `pageSize` | `uint32` | - | 分页 大小 |
| 6 | `needFolderInfo` | `bool` | - | 信息 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavFolderDetailResp`

中文说明：收藏 详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `total` | `uint32` | - | 总数 |
| 2 | `reachEnd` | `bool` | - | 结束 |
| 3 | `list` | `FavItemDetail` | repeated | 列表 |
| 4 | `folderInfo` | `FavFolder` | - | 信息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavFolderListReq`

中文说明：收藏 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `folderTypes` | `int32` | repeated | 业务字段 `folderTypes`（名称未提供可靠中文语义） |
| 2 | `item` | `PlayItem` | - | 条目 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavFolderListResp`

中文说明：收藏 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `FavFolder` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavItemAddReq`

中文说明：收藏 条目 添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `folderType` | `int32` | - | 类型 |
| 3 | `play` | `PlayItem` | oneof: `oneof_0` | 播放；与同一 oneof 中的字段互斥。 |
| 4 | `fav` | `FavItem` | oneof: `oneof_0` | 收藏；与同一 oneof 中的字段互斥。 |
| 5 | `isFastAddFav` | `bool` | - | 是否 添加 收藏 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavItemAddResp`

中文说明：收藏 条目 添加 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavItemBatchReq`

中文说明：收藏 条目 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `actions` | `FavFolderAction` | repeated | 业务字段 `actions`（名称未提供可靠中文语义） |
| 2 | `play` | `PlayItem` | oneof: `oneof_0` | 播放；与同一 oneof 中的字段互斥。 |
| 3 | `fav` | `FavItem` | oneof: `oneof_0` | 收藏；与同一 oneof 中的字段互斥。 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavItemBatchResp`

中文说明：收藏 条目 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavItemDelReq`

中文说明：收藏 条目 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fid` | `int64` | - | 业务字段 `fid`（名称未提供可靠中文语义） |
| 2 | `folderType` | `int32` | - | 类型 |
| 3 | `play` | `PlayItem` | oneof: `oneof_0` | 播放；与同一 oneof 中的字段互斥。 |
| 4 | `fav` | `FavItem` | oneof: `oneof_0` | 收藏；与同一 oneof 中的字段互斥。 |
| 5 | `isFastDelFav` | `bool` | - | 是否 收藏 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavItemDelResp`

中文说明：收藏 条目 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.FavoredInAnyFoldersReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `folderTypes` | `int32` | repeated | 业务字段 `folderTypes`（名称未提供可靠中文语义） |
| 2 | `item` | `PlayItem` | - | 条目 |

### 响应 `com.bapis.bilibili.app.listener.v1.FavoredInAnyFoldersResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `folders` | `FavFolderMeta` | repeated | 业务字段 `folders`（名称未提供可靠中文语义） |
| 2 | `item` | `PlayItem` | - | 条目 |

### 请求 `com.bapis.bilibili.app.listener.v1.MedialistReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `listType` | `int64` | - | 列表 类型 |
| 2 | `bizId` | `int64` | - | 标识 |
| 3 | `offset` | `string` | - | 偏移量 |

### 响应 `com.bapis.bilibili.app.listener.v1.MedialistResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `total` | `int64` | - | 总数 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `items` | `MedialistItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 5 | `upInfo` | `MedialistUpInfo` | - | 信息 |

### 请求 `com.bapis.bilibili.app.listener.v1.PickCardDetailReq`

中文说明：卡片 详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cardId` | `int64` | - | 卡片 标识 |
| 2 | `pickId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.listener.v1.PickCardDetailResp`

中文说明：卡片 详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cardId` | `int64` | - | 卡片 标识 |
| 2 | `pickId` | `int64` | - | 标识 |
| 3 | `modules` | `CardModule` | repeated | 业务字段 `modules`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.listener.v1.PickFeedReq`

中文说明：信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `int64` | - | 偏移量 |

### 响应 `com.bapis.bilibili.app.listener.v1.PickFeedResp`

中文说明：信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `int64` | - | 偏移量 |
| 2 | `cards` | `PickCard` | repeated | 业务字段 `cards`（名称未提供可靠中文语义） |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.app.listener.v1.PlayActionReportReq`

中文说明：播放 操作 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `fromSpmid` | `string` | - | 来源 |

### 请求 `com.bapis.bilibili.app.listener.v1.PlayHistoryReq`

中文说明：播放 历史记录 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pageOpt` | `PageOption` | - | 分页 |
| 2 | `localTodayZero` | `int64` | - | 业务字段 `localTodayZero`（名称未提供可靠中文语义） |
| 3 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.listener.v1.PlayHistoryResp`

中文说明：播放 历史记录 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `total` | `uint32` | - | 总数 |
| 2 | `reachEnd` | `bool` | - | 结束 |
| 3 | `list` | `DetailItem` | repeated | 列表 |
| 4 | `paginationReply` | `com.bapis.bilibili.pagination.PaginationReply` | - | 响应 |

### 请求 `com.bapis.bilibili.app.listener.v1.PlayHistoryAddReq`

中文说明：播放 历史记录 添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `progress` | `int64` | - | 进度 |
| 3 | `duration` | `int64` | - | 业务字段 `duration`（名称未提供可靠中文语义） |
| 4 | `playStyle` | `int32` | - | 播放 |

### 请求 `com.bapis.bilibili.app.listener.v1.PlayHistoryDelReq`

中文说明：播放 历史记录 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `PlayItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `truncate` | `bool` | - | 业务字段 `truncate`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.listener.v1.PlaylistReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `from` | `PlaylistSource` | - | 来源 |
| 2 | `id` | `int64` | - | 标识 |
| 3 | `anchor` | `PlayItem` | - | 业务字段 `anchor`（名称未提供可靠中文语义） |
| 4 | `pageOpt` | `PageOption` | - | 分页 |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 6 | `extraId` | `int64` | - | 扩展数据 标识 |
| 7 | `sortOpt` | `SortOption` | - | 排序 |
| 8 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.listener.v1.PlaylistResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `total` | `uint32` | - | 总数 |
| 2 | `reachStart` | `bool` | - | 开始 |
| 3 | `reachEnd` | `bool` | - | 结束 |
| 4 | `list` | `DetailItem` | repeated | 列表 |
| 5 | `lastPlay` | `PlayItem` | - | 播放 |
| 6 | `lastProgress` | `int64` | - | 进度 |
| 7 | `paginationReply` | `com.bapis.bilibili.pagination.PaginationReply` | - | 响应 |

### 请求 `com.bapis.bilibili.app.listener.v1.PlaylistAddReq`

中文说明：添加 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `PlayItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `after` | `PlayItem` | oneof: `oneof_0` | 业务字段 `after`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 3 | `head` | `bool` | oneof: `oneof_0` | 业务字段 `head`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 4 | `tail` | `bool` | oneof: `oneof_0` | 业务字段 `tail`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |

### 请求 `com.bapis.bilibili.app.listener.v1.PlaylistDelReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `PlayItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `truncate` | `bool` | - | 业务字段 `truncate`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.listener.v1.PlayURLReq`

中文说明：播放 地址 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.listener.v1.PlayURLResp`

中文说明：播放 地址 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `playable` | `int32` | - | 业务字段 `playable`（名称未提供可靠中文语义） |
| 3 | `message_` | `string` | - | 消息 |
| 4 | `playerInfo` | `map<int64, PlayInfo>` | map | 播放器 信息 |

### 请求 `com.bapis.bilibili.app.listener.v1.RcmdPlaylistReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `from` | `RcmdFrom` | - | 来源 |
| 2 | `id` | `int64` | - | 标识 |
| 3 | `needHistory` | `bool` | - | 历史记录 |
| 4 | `needTopCards` | `bool` | - | 业务字段 `needTopCards`（名称未提供可靠中文语义） |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 6 | `page` | `com.bapis.bilibili.pagination.Pagination` | - | 分页 |
| 7 | `annotations` | `map<string, string>` | map | 业务字段 `annotations`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.listener.v1.RcmdPlaylistResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DetailItem` | repeated | 列表 |
| 2 | `historyLen` | `int64` | - | 历史记录 |
| 3 | `topCards` | `TopCard` | repeated | 业务字段 `topCards`（名称未提供可靠中文语义） |
| 4 | `nextPage` | `com.bapis.bilibili.pagination.PaginationReply` | - | 下一页 分页 |

### 请求 `com.bapis.bilibili.app.listener.v1.ThumbUpReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |
| 2 | `action` | `ThumbType` | - | 操作 |

### 响应 `com.bapis.bilibili.app.listener.v1.ThumbUpResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.TripleLikeReq`

中文说明：点赞 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `PlayItem` | - | 条目 |

### 响应 `com.bapis.bilibili.app.listener.v1.TripleLikeResp`

中文说明：点赞 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |
| 2 | `thumbOk` | `bool` | - | 业务字段 `thumbOk`（名称未提供可靠中文语义） |
| 3 | `coinOk` | `bool` | - | 投币 |
| 4 | `favOk` | `bool` | - | 收藏 |
