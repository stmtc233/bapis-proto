# `pgc.gateway.vega.v1.VegaFrameDoc`

中文说明：网关 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Auth` | 一元调用 | `com.bapis.pgc.gateway.vega.v1.AuthReq` | `com.bapis.pgc.gateway.vega.v1.AuthResp` | `Auth` 调用 |
| `Heartbeat` | 一元调用 | `com.bapis.pgc.gateway.vega.v1.HeartbeatReq` | `com.bapis.pgc.gateway.vega.v1.HeartbeatResp` | `Heartbeat` 调用 |
| `MessageAck` | 一元调用 | `com.bapis.pgc.gateway.vega.v1.MessageAckReq` | `google.protobuf.Empty` | 消息 |
| `Subscribe` | 一元调用 | `com.bapis.pgc.gateway.vega.v1.SubscribeReq` | `google.protobuf.Empty` | `Subscribe` 调用 |

## 请求与响应字段

### 请求 `com.bapis.pgc.gateway.vega.v1.AuthReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.pgc.gateway.vega.v1.AuthResp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.pgc.gateway.vega.v1.HeartbeatReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.pgc.gateway.vega.v1.HeartbeatResp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.pgc.gateway.vega.v1.MessageAckReq`

中文说明：消息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `vegaId` | `string` | - | 标识 |
| 2 | `reqId` | `string` | - | 请求 标识 |
| 3 | `origin` | `string` | - | 业务字段 `origin`（名称未提供可靠中文语义） |
| 4 | `targetPath` | `string` | - | 业务字段 `targetPath`（名称未提供可靠中文语义） |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.pgc.gateway.vega.v1.SubscribeReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `targetPaths` | `TargetPath` | repeated | 业务字段 `targetPaths`（名称未提供可靠中文语义） |
