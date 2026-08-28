# `com.bapis.bilibili.app.interfaces.v1.Space`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `SearchArchive` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SearchArchiveReq` | `com.bapis.bilibili.app.interfaces.v1.SearchArchiveReply` | 搜索 稿件 |
| `SearchDynamic` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SearchDynamicReq` | `com.bapis.bilibili.app.interfaces.v1.SearchDynamicReply` | 搜索 动态 |
| `SearchTab` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SearchTabReq` | `com.bapis.bilibili.app.interfaces.v1.SearchTabReply` | 搜索 标签页 |
| `UpdateReserveStartTime` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.UpdateReserveStartTimeReq` | `com.bapis.bilibili.app.interfaces.v1.UpdateReserveStartTimeReply` | 更新 开始 时间 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.SearchArchiveReq`

中文说明：搜索 稿件 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `pn` | `int64` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 4 | `ps` | `int64` | - | 业务字段 `ps`（名称未提供可靠中文语义） |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SearchArchiveReply`

中文说明：搜索 稿件 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `archives` | `Arc` | repeated | 业务字段 `archives`（名称未提供可靠中文语义） |
| 2 | `total` | `int64` | - | 总数 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.SearchDynamicReq`

中文说明：搜索 动态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `pn` | `int64` | - | 业务字段 `pn`（名称未提供可靠中文语义） |
| 4 | `ps` | `int64` | - | 业务字段 `ps`（名称未提供可靠中文语义） |
| 5 | `playerArgs` | `com.bapis.bilibili.app.archive.middleware.v1.PlayerArgs` | - | 播放器 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SearchDynamicReply`

中文说明：搜索 动态 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynamics` | `Dynamic` | repeated | 业务字段 `dynamics`（名称未提供可靠中文语义） |
| 2 | `total` | `int64` | - | 总数 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.SearchTabReq`

中文说明：搜索 标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `keyword` | `string` | - | 业务字段 `keyword`（名称未提供可靠中文语义） |
| 2 | `mid` | `int64` | - | 用户 ID |
| 3 | `from` | `From` | - | 来源 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SearchTabReply`

中文说明：搜索 标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `focus` | `int64` | - | 业务字段 `focus`（名称未提供可靠中文语义） |
| 2 | `tabs` | `Tab` | repeated | 业务字段 `tabs`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.interfaces.v1.UpdateReserveStartTimeReq`

中文说明：更新 开始 时间 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sid` | `int64` | - | 会话 ID |
| 2 | `newLivePlanStartTime` | `int64` | - | 直播 开始 时间 |
| 3 | `type` | `int64` | - | 类型 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.UpdateReserveStartTimeReply`

中文说明：更新 开始 时间 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `descText` | `string` | - | 描述 文本 |
