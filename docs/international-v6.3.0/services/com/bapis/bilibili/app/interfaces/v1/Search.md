# `com.bapis.bilibili.app.interfaces.v1.Search`

中文说明：应用 搜索 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `DefaultWords` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.DefaultWordsReq` | `com.bapis.bilibili.app.interfaces.v1.DefaultWordsReply` | `DefaultWords` 调用 |
| `Suggest3` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Req` | `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Reply` | `Suggest3` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.DefaultWordsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `from` | `int64` | - | 来源 |
| 2 | `loginEvent` | `int64` | - | 事件 |
| 3 | `teenagersMode` | `int32` | - | 模式 |
| 4 | `lessonsMode` | `int32` | - | 模式 |
| 5 | `tab` | `string` | - | 标签页 |
| 6 | `eventId` | `string` | - | 事件 标识 |
| 7 | `avid` | `string` | - | AV视频 ID |
| 8 | `query` | `string` | - | 业务字段 `query`（名称未提供可靠中文语义） |
| 9 | `an` | `int64` | - | 业务字段 `an`（名称未提供可靠中文语义） |
| 10 | `isFresh` | `int64` | - | 是否 |
| 11 | `splashGuide` | `string` | - | 业务字段 `splashGuide`（名称未提供可靠中文语义） |
| 12 | `splashId` | `int64` | - | 标识 |
| 13 | `refreshType` | `int64` | - | 类型 |
| 14 | `userAct` | `string` | - | 用户 |
| 15 | `searchPageReturn` | `int32` | - | 搜索 分页 |
| 16 | `dislike` | `string` | - | 业务字段 `dislike`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.interfaces.v1.DefaultWordsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 2 | `param` | `string` | - | 参数 |
| 3 | `show` | `string` | - | 业务字段 `show`（名称未提供可靠中文语义） |
| 4 | `word` | `string` | - | 业务字段 `word`（名称未提供可靠中文语义） |
| 5 | `showFront` | `int64` | - | 业务字段 `showFront`（名称未提供可靠中文语义） |
| 6 | `expStr` | `string` | - | 业务字段 `expStr`（名称未提供可靠中文语义） |
| 7 | `goto` | `string` | - | 业务字段 `goto`（名称未提供可靠中文语义） |
| 8 | `value` | `string` | - | 值 |
| 9 | `uri` | `string` | - | URI |
| 10 | `enableRefresh` | `int64` | - | 启用 |
| 11 | `refreshIntervalMilli` | `uint64` | - | 业务字段 `refreshIntervalMilli`（名称未提供可靠中文语义） |
| 12 | `enableAnimation` | `int64` | - | 启用 |
| 13 | `animationTimeMilli` | `uint64` | - | 时间 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Req`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `highlight` | `int32` | - | 业务字段 `highlight`（名称未提供可靠中文语义） |
| 3 | `teenagersMode` | `int32` | - | 模式 |
| 4 | `userAct` | `string` | - | 用户 |
| 5 | `feedbackList` | `string` | - | 列表 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Reply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 2 | `list` | `ResultItem` | repeated | 列表 |
| 3 | `expStr` | `string` | - | 业务字段 `expStr`（名称未提供可靠中文语义） |
| 4 | `negativeFeedback` | `NegativeFeedback` | - | 业务字段 `negativeFeedback`（名称未提供可靠中文语义） |
