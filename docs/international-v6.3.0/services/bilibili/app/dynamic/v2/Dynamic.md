# `bilibili.app.dynamic.v2.Dynamic`

中文说明：应用 动态 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AlumniDynamics` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.AlumniDynamicsReq` | `com.bapis.bilibili.app.dynamic.v2.AlumniDynamicsReply` | `AlumniDynamics` 调用 |
| `CampusBillboard` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReq` | `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReply` | `CampusBillboard` 调用 |
| `CampusBillBoard` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReq` | `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReply` | `CampusBillBoard` 调用 |
| `CampusBillboardInternal` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusBillboardInternalReq` | `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReply` | `CampusBillboardInternal` 调用 |
| `CampusEntryTab` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusEntryTabReq` | `com.bapis.bilibili.app.dynamic.v2.CampusEntryTabResp` | 标签页 |
| `CampusFeedback` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusFeedbackReq` | `com.bapis.bilibili.app.dynamic.v2.CampusFeedbackReply` | `CampusFeedback` 调用 |
| `CampusHomePages` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusHomePagesReq` | `com.bapis.bilibili.app.dynamic.v2.CampusHomePagesReply` | 首页 |
| `CampusMateLikeList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusMateLikeListReq` | `com.bapis.bilibili.app.dynamic.v2.CampusMateLikeListReply` | 点赞 列表 |
| `CampusMngDetail` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusMngDetailReq` | `com.bapis.bilibili.app.dynamic.v2.CampusMngDetailReply` | 详情 |
| `CampusMngQuizOperate` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusMngQuizOperateReq` | `com.bapis.bilibili.app.dynamic.v2.CampusMngQuizOperateReply` | `CampusMngQuizOperate` 调用 |
| `CampusMngSubmit` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusMngSubmitReq` | `com.bapis.bilibili.app.dynamic.v2.CampusMngSubmitReply` | `CampusMngSubmit` 调用 |
| `CampusRcmd` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusRcmdReq` | `com.bapis.bilibili.app.dynamic.v2.CampusRcmdReply` | `CampusRcmd` 调用 |
| `CampusRcmdFeed` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusRcmdFeedReq` | `com.bapis.bilibili.app.dynamic.v2.CampusRcmdFeedReply` | 信息流 |
| `CampusRecommend` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusRecommendReq` | `com.bapis.bilibili.app.dynamic.v2.CampusRecommendReply` | `CampusRecommend` 调用 |
| `CampusRedDot` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusRedDotReq` | `com.bapis.bilibili.app.dynamic.v2.CampusRedDotReply` | `CampusRedDot` 调用 |
| `CampusSquare` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusSquareReq` | `com.bapis.bilibili.app.dynamic.v2.CampusSquareReply` | `CampusSquare` 调用 |
| `CampusTopicRcmdFeed` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq` | `com.bapis.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply` | 话题 信息流 |
| `CooperationStaffList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.CooperationStaffListReq` | `com.bapis.bilibili.app.dynamic.v2.CooperationStaffListResp` | 列表 |
| `DynAdditionCommonFollow` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq` | `com.bapis.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply` | 关注 |
| `DynAll` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynAllReq` | `com.bapis.bilibili.app.dynamic.v2.DynAllReply` | 全部 |
| `DynAllPersonal` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynAllPersonalReq` | `com.bapis.bilibili.app.dynamic.v2.DynAllPersonalReply` | 全部 |
| `DynAllUpdOffset` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynAllUpdOffsetReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | 全部 偏移量 |
| `DynDetail` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynDetailReq` | `com.bapis.bilibili.app.dynamic.v2.DynDetailReply` | 详情 |
| `DynDetails` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynDetailsReq` | `com.bapis.bilibili.app.dynamic.v2.DynDetailsReply` | `DynDetails` 调用 |
| `DynFakeCard` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynFakeCardReq` | `com.bapis.bilibili.app.dynamic.v2.DynFakeCardReply` | 卡片 |
| `DynFriend` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynFriendReq` | `com.bapis.bilibili.app.dynamic.v2.DynFriendReply` | `DynFriend` 调用 |
| `DynLight` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynLightReq` | `com.bapis.bilibili.app.dynamic.v2.DynLightReply` | `DynLight` 调用 |
| `DynMixUpListSearch` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynMixUpListSearchReq` | `com.bapis.bilibili.app.dynamic.v2.DynMixUpListSearchReply` | 列表 搜索 |
| `DynMixUpListViewMore` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq` | `com.bapis.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply` | 列表 查看 |
| `DynRcmdUpExchange` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq` | `com.bapis.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply` | `DynRcmdUpExchange` 调用 |
| `DynSearch` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynSearchReq` | `com.bapis.bilibili.app.dynamic.v2.DynSearchReply` | 搜索 |
| `DynServerDetails` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynServerDetailsReq` | `com.bapis.bilibili.app.dynamic.v2.DynServerDetailsReply` | 服务端 |
| `DynSpace` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynSpaceReq` | `com.bapis.bilibili.app.dynamic.v2.DynSpaceRsp` | `DynSpace` 调用 |
| `DynSpaceSearchDetails` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq` | `com.bapis.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply` | 搜索 |
| `DynTab` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynTabReq` | `com.bapis.bilibili.app.dynamic.v2.DynTabReply` | 标签页 |
| `DynThumb` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynThumbReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | `DynThumb` 调用 |
| `DynUnLoginRcmd` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynRcmdReq` | `com.bapis.bilibili.app.dynamic.v2.DynRcmdReply` | `DynUnLoginRcmd` 调用 |
| `DynVideo` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynVideoReq` | `com.bapis.bilibili.app.dynamic.v2.DynVideoReply` | 视频 |
| `DynVideoPersonal` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynVideoPersonalReq` | `com.bapis.bilibili.app.dynamic.v2.DynVideoPersonalReply` | 视频 |
| `DynVideoUpdOffset` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | 视频 偏移量 |
| `DynVote` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.DynVoteReq` | `com.bapis.bilibili.app.dynamic.v2.DynVoteReply` | `DynVote` 调用 |
| `FeedFilter` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.FeedFilterReq` | `com.bapis.bilibili.app.dynamic.v2.FeedFilterReply` | 信息流 筛选 |
| `FetchTabSetting` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.NoReq` | `com.bapis.bilibili.app.dynamic.v2.FetchTabSettingReply` | 标签页 设置 |
| `HomeSubscribe` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.HomeSubscribeReq` | `com.bapis.bilibili.app.dynamic.v2.HomeSubscribeReply` | 首页 |
| `LbsPoi` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.LbsPoiReq` | `com.bapis.bilibili.app.dynamic.v2.LbsPoiReply` | `LbsPoi` 调用 |
| `LegacyTopicFeed` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.LegacyTopicFeedReq` | `com.bapis.bilibili.app.dynamic.v2.LegacyTopicFeedReply` | 话题 信息流 |
| `LikeList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.LikeListReq` | `com.bapis.bilibili.app.dynamic.v2.LikeListReply` | 点赞 列表 |
| `OfficialAccounts` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.OfficialAccountsReq` | `com.bapis.bilibili.app.dynamic.v2.OfficialAccountsReply` | `OfficialAccounts` 调用 |
| `OfficialDynamics` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.OfficialDynamicsReq` | `com.bapis.bilibili.app.dynamic.v2.OfficialDynamicsReply` | `OfficialDynamics` 调用 |
| `QuickConsumeMoreAvatarList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.QuickConsumeMoreAvatarListReq` | `com.bapis.bilibili.app.dynamic.v2.QuickConsumeMoreAvatarListReply` | 头像 列表 |
| `ReactionList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.ReactionListReq` | `com.bapis.bilibili.app.dynamic.v2.ReactionListReply` | 列表 |
| `RepostList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.RepostListReq` | `com.bapis.bilibili.app.dynamic.v2.RepostListRsp` | 列表 |
| `SchoolRecommend` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SchoolRecommendReq` | `com.bapis.bilibili.app.dynamic.v2.SchoolRecommendReply` | `SchoolRecommend` 调用 |
| `SchoolSearch` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SchoolSearchReq` | `com.bapis.bilibili.app.dynamic.v2.SchoolSearchReply` | 搜索 |
| `SetDecision` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SetDecisionReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | `SetDecision` 调用 |
| `SetRecentCampus` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SetRecentCampusReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | `SetRecentCampus` 调用 |
| `SubscribeCampus` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SubscribeCampusReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | `SubscribeCampus` 调用 |
| `SubscriptionClick` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.SubscriptionClickReq` | `com.bapis.bilibili.app.dynamic.v2.SubscriptionClickResp` | 点击 |
| `TopicList` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.TopicListReq` | `com.bapis.bilibili.app.dynamic.v2.TopicListReply` | 话题 列表 |
| `TopicSquare` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.TopicSquareReq` | `com.bapis.bilibili.app.dynamic.v2.TopicSquareReply` | 话题 |
| `UnfollowMatch` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.UnfollowMatchReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | `UnfollowMatch` 调用 |
| `UpdateTabSetting` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.UpdateTabSettingReq` | `com.bapis.bilibili.app.dynamic.v2.NoReply` | 更新 标签页 设置 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.dynamic.v2.AlumniDynamicsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `firstTime` | `int32` | - | 时间 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `localTime` | `int32` | - | 时间 |
| 5 | `page` | `int32` | - | 分页 |
| 6 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.AlumniDynamicsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `versionCode` | `string` | - | 版本 状态码 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusBillBoardReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `title` | `string` | - | 标题 |
| 2 | `helpUri` | `string` | - | URI |
| 3 | `campusName` | `string` | - | 名称 |
| 4 | `buildTime` | `int64` | - | 时间 |
| 5 | `versionCode` | `string` | - | 版本 状态码 |
| 6 | `list` | `OfficialItem` | repeated | 列表 |
| 7 | `shareUri` | `string` | - | 分享 URI |
| 8 | `bindNotice` | `int32` | - | 业务字段 `bindNotice`（名称未提供可靠中文语义） |
| 9 | `updateToast` | `string` | - | 更新 |
| 10 | `campusId` | `int64` | - | 标识 |
| 11 | `openProgress` | `CampusFeatureProgress` | - | 进度 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusBillboardInternalReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `campusId` | `int64` | - | 标识 |
| 3 | `versionCode` | `string` | - | 版本 状态码 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusEntryTabReq`

中文说明：标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusEntryTabResp`

