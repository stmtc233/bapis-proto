# `bilibili.im.interfaces.v1.ImInterface`

中文说明：接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AckAssisMsg` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqAckAssisMsg` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | `AckAssisMsg` 调用 |
| `AckSessions` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqAckSessions` | `com.bapis.bilibili.im.interfaces.v1.RspSessions` | `AckSessions` 调用 |
| `BatchGetMsgDetail` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqGetMsg` | `com.bapis.bilibili.im.interfaces.v1.RspGetMsg` | 获取 详情 |
| `BatchRmDustbin` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.DummyReq` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | `BatchRmDustbin` 调用 |
| `BatchRmSessions` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqBatRmSess` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | `BatchRmSessions` 调用 |
| `BatchSessDetail` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSessionDetails` | `com.bapis.bilibili.im.interfaces.v1.RspSessionDetails` | 详情 |
| `BatchUpdateDustbinAck` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.DummyReq` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | 更新 |
| `CloseClearUnreadUI` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqCloseClearUnreadUI` | `com.bapis.bilibili.im.interfaces.v1.RspCloseClearUnreadUI` | `CloseClearUnreadUI` 调用 |
| `GetDiscussListInImPage` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqGetDiscussListInImPage` | `com.bapis.bilibili.im.interfaces.v1.RspGetDiscussListInImPage` | 获取 列表 分页 |
| `GetLiveInfo` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqLiveInfo` | `com.bapis.bilibili.im.interfaces.v1.RspLiveInfo` | 获取 直播 信息 |
| `GetSessions` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqGetSessions` | `com.bapis.bilibili.im.interfaces.v1.RspSessions` | 获取 |
| `GetSpecificSessions` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqGetSpecificSessions` | `com.bapis.bilibili.im.interfaces.v1.RspSessions` | 获取 |
| `GetTotalUnread` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqTotalUnread` | `com.bapis.bilibili.im.interfaces.v1.RspTotalUnread` | 获取 总数 |
| `GetUserCosmoState` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.GetUserCosmoStateReq` | `com.bapis.bilibili.im.interfaces.v1.GetUserCosmoStateRsp` | 获取 用户 状态 |
| `GroupAssisMsg` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqGroupAssisMsg` | `com.bapis.bilibili.im.interfaces.v1.RspSessionMsg` | `GroupAssisMsg` 调用 |
| `LikeMsg` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqLikeMsg` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | 点赞 |
| `MsgHasLike` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqMsgHasLike` | `com.bapis.bilibili.im.interfaces.v1.RspMsgHasLike` | 是否具有 点赞 |
| `MyGroupUnread` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.DummyReq` | `com.bapis.bilibili.im.interfaces.v1.RspMyGroupUnread` | `MyGroupUnread` 调用 |
| `NewSessions` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqNewSessions` | `com.bapis.bilibili.im.interfaces.v1.RspSessions` | `NewSessions` 调用 |
| `RemoveSession` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqRemoveSession` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | `RemoveSession` 调用 |
| `SendMsg` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSendMsg` | `com.bapis.bilibili.im.interfaces.v1.RspSendMsg` | `SendMsg` 调用 |
| `SetTop` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSetTop` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | `SetTop` 调用 |
| `ShareList` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqShareList` | `com.bapis.bilibili.im.interfaces.v1.RspShareList` | 分享 列表 |
| `ShowClearUnreadUI` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqShowClearUnreadUI` | `com.bapis.bilibili.im.interfaces.v1.RspShowClearUnreadUI` | `ShowClearUnreadUI` 调用 |
| `SingleUnread` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSingleUnread` | `com.bapis.bilibili.im.interfaces.v1.RspSingleUnread` | `SingleUnread` 调用 |
| `SpecificSingleUnread` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSpecificSingleUnread` | `com.bapis.bilibili.im.interfaces.v1.RspSpecificSingleUnread` | `SpecificSingleUnread` 调用 |
| `SyncAck` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSyncAck` | `com.bapis.bilibili.im.interfaces.v1.RspSyncAck` | `SyncAck` 调用 |
| `SyncFetchSessionMsgs` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqSessionMsg` | `com.bapis.bilibili.im.interfaces.v1.RspSessionMsg` | `SyncFetchSessionMsgs` 调用 |
| `SyncRelation` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqRelationSync` | `com.bapis.bilibili.im.interfaces.v1.RspRelationSync` | 关系 |
| `UpdateAck` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqUpdateAck` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | 更新 |
| `UpdateIntercept` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqUpdateIntercept` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | 更新 |
| `UpdateTotalUnread` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.ReqUpdateTotalUnread` | `com.bapis.bilibili.im.interfaces.v1.RspUpdateTotalUnread` | 更新 总数 |
| `UpdateUnflwRead` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.DummyReq` | `com.bapis.bilibili.im.interfaces.v1.DummyRsp` | 更新 |
| `UpdateUserCosmoState` | 一元调用 | `com.bapis.bilibili.im.interfaces.v1.UpdateUserCosmoStateReq` | `com.bapis.bilibili.im.interfaces.v1.UpdateUserCosmoStateRsp` | 更新 用户 状态 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqAckAssisMsg`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ackSeqno` | `uint64` | - | 业务字段 `ackSeqno`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.DummyRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqAckSessions`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `beginTs` | `uint64` | - | 业务字段 `beginTs`（名称未提供可靠中文语义） |
| 2 | `endTs` | `uint32` | - | 结束 |
| 3 | `size` | `uint32` | - | 大小 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSessions`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionList` | `com.bapis.bilibili.im.type.SessionInfo` | repeated | 列表 |
| 2 | `hasMore` | `uint32` | - | 是否具有 |
| 3 | `antiDisturbCleaning` | `bool` | - | 业务字段 `antiDisturbCleaning`（名称未提供可靠中文语义） |
| 4 | `isAddressListEmpty` | `int32` | - | 是否 列表 |
| 5 | `systemMsg` | `map<int32, int64>` | map | 业务字段 `systemMsg`（名称未提供可靠中文语义） |
| 6 | `showLevel` | `bool` | - | 等级 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqGetMsg`

