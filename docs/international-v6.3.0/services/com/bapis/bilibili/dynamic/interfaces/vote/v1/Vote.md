# `com.bapis.bilibili.dynamic.interfaces.vote.v1.Vote`

中文说明：动态 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `NewDoVote` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.vote.v1.NewDoVoteReq` | `com.bapis.bilibili.dynamic.interfaces.vote.v1.NewDoVoteRsp` | `NewDoVote` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.dynamic.interfaces.vote.v1.NewDoVoteReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `voteId` | `int64` | - | 标识 |
| 2 | `votes` | `int32` | repeated | 业务字段 `votes`（名称未提供可靠中文语义） |
| 3 | `status` | `int32` | - | 状态 |
| 4 | `dynamicId` | `int64` | - | 动态 标识 |
| 5 | `opBit` | `int64` | - | 业务字段 `opBit`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.dynamic.interfaces.vote.v1.NewDoVoteRsp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `type` | `int32` | - | 类型 |
| 3 | `voteInfo` | `VoteInfo` | - | 信息 |