中文说明：标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `entryType` | `CampusEntryType` | - | 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusFeedbackReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `infos` | `CampusFeedbackInfo` | repeated | 业务字段 `infos`（名称未提供可靠中文语义） |
| 2 | `from` | `int32` | - | 来源 |
| 3 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusFeedbackReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusHomePagesReq`

中文说明：首页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 4 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 6 | `pageType` | `CampusHomePageType` | - | 分页 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusHomePagesReply`

中文说明：首页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `top` | `CampusRcmdTop` | - | 业务字段 `top`（名称未提供可靠中文语义） |
| 2 | `campusTop` | `CampusTop` | - | 业务字段 `campusTop`（名称未提供可靠中文语义） |
| 3 | `pageType` | `int32` | - | 分页 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusMateLikeListReq`

中文说明：点赞 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicId` | `int64` | - | 动态 标识 |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusMateLikeListReply`

中文说明：点赞 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `ModuleAuthor` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusMngDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusMngDetailReply`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CampusMngItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `topHintBarMsg` | `string` | - | 业务字段 `topHintBarMsg`（名称未提供可靠中文语义） |
| 3 | `bottomSubmitHintMsg` | `string` | - | 业务字段 `bottomSubmitHintMsg`（名称未提供可靠中文语义） |
| 4 | `campusId` | `int64` | - | 标识 |
| 5 | `campusName` | `string` | - | 名称 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusMngQuizOperateReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `action` | `CampusMngQuizAction` | - | 操作 |
| 2 | `campusId` | `int64` | - | 标识 |
| 3 | `quiz` | `CampusMngQuizDetail` | repeated | 业务字段 `quiz`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusMngQuizOperateReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 2 | `quiz` | `CampusMngQuizDetail` | repeated | 业务字段 `quiz`（名称未提供可靠中文语义） |
| 3 | `quizTotal` | `int64` | - | 总数 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusMngSubmitReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `modifiedItems` | `CampusMngItem` | repeated | 业务字段 `modifiedItems`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusMngSubmitReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusRcmdReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 4 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 6 | `fromType` | `CampusReqFromType` | - | 来源 类型 |
| 7 | `pageType` | `CampusHomePageType` | - | 分页 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusRcmdReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `top` | `CampusRcmdTop` | - | 业务字段 `top`（名称未提供可靠中文语义） |
| 2 | `rcmd` | `CampusRcmdInfo` | - | 业务字段 `rcmd`（名称未提供可靠中文语义） |
| 3 | `campusTop` | `CampusTop` | - | 业务字段 `campusTop`（名称未提供可靠中文语义） |
| 4 | `pageType` | `int32` | - | 分页 类型 |
| 5 | `jumpHomePop` | `int32` | - | 跳转 首页 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusRcmdFeedReq`

中文说明：信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `firstTime` | `int32` | - | 时间 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `localTime` | `int32` | - | 时间 |
| 5 | `page` | `int32` | - | 分页 |
| 6 | `scroll` | `int32` | - | 业务字段 `scroll`（名称未提供可靠中文语义） |
| 7 | `viewDynId` | `string` | - | 查看 标识 |
| 8 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusRcmdFeedReply`

