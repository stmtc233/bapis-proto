# `bilibili.app.playurl.v1.PlayURL`

中文说明：应用 播放 地址 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayConf` | 一元调用 | `com.bapis.bilibili.app.playurl.v1.PlayConfReq` | `com.bapis.bilibili.app.playurl.v1.PlayConfReply` | 播放 |
| `PlayConfEdit` | 一元调用 | `com.bapis.bilibili.app.playurl.v1.PlayConfEditReq` | `com.bapis.bilibili.app.playurl.v1.PlayConfEditReply` | 播放 编辑 |
| `PlayURL` | 一元调用 | `com.bapis.bilibili.app.playurl.v1.PlayURLReq` | `com.bapis.bilibili.app.playurl.v1.PlayURLReply` | 播放 地址 |
| `PlayView` | 一元调用 | `com.bapis.bilibili.app.playurl.v1.PlayViewReq` | `com.bapis.bilibili.app.playurl.v1.PlayViewReply` | 播放 查看 |
| `Project` | 一元调用 | `com.bapis.bilibili.app.playurl.v1.ProjectReq` | `com.bapis.bilibili.app.playurl.v1.ProjectReply` | `Project` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.playurl.v1.PlayConfReq`

中文说明：播放 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.playurl.v1.PlayConfReply`

中文说明：播放 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `playConf` | `PlayAbilityConf` | - | 播放 |

### 请求 `com.bapis.bilibili.app.playurl.v1.PlayConfEditReq`

中文说明：播放 编辑 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `playConf` | `PlayConfState` | repeated | 播放 |

### 响应 `com.bapis.bilibili.app.playurl.v1.PlayConfEditReply`

中文说明：播放 编辑 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.playurl.v1.PlayURLReq`

中文说明：播放 地址 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `qn` | `int64` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 4 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 5 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 6 | `download` | `uint32` | - | 下载 |
| 7 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 8 | `fourk` | `bool` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `fromSpmid` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.playurl.v1.PlayURLReply`

中文说明：播放 地址 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `quality` | `uint32` | - | 业务字段 `quality`（名称未提供可靠中文语义） |
| 2 | `format` | `string` | - | 业务字段 `format`（名称未提供可靠中文语义） |
| 3 | `timelength` | `uint64` | - | 业务字段 `timelength`（名称未提供可靠中文语义） |
| 4 | `videoCodecid` | `uint32` | - | 视频 |
| 5 | `fnver` | `uint32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 6 | `fnval` | `uint32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 7 | `videoProject` | `bool` | - | 视频 |
| 8 | `durl` | `ResponseUrl` | repeated | 业务字段 `durl`（名称未提供可靠中文语义） |
| 9 | `dash` | `ResponseDash` | - | 业务字段 `dash`（名称未提供可靠中文语义） |
| 10 | `noRexcode` | `int32` | - | 业务字段 `noRexcode`（名称未提供可靠中文语义） |
| 11 | `upgradeLimit` | `UpgradeLimit` | - | 限制 |
| 12 | `supportFormats` | `FormatDescription` | repeated | 业务字段 `supportFormats`（名称未提供可靠中文语义） |
| 13 | `type` | `VideoType` | - | 类型 |
| 14 | `vipRisk` | `VipRisk` | - | 业务字段 `vipRisk`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.playurl.v1.PlayViewReq`

中文说明：播放 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
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
| 13 | `business` | `Business` | - | 业务 |
| 14 | `voiceBalance` | `int64` | - | 业务字段 `voiceBalance`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.playurl.v1.PlayViewReply`

中文说明：播放 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoInfo` | `VideoInfo` | - | 视频 信息 |
| 2 | `playConf` | `PlayAbilityConf` | - | 播放 |
| 3 | `upgradeLimit` | `UpgradeLimit` | - | 限制 |
| 4 | `chronos` | `Chronos` | - | 资源包 |
| 5 | `playArc` | `PlayArcConf` | - | 播放 稿件 |
| 6 | `event` | `Event` | - | 事件 |
| 7 | `ab` | `AB` | - | 业务字段 `ab`（名称未提供可靠中文语义） |
| 8 | `playLimit` | `PlayLimit` | - | 播放 限制 |
| 9 | `viewInfo` | `ViewInfo` | - | 查看 信息 |
| 10 | `arc` | `PlayArc` | - | 稿件 |

### 请求 `com.bapis.bilibili.app.playurl.v1.ProjectReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `qn` | `int64` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 4 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 5 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 6 | `download` | `uint32` | - | 下载 |
| 7 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 8 | `fourk` | `bool` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `fromSpmid` | `string` | - | 来源 |
| 11 | `protocol` | `int32` | - | 业务字段 `protocol`（名称未提供可靠中文语义） |
| 12 | `deviceType` | `int32` | - | 设备 类型 |

### 响应 `com.bapis.bilibili.app.playurl.v1.ProjectReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `project` | `PlayURLReply` | - | 业务字段 `project`（名称未提供可靠中文语义） |
