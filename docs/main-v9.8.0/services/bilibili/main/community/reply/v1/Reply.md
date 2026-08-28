# `bilibili.main.community.reply.v1.Reply`

中文说明：社区 响应 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AnswerQuestion` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.AnswerQuestionReq` | `com.bapis.bilibili.main.community.reply.v1.AnswerQuestionResp` | `AnswerQuestion` 调用 |
| `AtSearch` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.AtSearchReq` | `com.bapis.bilibili.main.community.reply.v1.AtSearchReply` | 搜索 |
| `DetailList` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.DetailListReq` | `com.bapis.bilibili.main.community.reply.v1.DetailListReply` | 详情 列表 |
| `DialogList` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.DialogListReq` | `com.bapis.bilibili.main.community.reply.v1.DialogListReply` | 列表 |
| `DoVote` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.DoVoteReq` | `com.bapis.bilibili.main.community.reply.v1.DoVoteResp` | `DoVote` 调用 |
| `MainList` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.MainListReq` | `com.bapis.bilibili.main.community.reply.v1.MainListReply` | 列表 |
| `PictureList` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.PictureListReq` | `com.bapis.bilibili.main.community.reply.v1.PictureListResp` | 列表 |
| `PreviewList` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.PreviewListReq` | `com.bapis.bilibili.main.community.reply.v1.PreviewListReply` | 预览 列表 |
| `ReplyInfo` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.ReplyInfoReq` | `com.bapis.bilibili.main.community.reply.v1.ReplyInfoReply` | 响应 信息 |
| `SearchItem` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.SearchItemReq` | `com.bapis.bilibili.main.community.reply.v1.SearchItemReply` | 搜索 条目 |
| `SearchItemPreHook` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.SearchItemPreHookReq` | `com.bapis.bilibili.main.community.reply.v1.SearchItemPreHookReply` | 搜索 条目 |
| `ShareRepliesInfo` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.ShareRepliesInfoReq` | `com.bapis.bilibili.main.community.reply.v1.ShareRepliesInfoResp` | 分享 信息 |
| `ShareReplyMaterial` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.ShareReplyMaterialReq` | `com.bapis.bilibili.main.community.reply.v1.ShareReplyMaterialResp` | 分享 响应 |
| `SuggestEmotes` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.SuggestEmotesReq` | `com.bapis.bilibili.main.community.reply.v1.SuggestEmotesResp` | `SuggestEmotes` 调用 |
| `UpdateSingleReplyNotificationConfig` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.UpdateSingleReplyNotificationConfigReq` | `com.bapis.bilibili.main.community.reply.v1.UpdateSingleReplyNotificationConfigResp` | 更新 响应 配置 |
| `UserCallback` | 一元调用 | `com.bapis.bilibili.main.community.reply.v1.UserCallbackReq` | `com.bapis.bilibili.main.community.reply.v1.UserCallbackReply` | 用户 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.main.community.reply.v1.AnswerQuestionReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `qid` | `int64` | - | 业务字段 `qid`（名称未提供可靠中文语义） |
| 2 | `optionKey` | `string` | - | 业务字段 `optionKey`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.AnswerQuestionResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `passed` | `bool` | - | 业务字段 `passed`（名称未提供可靠中文语义） |
| 2 | `memberPassed` | `bool` | - | 业务字段 `memberPassed`（名称未提供可靠中文语义） |
| 3 | `memberPassedPopup` | `AnswerQuestionResp_MemberPassedPopup` | - | 业务字段 `memberPassedPopup`（名称未提供可靠中文语义） |
| 4 | `bottomText` | `string` | - | 文本 |
| 5 | `stat` | `QuestionCardStat` | - | 业务字段 `stat`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.AtSearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.AtSearchReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `groups` | `AtGroup` | repeated | 业务字段 `groups`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.DetailListReq`

中文说明：详情 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `root` | `int64` | - | 业务字段 `root`（名称未提供可靠中文语义） |
| 4 | `rpid` | `int64` | - | 业务字段 `rpid`（名称未提供可靠中文语义） |
| 5 | `cursor` | `CursorReq` | - | 游标 |
| 6 | `scene` | `DetailListScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 7 | `mode` | `Mode` | - | 模式 |
| 8 | `pagination` | `com.bapis.bilibili.pagination.FeedPagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 9 | `extra` | `string` | - | 扩展数据 |
| 10 | `adExtra` | `string` | - | 广告 扩展数据 |
| 11 | `needSubjectTitle` | `bool` | - | 标题 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.DetailListReply`

