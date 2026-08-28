# `com.bapis.bilibili.dynamic.interfaces.feed.v1.Feed`

中文说明：动态 信息流 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AddDynamicReport` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.AddDynamicReportReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.AddDynamicReportRsp` | 添加 动态 |
| `ArticleHomePageCategories` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ArticleHomePageCategoriesReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ArticleHomePageCategoriesRsp` | 首页 分页 |
| `AtList` | 一元调用 | `com.bapis.bilibili.dynamic.common.AtListReq` | `com.bapis.bilibili.dynamic.common.AtListRsp` | 列表 |
| `AtSearch` | 一元调用 | `com.bapis.bilibili.dynamic.common.AtSearchReq` | `com.bapis.bilibili.dynamic.common.AtListRsp` | 搜索 |
| `AttachCardButton` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.AttachCardButtonReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.AttachCardButtonRsp` | 卡片 |
| `Config` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ConfigReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ConfigRsp` | 配置 |
| `CreateDyn` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreateDynReq` | `com.bapis.bilibili.dynamic.common.CreateResp` | 创建 |
| `CreateInitCheck` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreateInitCheckReq` | `com.bapis.bilibili.dynamic.common.CreateCheckResp` | 创建 校验 |
| `CreatePageInfos` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePageInfosReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePageInfosRsp` | 创建 分页 |
| `CreatePermissionButtonClick` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePermissionButtonClickReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePermissionButtonClickRsp` | 创建 点击 |
| `CreatePlusButtonClick` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePlusButtonClickReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePlusButtonClickRsp` | 创建 点击 |
| `DynamicButtonClick` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicButtonClickReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicButtonClickRsp` | 动态 点击 |
| `DynamicRepost` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicRepostReq` | `com.bapis.bilibili.dynamic.common.CreateResp` | 动态 |
| `DynamicThumb` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicThumbReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicThumbRsp` | 动态 |
| `DynMetricsActiveReport` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynMetricsActiveReportReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynMetricsActiveReportRsp` | `DynMetricsActiveReport` 调用 |
| `DynPrivatePubSetting` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynPrivatePubSettingReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynPrivatePubSettingRsp` | 发布 设置 |
| `EditDyn` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.EditDynReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.EditDynRsp` | 编辑 |
| `GetEditDynInfo` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoRsp` | 获取 编辑 信息 |
| `GetEditDynInfoWeb` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoWebReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoWebRsp` | 获取 编辑 信息 网页 |
| `GetUidByName` | 一元调用 | `com.bapis.bilibili.dynamic.common.GetUidByNameReq` | `com.bapis.bilibili.dynamic.common.GetUidByNameRsp` | 获取 用户 ID 名称 |
| `GoodsAttachCardPreview` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GoodsAttachCardPreviewReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.GoodsAttachCardPreviewRsp` | 卡片 预览 |
| `HomeBubbleReport` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.HomeBubbleReportReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.HomeBubbleReportRsp` | 首页 |
| `HotSearch` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.HotSearchReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.HotSearchRsp` | 搜索 |
| `ICreateGoodsReplySync` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ICreateGoodsReplySyncReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ICreateResp` | 创建 响应 |
| `NearbyPoiList` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.NearbyPoiListReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.NearbyPoiListRsp` | 列表 |
| `RecommendPoi` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RecommendPoiReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RecommendPoiRsp` | `RecommendPoi` 调用 |
| `ReserveButtonClick` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ReserveButtonClickReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.ReserveButtonClickResp` | 点击 |
| `RmDyn` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmDynReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmDynRsp` | `RmDyn` 调用 |
| `RmSpaceTop` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmSpaceTopReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmSpaceTopRsp` | `RmSpaceTop` 调用 |
| `SearchPoiList` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SearchPoiListReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SearchPoiListRsp` | 搜索 列表 |
| `SetSpaceTop` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SetSpaceTopReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SetSpaceTopRsp` | `SetSpaceTop` 调用 |
| `SubmitCheck` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SubmitCheckReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SubmitCheckRsp` | 校验 |
| `Suggest` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SuggestReq` | `com.bapis.bilibili.dynamic.interfaces.feed.v1.SuggestRsp` | `Suggest` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.AddDynamicReportReq`

