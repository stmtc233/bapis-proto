# `com.bapis.bilibili.web.interface.v1.WebInterface`

中文说明：网页 接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ViewDetail` | 一元调用 | `com.bapis.bilibili.web.interfaces.v1.ViewDetailReq` | `com.bapis.bilibili.web.interfaces.v1.ViewDetailReply` | 查看 详情 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.web.interfaces.v1.ViewDetailReq`

中文说明：查看 详情 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `aid` | `int64` | - | 稿件 ID |
| 2 | `bvid` | `string` | - | BV 号 |

### 响应 `com.bapis.bilibili.web.interfaces.v1.ViewDetailReply`

中文说明：查看 详情 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `view` | `View` | - | 查看 |
| 2 | `card` | `Card` | - | 卡片 |
| 3 | `tags` | `Tag` | repeated | 业务字段 `tags`（名称未提供可靠中文语义） |
| 4 | `reply` | `HotReply` | - | 响应 |
| 5 | `related` | `Arc` | repeated | 业务字段 `related`（名称未提供可靠中文语义） |
