# `com.bapis.bilibili.im.customer.interfaces.CustomerInterface`

中文说明：接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CustomerPreEvaluate` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.PreEvaluateReq` | `com.bapis.bilibili.im.customer.interfaces.PreEvaluateRsp` | `CustomerPreEvaluate` 调用 |
| `CustomerUpdateAck` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.UpdateAckReq` | `com.bapis.bilibili.im.customer.interfaces.Empty` | 更新 |
| `CustomerWindowOptions` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.WindowOptionsReq` | `com.bapis.bilibili.im.customer.interfaces.WindowOptionsRsp` | `CustomerWindowOptions` 调用 |
| `FinishParagraphsRender` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.FinishParagraphsRenderReq` | `com.bapis.bilibili.im.customer.interfaces.FinishParagraphsRenderRsp` | `FinishParagraphsRender` 调用 |
| `GetCustomerSessDetail` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.GetSessDetailReq` | `com.bapis.bilibili.im.customer.interfaces.GetSessDetailRsp` | 获取 详情 |
| `GetCustomerSessions` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.GetSessionsReq` | `com.bapis.bilibili.im.customer.interfaces.SessionsRsp` | 获取 |
| `GetNewCustomerSessions` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.GetNewSessionsReq` | `com.bapis.bilibili.im.customer.interfaces.SessionsRsp` | 获取 |
| `GetShopCfg` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.ShopCfgReq` | `com.bapis.bilibili.im.customer.interfaces.ShopCfgRsp` | 获取 |
| `GetShopInfo` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.ShopInfoReq` | `com.bapis.bilibili.im.customer.interfaces.ShopInfoRsp` | 获取 信息 |
| `GetUserSettings` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.GetUserSettingsReq` | `com.bapis.bilibili.im.customer.interfaces.GetUserSettingsRsp` | 获取 用户 |
| `HeartBeat` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.SendHeartBeatReq` | `com.bapis.bilibili.im.customer.interfaces.Empty` | `HeartBeat` 调用 |
| `OutCustomerQueue` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.OutCustomerQueueReq` | `com.bapis.bilibili.im.customer.interfaces.Empty` | `OutCustomerQueue` 调用 |
| `PopResultUpdate` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.PopResultUpdateReq` | `com.bapis.bilibili.im.customer.interfaces.PopResultUpdateRsp` | 结果 更新 |
| `RemoveSession` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.RemoveSessionReq` | `com.bapis.bilibili.im.customer.interfaces.Empty` | `RemoveSession` 调用 |
| `SendCustomerMsg` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.SendMsgReq` | `com.bapis.bilibili.im.customer.interfaces.SendMsgRsp` | `SendCustomerMsg` 调用 |
| `SetTop` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.SetTopReq` | `com.bapis.bilibili.im.customer.interfaces.Empty` | `SetTop` 调用 |
| `SetUserSettings` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.SetUserSettingsReq` | `com.bapis.bilibili.im.customer.interfaces.SetUserSettingsRsp` | 用户 |
| `SyncFetchCustomerSessionMsgs` | 一元调用 | `com.bapis.bilibili.im.customer.interfaces.SessionMsgReq` | `com.bapis.bilibili.im.customer.interfaces.SessionMsgRsp` | `SyncFetchCustomerSessionMsgs` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.im.customer.interfaces.PreEvaluateReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `type` | `com.bapis.bilibili.im.customer.model.EvaluateType` | - | 类型 |
| 2 | `shopFatherId` | `uint64` | - | 标识 |
| 3 | `shopId` | `uint64` | - | 标识 |
| 4 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |
| 5 | `customSessionId` | `uint64` | - | 标识 |
| 6 | `machineSessionId` | `uint64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.PreEvaluateRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rsp` | `com.bapis.bilibili.im.customer.model.EvaluationShowInfo` | - | 响应 |
| 2 | `rspV2` | `com.bapis.bilibili.im.customer.model.EvaluationShowInfoV2` | - | 响应 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.UpdateAckReq`

中文说明：更新 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopFatherId` | `uint64` | - | 标识 |
| 2 | `shopId` | `uint64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.Empty`

