# `bilibili.app.playerunite.v1.Player`

中文说明：应用 播放器 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayAddition` | 一元调用 | `com.bapis.bilibili.app.playerunite.v1.PlayAdditionReq` | `com.bapis.bilibili.app.playerunite.v1.PlayAdditionReply` | 播放 |
| `PlayHalfChannels` | 一元调用 | `com.bapis.bilibili.app.playerunite.v1.PlayHalfChannelsReq` | `com.bapis.bilibili.app.playerunite.v1.PlayHalfChannelsReply` | 播放 |
| `PlayViewUnite` | 一元调用 | `com.bapis.bilibili.app.playerunite.v1.PlayViewUniteReq` | `com.bapis.bilibili.app.playerunite.v1.PlayViewUniteReply` | 播放 查看 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.playerunite.v1.PlayAdditionReq`

中文说明：播放 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `types` | `AdditionType` | repeated | 业务字段 `types`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.playerunite.v1.PlayAdditionReply`

中文说明：播放 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ugcViewInfoMaterial` | `UgcViewInfoMaterial` | - | 查看 信息 |
| 2 | `translationIntro` | `TranslationIntro` | - | 业务字段 `translationIntro`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.playerunite.v1.PlayHalfChannelsReq`

中文说明：播放 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `extraContent` | `map<string, string>` | map | 扩展数据 内容 |
| 4 | `fromScene` | `string` | - | 来源 |
| 5 | `resourceType` | `ResourceType` | - | 资源 类型 |
| 6 | `playMode` | `string` | - | 播放 模式 |

### 响应 `com.bapis.bilibili.app.playerunite.v1.PlayHalfChannelsReply`

中文说明：播放 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `groups` | `com.bapis.bilibili.playershared.SettingGroup` | repeated | 业务字段 `groups`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.playerunite.v1.PlayViewUniteReq`

中文说明：播放 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `vod` | `com.bapis.bilibili.playershared.VideoVod` | - | 业务字段 `vod`（名称未提供可靠中文语义） |
| 2 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 3 | `fromSpmid` | `string` | - | 来源 |
| 4 | `extraContent` | `map<string, string>` | map | 扩展数据 内容 |
| 5 | `bvid` | `string` | - | BV 号 |
| 6 | `adExtra` | `string` | - | 广告 扩展数据 |
| 7 | `fragment` | `com.bapis.bilibili.playershared.Fragment` | - | 业务字段 `fragment`（名称未提供可靠中文语义） |
| 8 | `fromScene` | `string` | - | 来源 |
| 9 | `playCtrl` | `com.bapis.bilibili.playershared.PlayCtrl` | - | 播放 |

### 响应 `com.bapis.bilibili.app.playerunite.v1.PlayViewUniteReply`

中文说明：播放 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `vodInfo` | `com.bapis.bilibili.playershared.VodInfo` | - | 信息 |
| 2 | `playArcConf` | `com.bapis.bilibili.playershared.PlayArcConf` | - | 播放 稿件 |
| 3 | `playDeviceConf` | `com.bapis.bilibili.playershared.PlayDeviceConf` | - | 播放 设备 |
| 4 | `event` | `com.bapis.bilibili.playershared.Event` | - | 事件 |
| 5 | `supplement` | `google.protobuf.Any` | - | 业务字段 `supplement`（名称未提供可靠中文语义） |
| 6 | `playArc` | `com.bapis.bilibili.playershared.PlayArc` | - | 播放 稿件 |
| 7 | `qnTrialInfo` | `com.bapis.bilibili.playershared.QnTrialInfo` | - | 信息 |
| 8 | `history` | `com.bapis.bilibili.playershared.History` | - | 历史记录 |
| 9 | `viewInfo` | `com.bapis.bilibili.playershared.ViewInfo` | - | 查看 信息 |
| 10 | `fragmentVideo` | `com.bapis.bilibili.playershared.FragmentVideo` | - | 视频 |
| 11 | `videoCtrl` | `com.bapis.bilibili.playershared.VideoCtrl` | - | 视频 |
| 12 | `language` | `com.bapis.bilibili.playershared.Language` | - | 业务字段 `language`（名称未提供可靠中文语义） |
| 13 | `overseasAdInfo` | `com.bapis.bilibili.app.overseas.ad.v1.OverseasAdInfo` | - | 广告 信息 |
