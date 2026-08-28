# `bilibili.broadcast.v1.Broadcast`

中文说明：广播 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Auth` | 一元调用 | `com.bapis.bilibili.broadcast.v1.AuthReq` | `com.bapis.bilibili.broadcast.v1.AuthResp` | `Auth` 调用 |
| `Heartbeat` | 一元调用 | `com.bapis.bilibili.broadcast.v1.HeartbeatReq` | `com.bapis.bilibili.broadcast.v1.HeartbeatResp` | `Heartbeat` 调用 |
| `MessageAck` | 一元调用 | `com.bapis.bilibili.broadcast.v1.MessageAckReq` | `google.protobuf.Empty` | 消息 |
| `Subscribe` | 一元调用 | `com.bapis.bilibili.broadcast.v1.TargetPath` | `google.protobuf.Empty` | `Subscribe` 调用 |
| `Unsubscribe` | 一元调用 | `com.bapis.bilibili.broadcast.v1.TargetPath` | `google.protobuf.Empty` | `Unsubscribe` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.broadcast.v1.AuthReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `guid` | `string` | - | 业务字段 `guid`（名称未提供可靠中文语义） |
| 2 | `connId` | `string` | - | 标识 |
| 3 | `lastMsgId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.broadcast.v1.AuthResp`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.broadcast.v1.HeartbeatReq`

中文说明：请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.broadcast.v1.HeartbeatResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `opType` | `OpType` | - | 类型 |
| 2 | `targetHostname` | `string` | - | 业务字段 `targetHostname`（名称未提供可靠中文语义） |
| 3 | `targetIp` | `string` | - | IP 地址 |
| 4 | `targetPort` | `int64` | - | 业务字段 `targetPort`（名称未提供可靠中文语义） |
| 5 | `targetTtl` | `int64` | - | 业务字段 `targetTtl`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.broadcast.v1.MessageAckReq`

中文说明：消息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `ackId` | `int64` | - | 标识 |
| 2 | `ackOrigin` | `string` | - | 业务字段 `ackOrigin`（名称未提供可靠中文语义） |
| 3 | `targetPath` | `string` | - | 业务字段 `targetPath`（名称未提供可靠中文语义） |
| 4 | `msgType` | `int64` | - | 类型 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.broadcast.v1.TargetPath`

中文说明：`TargetPath` 消息。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `targetPaths` | `string` | repeated | 业务字段 `targetPaths`（名称未提供可靠中文语义） |
