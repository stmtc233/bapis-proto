# `bilibili.im.gateway.interfaces.v1.ImGatewayApi`

中文说明：网关 接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ClearBubbleMsg` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ClearBubbleMsgReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.ClearBubbleMsgRsp` | `ClearBubbleMsg` 调用 |
| `ClearMessageToast` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ClearMessageToastReq` | `google.protobuf.Empty` | 消息 |
| `DelMsg` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgRsp` | `DelMsg` 调用 |
| `DelMsgCard` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgCardReq` | `google.protobuf.Empty` | 卡片 |
| `GetAIInfo` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ReqGetAIInfo` | `com.bapis.bilibili.im.gateway.interfaces.v1.RspGetAIInfo` | 获取 信息 |
| `GetBubbleMsg` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.GetBubbleMsgReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.GetBubbleMsgRsp` | 获取 |
| `GetSystemNotice` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ReqGetSystemNotice` | `com.bapis.bilibili.im.gateway.interfaces.v1.RspGetSystemNotice` | 获取 |
| `GetTotalUnread` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.GetTotalUnreadReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.GetTotalUnreadRsp` | 获取 总数 |
| `HarmonyTotalUnread` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.GetTotalUnreadReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.HarmonyTotalUnreadRsp` | 总数 |
| `MessageToast` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.MessageToastReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.MessageToastRsp` | 消息 |
| `MsgFeedAction` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.MsgFeedActionReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.MsgFeedActionRsp` | 信息流 操作 |
| `MsgFeedMsgList` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.MsgListReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.MsgListRsp` | 信息流 列表 |
| `Prompt` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.PromptReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.PromptRsp` | `Prompt` 调用 |
| `QuickLink` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.QuickLinkReq` | `com.bapis.bilibili.im.gateway.interfaces.v1.QuickLinkRsp` | 链接 |
| `RemoveSession` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ReqRemoveSession` | `com.bapis.bilibili.im.gateway.interfaces.v1.DummyRsp` | `RemoveSession` 调用 |
| `SetMsgFeedNotice` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.SetMsgFeedNoticeReq` | `google.protobuf.Empty` | 信息流 |
| `SetTop` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ReqSetTop` | `com.bapis.bilibili.im.gateway.interfaces.v1.DummyRsp` | `SetTop` 调用 |
| `SingleInbox` | 一元调用 | `com.bapis.bilibili.im.gateway.interfaces.v1.ReqSingleInbox` | `com.bapis.bilibili.im.gateway.interfaces.v1.RspSingleInbox` | `SingleInbox` 调用 |
| `UpdateTotalUnread` | 一元调用 | `google.protobuf.Empty` | `google.protobuf.Empty` | 更新 总数 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ClearBubbleMsgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabType` | `MsgTabType` | - | 标签页 类型 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.ClearBubbleMsgRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ClearMessageToastReq`

中文说明：消息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toastType` | `ToastType` | - | 类型 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgs` | `DelMsgItem` | repeated | 业务字段 `msgs`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `fail` | `DelMsgItem` | repeated | 业务字段 `fail`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.DelMsgCardReq`

中文说明：卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `tabType` | `MsgTabType` | - | 标签页 类型 |
| 3 | `msgType` | `MsgFeedMsgType` | - | 类型 |
| 4 | `filterType` | `MsgFeedFilterType` | - | 筛选 类型 |
| 5 | `deleteTopMsg` | `bool` | - | 删除 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ReqGetAIInfo`

中文说明：请求 获取 信息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aiUid` | `int64` | - | 用户 ID |
| 2 | `uid` | `int64` | - | 用户 ID |
| 3 | `guestId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.RspGetAIInfo`

中文说明：响应 获取 信息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aiInfo` | `com.bapis.bilibili.im.type.AiInfo` | - | 信息 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.GetBubbleMsgReq`

中文说明：获取 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.GetBubbleMsgRsp`

中文说明：获取 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bubbleMsg` | `BubbleMsg` | - | 业务字段 `bubbleMsg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ReqGetSystemNotice`

中文说明：请求 获取。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.RspGetSystemNotice`

