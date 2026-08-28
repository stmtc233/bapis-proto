# `bilibili.app.view.v1.LegacyView`

中文说明：应用 查看 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Like` | 一元调用 | `com.bapis.bilibili.app.view.v1.LikeReq` | `com.bapis.bilibili.app.view.v1.LikeReply` | 点赞 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.view.v1.LikeReq`

中文说明：点赞 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `ogvType` | `int64` | - | 类型 |
| 3 | `from` | `string` | - | 来源 |
| 4 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 5 | `fromSpmid` | `string` | - | 来源 |
| 6 | `trackId` | `string` | - | 标识 |
| 7 | `goto` | `string` | - | 业务字段 `goto`（名称未提供可靠中文语义） |
| 8 | `like` | `int32` | - | 点赞 |
| 9 | `source` | `string` | - | 来源 |
| 10 | `token` | `string` | - | 凭据 |
| 11 | `actionId` | `string` | - | 操作 标识 |

### 响应 `com.bapis.bilibili.app.view.v1.LikeReply`

中文说明：点赞 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `toast` | `string` | - | 业务字段 `toast`（名称未提供可靠中文语义） |
| 2 | `vVoucher` | `string` | - | 业务字段 `vVoucher`（名称未提供可靠中文语义） |
