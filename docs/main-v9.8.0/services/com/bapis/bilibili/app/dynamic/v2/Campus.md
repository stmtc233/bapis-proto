# `com.bapis.bilibili.app.dynamic.v2.Campus`

中文说明：应用 动态 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `WaterFlowRcmd` | 一元调用 | `com.bapis.bilibili.app.dynamic.v2.WaterFlowRcmdReq` | `com.bapis.bilibili.app.dynamic.v2.WaterFlowRcmdResp` | `WaterFlowRcmd` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.dynamic.v2.WaterFlowRcmdReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `campusId` | `int64` | - | 标识 |
| 2 | `page` | `com.bapis.bilibili.pagination.FeedPagination` | - | 分页 |
| 3 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |
| 4 | `from` | `CampusRcmdReqFrom` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v2.WaterFlowRcmdResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CampusWaterFlowItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `offset` | `com.bapis.bilibili.pagination.FeedPaginationReply` | - | 偏移量 |