中文说明：详情 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `CursorReply` | - | 游标 |
| 2 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |
| 3 | `root` | `ReplyInfo` | - | 业务字段 `root`（名称未提供可靠中文语义） |
| 4 | `activity` | `Activity` | - | 活动 |
| 5 | `likes` | `LikeInfo` | - | 业务字段 `likes`（名称未提供可靠中文语义） |
| 6 | `mode` | `Mode` | - | 模式 |
| 7 | `modeText` | `string` | - | 模式 文本 |
| 8 | `paginationReply` | `com.bapis.bilibili.pagination.FeedPaginationReply` | - | 响应 |
| 9 | `sessionId` | `string` | - | 标识 |
| 10 | `subjectTitle` | `DetailListReply_SubjectTitle` | - | 标题 |
| 11 | `mixedCards` | `MixedCard` | repeated | 业务字段 `mixedCards`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.DialogListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `root` | `int64` | - | 业务字段 `root`（名称未提供可靠中文语义） |
| 4 | `dialog` | `int64` | - | 业务字段 `dialog`（名称未提供可靠中文语义） |
| 5 | `cursor` | `CursorReq` | - | 游标 |
| 6 | `pagination` | `com.bapis.bilibili.pagination.FeedPagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 7 | `extra` | `string` | - | 扩展数据 |
| 8 | `adExtra` | `string` | - | 广告 扩展数据 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.DialogListReply`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `CursorReply` | - | 游标 |
| 2 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |
| 3 | `replies` | `ReplyInfo` | repeated | 业务字段 `replies`（名称未提供可靠中文语义） |
| 4 | `activity` | `Activity` | - | 活动 |
| 5 | `paginationReply` | `com.bapis.bilibili.pagination.FeedPaginationReply` | - | 响应 |
| 6 | `sessionId` | `string` | - | 标识 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.DoVoteReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `voteId` | `int64` | - | 标识 |
| 4 | `option_` | `int64` | - | 业务字段 `option_`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.DoVoteResp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.main.community.reply.v1.MainListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `cursor` | `CursorReq` | - | 游标 |
| 4 | `extra` | `string` | - | 扩展数据 |
| 5 | `adExtra` | `string` | - | 广告 扩展数据 |
| 6 | `rpid` | `int64` | - | 业务字段 `rpid`（名称未提供可靠中文语义） |
| 7 | `seekRpid` | `int64` | - | 业务字段 `seekRpid`（名称未提供可靠中文语义） |
| 8 | `filterTagName` | `string` | - | 筛选 标签 名称 |
| 9 | `mode` | `Mode` | - | 模式 |
| 10 | `pagination` | `com.bapis.bilibili.pagination.FeedPagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 11 | `clientRecallRpids` | `int64` | repeated | 客户端 |
| 12 | `wordSearchParam` | `WordSearchParam` | - | 搜索 参数 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.MainListReply`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `CursorReply` | - | 游标 |
| 2 | `replies` | `ReplyInfo` | repeated | 业务字段 `replies`（名称未提供可靠中文语义） |
| 3 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |
| 4 | `upTop` | `ReplyInfo` | - | 业务字段 `upTop`（名称未提供可靠中文语义） |
| 5 | `adminTop` | `ReplyInfo` | - | 业务字段 `adminTop`（名称未提供可靠中文语义） |
| 6 | `voteTop` | `ReplyInfo` | - | 业务字段 `voteTop`（名称未提供可靠中文语义） |
| 7 | `notice` | `Notice` | - | 业务字段 `notice`（名称未提供可靠中文语义） |
| 8 | `lottery` | `Lottery` | - | 业务字段 `lottery`（名称未提供可靠中文语义） |
| 9 | `activity` | `Activity` | - | 活动 |
| 10 | `upSelection` | `UpSelection` | - | 业务字段 `upSelection`（名称未提供可靠中文语义） |
| 11 | `cm` | `CM` | - | 业务字段 `cm`（名称未提供可靠中文语义） |
| 12 | `effects` | `Effects` | - | 业务字段 `effects`（名称未提供可靠中文语义） |
| 13 | `operation` | `Operation` | - | 业务字段 `operation`（名称未提供可靠中文语义） |
| 14 | `topReplies` | `ReplyInfo` | repeated | 业务字段 `topReplies`（名称未提供可靠中文语义） |
| 15 | `qoe` | `QoeInfo` | - | 业务字段 `qoe`（名称未提供可靠中文语义） |
| 16 | `callbacks` | `map<string, int32>` | map | 业务字段 `callbacks`（名称未提供可靠中文语义） |
| 17 | `operationV2` | `OperationV2` | - | 业务字段 `operationV2`（名称未提供可靠中文语义） |
| 18 | `mode` | `Mode` | - | 模式 |
| 19 | `modeText` | `string` | - | 模式 文本 |
| 20 | `paginationReply` | `com.bapis.bilibili.pagination.FeedPaginationReply` | - | 响应 |
| 21 | `sessionId` | `string` | - | 标识 |
| 22 | `reportParams` | `string` | - | 业务字段 `reportParams`（名称未提供可靠中文语义） |
| 23 | `voteCard` | `VoteCard` | - | 卡片 |
| 24 | `esportsGradeCard` | `ESportsGradeCard` | - | 卡片 |
| 25 | `contextFeature` | `string` | - | 业务字段 `contextFeature`（名称未提供可靠中文语义） |
| 26 | `paginationEndText` | `string` | - | 结束 文本 |
| 27 | `mixedCards` | `MixedCard` | repeated | 业务字段 `mixedCards`（名称未提供可靠中文语义） |
| 28 | `subjectTopCards` | `SubjectTopCards` | repeated | 业务字段 `subjectTopCards`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.PictureListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `extra` | `string` | - | 扩展数据 |
| 4 | `afterRpid` | `int64` | - | 业务字段 `afterRpid`（名称未提供可靠中文语义） |
| 5 | `mode` | `Mode` | - | 模式 |
| 6 | `pagination` | `com.bapis.bilibili.pagination.FeedPagination` | - | 业务字段 `pagination`（名称未提供可靠中文语义） |
| 7 | `sessionId` | `string` | - | 标识 |
| 8 | `mainListSessionId` | `string` | - | 列表 标识 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.PictureListResp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `replies` | `ReplyInfo` | repeated | 业务字段 `replies`（名称未提供可靠中文语义） |
| 2 | `paginationReply` | `com.bapis.bilibili.pagination.FeedPaginationReply` | - | 响应 |
| 3 | `sessionId` | `string` | - | 标识 |
| 4 | `reportParams` | `string` | - | 业务字段 `reportParams`（名称未提供可靠中文语义） |
| 5 | `contextFeature` | `string` | - | 业务字段 `contextFeature`（名称未提供可靠中文语义） |
| 6 | `paginationEndText` | `string` | - | 结束 文本 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.PreviewListReq`

中文说明：预览 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `cursor` | `CursorReq` | - | 游标 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.PreviewListReply`