中文说明：信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 3 | `guideBar` | `GuideBarInfo` | - | 业务字段 `guideBar`（名称未提供可靠中文语义） |
| 4 | `hasMore` | `bool` | - | 是否具有 |
| 5 | `update` | `bool` | - | 更新 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusRecommendReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `pageNo` | `int64` | - | 分页 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `from` | `CampusRcmdReqFrom` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusRecommendReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `RcmdItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusRedDotReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusRedDotReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `redDot` | `int32` | - | 业务字段 `redDot`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusSquareReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 3 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusSquareReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `title` | `string` | - | 标题 |
| 2 | `list` | `RcmdCampusBrief` | repeated | 列表 |
| 3 | `button` | `CampusLabel` | - | 业务字段 `button`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq`

中文说明：话题 信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `localTime` | `int32` | - | 时间 |
| 5 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply`

中文说明：话题 信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `offset` | `string` | - | 偏移量 |
| 5 | `joinDiscuss` | `IconButton` | - | 业务字段 `joinDiscuss`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.CooperationStaffListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `string` | - | 对象 ID |

### 响应 `com.bapis.bilibili.app.dynamic.v2.CooperationStaffListResp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `upList` | `CooperationUpInfo` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq`

中文说明：关注 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `status` | `AdditionalButtonStatus` | - | 状态 |
| 2 | `dynId` | `string` | - | 标识 |
| 3 | `cardType` | `string` | - | 卡片 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply`

