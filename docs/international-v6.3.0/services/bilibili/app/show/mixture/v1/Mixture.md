# `bilibili.app.show.mixture.v1.Mixture`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ChannelRedirect` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.ChannelRedirectReq` | `com.bapis.bilibili.app.show.mixture.v1.ChannelRedirectReply` | 频道 |
| `Clarity` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.ClarityReq` | `com.bapis.bilibili.app.show.mixture.v1.ClarityReply` | `Clarity` 调用 |
| `RegionIndex` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.RegionIndexReq` | `com.bapis.bilibili.app.show.mixture.v1.RegionIndexReply` | 分区 |
| `RegionList` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.RegionListReq` | `com.bapis.bilibili.app.show.mixture.v1.RegionListReply` | 分区 列表 |
| `RegionShortcut` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.RegionShortcutReq` | `com.bapis.bilibili.app.show.mixture.v1.RegionShortcutReply` | 分区 |
| `Widget` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.WidgetReq` | `com.bapis.bilibili.app.show.mixture.v1.WidgetReply` | `Widget` 调用 |
| `WidgetGuide` | 一元调用 | `com.bapis.bilibili.app.show.mixture.v1.WidgetGuideReq` | `com.bapis.bilibili.app.show.mixture.v1.WidgetGuideReply` | `WidgetGuide` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.show.mixture.v1.ChannelRedirectReq`

中文说明：频道 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.show.mixture.v1.ChannelRedirectReply`

中文说明：频道 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int64` | - | 状态码 |
| 2 | `url` | `string` | - | 地址 |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.ClarityReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.show.mixture.v1.ClarityReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `isPlayStory` | `bool` | - | 是否 播放 |
| 2 | `isSetPlayQn` | `bool` | - | 是否 播放 |
| 3 | `lastPlayQnValue` | `int64` | - | 播放 值 |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.RegionIndexReq`

中文说明：分区 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 2 | `displayId` | `int32` | - | 展示 标识 |
| 3 | `needBanner` | `bool` | - | 业务字段 `needBanner`（名称未提供可靠中文语义） |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `uuid` | `string` | - | 业务字段 `uuid`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.show.mixture.v1.RegionIndexReply`

中文说明：分区 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `banner` | `RegionBanner` | repeated | 业务字段 `banner`（名称未提供可靠中文语义） |
| 2 | `hasNext` | `bool` | - | 是否具有 下一页 |
| 3 | `cards` | `RegionCard` | repeated | 业务字段 `cards`（名称未提供可靠中文语义） |
| 4 | `title` | `string` | - | 标题 |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.RegionListReq`

中文说明：分区 列表 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.show.mixture.v1.RegionListReply`

中文说明：分区 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shortcut` | `RegionContent` | - | 业务字段 `shortcut`（名称未提供可靠中文语义） |
| 2 | `contents` | `RegionContent` | repeated | 业务字段 `contents`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.RegionShortcutReq`

中文说明：分区 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uniqueId` | `int64` | repeated | 标识 |

### 响应 `com.bapis.bilibili.app.show.mixture.v1.RegionShortcutReply`

中文说明：分区 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `limit` | `RegionLimit` | - | 限制 |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.WidgetReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fromSpmid` | `string` | - | 来源 |
| 2 | `pageNo` | `int32` | - | 分页 |

### 响应 `com.bapis.bilibili.app.show.mixture.v1.WidgetReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `WidgetItem` | repeated | 条目 |

### 请求 `com.bapis.bilibili.app.show.mixture.v1.WidgetGuideReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fromSpmid` | `string` | - | 来源 |
| 2 | `guideType` | `GuideType` | - | 类型 |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `guideStyleVersion` | `GuideStyleVersion` | - | 版本 |
| 5 | `skipUpdate` | `bool` | - | 更新 |
| 6 | `aid` | `int64` | - | 稿件 ID |

### 响应 `com.bapis.bilibili.app.show.mixture.v1.WidgetGuideReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `guideItem` | `GuideItem` | - | 条目 |
| 3 | `tip` | `GuideTip` | - | 业务字段 `tip`（名称未提供可靠中文语义） |
