# `com.bapis.bilibili.app.interface.v1.History`

中文说明：应用 接口 历史记录 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Cursor` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.CursorReq` | `com.bapis.bilibili.app.interfaces.v1.CursorReply` | 游标 |
| `Delete` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.DeleteReq` | `com.bapis.bilibili.app.interfaces.v1.NoReply` | 删除 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.CursorReq`

中文说明：游标 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cursor` | `Cursor` | - | 游标 |
| 2 | `business` | `string` | - | 业务 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.CursorReply`

中文说明：游标 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `items` | `CursorItem` | repeated | 业务字段 `items`（名称未提供可靠中文语义） |
| 2 | `tab` | `CursorTab` | repeated | 标签页 |
| 3 | `cursor` | `Cursor` | - | 游标 |
| 4 | `hasMore` | `bool` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.DeleteReq`

中文说明：删除 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hisInfo` | `HisInfo` | repeated | 信息 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.NoReply`

中文说明：响应。

该消息没有声明字段。
