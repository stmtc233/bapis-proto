# `bilibili.broadcast.message.tv.LiveDm`

中文说明：广播 消息 直播 弹幕 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `DmActivity` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.DmActivityReply` | 弹幕 活动 |
| `DmLiveMsg` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.DmLiveReply` | 弹幕 直播 |
| `DmLiveMsgDelay` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.DmLiveReply` | 弹幕 直播 |
| `DmLiveReloadSwitch` | 服务端流 | `google.protobuf.Empty` | `com.bapis.bilibili.broadcast.message.tv.DmLiveSwitchReload` | 弹幕 直播 |

## 请求与响应字段

### 请求 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 响应 `com.bapis.bilibili.broadcast.message.tv.DmActivityReply`

中文说明：弹幕 活动 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `roomId` | `int64` | - | 直播间 标识 |
| 2 | `activityList` | `DmActivityReply_ActivityInfo` | repeated | 活动 列表 |
| 3 | `ts` | `int64` | - | 业务字段 `ts`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.broadcast.message.tv.DmLiveReply`

中文说明：弹幕 直播 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `elems` | `DmLiveElem` | repeated | 业务字段 `elems`（名称未提供可靠中文语义） |
| 2 | `state` | `int32` | - | 状态 |
| 3 | `source` | `int32` | - | 来源 |

### 响应 `com.bapis.bilibili.broadcast.message.tv.DmLiveSwitchReload`

中文说明：弹幕 直播。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reload` | `bool` | - | 业务字段 `reload`（名称未提供可靠中文语义） |