中文说明：添加 动态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `accusedUid` | `int64` | - | 用户 ID |
| 2 | `dynamicId` | `string` | - | 动态 标识 |
| 3 | `reasonType` | `int64` | - | 原因 类型 |
| 4 | `reasonDesc` | `string` | - | 原因 描述 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.AddDynamicReportRsp`

中文说明：添加 动态 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ArticleHomePageCategoriesReq`

中文说明：首页 分页 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ArticleHomePageCategoriesRsp`

中文说明：首页 分页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `categories` | `Category` | repeated | 业务字段 `categories`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.common.AtListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.dynamic.common.AtListRsp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `groups` | `AtGroup` | repeated | 业务字段 `groups`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.common.AtSearchReq`

中文说明：搜索 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.AttachCardButtonReq`

中文说明：卡片 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `curBtnStatus` | `int32` | - | 状态 |
| 2 | `dynamicId` | `int64` | - | 动态 标识 |
| 3 | `attachCardType` | `com.bapis.bilibili.dynamic.common.AttachCardType` | - | 卡片 类型 |
| 4 | `spmId` | `string` | - | 标识 |
| 5 | `reserveTotal` | `int64` | - | 总数 |
| 6 | `dynamicIdStr` | `string` | - | 动态 标识 |
| 7 | `cardType` | `string` | - | 卡片 类型 |
| 8 | `cardBizId` | `string` | - | 卡片 标识 |
| 9 | `opusBizType` | `com.bapis.bilibili.dynamic.common.OpusBizType` | - | 类型 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.AttachCardButtonRsp`

中文说明：卡片 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `finalBtnStatus` | `int32` | - | 状态 |
| 2 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 3 | `descUpdate` | `string` | - | 描述 更新 |
| 4 | `reserveUpdate` | `int64` | - | 更新 |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ConfigReq`

中文说明：配置 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ConfigRsp`

