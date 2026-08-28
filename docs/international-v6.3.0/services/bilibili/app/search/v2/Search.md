# `bilibili.app.search.v2.Search`

中文说明：应用 搜索 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `CancelChatTask` | 一元调用 | `com.bapis.bilibili.app.search.v2.CancelChatTaskReq` | `com.bapis.bilibili.app.search.v2.CancelChatTaskReply` | `CancelChatTask` 调用 |
| `GetChatAuth` | 一元调用 | `com.bapis.bilibili.app.search.v2.GetChatAuthReq` | `com.bapis.bilibili.app.search.v2.GetChatAuthReply` | 获取 |
| `GetChatResult` | 一元调用 | `com.bapis.bilibili.app.search.v2.GetChatResultReq` | `com.bapis.bilibili.broadcast.message.main.ChatResult` | 获取 结果 |
| `QueryRecAfterClick` | 一元调用 | `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReq` | `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReply` | 点击 |
| `QueryRecComment` | 一元调用 | `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReq` | `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReply` | 评论 |
| `SearchDelFollow` | 一元调用 | `com.bapis.bilibili.app.search.v2.SearchDelFollowRequest` | `com.bapis.bilibili.app.search.v2.SearchDelFollowResponse` | 搜索 关注 |
| `SearchEgg` | 一元调用 | `com.bapis.bilibili.app.search.v2.SearchEggReq` | `com.bapis.bilibili.app.search.v2.SearchEggReply` | 搜索 |
| `SearchFollow` | 一元调用 | `com.bapis.bilibili.app.search.v2.SearchFollowRequest` | `com.bapis.bilibili.app.search.v2.SearchFollowResponse` | 搜索 关注 |
| `SearchLike` | 一元调用 | `com.bapis.bilibili.app.search.v2.SearchLikeReq` | `com.bapis.bilibili.app.search.v2.SearchLikeReply` | 搜索 点赞 |
| `SearchShortUrl` | 一元调用 | `com.bapis.bilibili.app.search.v2.SearchShortUrlReq` | `com.bapis.bilibili.app.search.v2.SearchShortUrlReply` | 搜索 地址 |
| `SubmitChatTask` | 一元调用 | `com.bapis.bilibili.app.search.v2.SubmitChatTaskReq` | `com.bapis.bilibili.app.search.v2.SubmitChatTaskReply` | `SubmitChatTask` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.search.v2.CancelChatTaskReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sessionId` | `string` | - | 标识 |
| 2 | `fromSource` | `string` | - | 来源 来源 |

### 响应 `com.bapis.bilibili.app.search.v2.CancelChatTaskReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |

### 请求 `com.bapis.bilibili.app.search.v2.GetChatAuthReq`

中文说明：获取 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.search.v2.GetChatAuthReply`

中文说明：获取 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `display` | `bool` | - | 展示 |
| 2 | `icon` | `string` | - | 业务字段 `icon`（名称未提供可靠中文语义） |
| 3 | `iconNight` | `string` | - | 业务字段 `iconNight`（名称未提供可靠中文语义） |
| 4 | `jumpLink` | `string` | - | 跳转 链接 |
| 5 | `textGuide` | `string` | - | 文本 |
| 6 | `jumpLinkType` | `int32` | - | 跳转 链接 类型 |

### 请求 `com.bapis.bilibili.app.search.v2.GetChatResultReq`

中文说明：获取 结果 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `query` | `string` | - | 业务字段 `query`（名称未提供可靠中文语义） |
| 2 | `sessionId` | `string` | - | 标识 |
| 3 | `fromSource` | `string` | - | 来源 来源 |
| 4 | `trackId` | `string` | - | 标识 |
| 5 | `cardType` | `string` | - | 卡片 类型 |

### 响应 `com.bapis.bilibili.broadcast.message.main.ChatResult`

中文说明：结果。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `sessionId` | `string` | - | 标识 |
| 3 | `bubbles` | `Bubble` | repeated | 业务字段 `bubbles`（名称未提供可靠中文语义） |
| 4 | `rewriteWord` | `string` | - | 业务字段 `rewriteWord`（名称未提供可靠中文语义） |
| 5 | `title` | `string` | - | 标题 |
| 6 | `business` | `string` | - | 业务 |
| 7 | `messageId` | `int64` | - | 消息 标识 |
| 8 | `likeState` | `LikeState` | - | 点赞 状态 |
| 9 | `likeNumber` | `int64` | - | 点赞 |

### 请求 `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReq`

中文说明：点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `param` | `string` | - | 参数 |
| 2 | `pos` | `int32` | - | 业务字段 `pos`（名称未提供可靠中文语义） |
| 3 | `trackId` | `string` | - | 标识 |
| 4 | `qvId` | `string` | - | 标识 |
| 5 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 6 | `clickUrl` | `string` | - | 点击 地址 |
| 7 | `fromSource` | `string` | - | 来源 来源 |
| 8 | `userAct` | `string` | - | 用户 |

### 响应 `com.bapis.bilibili.app.search.v2.QueryRecAfterClickReply`

中文说明：点击 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `queryRecResult` | `QueryRecAfterClickResult` | - | 结果 |

### 请求 `com.bapis.bilibili.app.search.v2.SearchDelFollowRequest`

中文说明：搜索 关注 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cid` | `int64` | - | 分 P ID |
| 2 | `followType` | `FollowTypeEnum` | - | 关注 类型 |

### 响应 `com.bapis.bilibili.app.search.v2.SearchDelFollowResponse`

中文说明：搜索 关注 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.search.v2.SearchEggReq`

中文说明：搜索 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.search.v2.SearchEggReply`

中文说明：搜索 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `seid` | `string` | - | 业务字段 `seid`（名称未提供可靠中文语义） |
| 3 | `result` | `SearchEggInfos` | - | 结果 |

### 请求 `com.bapis.bilibili.app.search.v2.SearchFollowRequest`

中文说明：搜索 关注 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cid` | `int64` | - | 分 P ID |
| 2 | `followType` | `FollowTypeEnum` | - | 关注 类型 |

### 响应 `com.bapis.bilibili.app.search.v2.SearchFollowResponse`

中文说明：搜索 关注 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.search.v2.SearchLikeReq`

中文说明：搜索 点赞 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `business` | `string` | - | 业务 |
| 2 | `messageId` | `int64` | - | 消息 标识 |
| 3 | `action` | `Action` | - | 操作 |

### 响应 `com.bapis.bilibili.app.search.v2.SearchLikeReply`

中文说明：搜索 点赞 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `likeNumber` | `int64` | - | 点赞 |
| 2 | `dislikeNumber` | `int64` | - | 业务字段 `dislikeNumber`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.search.v2.SearchShortUrlReq`

中文说明：搜索 地址 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shortUrl` | `string` | - | 地址 |

### 响应 `com.bapis.bilibili.app.search.v2.SearchShortUrlReply`

中文说明：搜索 地址 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `originUrl` | `string` | - | 地址 |

### 请求 `com.bapis.bilibili.app.search.v2.SubmitChatTaskReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `query` | `string` | - | 业务字段 `query`（名称未提供可靠中文语义） |
| 2 | `trackId` | `string` | - | 标识 |
| 3 | `fromSource` | `string` | - | 来源 来源 |
| 4 | `cardType` | `string` | - | 卡片 类型 |

### 响应 `com.bapis.bilibili.app.search.v2.SubmitChatTaskReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `sessionId` | `string` | - | 标识 |