中文说明：关注 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `status` | `AdditionalButtonStatus` | - | 状态 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynAllReq`

中文说明：全部 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `updateBaseline` | `string` | - | 更新 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `refreshType` | `Refresh` | - | 类型 |
| 5 | `playurlParam` | `PlayurlParam` | - | 参数 |
| 6 | `assistBaseline` | `string` | - | 业务字段 `assistBaseline`（名称未提供可靠中文语义） |
| 7 | `localTime` | `int32` | - | 时间 |
| 8 | `rcmdUpsParam` | `RcmdUPsParam` | - | 参数 |
| 9 | `adParam` | `AdParam` | - | 广告 参数 |
| 10 | `coldStart` | `int32` | - | 开始 |
| 11 | `from` | `string` | - | 来源 |
| 12 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 13 | `tabRecallUid` | `int64` | - | 标签页 用户 ID |
| 14 | `tabRecallType` | `StyleType` | - | 标签页 类型 |
| 15 | `tabRecallExtra` | `string` | - | 标签页 扩展数据 |
| 16 | `reqSortOption` | `FeedSortOptionReq` | - | 请求 排序 |
| 17 | `bubbleRecallExtraWhenShow` | `string` | - | 扩展数据 |
| 18 | `sessionId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynAllReply`

中文说明：全部 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicList` | `DynamicList` | - | 动态 列表 |
| 2 | `upList` | `CardVideoUpList` | - | 列表 |
| 3 | `topicList` | `TopicList` | - | 话题 列表 |
| 4 | `unfollow` | `Unfollow` | - | 业务字段 `unfollow`（名称未提供可靠中文语义） |
| 5 | `regionRcmd` | `DynRegionRcmd` | - | 分区 |
| 6 | `config` | `Config` | - | 配置 |
| 7 | `sortConfig` | `FeedSortConfig` | - | 排序 配置 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynAllPersonalReq`

中文说明：全部 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `isPreload` | `int32` | - | 是否 |
| 5 | `playurlParam` | `PlayurlParam` | - | 参数 |
| 6 | `localTime` | `int32` | - | 时间 |
| 7 | `footprint` | `string` | - | 业务字段 `footprint`（名称未提供可靠中文语义） |
| 8 | `from` | `string` | - | 来源 |
| 9 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 10 | `personalExtra` | `string` | - | 扩展数据 |
| 11 | `adParam` | `AdParam` | - | 广告 参数 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynAllPersonalReply`