中文说明：请求 获取。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `msgDetail` | `MsgDetail` | repeated | 详情 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspGetMsg`

中文说明：响应 获取。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msg` | `com.bapis.bilibili.im.type.Msg` | repeated | 业务字段 `msg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.DummyReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `idl` | `uint32` | - | 业务字段 `idl`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqBatRmSess`

中文说明：请求。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSessionDetails`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessIds` | `ReqSessionDetail` | repeated | 业务字段 `sessIds`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSessionDetails`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessInfos` | `com.bapis.bilibili.im.type.SessionInfo` | repeated | 业务字段 `sessInfos`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqCloseClearUnreadUI`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspCloseClearUnreadUI`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqGetDiscussListInImPage`

中文说明：请求 获取 列表 分页。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspGetDiscussListInImPage`

中文说明：响应 获取 列表 分页。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `discussList` | `SingleDiscussInImPage` | repeated | 列表 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqLiveInfo`

中文说明：请求 直播 信息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `talkerId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspLiveInfo`

中文说明：响应 直播 信息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `liveStatus` | `int64` | - | 直播 状态 |
| 2 | `jumpUrl` | `string` | - | 跳转 地址 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqGetSessions`

中文说明：请求 获取。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `beginTs` | `uint64` | - | 业务字段 `beginTs`（名称未提供可靠中文语义） |
| 2 | `endTs` | `uint64` | - | 结束 |
| 3 | `size` | `uint32` | - | 大小 |
| 4 | `sessionType` | `uint32` | - | 类型 |
| 5 | `unfollowFold` | `uint32` | - | 业务字段 `unfollowFold`（名称未提供可靠中文语义） |
| 6 | `groupFold` | `uint32` | - | 业务字段 `groupFold`（名称未提供可靠中文语义） |
| 7 | `sortRule` | `uint32` | - | 排序 |
| 8 | `teenagerMode` | `uint32` | - | 模式 |
| 9 | `lessonsMode` | `uint32` | - | 模式 |
| 10 | `sids` | `com.bapis.bilibili.im.type.Exp` | repeated | 业务字段 `sids`（名称未提供可靠中文语义） |
| 11 | `aiUid` | `int64` | - | 用户 ID |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqGetSpecificSessions`

中文说明：请求 获取。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerSessions` | `SimpleSession` | repeated | 业务字段 `talkerSessions`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqTotalUnread`

中文说明：请求 总数。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unreadType` | `uint32` | - | 类型 |
| 2 | `showUnfollowList` | `uint32` | - | 列表 |
| 3 | `uid` | `uint64` | - | 用户 ID |
| 4 | `showDustbin` | `uint32` | - | 业务字段 `showDustbin`（名称未提供可靠中文语义） |
| 5 | `singleunreadOn` | `int32` | - | 业务字段 `singleunreadOn`（名称未提供可靠中文语义） |
| 6 | `msgfeedOn` | `int32` | - | 业务字段 `msgfeedOn`（名称未提供可靠中文语义） |
| 7 | `sysupOn` | `int32` | - | 业务字段 `sysupOn`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspTotalUnread`

中文说明：响应 总数。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionSingleUnread` | `SessionSingleUnreadRsp` | - | 业务字段 `sessionSingleUnread`（名称未提供可靠中文语义） |
| 2 | `msgFeedUnread` | `MsgFeedUnreadRsp` | - | 信息流 |
| 3 | `sysMsgInterfaceLastMsg` | `SysMsgInterfaceLastMsgRsp` | - | 接口 |
| 4 | `totalUnread` | `int32` | - | 总数 |
| 5 | `customUnread` | `uint64` | - | 业务字段 `customUnread`（名称未提供可靠中文语义） |
| 6 | `newTotalUnread` | `NewTotalUnread` | - | 总数 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.GetUserCosmoStateReq`

中文说明：获取 用户 状态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `cardSendMid` | `int64` | - | 卡片 用户 ID |

### 响应 `com.bapis.bilibili.im.interfaces.v1.GetUserCosmoStateRsp`

中文说明：获取 用户 状态 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `cardSendMid` | `int64` | - | 卡片 用户 ID |
| 3 | `cosmoState` | `int32` | - | 状态 |
| 4 | `opType` | `int32` | - | 类型 |
| 5 | `text` | `string` | - | 文本 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqGroupAssisMsg`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `clientSeqno` | `uint64` | - | 客户端 |
| 2 | `size` | `uint32` | - | 大小 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSessionMsg`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `messages` | `com.bapis.bilibili.im.type.Msg` | repeated | 业务字段 `messages`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `int32` | - | 是否具有 |
| 3 | `minSeqno` | `uint64` | - | 业务字段 `minSeqno`（名称未提供可靠中文语义） |
| 4 | `maxSeqno` | `uint64` | - | 业务字段 `maxSeqno`（名称未提供可靠中文语义） |
| 5 | `eInfos` | `EmotionInfo` | repeated | 业务字段 `eInfos`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqLikeMsg`

