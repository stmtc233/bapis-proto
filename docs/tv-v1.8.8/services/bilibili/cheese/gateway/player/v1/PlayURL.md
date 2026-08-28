# `bilibili.cheese.gateway.player.v1.PlayURL`

中文说明：网关 播放器 播放 地址 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayView` | 一元调用 | `com.bapis.bilibili.cheese.gateway.player.v1.PlayViewReq` | `com.bapis.bilibili.cheese.gateway.player.v1.PlayViewReply` | 播放 查看 |
| `Project` | 一元调用 | `com.bapis.bilibili.cheese.gateway.player.v1.ProjectReq` | `com.bapis.bilibili.cheese.gateway.player.v1.ProjectReply` | `Project` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.cheese.gateway.player.v1.PlayViewReq`

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
| 12 | `preferCodecType` | `com.bapis.bilibili.app.playurl.v1.CodeType` | - | 类型 |
| 13 | `isPreview` | `bool` | - | 是否 预览 |

### 响应 `com.bapis.bilibili.cheese.gateway.player.v1.PlayViewReply`

中文说明：播放 查看 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `videoInfo` | `com.bapis.bilibili.app.playurl.v1.VideoInfo` | - | 视频 信息 |
| 2 | `playConf` | `PlayAbilityConf` | - | 播放 |

### 请求 `com.bapis.bilibili.cheese.gateway.player.v1.ProjectReq`

中文说明：请求。

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
| 11 | `protocol` | `int32` | - | 业务字段 `protocol`（名称未提供可靠中文语义） |
| 12 | `deviceType` | `int32` | - | 设备 类型 |

### 响应 `com.bapis.bilibili.cheese.gateway.player.v1.ProjectReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `project` | `com.bapis.bilibili.app.playurl.v1.PlayURLReply` | - | 业务字段 `project`（名称未提供可靠中文语义） |