中文说明：全部 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `readOffset` | `string` | - | 偏移量 |
| 5 | `relation` | `Relation` | - | 关系 |
| 6 | `additionUp` | `TopAdditionUP` | - | 业务字段 `additionUp`（名称未提供可靠中文语义） |
| 7 | `title` | `string` | - | 标题 |
| 8 | `titleSub` | `string` | - | 标题 订阅 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynAllUpdOffsetReq`

中文说明：全部 偏移量 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `readOffset` | `string` | - | 偏移量 |
| 3 | `footprint` | `string` | - | 业务字段 `footprint`（名称未提供可靠中文语义） |
| 4 | `personalExtra` | `string` | - | 扩展数据 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.NoReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynDetailReq`

中文说明：详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `dynamicId` | `string` | - | 动态 标识 |
| 3 | `dynType` | `int64` | - | 类型 |
| 4 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 5 | `adParam` | `AdParam` | - | 广告 参数 |
| 6 | `from` | `string` | - | 来源 |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 8 | `shareId` | `string` | - | 分享 标识 |
| 9 | `shareMode` | `int32` | - | 分享 模式 |
| 10 | `localTime` | `int32` | - | 时间 |
| 11 | `pattern` | `string` | - | 业务字段 `pattern`（名称未提供可靠中文语义） |
| 12 | `config` | `Config` | - | 配置 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynDetailReply`

中文说明：详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `DynamicItem` | - | 条目 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynDetailsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicIds` | `string` | - | 动态 |
| 2 | `playurlParam` | `PlayurlParam` | - | 参数 |
| 3 | `localTime` | `int32` | - | 时间 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `config` | `Config` | - | 配置 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynDetailsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynFakeCardReq`

中文说明：卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `content` | `string` | - | 内容 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynFakeCardReply`

中文说明：卡片 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `DynamicItem` | - | 条目 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynFriendReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `localTime` | `int32` | - | 时间 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynFriendReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynList` | `DynamicItem` | repeated | 列表 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `offset` | `string` | - | 偏移量 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynLightReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `historyOffset` | `string` | - | 历史记录 偏移量 |
| 2 | `page` | `int32` | - | 分页 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `localTime` | `int32` | - | 时间 |
| 6 | `fromType` | `LightFromType` | - | 来源 类型 |
| 7 | `fakeUid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynLightReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicList` | `DynamicList` | - | 动态 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynMixUpListSearchReq`