中文说明：配置 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `abEntries` | `ConfigAB` | repeated | 业务字段 `abEntries`（名称未提供可靠中文语义） |
| 2 | `maxPicCountType` | `MaxPicCountType` | - | 数量 类型 |
| 3 | `articleLoadingAddress` | `string` | - | 业务字段 `articleLoadingAddress`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreateDynReq`

中文说明：创建 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `meta` | `com.bapis.bilibili.dynamic.common.UserCreateMeta` | - | 元数据 |
| 2 | `content` | `com.bapis.bilibili.dynamic.common.CreateContent` | - | 内容 |
| 3 | `scene` | `com.bapis.bilibili.dynamic.common.CreateScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 4 | `pics` | `com.bapis.bilibili.dynamic.common.CreatePic` | repeated | 业务字段 `pics`（名称未提供可靠中文语义） |
| 5 | `repostSrc` | `com.bapis.bilibili.dynamic.common.DynIdentity` | - | 业务字段 `repostSrc`（名称未提供可靠中文语义） |
| 6 | `video` | `com.bapis.bilibili.dynamic.common.CreateDynVideo` | - | 视频 |
| 7 | `sketchType` | `int64` | - | 类型 |
| 8 | `sketch` | `com.bapis.bilibili.dynamic.common.Sketch` | - | 业务字段 `sketch`（名称未提供可靠中文语义） |
| 9 | `program` | `com.bapis.bilibili.dynamic.common.Program` | - | 业务字段 `program`（名称未提供可靠中文语义） |
| 10 | `dynTag` | `com.bapis.bilibili.dynamic.common.CreateTag` | - | 标签 |
| 11 | `attachCard` | `com.bapis.bilibili.dynamic.common.CreateAttachCard` | - | 卡片 |
| 12 | `option_` | `com.bapis.bilibili.dynamic.common.CreateOption` | - | 业务字段 `option_`（名称未提供可靠中文语义） |
| 13 | `topic` | `com.bapis.bilibili.dynamic.common.CreateTopic` | - | 话题 |
| 14 | `uploadId` | `string` | - | 标识 |
| 15 | `extraInfo` | `com.bapis.bilibili.dynamic.common.CreateExtraInfo` | - | 扩展数据 信息 |
| 16 | `draft` | `com.bapis.bilibili.dynamic.common.CreateBaseDraft` | - | 业务字段 `draft`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.common.CreateResp`

中文说明：创建 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `dynIdStr` | `string` | - | 标识 |
| 3 | `dynType` | `int64` | - | 类型 |
| 4 | `dynRid` | `int64` | - | 业务字段 `dynRid`（名称未提供可靠中文语义） |
| 5 | `fakeCard` | `com.bapis.bilibili.app.dynamic.v2.DynamicItem` | - | 卡片 |
| 6 | `videoResult` | `CreateDynVideoResult` | - | 视频 结果 |
| 7 | `shareWindow` | `ShareDynWindow` | - | 分享 |
| 8 | `artEditorJumpFeed` | `int64` | - | 跳转 信息流 |
| 9 | `tribeeFakeCard` | `com.bapis.bilibili.app.dynamic.v2.TribeeDyn` | - | 卡片 |
| 10 | `tribeeCategoryId` | `int64` | - | 分类 标识 |
| 11 | `tribeeToast` | `string` | - | 业务字段 `tribeeToast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreateInitCheckReq`

中文说明：创建 校验 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `scene` | `com.bapis.bilibili.dynamic.common.CreateInitCheckScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 2 | `meta` | `com.bapis.bilibili.dynamic.common.MetaDataCtrl` | - | 元数据 |
| 3 | `repost` | `com.bapis.bilibili.dynamic.common.RepostInitCheck` | - | 业务字段 `repost`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.common.CreateCheckResp`

中文说明：创建 校验 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `setting` | `PublishSetting` | - | 设置 |
| 2 | `permission` | `UpPermission` | - | 业务字段 `permission`（名称未提供可靠中文语义） |
| 3 | `shareInfo` | `ShareChannel` | - | 分享 信息 |
| 4 | `yellowBar` | `PublishYellowBar` | - | 业务字段 `yellowBar`（名称未提供可靠中文语义） |
| 5 | `plusRedDot` | `PlusRedDot` | - | 业务字段 `plusRedDot`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePageInfosReq`

中文说明：创建 分页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topicId` | `int64` | - | 话题 标识 |
| 2 | `commercialEntityType` | `int64` | - | 类型 |
| 3 | `commercialEntityId` | `int64` | - | 标识 |
| 4 | `scene` | `com.bapis.bilibili.dynamic.common.CreateScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 5 | `goods` | `com.bapis.bilibili.dynamic.common.GoodsContent` | repeated | 业务字段 `goods`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePageInfosRsp`

中文说明：创建 分页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `topic` | `CreatePageTopicInfo` | - | 话题 |
| 2 | `commercial` | `CreatePageCommercialInfo` | - | 业务字段 `commercial`（名称未提供可靠中文语义） |
| 3 | `goods` | `GoodsItem` | repeated | 业务字段 `goods`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePermissionButtonClickReq`

中文说明：创建 点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `type` | `com.bapis.bilibili.dynamic.common.UpPermissionType` | - | 类型 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePermissionButtonClickRsp`

中文说明：创建 点击 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePlusButtonClickReq`

中文说明：创建 点击 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.CreatePlusButtonClickRsp`

中文说明：创建 点击 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicButtonClickReq`

中文说明：动态 点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bizType` | `DynamicButtonClickBizType` | repeated | 类型 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicButtonClickRsp`

中文说明：动态 点击 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicRepostReq`

中文说明：动态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `content` | `com.bapis.bilibili.dynamic.common.CreateContent` | - | 内容 |
| 3 | `repostSrc` | `com.bapis.bilibili.dynamic.common.DynIdentity` | - | 业务字段 `repostSrc`（名称未提供可靠中文语义） |
| 4 | `option_` | `com.bapis.bilibili.dynamic.common.CreateOption` | - | 业务字段 `option_`（名称未提供可靠中文语义） |
| 5 | `topic` | `com.bapis.bilibili.dynamic.common.CreateTopic` | - | 话题 |
| 6 | `uploadId` | `string` | - | 标识 |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicThumbReq`

