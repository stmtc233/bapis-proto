# `bilibili.app.interface.v1.SearchTest`

中文说明：应用 接口 搜索 测试 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `NotExist` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Req` | `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Reply` | `NotExist` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Req`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `highlight` | `int32` | - | 业务字段 `highlight`（名称未提供可靠中文语义） |
| 3 | `teenagersMode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SuggestionResult3Reply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `trackid` | `string` | - | 业务字段 `trackid`（名称未提供可靠中文语义） |
| 2 | `list` | `ResultItem` | repeated | 列表 |
| 3 | `expStr` | `string` | - | 业务字段 `expStr`（名称未提供可靠中文语义） |