中文说明：`Empty` 消息。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.customer.interfaces.WindowOptionsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 2 | `shopFatherId` | `uint64` | - | 标识 |
| 3 | `shopId` | `uint64` | - | 标识 |
| 4 | `situation` | `uint32` | - | 业务字段 `situation`（名称未提供可靠中文语义） |
| 5 | `msgSource` | `uint32` | - | 来源 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.WindowOptionsRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `goods` | `com.bapis.bilibili.im.customer.model.WindowOptionGoods` | - | 业务字段 `goods`（名称未提供可靠中文语义） |
| 2 | `order` | `com.bapis.bilibili.im.customer.model.WindowOptionOrder` | - | 排序 |
| 3 | `evaluation` | `com.bapis.bilibili.im.customer.model.WindowOptionEvaluation` | - | 业务字段 `evaluation`（名称未提供可靠中文语义） |
| 4 | `message_` | `com.bapis.bilibili.im.customer.model.WindowOptionMessage` | - | 消息 |
| 5 | `history` | `com.bapis.bilibili.im.customer.model.WindowOptionHistory` | - | 历史记录 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.FinishParagraphsRenderReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |
| 2 | `status` | `uint64` | - | 状态 |
| 3 | `stopPos` | `FinishParagraphsRenderStopPos` | - | 业务字段 `stopPos`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.customer.interfaces.FinishParagraphsRenderRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.im.customer.interfaces.GetSessDetailReq`

中文说明：获取 详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shop` | `Shop` | repeated | 业务字段 `shop`（名称未提供可靠中文语义） |
| 2 | `groupId` | `uint64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.GetSessDetailRsp`

中文说明：获取 详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionList` | `com.bapis.bilibili.im.customer.model.SessionInfo` | repeated | 列表 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.GetSessionsReq`

中文说明：获取 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `beginTs` | `uint64` | - | 业务字段 `beginTs`（名称未提供可靠中文语义） |
| 2 | `endTs` | `uint64` | - | 结束 |
| 3 | `size` | `uint32` | - | 大小 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.SessionsRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionList` | `com.bapis.bilibili.im.customer.model.SessionInfo` | repeated | 列表 |
| 2 | `hasMore` | `uint32` | - | 是否具有 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.GetNewSessionsReq`

中文说明：获取 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `beginTs` | `uint64` | - | 业务字段 `beginTs`（名称未提供可靠中文语义） |
| 2 | `size` | `uint32` | - | 大小 |
| 3 | `recvUid` | `uint64` | - | 用户 ID |

### 请求 `com.bapis.bilibili.im.customer.interfaces.ShopCfgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopId` | `uint64` | - | 标识 |
| 2 | `shopFatherId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.ShopCfgRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `announcement` | `Announcement` | - | 业务字段 `announcement`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.customer.interfaces.ShopInfoReq`

中文说明：信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopId` | `uint64` | - | 标识 |
| 2 | `shopFatherId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.ShopInfoRsp`

中文说明：信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `name` | `string` | - | 名称 |
| 2 | `face` | `string` | - | 业务字段 `face`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.customer.interfaces.GetUserSettingsReq`

中文说明：获取 用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopFatherId` | `uint64` | - | 标识 |
| 2 | `shopId` | `uint64` | - | 标识 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.GetUserSettingsRsp`

中文说明：获取 用户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `enableInitiativeMsg` | `bool` | - | 启用 |
| 2 | `doNotDisturb` | `bool` | - | 业务字段 `doNotDisturb`（名称未提供可靠中文语义） |
| 3 | `reportUrl` | `string` | - | 地址 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.SendHeartBeatReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopId` | `int64` | - | 标识 |
| 2 | `shopFatherId` | `int64` | - | 标识 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.OutCustomerQueueReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopFatherId` | `uint64` | - | 标识 |
| 2 | `shopId` | `uint64` | - | 标识 |
| 3 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.customer.interfaces.PopResultUpdateReq`

中文说明：结果 更新 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `popField` | `com.bapis.bilibili.im.customer.model.ComplianceAlertType` | - | 业务字段 `popField`（名称未提供可靠中文语义） |
| 2 | `isAllow` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.PopResultUpdateRsp`