中文说明：动态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `dynId` | `int64` | - | 标识 |
| 3 | `type` | `int64` | - | 类型 |
| 4 | `rid` | `int64` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 5 | `specType` | `int64` | - | 类型 |
| 6 | `up` | `int64` | - | 业务字段 `up`（名称未提供可靠中文语义） |
| 7 | `from` | `string` | - | 来源 |
| 8 | `dynIdStr` | `string` | - | 标识 |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `fromSpmid` | `string` | - | 来源 |
| 11 | `actionId` | `string` | - | 操作 标识 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynamicThumbRsp`

中文说明：动态 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynMetricsActiveReportReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `reportMetrics` | `ActiveReportMessage` | repeated | 业务字段 `reportMetrics`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynMetricsActiveReportRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynPrivatePubSettingReq`

中文说明：发布 设置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `objectId` | `string` | - | 标识 |
| 2 | `action` | `string` | - | 操作 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.DynPrivatePubSettingRsp`

中文说明：发布 设置 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.EditDynReq`

中文说明：编辑 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `scene` | `com.bapis.bilibili.dynamic.common.CreateScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `meta` | `com.bapis.bilibili.dynamic.common.UserCreateMeta` | - | 元数据 |
| 4 | `content` | `com.bapis.bilibili.dynamic.common.CreateContent` | - | 内容 |
| 5 | `pics` | `com.bapis.bilibili.dynamic.common.CreatePic` | repeated | 业务字段 `pics`（名称未提供可靠中文语义） |
| 6 | `repostSrc` | `com.bapis.bilibili.dynamic.common.DynIdentity` | - | 业务字段 `repostSrc`（名称未提供可靠中文语义） |
| 7 | `dynTag` | `com.bapis.bilibili.dynamic.common.CreateTag` | - | 标签 |
| 8 | `attachCard` | `com.bapis.bilibili.dynamic.common.CreateAttachCard` | - | 卡片 |
| 9 | `option_` | `com.bapis.bilibili.dynamic.common.CreateOption` | - | 业务字段 `option_`（名称未提供可靠中文语义） |
| 10 | `topic` | `com.bapis.bilibili.dynamic.common.CreateTopic` | - | 话题 |
| 11 | `uploadId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.EditDynRsp`

中文说明：编辑 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `state` | `int64` | - | 状态 |
| 2 | `totast` | `string` | - | 业务字段 `totast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoReq`

中文说明：获取 编辑 信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `scene` | `com.bapis.bilibili.dynamic.common.CreateInitCheckScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `meta` | `com.bapis.bilibili.dynamic.common.MetaDataCtrl` | - | 元数据 |
| 4 | `repost` | `com.bapis.bilibili.dynamic.common.RepostInitCheck` | - | 业务字段 `repost`（名称未提供可靠中文语义） |
| 5 | `editorVersion` | `string` | - | 版本 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoRsp`

中文说明：获取 编辑 信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pics` | `com.bapis.bilibili.dynamic.common.CreatePic` | repeated | 业务字段 `pics`（名称未提供可靠中文语义） |
| 2 | `origDynId` | `int64` | - | 标识 |
| 3 | `preDynId` | `int64` | - | 标识 |
| 4 | `topicInfos` | `CreatePageTopicInfo` | repeated | 话题 |
| 5 | `attachCard` | `com.bapis.bilibili.dynamic.common.CreateAttachCard` | - | 卡片 |
| 6 | `setting` | `com.bapis.bilibili.dynamic.common.PublishSetting` | - | 设置 |
| 7 | `permission` | `com.bapis.bilibili.dynamic.common.UpPermission` | - | 业务字段 `permission`（名称未提供可靠中文语义） |
| 8 | `shareInfo` | `com.bapis.bilibili.dynamic.common.ShareChannel` | - | 分享 信息 |
| 9 | `yellowBar` | `com.bapis.bilibili.dynamic.common.PublishYellowBar` | - | 业务字段 `yellowBar`（名称未提供可靠中文语义） |
| 10 | `plusRedDot` | `com.bapis.bilibili.dynamic.common.PlusRedDot` | - | 业务字段 `plusRedDot`（名称未提供可靠中文语义） |
| 11 | `onlyFans` | `int64` | - | 业务字段 `onlyFans`（名称未提供可靠中文语义） |
| 12 | `editAlertMsg` | `string` | - | 编辑 |
| 13 | `remainEditTimes` | `int64` | - | 编辑 |
| 14 | `commercial` | `CreatePageCommercialInfo` | - | 业务字段 `commercial`（名称未提供可靠中文语义） |
| 15 | `tribeeSetting` | `TribeePublishConfig` | - | 设置 |
| 16 | `opus` | `com.bapis.bilibili.dynamic.common.Opus` | - | 业务字段 `opus`（名称未提供可靠中文语义） |
| 17 | `dynType` | `int64` | - | 类型 |
| 18 | `picMode` | `int32` | - | 模式 |
| 19 | `tribeeCategories` | `com.bapis.bilibili.dynamic.common.TribeeCategory` | repeated | 业务字段 `tribeeCategories`（名称未提供可靠中文语义） |
| 20 | `visaTribees` | `TribeeVisaInfo` | repeated | 业务字段 `visaTribees`（名称未提供可靠中文语义） |
| 21 | `tribeeIcon` | `string` | - | 业务字段 `tribeeIcon`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoWebReq`

中文说明：获取 编辑 信息 网页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `string` | - | 标识 |
| 2 | `scene` | `com.bapis.bilibili.dynamic.common.CreateInitCheckScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `meta` | `com.bapis.bilibili.dynamic.common.MetaDataCtrl` | - | 元数据 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GetEditDynInfoWebRsp`

中文说明：获取 编辑 信息 网页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `settings` | `com.bapis.bilibili.dynamic.common.PublishWebSettings` | - | 业务字段 `settings`（名称未提供可靠中文语义） |
| 2 | `permissions` | `com.bapis.bilibili.dynamic.common.PermissionsWeb` | - | 业务字段 `permissions`（名称未提供可靠中文语义） |
| 3 | `attachCard` | `com.bapis.bilibili.dynamic.common.CreateAttachCard` | - | 卡片 |
| 4 | `commercial` | `CreatePageCommercialInfo` | - | 业务字段 `commercial`（名称未提供可靠中文语义） |
| 5 | `onlyFans` | `int64` | - | 业务字段 `onlyFans`（名称未提供可靠中文语义） |
| 6 | `editAlertMsg` | `string` | - | 编辑 |
| 7 | `remainEditTimes` | `int64` | - | 编辑 |
| 8 | `origDynIdStr` | `string` | - | 标识 |
| 9 | `preDynIdStr` | `string` | - | 标识 |
| 10 | `tribeeSetting` | `TribeePublishConfig` | - | 设置 |
| 11 | `opus` | `com.bapis.bilibili.dynamic.common.Opus` | - | 业务字段 `opus`（名称未提供可靠中文语义） |
| 12 | `tribeeCategories` | `com.bapis.bilibili.dynamic.common.TribeeCategory` | repeated | 业务字段 `tribeeCategories`（名称未提供可靠中文语义） |
| 13 | `topicInfos` | `CreatePageTopicInfo` | repeated | 话题 |
| 14 | `visaTribees` | `TribeeVisaInfo` | repeated | 业务字段 `visaTribees`（名称未提供可靠中文语义） |
| 15 | `tribeeIcon` | `string` | - | 业务字段 `tribeeIcon`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.common.GetUidByNameReq`

