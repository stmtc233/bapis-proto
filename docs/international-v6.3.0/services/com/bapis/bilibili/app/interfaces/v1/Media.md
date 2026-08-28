# `com.bapis.bilibili.app.interfaces.v1.Media`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `MediaComment` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaCommentReq` | `com.bapis.bilibili.app.interfaces.v1.MediaCommentReply` | 评论 |
| `MediaDetail` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaDetailReq` | `com.bapis.bilibili.app.interfaces.v1.MediaDetailReply` | 详情 |
| `MediaFollow` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaFollowReq` | `com.bapis.bilibili.app.interfaces.v1.MediaFollowReply` | 关注 |
| `MediaRelation` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaRelationReq` | `com.bapis.bilibili.app.interfaces.v1.MediaRelationReply` | 关系 |
| `MediaTab` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaTabReq` | `com.bapis.bilibili.app.interfaces.v1.MediaTabReply` | 标签页 |
| `MediaVideo` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.MediaVideoReq` | `com.bapis.bilibili.app.interfaces.v1.MediaVideoReply` | 视频 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaCommentReq`

中文说明：评论 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaCommentReply`

中文说明：评论 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `errMsg` | `string` | - | 业务字段 `errMsg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizId` | `int64` | - | 标识 |
| 2 | `bizType` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaDetailReply`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cast` | `Cast` | - | 业务字段 `cast`（名称未提供可靠中文语义） |
| 2 | `staff` | `Staff` | - | 业务字段 `staff`（名称未提供可靠中文语义） |
| 3 | `overview` | `Overview` | - | 业务字段 `overview`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaFollowReq`

中文说明：关注 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `string` | - | 标识 |
| 2 | `type` | `ButType` | - | 类型 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaFollowReply`

中文说明：关注 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaRelationReq`

中文说明：关系 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizId` | `int64` | - | 标识 |
| 2 | `bizType` | `int64` | - | 类型 |
| 3 | `feedId` | `int64` | - | 信息流 标识 |
| 5 | `offset` | `string` | - | 偏移量 |
| 6 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaRelationReply`

中文说明：关系 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `list` | `SmallItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaTabReq`

中文说明：标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizId` | `int64` | - | 标识 |
| 2 | `bizType` | `int64` | - | 类型 |
| 3 | `source` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `args` | `map<string, string>` | map | 业务字段 `args`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaTabReply`

中文说明：标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mediaCard` | `MediaCard` | - | 卡片 |
| 2 | `tab` | `ShowTab` | repeated | 标签页 |
| 3 | `defaultTabIndex` | `int64` | - | 标签页 |
| 4 | `channelInfo` | `ChannelInfo` | - | 频道 信息 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.MediaVideoReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizId` | `int64` | - | 标识 |
| 2 | `bizType` | `int64` | - | 类型 |
| 3 | `feedId` | `int64` | - | 信息流 标识 |
| 5 | `offset` | `string` | - | 偏移量 |
| 6 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.MediaVideoReply`

中文说明：视频 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `list` | `BigItem` | repeated | 列表 |