中文说明：结果 更新 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msg` | `string` | - | 业务字段 `msg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.customer.interfaces.RemoveSessionReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `int64` | - | 标识 |
| 2 | `shopId` | `int64` | - | 标识 |
| 3 | `shopFatherId` | `int64` | - | 标识 |
| 4 | `sessionType` | `int32` | - | 类型 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.SendMsgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msg` | `com.bapis.bilibili.im.customer.model.Msg` | - | 业务字段 `msg`（名称未提供可靠中文语义） |
| 2 | `skillGroupId` | `int64` | - | 标识 |
| 3 | `ext` | `SendMsgExt` | - | 扩展 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.SendMsgRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msgKey` | `uint64` | - | 业务字段 `msgKey`（名称未提供可靠中文语义） |
| 2 | `msgContent` | `string` | - | 内容 |
| 3 | `eInfos` | `com.bapis.bilibili.im.customer.model.EmotionInfo` | repeated | 业务字段 `eInfos`（名称未提供可靠中文语义） |
| 4 | `aiInfo` | `AiInfo` | - | 信息 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.SetTopReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `talkerId` | `int64` | - | 标识 |
| 2 | `shopId` | `int64` | - | 标识 |
| 3 | `shopFatherId` | `int64` | - | 标识 |
| 4 | `sessionType` | `int32` | - | 类型 |

### 请求 `com.bapis.bilibili.im.customer.interfaces.SetUserSettingsReq`

中文说明：用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopFatherId` | `uint64` | - | 标识 |
| 2 | `shopId` | `uint64` | - | 标识 |
| 3 | `enableInitiativeMsg` | `bool` | - | 启用 |
| 4 | `doNotDisturb` | `bool` | - | 业务字段 `doNotDisturb`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.im.customer.interfaces.SetUserSettingsRsp`

中文说明：用户 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `msg` | `string` | - | 业务字段 `msg`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.im.customer.interfaces.SessionMsgReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shopFatherId` | `uint64` | - | 标识 |
| 2 | `shopId` | `uint64` | - | 标识 |
| 3 | `beginSeqno` | `uint64` | - | 业务字段 `beginSeqno`（名称未提供可靠中文语义） |
| 4 | `endSeqno` | `uint64` | - | 结束 |
| 5 | `size` | `int32` | - | 大小 |
| 6 | `order` | `int32` | - | 排序 |
| 7 | `devId` | `string` | - | 标识 |
| 8 | `situation` | `uint32` | - | 业务字段 `situation`（名称未提供可靠中文语义） |
| 9 | `gid` | `uint32` | - | 业务字段 `gid`（名称未提供可靠中文语义） |
| 10 | `ext` | `SessionMsgReqExt` | - | 扩展 |

### 响应 `com.bapis.bilibili.im.customer.interfaces.SessionMsgRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `messages` | `com.bapis.bilibili.im.customer.model.Msg` | repeated | 业务字段 `messages`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `int32` | - | 是否具有 |
| 3 | `minSeqno` | `uint64` | - | 业务字段 `minSeqno`（名称未提供可靠中文语义） |
| 4 | `maxSeqno` | `uint64` | - | 业务字段 `maxSeqno`（名称未提供可靠中文语义） |
| 5 | `eInfos` | `com.bapis.bilibili.im.customer.model.EmotionInfo` | repeated | 业务字段 `eInfos`（名称未提供可靠中文语义） |
| 6 | `fetchInterval` | `uint32` | - | 业务字段 `fetchInterval`（名称未提供可靠中文语义） |
| 7 | `hotUpdateSessionInfo` | `com.bapis.bilibili.im.customer.model.HotUpdateSessionInfo` | - | 更新 信息 |