中文说明：获取 用户 ID 名称 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `names` | `string` | repeated | 业务字段 `names`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.common.GetUidByNameRsp`

中文说明：获取 用户 ID 名称 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uids` | `map<string, int64>` | map | 业务字段 `uids`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GoodsAttachCardPreviewReq`

中文说明：卡片 预览 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `itemIds` | `int64` | repeated | 条目 |
| 2 | `dynId` | `int64` | - | 标识 |
| 3 | `mid` | `int64` | - | 用户 ID |
| 4 | `meta` | `com.bapis.bilibili.dynamic.common.MetaDataCtrl` | - | 元数据 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.GoodsAttachCardPreviewRsp`

中文说明：卡片 预览 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `goods` | `map<int64, GoodsItem>` | map | 业务字段 `goods`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.HomeBubbleReportReq`

中文说明：首页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `trackId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.HomeBubbleReportRsp`

中文说明：首页 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.HotSearchReq`

中文说明：搜索 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.HotSearchRsp`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `HotSearchRsp_Item` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `version` | `string` | - | 版本 |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ICreateGoodsReplySyncReq`

中文说明：创建 响应 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `goodsId` | `int64` | - | 标识 |
| 3 | `content` | `com.bapis.bilibili.dynamic.common.CreateContent` | - | 内容 |
| 4 | `scene` | `com.bapis.bilibili.dynamic.common.CreateScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 5 | `pics` | `com.bapis.bilibili.dynamic.common.CreatePic` | repeated | 业务字段 `pics`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ICreateResp`