中文说明：列表 搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `name` | `string` | - | 名称 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynMixUpListSearchReply`

中文说明：列表 搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `MixUpListItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq`

中文说明：列表 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sortType` | `int32` | - | 排序 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply`

中文说明：列表 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `MixUpListItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `searchDefaultText` | `string` | - | 搜索 文本 |
| 3 | `sortTypes` | `SortType` | repeated | 排序 |
| 4 | `showMoreSortTypes` | `bool` | - | 排序 |
| 5 | `defaultSortType` | `int32` | - | 排序 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `dislikets` | `int64` | - | 业务字段 `dislikets`（名称未提供可靠中文语义） |
| 3 | `from` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `unfollow` | `Unfollow` | - | 业务字段 `unfollow`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynSearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `page` | `int32` | - | 分页 |
| 3 | `localTime` | `int32` | - | 时间 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynSearchReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `channelInfo` | `SearchChannel` | - | 频道 信息 |
| 2 | `searchTopic` | `SearchTopic` | - | 搜索 话题 |
| 3 | `searchInfo` | `SearchInfo` | - | 搜索 信息 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynServerDetailsReq`

中文说明：服务端 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicIds` | `int64` | repeated | 动态 |
| 2 | `localTime` | `int32` | - | 时间 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `mobiApp` | `string` | - | 应用 |
| 5 | `device` | `string` | - | 设备 |
| 6 | `buvid` | `string` | - | 设备标识 |
| 7 | `build` | `int64` | - | 业务字段 `build`（名称未提供可靠中文语义） |
| 8 | `mid` | `int64` | - | 用户 ID |
| 9 | `platform` | `string` | - | 业务字段 `platform`（名称未提供可靠中文语义） |
| 10 | `isMaster` | `bool` | - | 是否 |
| 11 | `topDynamicIds` | `int64` | repeated | 动态 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynServerDetailsReply`

中文说明：服务端 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `map<int64, DynamicItem>` | map | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynSpaceReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `historyOffset` | `string` | - | 历史记录 偏移量 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `localTime` | `int32` | - | 时间 |
| 5 | `page` | `int64` | - | 分页 |
| 6 | `from` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynSpaceRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `historyOffset` | `string` | - | 历史记录 偏移量 |
| 3 | `hasMore` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicIds` | `int64` | repeated | 动态 |
| 2 | `searchWords` | `string` | repeated | 搜索 |
| 3 | `localTime` | `int32` | - | 时间 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `mobiApp` | `string` | - | 应用 |
| 6 | `device` | `string` | - | 设备 |
| 7 | `buvid` | `string` | - | 设备标识 |
| 8 | `build` | `int64` | - | 业务字段 `build`（名称未提供可靠中文语义） |
| 9 | `mid` | `int64` | - | 用户 ID |
| 10 | `platform` | `string` | - | 业务字段 `platform`（名称未提供可靠中文语义） |
| 11 | `ip` | `string` | - | IP 地址 |
| 12 | `netType` | `NetworkType` | - | 类型 |
| 13 | `tfType` | `TFType` | - | 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `map<int64, DynamicItem>` | map | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynTabReq`

中文说明：标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagersMode` | `int32` | - | 模式 |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |
| 3 | `lastScreenTab` | `DynScreenTabReq` | - | 标签页 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynTabReply`

中文说明：标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynTab` | `DynTab` | repeated | 标签页 |
| 2 | `screenTab` | `DynScreenTab` | repeated | 标签页 |
| 3 | `abTestVars` | `map<string, string>` | map | 测试 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynThumbReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `dynId` | `string` | - | 标识 |
| 3 | `dynType` | `int64` | - | 类型 |
| 4 | `rid` | `string` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 5 | `type` | `ThumbType` | - | 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynRcmdReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 2 | `localTime` | `int32` | - | 时间 |
| 3 | `fakeUid` | `int64` | - | 用户 ID |
| 4 | `isRefresh` | `bool` | - | 是否 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynRcmdReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `regionRcmd` | `DynRegionRcmd` | - | 分区 |
| 2 | `dynamicList` | `DynamicList` | - | 动态 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynVideoReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `updateBaseline` | `string` | - | 更新 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `refreshType` | `Refresh` | - | 类型 |
| 5 | `playurlParam` | `PlayurlParam` | - | 参数 |
| 6 | `assistBaseline` | `string` | - | 业务字段 `assistBaseline`（名称未提供可靠中文语义） |
| 7 | `localTime` | `int32` | - | 时间 |
| 8 | `from` | `string` | - | 来源 |
| 9 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 10 | `reqSortOption` | `FeedSortOptionReq` | - | 请求 排序 |
| 11 | `sessionId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynVideoReply`