中文说明：预览 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `CursorReply` | - | 游标 |
| 2 | `replies` | `ReplyInfo` | repeated | 业务字段 `replies`（名称未提供可靠中文语义） |
| 3 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |
| 4 | `upTop` | `ReplyInfo` | - | 业务字段 `upTop`（名称未提供可靠中文语义） |
| 5 | `adminTop` | `ReplyInfo` | - | 业务字段 `adminTop`（名称未提供可靠中文语义） |
| 6 | `voteTop` | `ReplyInfo` | - | 业务字段 `voteTop`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.ReplyInfoReq`

中文说明：响应 信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rpid` | `int64` | - | 业务字段 `rpid`（名称未提供可靠中文语义） |
| 2 | `scene` | `ReplyInfoScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `bizScene` | `BizScene` | - | 业务字段 `bizScene`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.ReplyInfoReply`

中文说明：响应 信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reply` | `ReplyInfo` | - | 响应 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.SearchItemReq`

中文说明：搜索 条目 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `SearchItemCursorReq` | - | 游标 |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int64` | - | 类型 |
| 4 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.SearchItemReply`

中文说明：搜索 条目 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `SearchItemCursorReply` | - | 游标 |
| 2 | `items` | `SearchItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 3 | `extra` | `SearchItemReplyExtraInfo` | - | 扩展数据 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.SearchItemPreHookReq`