中文说明：创建 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `dynType` | `int64` | - | 类型 |
| 3 | `dynRid` | `int64` | - | 业务字段 `dynRid`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.NearbyPoiListReq`

中文说明：列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 2 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `pageSize` | `int32` | - | 分页 大小 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.NearbyPoiListRsp`

中文说明：列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hasMore` | `bool` | - | 是否具有 |
| 2 | `pois` | `NearbyPoiListItem` | repeated | 业务字段 `pois`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RecommendPoiReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 2 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RecommendPoiRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `poi` | `NearbyPoiDetail` | - | 业务字段 `poi`（名称未提供可靠中文语义） |
| 2 | `parentPoi` | `NearbyPoiDetail` | - | 业务字段 `parentPoi`（名称未提供可靠中文语义） |
| 3 | `address` | `AddressComponent` | - | 业务字段 `address`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ReserveButtonClickReq`

中文说明：点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `reserveId` | `int64` | - | 标识 |
| 3 | `reserveTotal` | `int64` | - | 总数 |
| 4 | `curBtnStatus` | `ReserveButtonStatus` | - | 状态 |
| 5 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 6 | `dynId` | `int64` | - | 标识 |
| 7 | `dynType` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.ReserveButtonClickResp`

中文说明：点击 响应。

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

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmDynReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `dynIdStr` | `string` | - | 标识 |
| 3 | `dynType` | `int64` | - | 类型 |
| 4 | `ridStr` | `string` | - | 业务字段 `ridStr`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmDynRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmSpaceTopReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `teenagersMode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.RmSpaceTopRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SearchPoiListReq`

中文说明：搜索 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 2 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 3 | `page` | `int32` | - | 分页 |
| 4 | `pageSize` | `int32` | - | 分页 大小 |
| 5 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SearchPoiListRsp`

中文说明：搜索 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hasMore` | `bool` | - | 是否具有 |
| 2 | `pois` | `PoiListItem` | repeated | 业务字段 `pois`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SetSpaceTopReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynId` | `int64` | - | 标识 |
| 2 | `teenagersMode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SetSpaceTopRsp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SubmitCheckReq`

中文说明：校验 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `content` | `com.bapis.bilibili.dynamic.common.CreateContent` | - | 内容 |
| 2 | `pics` | `com.bapis.bilibili.dynamic.common.CreatePic` | repeated | 业务字段 `pics`（名称未提供可靠中文语义） |
| 3 | `attachCard` | `com.bapis.bilibili.dynamic.common.CreateAttachCard` | - | 卡片 |
| 4 | `scene` | `com.bapis.bilibili.dynamic.common.CreateScene` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 5 | `createOption` | `com.bapis.bilibili.dynamic.common.CreateOption` | - | 创建 |
| 6 | `opus` | `com.bapis.bilibili.dynamic.common.Opus` | - | 业务字段 `opus`（名称未提供可靠中文语义） |
| 7 | `dynIdStr` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SubmitCheckRsp`

中文说明：校验 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SuggestReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `s` | `string` | - | 业务字段 `s`（名称未提供可靠中文语义） |
| 2 | `type` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.feed.v1.SuggestRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `string` | repeated | 列表 |
| 2 | `trackId` | `string` | - | 标识 |
| 3 | `version` | `string` | - | 版本 |
