# `com.bapis.bilibili.tv.interface.v1.Search`

中文说明：接口 搜索 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `SearchV2` | 一元调用 | `com.bapis.bilibili.tv.SearchV2Req` | `com.bapis.bilibili.tv.SearchV2Reply` | 搜索 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.tv.SearchV2Req`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `searchType` | `string` | - | 搜索 类型 |
| 2 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 3 | `order` | `string` | - | 排序 |
| 4 | `category` | `int32` | - | 分类 |
| 5 | `page` | `int32` | - | 分页 |
| 6 | `pagesize` | `int32` | - | 业务字段 `pagesize`（名称未提供可靠中文语义） |
| 7 | `orderSort` | `int32` | - | 排序 排序 |
| 8 | `sugIndex` | `int32` | - | 业务字段 `sugIndex`（名称未提供可靠中文语义） |
| 9 | `keywordFrom` | `string` | - | 来源 |
| 10 | `term` | `string` | - | 业务字段 `term`（名称未提供可靠中文语义） |
| 11 | `itemType` | `int32` | - | 条目 类型 |
| 12 | `itemId` | `int64` | - | 条目 标识 |
| 13 | `ugcOrder` | `string` | - | 排序 |
| 14 | `device` | `Device` | - | 设备 |
| 15 | `searchTrace` | `int64` | - | 搜索 |

### 响应 `com.bapis.bilibili.tv.SearchV2Reply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `page` | `int32` | - | 分页 |
| 2 | `pageSize` | `int32` | - | 分页 大小 |
| 3 | `numResults` | `int32` | - | 业务字段 `numResults`（名称未提供可靠中文语义） |
| 4 | `numPages` | `int32` | - | 业务字段 `numPages`（名称未提供可靠中文语义） |
| 5 | `seid` | `string` | - | 业务字段 `seid`（名称未提供可靠中文语义） |
| 6 | `searchTrace` | `int64` | - | 搜索 |
| 7 | `resultV2` | `SeaResultV2` | repeated | 结果 |
| 8 | `pageInfo` | `Pageinfo` | - | 分页 信息 |
| 9 | `tabInfo` | `TabInfo` | repeated | 标签页 信息 |
| 10 | `recallSrc` | `string` | - | 业务字段 `recallSrc`（名称未提供可靠中文语义） |
| 11 | `experiment` | `string` | - | 业务字段 `experiment`（名称未提供可靠中文语义） |
| 12 | `sortedModules` | `int32` | repeated | 业务字段 `sortedModules`（名称未提供可靠中文语义） |
| 13 | `internalTrackId` | `string` | - | 标识 |
| 14 | `searchResType` | `int32` | - | 搜索 类型 |
| 15 | `tokenSearchRes` | `TokenSearchRes` | - | 凭据 搜索 |
| 16 | `pgcIndexEntry` | `PgcIndexEntry` | - | 业务字段 `pgcIndexEntry`（名称未提供可靠中文语义） |
| 17 | `hotGuess` | `HotGuess` | - | 业务字段 `hotGuess`（名称未提供可靠中文语义） |
| 18 | `searchOgvCardsShowMore` | `int32` | - | 搜索 |