中文说明：响应 获取。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `text` | `string` | - | 文本 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.GetTotalUnreadReq`

中文说明：获取 总数 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unreadType` | `int32` | - | 类型 |
| 2 | `showUnfollowList` | `int32` | - | 列表 |
| 3 | `showDustbin` | `int32` | - | 业务字段 `showDustbin`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.GetTotalUnreadRsp`

中文说明：获取 总数 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionUnread` | `SessionUnread` | - | 业务字段 `sessionUnread`（名称未提供可靠中文语义） |
| 2 | `msgFeedUnread` | `MsgFeedUnread` | - | 信息流 |
| 3 | `sysMsgInterfaceLastMsg` | `SysMsgInterfaceLastMsg` | - | 接口 |
| 4 | `customUnread` | `uint64` | - | 业务字段 `customUnread`（名称未提供可靠中文语义） |
| 5 | `totalUnread` | `int32` | - | 总数 |
| 6 | `totalUnreadNew` | `TotalUnreadNew` | - | 总数 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.HarmonyTotalUnreadRsp`

中文说明：总数 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `totalunread` | `bytes` | - | 业务字段 `totalunread`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.MessageToastReq`

中文说明：消息 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.MessageToastRsp`

中文说明：消息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `content` | `string` | - | 内容 |
| 2 | `title` | `string` | - | 标题 |
| 3 | `toastType` | `ToastType` | - | 类型 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.MsgFeedActionReq`

中文说明：信息流 操作 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgId` | `int64` | - | 标识 |
| 2 | `actionType` | `MsgFeedActionType` | - | 操作 类型 |
| 3 | `thankParams` | `MsgFeedActionThankParams` | - | 业务字段 `thankParams`（名称未提供可靠中文语义） |
| 4 | `msgType` | `MsgFeedMsgType` | - | 类型 |
| 5 | `filterType` | `MsgFeedFilterType` | - | 筛选 类型 |
| 6 | `isTopMsg` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.MsgFeedActionRsp`

中文说明：信息流 操作 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.MsgListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `Cursor` | - | 游标 |
| 2 | `pagesize` | `int64` | - | 业务字段 `pagesize`（名称未提供可靠中文语义） |
| 3 | `tabType` | `MsgTabType` | - | 标签页 类型 |
| 4 | `filterType` | `MsgFeedFilterType` | - | 筛选 类型 |
| 5 | `msgUiExpGroup` | `int32` | - | 业务字段 `msgUiExpGroup`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.MsgListRsp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `Cursor` | - | 游标 |
| 2 | `msgCards` | `MsgFeedMsgCard` | repeated | 业务字段 `msgCards`（名称未提供可靠中文语义） |
| 3 | `lastViewAt` | `int64` | - | 查看 |
| 4 | `filters` | `MsgFeedFilter` | repeated | 业务字段 `filters`（名称未提供可靠中文语义） |
| 5 | `topCards` | `MsgFeedMsgCard` | repeated | 业务字段 `topCards`（名称未提供可靠中文语义） |
| 6 | `limit` | `MsgListLimit` | - | 限制 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.PromptReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerAi` | `uint64` | - | 业务字段 `talkerAi`（名称未提供可靠中文语义） |
| 2 | `key` | `uint64` | - | 业务字段 `key`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.PromptRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `Prompt` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.QuickLinkReq`

中文说明：链接 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagerMode` | `int32` | - | 模式 |
| 2 | `lessonsMode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.QuickLinkRsp`

中文说明：链接 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `QuickLinkItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `isExperiment` | `bool` | - | 是否 |
| 3 | `filters` | `SessionsFilter` | repeated | 业务字段 `filters`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ReqRemoveSession`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `shopId` | `uint64` | - | 标识 |
| 4 | `shopFatherId` | `uint64` | - | 标识 |
| 5 | `systemMsgType` | `uint32` | - | 类型 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.DummyRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.SetMsgFeedNoticeReq`

中文说明：信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `msgType` | `MsgFeedMsgType` | - | 类型 |
| 3 | `noticeState` | `int32` | - | 状态 |
| 4 | `isTopMsg` | `bool` | - | 是否 |
| 5 | `bizType` | `string` | - | 类型 |
| 6 | `filterType` | `MsgFeedFilterType` | - | 筛选 类型 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ReqSetTop`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `opType` | `uint32` | - | 类型 |
| 4 | `shopId` | `uint64` | - | 标识 |
| 5 | `shopFatherId` | `uint64` | - | 标识 |
| 6 | `systemMsgType` | `uint32` | - | 类型 |

### 请求 `com.bapis.bilibili.im.gateway.interfaces.v1.ReqSingleInbox`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerUid` | `uint64` | - | 用户 ID |
| 2 | `beginSeqno` | `uint64` | - | 业务字段 `beginSeqno`（名称未提供可靠中文语义） |
| 3 | `endSeqno` | `uint64` | - | 结束 |
| 4 | `size` | `uint32` | - | 大小 |

### 响应 `com.bapis.bilibili.im.gateway.interfaces.v1.RspSingleInbox`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgs` | `map<int64, int64>` | map | 业务字段 `msgs`（名称未提供可靠中文语义） |
