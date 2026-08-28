# `com.bapis.bilibili.community.service.dm.v1.DM`

中文说明：社区 弹幕 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `DmExpoReport` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmExpoReportReq` | `com.bapis.bilibili.community.service.dm.v1.DmExpoReportRes` | 弹幕 |
| `DmPlayerConfig` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmPlayerConfigReq` | `com.bapis.bilibili.community.service.dm.v1.Response` | 弹幕 播放器 配置 |
| `DmSegMobile` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmSegMobileReq` | `com.bapis.bilibili.community.service.dm.v1.DmSegMobileReply` | 弹幕 |
| `DmSegOtt` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmSegOttReq` | `com.bapis.bilibili.community.service.dm.v1.DmSegOttReply` | 弹幕 |
| `DmSegSDK` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmSegSDKReq` | `com.bapis.bilibili.community.service.dm.v1.DmSegSDKReply` | 弹幕 |
| `DmView` | 一元调用 | `com.bapis.bilibili.community.service.dm.v1.DmViewReq` | `com.bapis.bilibili.community.service.dm.v1.DmViewReply` | 弹幕 查看 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmExpoReportReq`

中文说明：弹幕 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionId` | `string` | - | 标识 |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `dmids` | `bytes` | - | 业务字段 `dmids`（名称未提供可靠中文语义） |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.community.service.dm.v1.DmExpoReportRes`

中文说明：弹幕。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmPlayerConfigReq`

中文说明：弹幕 播放器 配置 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ts` | `int64` | - | 业务字段 `ts`（名称未提供可靠中文语义） |
| 2 | `switch` | `PlayerDanmakuSwitch` | - | 业务字段 `switch`（名称未提供可靠中文语义） |
| 3 | `switchSave` | `PlayerDanmakuSwitchSave` | - | 业务字段 `switchSave`（名称未提供可靠中文语义） |
| 4 | `useDefaultConfig` | `PlayerDanmakuUseDefaultConfig` | - | 配置 |
| 5 | `aiRecommendedSwitch` | `PlayerDanmakuAiRecommendedSwitch` | - | 业务字段 `aiRecommendedSwitch`（名称未提供可靠中文语义） |
| 6 | `aiRecommendedLevel` | `PlayerDanmakuAiRecommendedLevel` | - | 等级 |
| 7 | `blocktop` | `PlayerDanmakuBlocktop` | - | 业务字段 `blocktop`（名称未提供可靠中文语义） |
| 8 | `blockscroll` | `PlayerDanmakuBlockscroll` | - | 业务字段 `blockscroll`（名称未提供可靠中文语义） |
| 9 | `blockbottom` | `PlayerDanmakuBlockbottom` | - | 业务字段 `blockbottom`（名称未提供可靠中文语义） |
| 10 | `blockcolorful` | `PlayerDanmakuBlockcolorful` | - | 业务字段 `blockcolorful`（名称未提供可靠中文语义） |
| 11 | `blockrepeat` | `PlayerDanmakuBlockrepeat` | - | 业务字段 `blockrepeat`（名称未提供可靠中文语义） |
| 12 | `blockspecial` | `PlayerDanmakuBlockspecial` | - | 业务字段 `blockspecial`（名称未提供可靠中文语义） |
| 13 | `opacity` | `PlayerDanmakuOpacity` | - | 业务字段 `opacity`（名称未提供可靠中文语义） |
| 14 | `scalingfactor` | `PlayerDanmakuScalingfactor` | - | 业务字段 `scalingfactor`（名称未提供可靠中文语义） |
| 15 | `domain` | `PlayerDanmakuDomain` | - | 业务字段 `domain`（名称未提供可靠中文语义） |
| 16 | `speed` | `PlayerDanmakuSpeed` | - | 业务字段 `speed`（名称未提供可靠中文语义） |
| 17 | `enableblocklist` | `PlayerDanmakuEnableblocklist` | - | 业务字段 `enableblocklist`（名称未提供可靠中文语义） |
| 18 | `inlineplayerdanmakuswitch` | `bytes` | - | 业务字段 `inlineplayerdanmakuswitch`（名称未提供可靠中文语义） |
| 19 | `seniorModeSwitch` | `PlayerDanmakuSeniorModeSwitch` | - | 模式 |
| 20 | `aiRecommendedLevelV2` | `PlayerDanmakuAiRecommendedLevelV2` | - | 等级 |
| 21 | `enableHerdDm` | `PlayerDanmakuEnableHerdDm` | - | 启用 弹幕 |
| 22 | `blocktopBottom` | `PlayerDanmakuBlocktopBottom` | - | 业务字段 `blocktopBottom`（名称未提供可靠中文语义） |
| 23 | `domainV2` | `PlayerDanmakuDomainV2` | - | 业务字段 `domainV2`（名称未提供可靠中文语义） |
| 24 | `density` | `PlayerDanmakuDensity` | - | 业务字段 `density`（名称未提供可靠中文语义） |
| 25 | `subtitleProof` | `PlayerDanmakuSubtitleProof` | - | 业务字段 `subtitleProof`（名称未提供可靠中文语义） |
| 26 | `peopleProof` | `PlayerDanmakuPeopleProof` | - | 业务字段 `peopleProof`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.community.service.dm.v1.Response`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmSegMobileReq`