中文说明：搜索 条目 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.SearchItemPreHookReply`

中文说明：搜索 条目 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `placeholderText` | `string` | - | 文本 |
| 2 | `backgroundText` | `string` | - | 文本 |
| 3 | `orderedType` | `SearchItemType` | repeated | 类型 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.ShareRepliesInfoReq`

中文说明：分享 信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rpids` | `int64` | repeated | 业务字段 `rpids`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.ShareRepliesInfoResp`

中文说明：分享 信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `infos` | `ShareReplyInfo` | repeated | 业务字段 `infos`（名称未提供可靠中文语义） |
| 2 | `fromTitle` | `string` | - | 来源 标题 |
| 3 | `fromUp` | `string` | - | 来源 |
| 4 | `fromPic` | `string` | - | 来源 |
| 5 | `url` | `string` | - | 地址 |
| 6 | `sloganPic` | `string` | - | 业务字段 `sloganPic`（名称未提供可靠中文语义） |
| 7 | `sloganText` | `string` | - | 文本 |
| 8 | `topic` | `ShareReplyTopic` | - | 话题 |
| 9 | `extra` | `ShareRepliesInfoResp_ShareExtra` | - | 扩展数据 |

### 请求 `com.bapis.bilibili.main.community.reply.v1.ShareReplyMaterialReq`

中文说明：分享 响应 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `rpid` | `int64` | - | 业务字段 `rpid`（名称未提供可靠中文语义） |
| 4 | `needTranslate` | `bool` | - | 业务字段 `needTranslate`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.ShareReplyMaterialResp`

中文说明：分享 响应 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `subjectMaterial` | `ShareReplyMaterialResp_SubjectMaterial` | - | 业务字段 `subjectMaterial`（名称未提供可靠中文语义） |
| 2 | `qrcodeUrl` | `string` | - | 地址 |
| 3 | `savePicText` | `string` | - | 文本 |
| 4 | `openAppText` | `string` | - | 应用 文本 |
| 5 | `shareTimeText` | `string` | - | 分享 时间 文本 |
| 6 | `biliLogoIcon` | `string` | - | 业务字段 `biliLogoIcon`（名称未提供可靠中文语义） |
| 7 | `extra` | `ShareReplyMaterialResp_ExtraData` | - | 扩展数据 |
| 8 | `fromSubjectTypeText` | `string` | - | 来源 类型 文本 |
| 9 | `openAppTextSubtitle` | `string` | - | 应用 文本 |
| 10 | `bgColor` | `string` | - | 颜色 |
| 11 | `contentBgColor` | `string` | - | 内容 颜色 |
| 12 | `contentAnchorImage` | `string` | - | 内容 图片 |
| 13 | `bgTopOverlayImage` | `string` | - | 图片 |
| 14 | `reply` | `ReplyInfo` | - | 响应 |
| 15 | `parentReply` | `ReplyInfo` | - | 响应 |
| 16 | `subjectControl` | `SubjectControl` | - | 业务字段 `subjectControl`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.SuggestEmotesReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.main.community.reply.v1.SuggestEmotesResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `emotes` | `Emote` | repeated | 业务字段 `emotes`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.main.community.reply.v1.UpdateSingleReplyNotificationConfigReq`

中文说明：更新 响应 配置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rpid` | `int64` | - | 业务字段 `rpid`（名称未提供可靠中文语义） |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `oid` | `int64` | - | 对象 ID |
| 4 | `pushSwitch` | `ReplyNotificationSwitch` | - | 业务字段 `pushSwitch`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.UpdateSingleReplyNotificationConfigResp`

中文说明：更新 响应 配置 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.main.community.reply.v1.UserCallbackReq`

中文说明：用户 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `scene` | `UserCallbackScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `action` | `UserCallbackAction` | - | 操作 |
| 4 | `oid` | `int64` | - | 对象 ID |
| 5 | `type` | `int64` | - | 类型 |
| 6 | `rpids` | `int64` | repeated | 业务字段 `rpids`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.main.community.reply.v1.UserCallbackReply`

中文说明：用户 响应。

该消息没有声明字段。
