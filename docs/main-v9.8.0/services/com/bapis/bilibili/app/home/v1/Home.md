# `com.bapis.bilibili.app.home.v1.Home`

中文说明：应用 首页 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `HomePopup` | 一元调用 | `com.bapis.bilibili.app.home.v1.HomePopupReq` | `com.bapis.bilibili.app.home.v1.HomePopupRes` | 首页 |
| `MineSelectionContent` | 一元调用 | `com.bapis.bilibili.app.home.v1.MineSelectionContentReq` | `com.bapis.bilibili.app.home.v1.MineSelectionContentRes` | 我的 内容 |
| `MineSelectionOptionItems` | 一元调用 | `com.bapis.bilibili.app.home.v1.MineSelectionOptionItemsReq` | `com.bapis.bilibili.app.home.v1.MineSelectionOptionItemsRes` | 我的 |
| `MineSelectionOptionUpdate` | 一元调用 | `com.bapis.bilibili.app.home.v1.MineSelectionOptionUpdateReq` | `com.bapis.bilibili.app.home.v1.MineSelectionOptionUpdateRes` | 我的 更新 |
| `Recent` | 一元调用 | `com.bapis.bilibili.app.home.v1.RecentReq` | `com.bapis.bilibili.app.home.v1.RecentRes` | `Recent` 调用 |
| `RemoveVideo` | 一元调用 | `com.bapis.bilibili.app.home.v1.RemoveVideoReq` | `com.bapis.bilibili.app.home.v1.RemoveVideoRes` | 视频 |
| `TopLeftTab` | 一元调用 | `com.bapis.bilibili.app.home.v1.TopLeftTabReq` | `com.bapis.bilibili.app.home.v1.TopLeftTabRes` | 标签页 |
| `TopLeftTabUpdate` | 一元调用 | `com.bapis.bilibili.app.home.v1.TopLeftTabUpdateReq` | `com.bapis.bilibili.app.home.v1.TopLeftTabUpdateRes` | 标签页 更新 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.home.v1.HomePopupReq`

中文说明：首页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `coldStart` | `bool` | - | 开始 |
| 2 | `rupcp` | `RemindUsePCClientPopupParams` | - | 业务字段 `rupcp`（名称未提供可靠中文语义） |
| 3 | `rgpp` | `RatingGuidePopupParams` | - | 业务字段 `rgpp`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.home.v1.HomePopupRes`

中文说明：首页。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `remindUsePcClient` | `PopupBasicInfo` | - | 客户端 |
| 2 | `ratingGuide` | `RatingGuidePopup` | - | 业务字段 `ratingGuide`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.home.v1.MineSelectionContentReq`

中文说明：我的 内容 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.home.v1.MineSelectionContentRes`

中文说明：我的 内容。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mineSelection` | `MineSelection` | - | 我的 |

### 请求 `com.bapis.bilibili.app.home.v1.MineSelectionOptionItemsReq`

中文说明：我的 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.home.v1.MineSelectionOptionItemsRes`

中文说明：我的。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sections` | `SimpleMineSection` | repeated | 业务字段 `sections`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.home.v1.MineSelectionOptionUpdateReq`

中文说明：我的 更新 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `itemIds` | `int64` | repeated | 条目 |

### 响应 `com.bapis.bilibili.app.home.v1.MineSelectionOptionUpdateRes`

中文说明：我的 更新。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.home.v1.RecentReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.home.v1.RecentRes`

中文说明：`RecentRes` 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mineSelection` | `MineSelection` | - | 我的 |
| 2 | `recentUsed` | `RecentUsed` | - | 业务字段 `recentUsed`（名称未提供可靠中文语义） |
| 3 | `halfWatchedVideos` | `HalfWatchedVideo` | - | 业务字段 `halfWatchedVideos`（名称未提供可靠中文语义） |
| 4 | `toView` | `ToView` | - | 查看 |
| 5 | `recentFav` | `RecentFav` | - | 收藏 |

### 请求 `com.bapis.bilibili.app.home.v1.RemoveVideoReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `moduleType` | `ModuleType` | - | 模块 类型 |
| 2 | `id` | `int64` | - | 标识 |
| 3 | `recReasonEnum` | `RecentRecReasonEnum` | - | 原因 |

### 响应 `com.bapis.bilibili.app.home.v1.RemoveVideoRes`

中文说明：视频。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.home.v1.TopLeftTabReq`

中文说明：标签页 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.home.v1.TopLeftTabRes`

中文说明：标签页。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabs` | `Tab` | repeated | 业务字段 `tabs`（名称未提供可靠中文语义） |
| 2 | `defaultTab` | `Tab` | - | 标签页 |
| 3 | `extra` | `TabExtraInfo` | - | 扩展数据 |

### 请求 `com.bapis.bilibili.app.home.v1.TopLeftTabUpdateReq`

中文说明：标签页 更新 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabGoto` | `TopLeftGoto` | - | 标签页 |
| 2 | `tabSelection` | `TabSelection` | - | 标签页 |
| 3 | `source` | `TabUpdateSource` | - | 来源 |

### 响应 `com.bapis.bilibili.app.home.v1.TopLeftTabUpdateRes`

中文说明：标签页 更新。

该消息没有声明字段。
