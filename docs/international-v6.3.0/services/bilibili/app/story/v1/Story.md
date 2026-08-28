# `bilibili.app.story.v1.Story`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AIAudio` | 一元调用 | `com.bapis.bilibili.app.story.v1.AIAudioReq` | `com.bapis.bilibili.app.story.v1.AIAudioReply` | `AIAudio` 调用 |
| `ArchiveStatus` | 一元调用 | `com.bapis.bilibili.app.story.v1.ArchiveStatusReq` | `com.bapis.bilibili.app.story.v1.ArchiveStatusReply` | 稿件 状态 |
| `BgmPlay` | 一元调用 | `com.bapis.bilibili.app.story.v1.BgmPlayReq` | `com.bapis.bilibili.app.story.v1.BgmPlayReply` | 播放 |
| `Rerank` | 一元调用 | `com.bapis.bilibili.app.story.v1.RerankReq` | `com.bapis.bilibili.app.story.v1.RerankReply` | `Rerank` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.story.v1.AIAudioReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `cid` | `int64` | - | 分 P ID |
| 3 | `upMid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.app.story.v1.AIAudioReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `supportAiAudio` | `bool` | - | 业务字段 `supportAiAudio`（名称未提供可靠中文语义） |
| 2 | `aiAudioItems` | `AIAudioItem` | repeated | 业务字段 `aiAudioItems`（名称未提供可靠中文语义） |
| 3 | `aiOpenToast` | `string` | - | 业务字段 `aiOpenToast`（名称未提供可靠中文语义） |
| 4 | `aiCloseToast` | `string` | - | 业务字段 `aiCloseToast`（名称未提供可靠中文语义） |
| 5 | `language` | `Language` | - | 业务字段 `language`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.story.v1.ArchiveStatusReq`

中文说明：稿件 状态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |

### 响应 `com.bapis.bilibili.app.story.v1.ArchiveStatusReply`

中文说明：稿件 状态 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `isArchiveNormal` | `bool` | - | 是否 稿件 |

### 请求 `com.bapis.bilibili.app.story.v1.BgmPlayReq`

中文说明：播放 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `musicId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.story.v1.BgmPlayReply`

中文说明：播放 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `url` | `string` | - | 地址 |

### 请求 `com.bapis.bilibili.app.story.v1.RerankReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `preAdStartTs` | `int64` | - | 广告 开始 |
| 2 | `preAdEndTs` | `int64` | - | 广告 结束 |
| 3 | `preAdCard` | `RerankCardInfo` | - | 广告 卡片 |
| 4 | `lastCardTs` | `int64` | - | 卡片 |
| 5 | `lastCard` | `RerankCardInfo` | - | 卡片 |
| 6 | `unexposedCard` | `RerankCardInfo` | repeated | 卡片 |
| 7 | `lastAdGap` | `int32` | - | 广告 |
| 8 | `refreshTs` | `int64` | - | 业务字段 `refreshTs`（名称未提供可靠中文语义） |
| 9 | `requestFrom` | `int32` | - | 请求 来源 |
| 10 | `latestCardsInfo` | `LatestCardInfo` | repeated | 信息 |

### 响应 `com.bapis.bilibili.app.story.v1.RerankReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `card` | `RerankCardInfo` | repeated | 卡片 |