中文说明：请求 点赞。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |
| 2 | `action` | `MSG_LIKE_ACTION` | - | 操作 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqMsgHasLike`

中文说明：请求 是否具有 点赞。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgKeys` | `uint64` | repeated | 业务字段 `msgKeys`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspMsgHasLike`

中文说明：响应 是否具有 点赞。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `states` | `map<int64, HasLikeState>` | map | 业务字段 `states`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspMyGroupUnread`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unreadCount` | `uint32` | - | 数量 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqNewSessions`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `beginTs` | `uint64` | - | 业务字段 `beginTs`（名称未提供可靠中文语义） |
| 2 | `size` | `uint32` | - | 大小 |
| 3 | `teenagerMode` | `uint32` | - | 模式 |
| 4 | `lessonsMode` | `uint32` | - | 模式 |
| 5 | `sids` | `com.bapis.bilibili.im.type.Exp` | repeated | 业务字段 `sids`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqRemoveSession`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `shopId` | `uint64` | - | 标识 |
| 4 | `shopFatherId` | `uint64` | - | 标识 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSendMsg`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msg` | `com.bapis.bilibili.im.type.Msg` | - | 业务字段 `msg`（名称未提供可靠中文语义） |
| 2 | `cookie` | `string` | - | 业务字段 `cookie`（名称未提供可靠中文语义） |
| 3 | `cookie2` | `string` | - | 业务字段 `cookie2`（名称未提供可靠中文语义） |
| 4 | `errorCode` | `int32` | - | 错误 状态码 |
| 5 | `devId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSendMsg`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |
| 2 | `eInfos` | `EmotionInfo` | repeated | 业务字段 `eInfos`（名称未提供可靠中文语义） |
| 3 | `msgContent` | `string` | - | 内容 |
| 4 | `keyHitInfos` | `com.bapis.bilibili.im.type.KeyHitInfos` | - | 业务字段 `keyHitInfos`（名称未提供可靠中文语义） |
| 5 | `richTextMsgContent` | `com.bapis.bilibili.im.type.RichTextMsgContent` | - | 文本 内容 |
| 6 | `seqno` | `uint64` | - | 业务字段 `seqno`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSetTop`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `opType` | `uint32` | - | 类型 |
| 4 | `shopId` | `uint64` | - | 标识 |
| 5 | `shopFatherId` | `uint64` | - | 标识 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqShareList`

中文说明：请求 分享 列表。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `size` | `int32` | - | 大小 |
| 2 | `source` | `uint32` | - | 来源 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspShareList`

