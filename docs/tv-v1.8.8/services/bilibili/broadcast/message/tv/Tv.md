# `bilibili.broadcast.message.tv.Tv`

中文说明：广播 消息 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Account` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.AccountNotify` | 账户 |
| `CommonPush` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.CommonPushNotify` | `CommonPush` 调用 |
| `Esports` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.EsportsNotify` | `Esports` 调用 |
| `FeedClientSmart` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.FeedClientSmartNotify` | 信息流 客户端 |
| `LiveBottom` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.LiveBottomConfNotify` | 直播 |
| `LiveCommonMsg` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.LiveCommonNotify` | 直播 |
| `LiveSkip` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.LiveSkipNotify` | 直播 |
| `LiveStatus` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.LiveStatusNotify` | 直播 状态 |
| `MainRedDot` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.MainRedDotReply` | `MainRedDot` 调用 |
| `NotifyPop` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.NotifyPopReply` | `NotifyPop` 调用 |
| `OgvPayOrder` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.OgvPayOrderReply` | 排序 |
| `Proj` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.ProjReply` | `Proj` 调用 |
| `ProjCore` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.ProjReply` | `ProjCore` 调用 |
| `ProjLiveEvent` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.ProjLiveEventNotify` | 直播 事件 |
| `Publicity` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.PublicityNotify` | `Publicity` 调用 |
| `ViewerNumMsg` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.LiveViewerMsgNotify` | `ViewerNumMsg` 调用 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.message.tv.AccountNotify`

中文说明：账户。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `biz` | `string` | - | 业务字段 `biz`（名称未提供可靠中文语义） |
| 2 | `data` | `string` | - | 数据 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.CommonPushNotify`

中文说明：`CommonPushNotify` 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cmd` | `string` | - | 业务字段 `cmd`（名称未提供可靠中文语义） |
| 2 | `data` | `string` | - | 数据 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.EsportsNotify`

中文说明：`EsportsNotify` 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cid` | `int64` | - | 分 P ID |

### 响应 `com.bapis.bilibili.broadcast.message.tv.FeedClientSmartNotify`

中文说明：信息流 客户端。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `cards` | `string` | - | 业务字段 `cards`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.broadcast.message.tv.LiveBottomConfNotify`

中文说明：直播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `roomId` | `int64` | - | 直播间 标识 |
| 2 | `bottomMsg` | `string` | - | 业务字段 `bottomMsg`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.broadcast.message.tv.LiveCommonNotify`

中文说明：直播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cmd` | `string` | - | 业务字段 `cmd`（名称未提供可靠中文语义） |
| 2 | `data` | `string` | - | 数据 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.LiveSkipNotify`

中文说明：直播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `liveId` | `int64` | - | 直播 标识 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.LiveStatusNotify`

中文说明：直播 状态。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `status` | `int64` | - | 状态 |
| 2 | `msg` | `string` | - | 业务字段 `msg`（名称未提供可靠中文语义） |
| 3 | `cid` | `int64` | - | 分 P ID |

### 响应 `com.bapis.bilibili.broadcast.message.tv.MainRedDotReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `reddot` | `int64` | - | 业务字段 `reddot`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.broadcast.message.tv.NotifyPopReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `notify` | `NotifyPop` | - | 业务字段 `notify`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.broadcast.message.tv.OgvPayOrderReply`

中文说明：排序 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `seasonId` | `int64` | - | 剧集 标识 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.ProjReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cmdType` | `int64` | - | 类型 |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `aid` | `int64` | - | 稿件 ID |
| 4 | `cid` | `int64` | - | 分 P ID |
| 5 | `videoType` | `int64` | - | 视频 类型 |
| 6 | `epId` | `int64` | - | 标识 |
| 7 | `seasonId` | `int64` | - | 剧集 标识 |
| 8 | `seekTs` | `int64` | - | 业务字段 `seekTs`（名称未提供可靠中文语义） |
| 9 | `extra` | `string` | - | 扩展数据 |
| 10 | `roomId` | `int64` | - | 直播间 标识 |
| 11 | `deviceInfo` | `string` | - | 设备 信息 |
| 12 | `screencastEvent` | `string` | - | 事件 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.ProjLiveEventNotify`

中文说明：直播 事件。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `roomId` | `int64` | - | 直播间 标识 |
| 2 | `eventType` | `int64` | - | 事件 类型 |
| 3 | `eventMsg` | `string` | - | 事件 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.PublicityNotify`

中文说明：`PublicityNotify` 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `publicityId` | `int64` | - | 标识 |
| 2 | `roomId` | `int64` | - | 直播间 标识 |
| 3 | `status` | `int64` | - | 状态 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.LiveViewerMsgNotify`

中文说明：直播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `roomId` | `int64` | - | 直播间 标识 |
| 2 | `viewerMsg` | `string` | - | 业务字段 `viewerMsg`（名称未提供可靠中文语义） |
