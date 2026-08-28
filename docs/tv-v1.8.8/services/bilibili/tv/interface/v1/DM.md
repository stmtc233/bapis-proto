# `bilibili.tv.interface.v1.DM`

中文说明：接口 弹幕 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CommandDmsOtt` | 一元调用 | `com.bapis.bilibili.tv.CommandDmsOttReq` | `com.bapis.bilibili.tv.CommandDmsOttReply` | 指令 |
| `DmSegMobile` | 一元调用 | `com.bapis.bilibili.tv.DmSegMobileReq` | `com.bapis.bilibili.tv.DmSegMobileReply` | 弹幕 |
| `DmView` | 一元调用 | `com.bapis.bilibili.tv.DmViewReq` | `com.bapis.bilibili.tv.DmViewReply` | 弹幕 查看 |
| `TvViewProgress` | 一元调用 | `com.bapis.bilibili.tv.TvViewProgressReq` | `com.bapis.bilibili.tv.TvViewProgressReply` | 查看 进度 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.tv.CommandDmsOttReq`

中文说明：指令 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `mid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.tv.CommandDmsOttReply`

中文说明：指令 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `commanddmsott` | `bytes` | repeated | 业务字段 `commanddmsott`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.tv.DmSegMobileReq`

中文说明：弹幕 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `segmentIndex` | `int64` | - | 业务字段 `segmentIndex`（名称未提供可靠中文语义） |
| 5 | `teenagersMode` | `int32` | - | 模式 |
| 6 | `from` | `int64` | - | 来源 |
| 7 | `memory` | `int32` | - | 业务字段 `memory`（名称未提供可靠中文语义） |
| 8 | `benchmarkScore` | `int32` | - | 业务字段 `benchmarkScore`（名称未提供可靠中文语义） |
| 9 | `benchmarkDetail` | `string` | - | 详情 |
| 10 | `glEsVer` | `string` | - | 业务字段 `glEsVer`（名称未提供可靠中文语义） |
| 11 | `danmakuType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.tv.DmSegMobileReply`

中文说明：弹幕 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `elems` | `DanmakuElem` | repeated | 业务字段 `elems`（名称未提供可靠中文语义） |
| 2 | `state` | `int32` | - | 状态 |
| 3 | `aiFlag` | `DanmakuAIFlag` | - | 业务字段 `aiFlag`（名称未提供可靠中文语义） |
| 4 | `colorfulSrc` | `DmColorful` | repeated | 业务字段 `colorfulSrc`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.tv.DmViewReq`

中文说明：弹幕 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 2 | `oid` | `int64` | - | 对象 ID |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `isHardBoot` | `int32` | - | 是否 |
| 6 | `from` | `int64` | - | 来源 |
| 7 | `danmakuWhiteUser` | `bool` | - | 用户 |
| 8 | `teenagerMode` | `int32` | - | 模式 |
| 9 | `memory` | `int32` | - | 业务字段 `memory`（名称未提供可靠中文语义） |
| 10 | `guestAccessKey` | `string` | - | 业务字段 `guestAccessKey`（名称未提供可靠中文语义） |
| 11 | `benchmarkScore` | `int32` | - | 业务字段 `benchmarkScore`（名称未提供可靠中文语义） |
| 12 | `benchmarkDetail` | `string` | - | 详情 |
| 13 | `glEsVer` | `string` | - | 业务字段 `glEsVer`（名称未提供可靠中文语义） |
| 14 | `danmakuType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.tv.DmViewReply`

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
| 13 | `commandClose` | `bool` | - | 指令 |
| 14 | `activityMeta` | `string` | repeated | 活动 元数据 |
| 15 | `dmHerd` | `DmHerdView` | - | 弹幕 |
| 16 | `command` | `Command` | - | 指令 |
| 17 | `kv` | `string` | - | 业务字段 `kv`（名称未提供可靠中文语义） |
| 18 | `qoe` | `QoeInfo` | - | 业务字段 `qoe`（名称未提供可靠中文语义） |
| 19 | `liveDmActivity` | `LiveDmActivity` | - | 直播 弹幕 活动 |
| 20 | `liveDmExtra` | `LiveDmExtra` | - | 直播 弹幕 扩展数据 |

### 请求 `com.bapis.bilibili.tv.TvViewProgressReq`

中文说明：查看 进度 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `engineVersion` | `string` | - | 版本 |
| 5 | `messageProtocol` | `string` | - | 消息 |
| 6 | `serviceKey` | `string` | - | 业务字段 `serviceKey`（名称未提供可靠中文语义） |
| 7 | `sid` | `int64` | - | 会话 ID |
| 8 | `pid` | `int64` | - | 业务字段 `pid`（名称未提供可靠中文语义） |
| 9 | `from` | `int64` | - | 来源 |
| 10 | `guestAccessKey` | `string` | - | 业务字段 `guestAccessKey`（名称未提供可靠中文语义） |
| 11 | `epid` | `int64` | - | 剧集 ID |
| 12 | `mobiAccessKey` | `string` | - | 业务字段 `mobiAccessKey`（名称未提供可靠中文语义） |
| 13 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 14 | `fromSpmid` | `string` | - | 来源 |
| 15 | `childLock` | `int64` | - | 业务字段 `childLock`（名称未提供可靠中文语义） |
| 16 | `benchmarkScore` | `int32` | - | 业务字段 `benchmarkScore`（名称未提供可靠中文语义） |
| 17 | `benchmarkDetail` | `string` | - | 详情 |
| 18 | `glEsVer` | `string` | - | 业务字段 `glEsVer`（名称未提供可靠中文语义） |
| 19 | `danmakuType` | `int32` | - | 类型 |

### 响应 `com.bapis.bilibili.tv.TvViewProgressReply`

中文说明：查看 进度 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoGuide` | `VideoGuide` | - | 视频 |
| 2 | `chronos` | `Chronos` | - | 资源包 |
