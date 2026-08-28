# `bilibili.app.topic.v1.Topic`

中文说明：应用 话题 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ReportUserCloseFeedCard` | 一元调用 | `com.bapis.bilibili.app.topic.v1.ReportUserCloseFeedCardReq` | `google.protobuf.Empty` | 用户 信息流 卡片 |
| `ReportUserRatingFeedCardChoice` | 一元调用 | `com.bapis.bilibili.app.topic.v1.ReportUserRatingFeedCardChoiceReq` | `google.protobuf.Empty` | 用户 信息流 卡片 |
| `SetTopTopicRes` | 一元调用 | `com.bapis.bilibili.app.topic.v1.SetTopTopicResReq` | `com.bapis.bilibili.app.topic.v1.SetTopTopicResReply` | 话题 |
| `TopicDetailsAll` | 一元调用 | `com.bapis.bilibili.app.topic.v1.TopicDetailsAllReq` | `com.bapis.bilibili.app.topic.v1.TopicDetailsAllReply` | 话题 全部 |
| `TopicDetailsFold` | 一元调用 | `com.bapis.bilibili.app.topic.v1.TopicDetailsFoldReq` | `com.bapis.bilibili.app.topic.v1.TopicDetailsFoldReply` | 话题 |
| `TopicMergedResource` | 一元调用 | `com.bapis.bilibili.app.topic.v1.TopicMergedResourceReq` | `com.bapis.bilibili.app.topic.v1.TopicMergedResourceReply` | 话题 资源 |
| `TopicReserveButtonClick` | 一元调用 | `com.bapis.bilibili.app.topic.v1.TopicReserveButtonClickReq` | `com.bapis.bilibili.app.topic.v1.TopicReserveButtonClickReply` | 话题 点击 |
| `TopicSetDetails` | 一元调用 | `com.bapis.bilibili.app.topic.v1.TopicSetDetailsReq` | `com.bapis.bilibili.app.topic.v1.TopicSetDetailsReply` | 话题 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.topic.v1.ReportUserCloseFeedCardReq`

中文说明：用户 信息流 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `feedCardType` | `FeedCardType` | - | 信息流 卡片 类型 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.app.topic.v1.ReportUserRatingFeedCardChoiceReq`

中文说明：用户 信息流 卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `optionType` | `FeedCardUserRatingOptionType` | - | 类型 |

### 请求 `com.bapis.bilibili.app.topic.v1.SetTopTopicResReq`

中文说明：话题 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `dynamicId` | `int64` | - | 动态 标识 |
| 3 | `optType` | `ResSetTopOptType` | - | 类型 |
| 4 | `type` | `TopicCardType` | - | 类型 |

### 响应 `com.bapis.bilibili.app.topic.v1.SetTopTopicResReply`

中文说明：话题 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.topic.v1.TopicDetailsAllReq`

中文说明：话题 全部 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `sortBy` | `int64` | - | 排序 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `pageSize` | `int32` | - | 分页 大小 |
| 5 | `localTime` | `int32` | - | 时间 |
| 6 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 7 | `needRefresh` | `int32` | - | 业务字段 `needRefresh`（名称未提供可靠中文语义） |
| 8 | `source` | `string` | - | 来源 |
| 9 | `topicDetailsExtMode` | `TopicDetailsExtMode` | - | 话题 扩展 模式 |
| 10 | `fromSpmid` | `string` | - | 来源 |
| 11 | `extra` | `map<string, string>` | map | 扩展数据 |
| 12 | `isTopDynamic` | `bool` | - | 是否 动态 |

### 响应 `com.bapis.bilibili.app.topic.v1.TopicDetailsAllReply`

中文说明：话题 全部 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `detailsTopInfo` | `DetailsTopInfo` | - | 信息 |
| 2 | `topicActivities` | `TopicActivities` | - | 话题 |
| 3 | `topicCardList` | `TopicCardList` | - | 话题 卡片 列表 |
| 4 | `functionalCard` | `FunctionalCard` | - | 卡片 |
| 5 | `pubLayer` | `PubLayer` | - | 发布 |
| 6 | `timeLineResource` | `TimeLineResource` | - | 时间 资源 |
| 7 | `topicServerConfig` | `TopicServerConfig` | - | 话题 服务端 配置 |
| 8 | `topicOnline` | `TopicOnline` | - | 话题 |
| 9 | `topicTopCards` | `TopicTopCard` | repeated | 话题 |

### 请求 `com.bapis.bilibili.app.topic.v1.TopicDetailsFoldReq`

中文说明：话题 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `pageSize` | `int32` | - | 分页 大小 |
| 4 | `localTime` | `int32` | - | 时间 |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 6 | `fromSortBy` | `int64` | - | 来源 排序 |

### 响应 `com.bapis.bilibili.app.topic.v1.TopicDetailsFoldReply`

中文说明：话题 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicCardList` | `TopicCardList` | - | 话题 卡片 列表 |
| 2 | `foldCount` | `int64` | - | 数量 |

### 请求 `com.bapis.bilibili.app.topic.v1.TopicMergedResourceReq`

中文说明：话题 资源 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `type` | `int32` | - | 类型 |
| 3 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 4 | `mergeType` | `int32` | - | 类型 |
| 5 | `offset` | `string` | - | 偏移量 |
| 6 | `localTime` | `int32` | - | 时间 |
| 7 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 8 | `fromSortBy` | `int64` | - | 来源 排序 |

### 响应 `com.bapis.bilibili.app.topic.v1.TopicMergedResourceReply`

中文说明：话题 资源 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicCardList` | `TopicCardList` | - | 话题 卡片 列表 |

### 请求 `com.bapis.bilibili.app.topic.v1.TopicReserveButtonClickReq`

中文说明：话题 点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `reserveId` | `int64` | - | 标识 |
| 3 | `reserveTotal` | `int64` | - | 总数 |
| 4 | `curBtnStatus` | `ReserveButtonStatus` | - | 状态 |

### 响应 `com.bapis.bilibili.app.topic.v1.TopicReserveButtonClickReply`

中文说明：话题 点击 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `finalBtnStatus` | `ReserveButtonStatus` | - | 状态 |
| 2 | `btnMode` | `ReserveButtonMode` | - | 模式 |
| 3 | `reserveUpdate` | `int64` | - | 更新 |
| 4 | `descUpdate` | `string` | - | 描述 更新 |
| 5 | `hasActivity` | `bool` | - | 是否具有 活动 |
| 6 | `activityUrl` | `string` | - | 活动 地址 |
| 7 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 8 | `reserveCalendarInfo` | `ReserveCalendarInfo` | - | 信息 |

### 请求 `com.bapis.bilibili.app.topic.v1.TopicSetDetailsReq`

中文说明：话题 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `setId` | `int64` | - | 标识 |
| 2 | `sortBy` | `int64` | - | 排序 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `pageSize` | `int32` | - | 分页 大小 |

### 响应 `com.bapis.bilibili.app.topic.v1.TopicSetDetailsReply`

中文说明：话题 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicSetHeadInfo` | `TopicSetHeadInfo` | - | 话题 信息 |
| 2 | `topicInfo` | `TopicInfo` | repeated | 话题 信息 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `offset` | `string` | - | 偏移量 |
| 5 | `sortCfg` | `TopicSetSortCfg` | - | 排序 |