中文说明：弹幕 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `segmentIndex` | `int64` | - | 业务字段 `segmentIndex`（名称未提供可靠中文语义） |
| 5 | `teenagersMode` | `int32` | - | 模式 |
| 6 | `ps` | `int64` | - | 业务字段 `ps`（名称未提供可靠中文语义） |
| 7 | `pe` | `int64` | - | 业务字段 `pe`（名称未提供可靠中文语义） |
| 8 | `pullMode` | `int32` | - | 模式 |
| 9 | `fromScene` | `int32` | - | 来源 |
| 10 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 11 | `contextExt` | `string` | - | 扩展 |

### 响应 `com.bapis.bilibili.community.service.dm.v1.DmSegMobileReply`

中文说明：弹幕 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `elems` | `DanmakuElem` | repeated | 业务字段 `elems`（名称未提供可靠中文语义） |
| 2 | `state` | `int32` | - | 状态 |
| 3 | `aiFlag` | `DanmakuAIFlag` | - | 业务字段 `aiFlag`（名称未提供可靠中文语义） |
| 4 | `segmentRules` | `int64` | repeated | 业务字段 `segmentRules`（名称未提供可靠中文语义） |
| 5 | `colorfulSrc` | `DmColorful` | repeated | 业务字段 `colorfulSrc`（名称未提供可靠中文语义） |
| 6 | `contextSrc` | `string` | - | 业务字段 `contextSrc`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmSegOttReq`

中文说明：弹幕 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `segmentIndex` | `int64` | - | 业务字段 `segmentIndex`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.community.service.dm.v1.DmSegOttReply`

中文说明：弹幕 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `elems` | `DanmakuElem` | repeated | 业务字段 `elems`（名称未提供可靠中文语义） |
| 2 | `state` | `int32` | - | 状态 |

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmSegSDKReq`

中文说明：弹幕 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `segmentIndex` | `int64` | - | 业务字段 `segmentIndex`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.community.service.dm.v1.DmSegSDKReply`

中文说明：弹幕 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `closed` | `bool` | - | 业务字段 `closed`（名称未提供可靠中文语义） |
| 2 | `elems` | `DanmakuElem` | repeated | 业务字段 `elems`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.community.service.dm.v1.DmViewReq`

中文说明：弹幕 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `isHardBoot` | `int32` | - | 是否 |
| 6 | `contextExt` | `string` | - | 扩展 |

### 响应 `com.bapis.bilibili.community.service.dm.v1.DmViewReply`

中文说明：弹幕 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `closed` | `bool` | - | 业务字段 `closed`（名称未提供可靠中文语义） |
| 2 | `mask` | `VideoMask` | - | 业务字段 `mask`（名称未提供可靠中文语义） |
| 3 | `subtitle` | `VideoSubtitle` | - | 业务字段 `subtitle`（名称未提供可靠中文语义） |
| 4 | `specialDms` | `string` | repeated | 业务字段 `specialDms`（名称未提供可靠中文语义） |
| 5 | `aiFlag` | `DanmakuFlagConfig` | - | 业务字段 `aiFlag`（名称未提供可靠中文语义） |
| 6 | `playerConfig` | `DanmuPlayerViewConfig` | - | 播放器 配置 |
| 7 | `sendBoxStyle` | `int32` | - | 业务字段 `sendBoxStyle`（名称未提供可靠中文语义） |
| 8 | `allow` | `bool` | - | 业务字段 `allow`（名称未提供可靠中文语义） |
| 9 | `checkBox` | `bool` | - | 校验 |
| 10 | `checkBoxShowMsg` | `string` | - | 校验 |
| 11 | `textPlaceholder` | `string` | - | 文本 |
| 12 | `inputPlaceholder` | `string` | - | 业务字段 `inputPlaceholder`（名称未提供可靠中文语义） |
| 13 | `reportFilterContent` | `string` | repeated | 筛选 内容 |
| 14 | `expoReport` | `ExpoReport` | - | 业务字段 `expoReport`（名称未提供可靠中文语义） |
| 15 | `buzzwordConfig` | `BuzzwordConfig` | - | 配置 |
| 16 | `expressions` | `Expressions` | repeated | 业务字段 `expressions`（名称未提供可靠中文语义） |
| 17 | `postPanel` | `PostPanel` | repeated | 业务字段 `postPanel`（名称未提供可靠中文语义） |
| 18 | `activityMeta` | `string` | repeated | 活动 元数据 |
| 19 | `postPanel2` | `PostPanelV2` | repeated | 业务字段 `postPanel2`（名称未提供可靠中文语义） |
| 20 | `dmMaskWall` | `DmMaskWall` | repeated | 弹幕 壁纸 |
| 21 | `dmHerd` | `DmHerdView` | - | 弹幕 |
| 22 | `command` | `Command` | - | 指令 |
| 23 | `kv` | `string` | - | 业务字段 `kv`（名称未提供可靠中文语义） |
| 24 | `subViews` | `DmSubView` | repeated | 订阅 |
| 25 | `qoe` | `QoeInfo` | - | 业务字段 `qoe`（名称未提供可靠中文语义） |
