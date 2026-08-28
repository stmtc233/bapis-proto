# `bilibili.mall.tab3.playerunite.v1.Player`

中文说明：商城 播放器 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayViewUnite` | 一元调用 | `com.bapis.bilibili.mall.tab3.playerunite.v1.PlayViewUniteReq` | `com.bapis.bilibili.mall.tab3.playerunite.v1.PlayViewUniteReply` | 播放 查看 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.mall.tab3.playerunite.v1.PlayViewUniteReq`

中文说明：播放 查看 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `vod` | `com.bapis.bilibili.playershared.VideoVod` | - | 业务字段 `vod`（名称未提供可靠中文语义） |
| 2 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 3 | `fromSpmid` | `string` | - | 来源 |
| 4 | `extraContent` | `map<string, string>` | map | 扩展数据 内容 |
| 5 | `bvid` | `string` | - | BV 号 |

### 响应 `com.bapis.bilibili.mall.tab3.playerunite.v1.PlayViewUniteReply`

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
