# `com.bapis.bilibili.app.playeronline.v1.PlayerOnline`

中文说明：应用 播放器 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `PlayerOnline` | 一元调用 | `com.bapis.bilibili.app.playeronline.v1.PlayerOnlineReq` | `com.bapis.bilibili.app.playeronline.v1.PlayerOnlineReply` | 播放器 |
| `PremiereInfo` | 一元调用 | `com.bapis.bilibili.app.playeronline.v1.PremiereInfoReq` | `com.bapis.bilibili.app.playeronline.v1.PremiereInfoReply` | 信息 |
| `ReportWatch` | 一元调用 | `com.bapis.bilibili.app.playeronline.v1.ReportWatchReq` | `com.bapis.bilibili.app.playeronline.v1.NoReply` | `ReportWatch` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.playeronline.v1.PlayerOnlineReq`

中文说明：播放器 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `playOpen` | `bool` | - | 播放 |

### 响应 `com.bapis.bilibili.app.playeronline.v1.PlayerOnlineReply`

中文说明：播放器 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `totalText` | `string` | - | 总数 文本 |
| 2 | `secNext` | `int64` | - | 下一页 |
| 3 | `bottomShow` | `bool` | - | 业务字段 `bottomShow`（名称未提供可靠中文语义） |
| 4 | `sdmShow` | `bool` | - | 业务字段 `sdmShow`（名称未提供可靠中文语义） |
| 5 | `sdmText` | `string` | - | 文本 |
| 6 | `totalNumber` | `int64` | - | 总数 |
| 7 | `totalNumberText` | `string` | - | 总数 文本 |

### 请求 `com.bapis.bilibili.app.playeronline.v1.PremiereInfoReq`

中文说明：信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |

### 响应 `com.bapis.bilibili.app.playeronline.v1.PremiereInfoReply`

中文说明：信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `premiereOverText` | `string` | - | 文本 |
| 2 | `participant` | `int64` | - | 业务字段 `participant`（名称未提供可靠中文语义） |
| 3 | `interaction` | `int64` | - | 业务字段 `interaction`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.playeronline.v1.ReportWatchReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `biz` | `string` | - | 业务字段 `biz`（名称未提供可靠中文语义） |
| 3 | `buvid` | `string` | - | 设备标识 |

### 响应 `com.bapis.bilibili.app.playeronline.v1.NoReply`

中文说明：响应。

该消息没有声明字段。