中文说明：响应 分享 列表。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionList` | `ShareSessionInfo` | repeated | 列表 |
| 2 | `isaddresslistempty` | `int32` | - | 业务字段 `isaddresslistempty`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqShowClearUnreadUI`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unreadType` | `uint32` | - | 类型 |
| 2 | `showUnfollowList` | `uint32` | - | 列表 |
| 4 | `showDustbin` | `uint32` | - | 业务字段 `showDustbin`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspShowClearUnreadUI`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `display` | `bool` | - | 展示 |
| 2 | `text` | `string` | - | 文本 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSingleUnread`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unreadType` | `uint32` | - | 类型 |
| 2 | `showUnfollowList` | `uint32` | - | 列表 |
| 3 | `uid` | `uint64` | - | 用户 ID |
| 4 | `showDustbin` | `uint32` | - | 业务字段 `showDustbin`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSingleUnread`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unfollowUnread` | `uint64` | - | 业务字段 `unfollowUnread`（名称未提供可靠中文语义） |
| 2 | `followUnread` | `uint64` | - | 关注 |
| 3 | `unfollowPushMsg` | `uint32` | - | 业务字段 `unfollowPushMsg`（名称未提供可靠中文语义） |
| 4 | `dustbinPushMsg` | `uint32` | - | 业务字段 `dustbinPushMsg`（名称未提供可靠中文语义） |
| 5 | `dustbinUnread` | `uint64` | - | 业务字段 `dustbinUnread`（名称未提供可靠中文语义） |
| 6 | `bizMsgUnfollowUnread` | `uint64` | - | 业务字段 `bizMsgUnfollowUnread`（名称未提供可靠中文语义） |
| 7 | `bizMsgFollowUnread` | `uint64` | - | 关注 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSpecificSingleUnread`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerSessions` | `SimpleSession` | repeated | 业务字段 `talkerSessions`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSpecificSingleUnread`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerUnreadCnt` | `map<int64, int64>` | map | 业务字段 `talkerUnreadCnt`（名称未提供可靠中文语义） |
| 2 | `allUnreadCnt` | `uint64` | - | 全部 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSyncAck`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `clientSeqno` | `uint64` | - | 客户端 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspSyncAck`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqSessionMsg`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `int32` | - | 类型 |
| 3 | `endSeqno` | `uint64` | - | 结束 |
| 4 | `beginSeqno` | `uint64` | - | 业务字段 `beginSeqno`（名称未提供可靠中文语义） |
| 5 | `size` | `int32` | - | 大小 |
| 6 | `order` | `int32` | - | 排序 |
| 7 | `devId` | `string` | - | 标识 |
| 8 | `canalToken` | `string` | - | 凭据 |
| 9 | `aiUid` | `int64` | - | 用户 ID |
| 10 | `needAiMsg` | `bool` | - | 业务字段 `needAiMsg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqRelationSync`

中文说明：请求 关系。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `clientRelationOplogSeqno` | `uint64` | - | 客户端 关系 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspRelationSync`

中文说明：响应 关系。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `full` | `int32` | - | 业务字段 `full`（名称未提供可靠中文语义） |
| 2 | `relationLogs` | `com.bapis.bilibili.im.type.RelationLog` | repeated | 关系 |
| 3 | `friendList` | `com.bapis.bilibili.im.type.FriendRelation` | repeated | 列表 |
| 4 | `serverRelationOplogSeqno` | `uint64` | - | 服务端 关系 |
| 5 | `groupList` | `com.bapis.bilibili.im.type.GroupRelation` | repeated | 列表 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqUpdateAck`

中文说明：请求 更新。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `uint64` | - | 标识 |
| 2 | `sessionType` | `uint32` | - | 类型 |
| 3 | `ackSeqno` | `uint64` | - | 业务字段 `ackSeqno`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqUpdateIntercept`

中文说明：请求 更新。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `uint64` | - | 用户 ID |
| 2 | `talkerId` | `uint64` | - | 标识 |
| 3 | `status` | `uint32` | - | 状态 |

### 请求 `com.bapis.bilibili.im.interfaces.v1.ReqUpdateTotalUnread`

中文说明：请求 更新 总数。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `scope` | `UpdateUnreadScope` | - | 业务字段 `scope`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.interfaces.v1.RspUpdateTotalUnread`

中文说明：响应 更新 总数。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.interfaces.v1.UpdateUserCosmoStateReq`

中文说明：更新 用户 状态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `cardSendMid` | `int64` | - | 卡片 用户 ID |
| 3 | `cosmoState` | `int32` | - | 状态 |
| 4 | `opType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.im.interfaces.v1.UpdateUserCosmoStateRsp`

中文说明：更新 用户 状态 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `text` | `string` | - | 文本 |