中文说明：视频 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicList` | `CardVideoDynList` | - | 动态 列表 |
| 2 | `videoUpList` | `CardVideoUpList` | - | 视频 列表 |
| 3 | `videoFollowList` | `CardVideoFollowList` | - | 视频 关注 列表 |
| 4 | `sortConfig` | `FeedSortConfig` | - | 排序 配置 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynVideoPersonalReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `isPreload` | `int32` | - | 是否 |
| 5 | `playurlParam` | `PlayurlParam` | - | 参数 |
| 6 | `localTime` | `int32` | - | 时间 |
| 7 | `footprint` | `string` | - | 业务字段 `footprint`（名称未提供可靠中文语义） |
| 8 | `from` | `string` | - | 来源 |
| 9 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 10 | `pegasusAvid` | `int64` | - | AV视频 ID |
| 11 | `personalExtra` | `string` | - | 扩展数据 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynVideoPersonalReply`

中文说明：视频 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `readOffset` | `string` | - | 偏移量 |
| 5 | `relation` | `Relation` | - | 关系 |
| 6 | `additionUp` | `TopAdditionUP` | - | 业务字段 `additionUp`（名称未提供可靠中文语义） |
| 7 | `title` | `string` | - | 标题 |
| 8 | `titleSub` | `string` | - | 标题 订阅 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq`

中文说明：视频 偏移量 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `readOffset` | `string` | - | 偏移量 |
| 3 | `footprint` | `string` | - | 业务字段 `footprint`（名称未提供可靠中文语义） |
| 4 | `personalExtra` | `string` | - | 扩展数据 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.DynVoteReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `voteId` | `int64` | - | 标识 |
| 2 | `votes` | `int64` | repeated | 业务字段 `votes`（名称未提供可靠中文语义） |
| 3 | `status` | `VoteStatus` | - | 状态 |
| 4 | `dynamicId` | `string` | - | 动态 标识 |
| 5 | `share` | `bool` | - | 分享 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.DynVoteReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `item` | `AdditionVote2` | - | 条目 |
| 2 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.FeedFilterReq`

中文说明：信息流 筛选 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `tab` | `string` | - | 标签页 |
| 3 | `localTime` | `int32` | - | 时间 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 5 | `adParam` | `AdParam` | - | 广告 参数 |
| 6 | `coldStart` | `int32` | - | 开始 |
| 7 | `page` | `int64` | - | 分页 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.FeedFilterReply`

中文说明：信息流 筛选 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `list` | `DynamicItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.NoReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.dynamic.v2.FetchTabSettingReply`

中文说明：标签页 设置 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `status` | `HomePageTabSttingStatus` | - | 状态 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.HomeSubscribeReq`

