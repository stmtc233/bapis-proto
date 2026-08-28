# `com.bapis.bilibili.app.show.rank.v1.Rank`

中文说明：应用 排行 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `RankAll` | 一元调用 | `com.bapis.bilibili.app.show.rank.v1.RankAllResultReq` | `com.bapis.bilibili.app.show.rank.v1.RankListReply` | 排行 全部 |
| `RankRegion` | 一元调用 | `com.bapis.bilibili.app.show.rank.v1.RankRegionResultReq` | `com.bapis.bilibili.app.show.rank.v1.RankListReply` | 排行 分区 |
| `RankRegionList` | 一元调用 | `com.bapis.bilibili.app.show.rank.v1.RankRegionListReq` | `com.bapis.bilibili.app.show.rank.v1.RankRegionListReply` | 排行 分区 列表 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.show.rank.v1.RankAllResultReq`

中文说明：排行 全部 结果 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `order` | `string` | - | 排序 |
| 2 | `pn` | `int32` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 3 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.show.rank.v1.RankListReply`

中文说明：排行 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `Item` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.show.rank.v1.RankRegionResultReq`

中文说明：排行 分区 结果 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `rid` | `int32` | - | 业务字段 `rid`（名称未提供可靠中文语义） |
| 2 | `pn` | `int32` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 3 | `ps` | `int32` | - | 业务字段 `ps`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.show.rank.v1.RankRegionListReq`

中文说明：排行 分区 列表 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.show.rank.v1.RankRegionListReply`

中文说明：排行 分区 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `regions` | `RankRegionInfo` | repeated | 业务字段 `regions`（名称未提供可靠中文语义） |
