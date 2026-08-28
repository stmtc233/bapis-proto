# `bilibili.api.ticket.v1.Ticket`

中文说明：接口 票务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `GenWebTicket` | 一元调用 | `com.bapis.bilibili.api.ticket.v1.GenWebTicketRequest` | `com.bapis.bilibili.api.ticket.v1.GenWebTicketResponse` | 网页 票务 |
| `GetTicket` | 一元调用 | `com.bapis.bilibili.api.ticket.v1.GetTicketRequest` | `com.bapis.bilibili.api.ticket.v1.GetTicketResponse` | 获取 票务 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.api.ticket.v1.GenWebTicketRequest`

中文说明：网页 票务 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `context` | `map<string, string>` | map | 业务字段 `context`（名称未提供可靠中文语义） |
| 2 | `keyId` | `string` | - | 标识 |
| 3 | `hexsign` | `string` | - | 业务字段 `hexsign`（名称未提供可靠中文语义） |
| 4 | `token` | `string` | - | 凭据 |

### 响应 `com.bapis.bilibili.api.ticket.v1.GenWebTicketResponse`

中文说明：网页 票务 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ticket` | `string` | - | 票务 |
| 2 | `createdAt` | `int64` | - | 业务字段 `createdAt`（名称未提供可靠中文语义） |
| 3 | `ttl` | `int64` | - | 业务字段 `ttl`（名称未提供可靠中文语义） |
| 4 | `context` | `GenWebTicketResponse_Context` | - | 业务字段 `context`（名称未提供可靠中文语义） |
| 5 | `nav` | `GenWebTicketResponse_Nav` | - | 业务字段 `nav`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.api.ticket.v1.GetTicketRequest`

中文说明：获取 票务 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `context` | `map<string, bytes>` | map | 业务字段 `context`（名称未提供可靠中文语义） |
| 2 | `keyId` | `string` | - | 标识 |
| 3 | `sign` | `bytes` | - | 业务字段 `sign`（名称未提供可靠中文语义） |
| 4 | `token` | `string` | - | 凭据 |

### 响应 `com.bapis.bilibili.api.ticket.v1.GetTicketResponse`

中文说明：获取 票务 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ticket` | `string` | - | 票务 |
| 2 | `createdAt` | `int64` | - | 业务字段 `createdAt`（名称未提供可靠中文语义） |
| 3 | `ttl` | `int64` | - | 业务字段 `ttl`（名称未提供可靠中文语义） |
| 4 | `context` | `GetTicketResponse_Context` | - | 业务字段 `context`（名称未提供可靠中文语义） |
