# `bilibili.polymer.app.search.v1.Search`

中文说明：应用 搜索 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `SearchAll` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchAllRequest` | `com.bapis.bilibili.polymer.app.search.v1.SearchAllResponse` | 搜索 全部 |
| `SearchByType` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchByTypeRequest` | `com.bapis.bilibili.polymer.app.search.v1.SearchByTypeResponse` | 搜索 类型 |
| `SearchComic` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchComicRequest` | `com.bapis.bilibili.polymer.app.search.v1.SearchComicResponse` | 搜索 |
| `SearchOGV` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchOGVReq` | `com.bapis.bilibili.polymer.app.search.v1.SearchOGVReply` | 搜索 |
| `SearchReserve` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchReserveRequest` | `com.bapis.bilibili.polymer.app.search.v1.SearchReserveResponse` | 搜索 |
| `SearchReserveCancel` | 一元调用 | `com.bapis.bilibili.polymer.app.search.v1.SearchReserveRequest` | `com.bapis.bilibili.polymer.app.search.v1.SearchReserveResponse` | 搜索 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.polymer.app.search.v1.SearchAllRequest`

中文说明：搜索 全部 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `order` | `Sort` | - | 排序 |
| 3 | `tidList` | `string` | - | 列表 |
| 4 | `durationList` | `string` | - | 列表 |
| 5 | `extraWord` | `string` | - | 扩展数据 |
| 6 | `fromSource` | `string` | - | 来源 来源 |
| 7 | `isOrgQuery` | `int32` | - | 是否 |
| 8 | `localTime` | `int32` | - | 时间 |
| 9 | `adExtra` | `string` | - | 广告 扩展数据 |
| 10 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 11 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 12 | `fromExtra` | `map<string, string>` | map | 来源 扩展数据 |
| 13 | `forcedDisplayChatCard` | `int32` | - | 展示 卡片 |
| 14 | `isRefresh` | `int32` | - | 是否 |
| 15 | `refreshTimes` | `int32` | - | 业务字段 `refreshTimes`（名称未提供可靠中文语义） |
| 16 | `since` | `string` | - | 业务字段 `since`（名称未提供可靠中文语义） |
| 17 | `pubTimeBeginS` | `int64` | - | 发布 时间 |
| 18 | `pubTimeEndS` | `int64` | - | 发布 时间 结束 |
| 19 | `allDoubleColumn` | `int64` | - | 全部 |
| 20 | `userAct` | `string` | - | 用户 |
| 21 | `needOgvExtraWord` | `bool` | - | 扩展数据 |
| 22 | `filterMap` | `map<string, string>` | map | 筛选 |
| 23 | `foldable` | `bool` | - | 业务字段 `foldable`（名称未提供可靠中文语义） |
| 24 | `isWideScreen` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.polymer.app.search.v1.SearchAllResponse`

中文说明：搜索 全部 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 3 | `nav` | `Nav` | repeated | 业务字段 `nav`（名称未提供可靠中文语义） |
| 4 | `item` | `Item` | repeated | 条目 |
| 5 | `easterEgg` | `EasterEgg` | - | 业务字段 `easterEgg`（名称未提供可靠中文语义） |
| 6 | `expStr` | `string` | - | 业务字段 `expStr`（名称未提供可靠中文语义） |
| 7 | `extraWordList` | `string` | repeated | 扩展数据 列表 |
| 8 | `orgExtraWord` | `string` | - | 扩展数据 |
| 9 | `selectBarType` | `int64` | - | 类型 |
| 10 | `newSearchExpNum` | `int64` | - | 搜索 |
| 11 | `pagination` | `com.bapis.bilibili.pagination.PaginationReply` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 12 | `appDisplayOption` | `DisplayOption` | - | 应用 展示 |
| 13 | `annotation` | `map<string, string>` | map | 业务字段 `annotation`（名称未提供可靠中文语义） |
| 14 | `page` | `int64` | - | 分页 |
| 15 | `realExposureRatio` | `double` | - | 业务字段 `realExposureRatio`（名称未提供可靠中文语义） |
| 19 | `allDoubleColumn` | `int64` | - | 全部 |
| 20 | `isNewUser` | `int32` | - | 是否 用户 |
| 21 | `searchFilter` | `SearchFilter` | - | 搜索 筛选 |
| 22 | `hasWideAutoFill` | `bool` | - | 是否具有 |
| 23 | `cardGroupRules` | `map<int32, CardGroupRule>` | map | 卡片 |

### 请求 `com.bapis.bilibili.polymer.app.search.v1.SearchByTypeRequest`

中文说明：搜索 类型 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `type` | `int32` | - | 类型 |
| 2 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 3 | `categorySort` | `CategorySort` | - | 分类 排序 |
| 4 | `categoryId` | `int64` | - | 分类 标识 |
| 5 | `userType` | `UserType` | - | 用户 类型 |
| 6 | `userSort` | `UserSort` | - | 用户 排序 |
| 7 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 8 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 9 | `fromSeid` | `string` | - | 来源 |
| 10 | `fromSource` | `string` | - | 来源 来源 |
| 11 | `userAct` | `string` | - | 用户 |
| 22 | `filterMap` | `map<string, string>` | map | 筛选 |

### 响应 `com.bapis.bilibili.polymer.app.search.v1.SearchByTypeResponse`

中文说明：搜索 类型 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 2 | `pages` | `int32` | - | 业务字段 `pages`（名称未提供可靠中文语义） |
| 3 | `expStr` | `string` | - | 业务字段 `expStr`（名称未提供可靠中文语义） |
| 4 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 5 | `resultIsRecommend` | `int32` | - | 结果 是否 |
| 6 | `items` | `Item` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 7 | `pagination` | `com.bapis.bilibili.pagination.PaginationReply` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 8 | `annotation` | `map<string, string>` | map | 业务字段 `annotation`（名称未提供可靠中文语义） |
| 9 | `realExposureRatio` | `double` | - | 业务字段 `realExposureRatio`（名称未提供可靠中文语义） |
| 10 | `page` | `int64` | - | 分页 |
| 11 | `searchFilter` | `SearchFilter` | - | 搜索 筛选 |

### 请求 `com.bapis.bilibili.polymer.app.search.v1.SearchComicRequest`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `idList` | `string` | - | 标识 列表 |

### 响应 `com.bapis.bilibili.polymer.app.search.v1.SearchComicResponse`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `SearchComicInfo` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.polymer.app.search.v1.SearchOGVReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `order` | `Sort` | - | 排序 |
| 2 | `firstExtraWord` | `string` | - | 扩展数据 |
| 3 | `secondExtraWord` | `string` | - | 扩展数据 |
| 4 | `fromSource` | `string` | - | 来源 来源 |
| 5 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 6 | `pagination` | `com.bapis.bilibili.pagination.Pagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 8 | `userAct` | `string` | - | 用户 |
| 9 | `needOgvExtraWord` | `bool` | - | 扩展数据 |
| 10 | `isWideScreen` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.polymer.app.search.v1.SearchOGVReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `extraWordList` | `ExtraWord` | repeated | 扩展数据 列表 |
| 2 | `needOrder` | `int32` | - | 排序 |
| 3 | `items` | `Item` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 4 | `relationItems` | `DetailsRelationItem` | repeated | 关系 |
| 5 | `pagination` | `com.bapis.bilibili.pagination.PaginationReply` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 6 | `page` | `int64` | - | 分页 |
| 7 | `annotation` | `map<string, string>` | map | 业务字段 `annotation`（名称未提供可靠中文语义） |
| 8 | `query` | `string` | - | 业务字段 `query`（名称未提供可靠中文语义） |
| 9 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 10 | `hasWideAutoFill` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.polymer.app.search.v1.SearchReserveRequest`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sid` | `int64` | - | 会话 ID |
| 2 | `oid` | `string` | - | 对象 ID |

### 响应 `com.bapis.bilibili.polymer.app.search.v1.SearchReserveResponse`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reserveInfo` | `ReserveInfo` | - | 信息 |
