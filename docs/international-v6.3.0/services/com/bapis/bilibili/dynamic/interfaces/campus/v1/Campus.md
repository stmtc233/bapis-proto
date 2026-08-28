# `com.bapis.bilibili.dynamic.interfaces.campus.v1.Campus`

中文说明：动态 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ActionReport` | 一元调用 | `com.bapis.bilibili.dynamic.interfaces.campus.v1.ActionReportReq` | `com.bapis.bilibili.dynamic.interfaces.campus.v1.ActionReportReply` | 操作 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.dynamic.interfaces.campus.v1.ActionReportReq`

中文说明：操作 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `identity` | `string` | - | 业务字段 `identity`（名称未提供可靠中文语义） |
| 2 | `action` | `ActionType` | - | 操作 |
| 3 | `campusId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.dynamic.interfaces.campus.v1.ActionReportReply`

中文说明：操作 响应。

该消息没有声明字段。
