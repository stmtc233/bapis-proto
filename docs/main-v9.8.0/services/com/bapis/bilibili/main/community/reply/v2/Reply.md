# `com.bapis.bilibili.main.community.reply.v2.Reply`

中文说明：社区 响应 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `SubjectDescription` | 一元调用 | `com.bapis.bilibili.main.community.reply.v2.SubjectDescriptionReq` | `com.bapis.bilibili.main.community.reply.v2.SubjectDescriptionReply` | `SubjectDescription` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.main.community.reply.v2.SubjectDescriptionReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `subjectId` | `SubjectID` | - | 标识 |
| 2 | `playerParams` | `PlayerParams` | - | 播放器 |

### 响应 `com.bapis.bilibili.main.community.reply.v2.SubjectDescriptionReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `count` | `int64` | - | 数量 |
| 2 | `input` | `SubjectDescriptionReply_InputConfig` | - | 业务字段 `input`（名称未提供可靠中文语义） |
| 3 | `emote` | `SubjectDescriptionReply_EmoteConfig` | - | 业务字段 `emote`（名称未提供可靠中文语义） |
| 4 | `emptyPage` | `EmptyPage` | - | 分页 |
| 5 | `supportFilterTags` | `SubjectDescriptionReply_FilterTag` | repeated | 筛选 |
| 6 | `preloadResUrls` | `string` | repeated | 业务字段 `preloadResUrls`（名称未提供可靠中文语义） |
| 7 | `userCallbacks` | `UserCallback` | repeated | 用户 |
| 8 | `upMid` | `int64` | - | 用户 ID |
| 9 | `preloadResources` | `Resource` | repeated | 业务字段 `preloadResources`（名称未提供可靠中文语义） |
| 10 | `guestLimit` | `bool` | - | 限制 |
| 11 | `filterGuideText` | `GuideText` | - | 筛选 文本 |
| 12 | `upFilterLink` | `string` | - | 筛选 链接 |
| 13 | `webUpFilterLink` | `string` | - | 网页 筛选 链接 |
