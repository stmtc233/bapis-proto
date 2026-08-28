# `com.bapis.bilibili.tv.interface.v1.community.UserCommunity`

中文说明：接口 社区 用户 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `GetHistoryRPC` | 一元调用 | `com.bapis.ott.community.GetHistoryReq` | `com.bapis.ott.community.GetHistoryReply` | 获取 历史记录 |
| `HasLike` | 一元调用 | `com.bapis.ott.community.HasLikeReq` | `com.bapis.ott.community.HasLikeReply` | 是否具有 点赞 |
| `Like` | 一元调用 | `com.bapis.ott.community.LikeReq` | `com.bapis.ott.community.LikeReply` | 点赞 |

## 请求与响应字段

### 请求 `com.bapis.ott.community.GetHistoryReq`

中文说明：获取 历史记录 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `guestId` | `int64` | - | 标识 |
| 3 | `device` | `Device` | - | 设备 |
| 4 | `from` | `string` | - | 来源 |
| 5 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 6 | `eightk` | `int64` | - | 业务字段 `eightk`（名称未提供可靠中文语义） |
| 7 | `business` | `string` | - | 业务 |

### 响应 `com.bapis.ott.community.GetHistoryReply`

中文说明：获取 历史记录 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hisRes` | `HisRes` | repeated | 业务字段 `hisRes`（名称未提供可靠中文语义） |
| 2 | `loginwall` | `bytes` | - | 业务字段 `loginwall`（名称未提供可靠中文语义） |

### 请求 `com.bapis.ott.community.HasLikeReq`

中文说明：是否具有 点赞 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `aids` | `int64` | repeated | 业务字段 `aids`（名称未提供可靠中文语义） |
| 3 | `channel` | `string` | - | 频道 |

### 响应 `com.bapis.ott.community.HasLikeReply`

中文说明：是否具有 点赞 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `states` | `map<int64, UserLikeState>` | map | 业务字段 `states`（名称未提供可靠中文语义） |

### 请求 `com.bapis.ott.community.LikeReq`

中文说明：点赞 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `aid` | `int64` | - | 稿件 ID |
| 3 | `upMid` | `int64` | - | 用户 ID |
| 4 | `action` | `int32` | - | 操作 |
| 6 | `channel` | `string` | - | 频道 |
| 7 | `ip` | `string` | - | IP 地址 |

### 响应 `com.bapis.ott.community.LikeReply`

中文说明：点赞 响应。

该消息没有声明字段。
