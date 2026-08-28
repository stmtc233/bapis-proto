# `bilibili.app.dynamic.v2.Opus`

中文说明：应用 动态 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ListCreation` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.ListCreationReq` | `com.bapis.bilibili.app.dynamic.v2.ListCreationResp` | 列表 |
| `ListFav` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.ListFavReq` | `com.bapis.bilibili.app.dynamic.v2.ListFavResp` | 列表 收藏 |
| `OpusCollectionDetail` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.OpusCollectionDetailReq` | `com.bapis.bilibili.app.dynamic.v2.OpusCollectionDetailResp` | 详情 |
| `OpusDetail` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.OpusDetailReq` | `com.bapis.bilibili.app.dynamic.v2.OpusDetailResp` | 详情 |
| `OpusSpaceFlow` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.OpusSpaceFlowReq` | `com.bapis.bilibili.app.dynamic.v2.OpusSpaceFlowResp` | `OpusSpaceFlow` 调用 |
| `SignResources` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SignResourcesReq` | `com.bapis.bilibili.app.dynamic.v2.SignResourcesResp` | `SignResources` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.dynamic.v2.ListCreationReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `preference` | `SelectedClassificationAndSortType` | - | 业务字段 `preference`（名称未提供可靠中文语义） |
| 2 | `localTime` | `int32` | - | 时间 |
| 3 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.ListCreationResp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `classifications` | `CreationClassification` | repeated | 业务字段 `classifications`（名称未提供可靠中文语义） |
| 2 | `sortTypes` | `CreationSortType` | repeated | 排序 |
| 3 | `nextPage` | `com.bapis.bilibili.pagination.PaginationReply` | - | 下一页 分页 |
| 4 | `creationList` | `OpusCreationItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.ListFavReq`

中文说明：列表 收藏 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `localTime` | `int32` | - | 时间 |
| 2 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.ListFavResp`

中文说明：列表 收藏 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `itemList` | `OpusFavItem` | repeated | 条目 列表 |
| 2 | `nextPage` | `com.bapis.bilibili.pagination.PaginationReply` | - | 下一页 分页 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.OpusCollectionDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `collectionType` | `string` | - | 类型 |
| 2 | `collectionId` | `string` | - | 标识 |
| 3 | `selectedOpusId` | `string` | - | 标识 |
| 4 | `selectedOidType` | `string` | - | 对象 ID 类型 |
| 5 | `selectedOid` | `string` | - | 对象 ID |
| 6 | `localTime` | `int32` | - | 时间 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.OpusCollectionDetailResp`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `collectionType` | `string` | - | 类型 |
| 2 | `collectionId` | `string` | - | 标识 |
| 3 | `collectionCover` | `string` | - | 封面 |
| 4 | `collectionTitle` | `string` | - | 标题 |
| 5 | `subTitlePart1` | `string` | - | 订阅 标题 |
| 6 | `subTitlePart2` | `string` | - | 订阅 标题 |
| 7 | `collectionIntro` | `string` | - | 业务字段 `collectionIntro`（名称未提供可靠中文语义） |
| 8 | `itemList` | `OpusCollectionItem` | repeated | 条目 列表 |
| 9 | `totalCnt` | `int64` | - | 总数 |
| 10 | `authorInfo` | `BasicUserInfoV2` | - | 作者 信息 |
| 11 | `bottomButton` | `ButtonWithSubTitle` | - | 业务字段 `bottomButton`（名称未提供可靠中文语义） |
| 12 | `subscribeBtn` | `SubscribeButton` | - | 业务字段 `subscribeBtn`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.OpusDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `opusType` | `OpusType` | - | 类型 |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `dynType` | `int64` | - | 类型 |
| 4 | `shareId` | `string` | - | 分享 标识 |
| 9 | `shareMode` | `int32` | - | 分享 模式 |
| 10 | `localTime` | `int32` | - | 时间 |
| 11 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 12 | `config` | `Config` | - | 配置 |
| 13 | `adParam` | `AdParam` | - | 广告 参数 |
| 14 | `from` | `string` | - | 来源 |
| 15 | `pattern` | `string` | - | 业务字段 `pattern`（名称未提供可靠中文语义） |
| 16 | `switch` | `com.bapis.bilibili.app.dynamic.common.TranslateSwitch` | - | 业务字段 `switch`（名称未提供可靠中文语义） |
| 17 | `abGroups` | `map<string, string>` | map | 业务字段 `abGroups`（名称未提供可靠中文语义） |
| 18 | `fromSpmid` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.OpusDetailResp`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `opusItem` | `OpusItem` | - | 条目 |
| 2 | `state` | `com.bapis.bilibili.app.dynamic.common.TranslateState` | - | 状态 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.OpusSpaceFlowReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostMid` | `int64` | - | 用户 ID |
| 2 | `localTime` | `int32` | - | 时间 |
| 3 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 4 | `filterType` | `string` | - | 筛选 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.OpusSpaceFlowResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `itemList` | `OpusFlowItem` | repeated | 条目 列表 |
| 2 | `nextPage` | `com.bapis.bilibili.pagination.PaginationReply` | - | 下一页 分页 |
| 3 | `hostUpOpusCollection` | `SectionOpusCollection` | - | 业务字段 `hostUpOpusCollection`（名称未提供可靠中文语义） |
| 4 | `hostUpNoteNavBar` | `SectionNoteNavigationBar` | - | 业务字段 `hostUpNoteNavBar`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SignResourcesReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toBeSignedRes` | `ProtectedStaticResource` | repeated | 业务字段 `toBeSignedRes`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.SignResourcesResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `signedRes` | `SignedStaticResource` | repeated | 业务字段 `signedRes`（名称未提供可靠中文语义） |
