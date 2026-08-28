# `com.bapis.bilibili.pgc.gateway.player.v2.PlayURL`

中文说明：网关 播放器 播放 地址 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayView` | 一元调用 | `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReq` | `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReply` | 播放 查看 |
| `PlayViewComic` | 一元调用 | `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReq` | `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReply` | 播放 查看 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReq`

中文说明：播放 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `epId` | `int64` | - | 标识 |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `qn` | `int64` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 4 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 5 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 6 | `download` | `uint32` | - | 下载 |
| 7 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 8 | `fourk` | `bool` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `fromSpmid` | `string` | - | 来源 |
| 11 | `teenagersMode` | `int32` | - | 模式 |
| 12 | `preferCodecType` | `CodeType` | - | 类型 |
| 13 | `isPreview` | `bool` | - | 是否 预览 |
| 14 | `roomId` | `int64` | - | 直播间 标识 |
| 15 | `isNeedViewInfo` | `bool` | - | 是否 查看 信息 |
| 16 | `sceneControl` | `SceneControl` | - | 业务字段 `sceneControl`（名称未提供可靠中文语义） |
| 17 | `inlineScene` | `InlineScene` | - | 业务字段 `inlineScene`（名称未提供可靠中文语义） |
| 18 | `materialNo` | `int64` | - | 业务字段 `materialNo`（名称未提供可靠中文语义） |
| 19 | `securityLevel` | `SecurityLevel` | - | 等级 |
| 20 | `seasonId` | `int64` | - | 剧集 标识 |
| 21 | `dataControl` | `DataControl` | - | 数据 |
| 22 | `isCloseDrm` | `bool` | - | 是否 |
| 23 | `extraContent` | `map<string, string>` | map | 扩展数据 内容 |

### 响应 `com.bapis.bilibili.pgc.gateway.player.v2.PlayViewReply`

中文说明：播放 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoInfo` | `VideoInfo` | - | 视频 信息 |
| 2 | `playConf` | `PlayAbilityConf` | - | 播放 |
| 3 | `business` | `PlayViewBusinessInfo` | - | 业务 |
| 4 | `event` | `Event` | - | 事件 |
| 5 | `viewInfo` | `ViewInfo` | - | 查看 信息 |
| 6 | `playExtConf` | `PlayAbilityExtConf` | - | 播放 扩展 |
| 7 | `playExtInfo` | `PlayExtInfo` | - | 播放 扩展 信息 |
| 8 | `hideField` | `HideField` | - | 业务字段 `hideField`（名称未提供可靠中文语义） |
