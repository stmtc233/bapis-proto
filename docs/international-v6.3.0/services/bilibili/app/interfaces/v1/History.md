# `bilibili.app.interfaces.v1.History`

中文说明：应用 历史记录 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Clear` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.ClearReq` | `com.bapis.bilibili.app.interfaces.v1.NoReply` | `Clear` 调用 |
| `Cursor` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.CursorReq` | `com.bapis.bilibili.app.interfaces.v1.CursorReply` | 游标 |
| `CursorV2` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.CursorV2Req` | `com.bapis.bilibili.app.interfaces.v1.CursorV2Reply` | 游标 |
| `Delete` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.DeleteReq` | `com.bapis.bilibili.app.interfaces.v1.NoReply` | 删除 |
| `HistoryTab` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.HistoryTabReq` | `com.bapis.bilibili.app.interfaces.v1.HistoryTabReply` | 历史记录 标签页 |
| `HistoryTabV2` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.HistoryTabReq` | `com.bapis.bilibili.app.interfaces.v1.HistoryTabReply` | 历史记录 标签页 |
| `LatestHistory` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.LatestHistoryReq` | `com.bapis.bilibili.app.interfaces.v1.LatestHistoryReply` | 历史记录 |
| `Search` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SearchReq` | `com.bapis.bilibili.app.interfaces.v1.SearchReply` | 搜索 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.ClearReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.NoReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.CursorReq`

中文说明：游标 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `Cursor` | - | 游标 |
| 2 | `business` | `string` | - | 业务 |
| 3 | `playerPreload` | `PlayerPreloadParams` | - | 播放器 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.CursorReply`

中文说明：游标 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CursorItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `tab` | `CursorTab` | repeated | 标签页 |
| 3 | `cursor` | `Cursor` | - | 游标 |
| 4 | `hasMore` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.CursorV2Req`

中文说明：游标 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `Cursor` | - | 游标 |
| 2 | `business` | `string` | - | 业务 |
| 3 | `playerPreload` | `PlayerPreloadParams` | - | 播放器 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `isLocal` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.CursorV2Reply`

中文说明：游标 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CursorItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `cursor` | `Cursor` | - | 游标 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `emptyLink` | `string` | - | 链接 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.DeleteReq`

中文说明：删除 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hisInfo` | `HisInfo` | repeated | 信息 |
| 2 | `tab` | `string` | - | 标签页 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.HistoryTabReq`

中文说明：历史记录 标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `source` | `HistorySource` | - | 来源 |
| 3 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.interfaces.v1.HistoryTabReply`

中文说明：历史记录 标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tab` | `CursorTab` | repeated | 标签页 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.LatestHistoryReq`

中文说明：历史记录 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `playerPreload` | `PlayerPreloadParams` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.LatestHistoryReply`

中文说明：历史记录 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CursorItem` | - | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `scene` | `string` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `rtime` | `int64` | - | 业务字段 `rtime`（名称未提供可靠中文语义） |
| 4 | `flag` | `string` | - | 业务字段 `flag`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.interfaces.v1.SearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `pn` | `int64` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 3 | `business` | `string` | - | 业务 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SearchReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CursorItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `page` | `Page` | - | 分页 |
