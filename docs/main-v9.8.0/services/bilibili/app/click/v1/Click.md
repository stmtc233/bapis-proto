# `bilibili.app.click.v1.Click`

中文说明：应用 点击 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `HeartBeat` | 一元调用 | `com.bapis.bilibili.app.click.v1.HeartBeatReq` | `com.bapis.bilibili.app.click.v1.HeartBeatReply` | `HeartBeat` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.click.v1.HeartBeatReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionV2` | `string` | - | 业务字段 `sessionV2`（名称未提供可靠中文语义） |
| 2 | `stage` | `Stage` | - | 业务字段 `stage`（名称未提供可靠中文语义） |
| 3 | `streamTimeout` | `int64` | - | 流 |
| 4 | `batchFrequency` | `int64` | - | 业务字段 `batchFrequency`（名称未提供可靠中文语义） |
| 5 | `frequency` | `float` | - | 业务字段 `frequency`（名称未提供可靠中文语义） |
| 6 | `videoMeta` | `VideoMeta` | - | 视频 元数据 |
| 7 | `appInfo` | `AppInfo` | - | 应用 信息 |
| 8 | `accountInfo` | `AccountInfo` | - | 账户 信息 |
| 9 | `preProcessResult` | `PreProcessResult` | - | 结果 |
| 10 | `playerStatus` | `PlayerStatus` | repeated | 播放器 状态 |
| 11 | `videoInfo` | `VideoInfo` | - | 视频 信息 |
| 12 | `extra` | `Extra` | - | 扩展数据 |

### 响应 `com.bapis.bilibili.app.click.v1.HeartBeatReply`

中文说明：响应。

该消息没有声明字段。