中文说明：首页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.HomeSubscribeReply`

中文说明：首页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `online` | `CampusOnlineStatus` | - | 业务字段 `online`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.LbsPoiReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `poi` | `string` | - | 业务字段 `poi`（名称未提供可靠中文语义） |
| 2 | `type` | `int64` | - | 类型 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `refreshType` | `Refresh` | - | 类型 |
| 5 | `localTime` | `int32` | - | 时间 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.LbsPoiReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hasMore` | `bool` | - | 是否具有 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `detail` | `LbsPoiDetail` | - | 详情 |
| 4 | `list` | `DynamicItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.LegacyTopicFeedReq`

中文说明：话题 信息流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `topicName` | `string` | - | 话题 名称 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `sortType` | `SortType` | - | 排序 类型 |
| 5 | `cardFilter` | `SortType` | - | 卡片 筛选 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.LegacyTopicFeedReply`

中文说明：话题 信息流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `supportedSortTypes` | `SortType` | repeated | 排序 |
| 5 | `feedCardFilters` | `SortType` | repeated | 信息流 卡片 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.LikeListReq`

中文说明：点赞 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicId` | `string` | - | 动态 标识 |
| 2 | `dynType` | `int64` | - | 类型 |
| 3 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 4 | `uidOffset` | `int64` | - | 用户 ID 偏移量 |
| 5 | `page` | `int32` | - | 分页 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.LikeListReply`

中文说明：点赞 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `ModuleAuthor` | repeated | 列表 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `totalCount` | `int64` | - | 总数 数量 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.OfficialAccountsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `offset` | `int64` | - | 偏移量 |
| 4 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.OfficialAccountsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `OfficialAccountInfo` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `offset` | `int64` | - | 偏移量 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.OfficialDynamicsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `offset` | `int64` | - | 偏移量 |
| 4 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.OfficialDynamicsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `OfficialItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `offset` | `int64` | - | 偏移量 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.QuickConsumeMoreAvatarListReq`

中文说明：头像 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.QuickConsumeMoreAvatarListReply`

中文说明：头像 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `upList` | `UpListItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.ReactionListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicId` | `int64` | - | 动态 标识 |
| 2 | `dynType` | `int64` | - | 类型 |
| 3 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 4 | `offset` | `string` | - | 偏移量 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.ReactionListReply`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `title` | `string` | - | 标题 |
| 2 | `reactionList` | `ReactionListItem` | repeated | 列表 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `hasMore` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.RepostListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamicId` | `string` | - | 动态 标识 |
| 2 | `dynType` | `int64` | - | 类型 |
| 3 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 4 | `offset` | `string` | - | 偏移量 |
| 5 | `from` | `string` | - | 来源 |
| 6 | `repostType` | `RepostType` | - | 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.RepostListRsp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `totalCount` | `int64` | - | 总数 数量 |
| 5 | `repostType` | `RepostType` | - | 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SchoolRecommendReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `lat` | `float` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 2 | `lng` | `float` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 3 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.SchoolRecommendReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CampusInfo` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SchoolSearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.SchoolSearchReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CampusInfo` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `toast` | `SearchToast` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SetDecisionReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `result` | `int32` | - | 结果 |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SetRecentCampusReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SubscribeCampusReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `campusName` | `string` | - | 名称 |
| 3 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.SubscriptionClickReq`

中文说明：点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `subscribeParam` | `string` | - | 参数 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.SubscriptionClickResp`

中文说明：点击 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v2.TopicListReq`

中文说明：话题 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.TopicListReply`

中文说明：话题 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `TopicItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `hasMore` | `bool` | - | 是否具有 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `createTopicBtn` | `IconButton` | - | 创建 话题 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.TopicSquareReq`

中文说明：话题 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `fromType` | `CampusReqFromType` | - | 来源 类型 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.TopicSquareReply`

中文说明：话题 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `info` | `TopicSquareInfo` | - | 信息 |

### 请求 `com.bapis.bilibili.app.dynamic.v2.UnfollowMatchReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cid` | `int64` | - | 分 P ID |

### 请求 `com.bapis.bilibili.app.dynamic.v2.UpdateTabSettingReq`

中文说明：更新 标签页 设置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `status` | `HomePageTabSttingStatus` | - | 状态 |
