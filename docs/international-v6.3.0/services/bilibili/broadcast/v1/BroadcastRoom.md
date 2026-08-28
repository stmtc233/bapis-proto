# `bilibili.broadcast.v1.BroadcastRoom`

中文说明：广播 直播间 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Enter` | 双向流 | `com.bapis.bilibili.broadcast.v1.RoomReq` | `com.bapis.bilibili.broadcast.v1.RoomResp` | `Enter` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.broadcast.v1.RoomReq`

中文说明：直播间 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `string` | - | 标识 |
| 2 | `join` | `RoomJoinEvent` | oneof: `oneof_0` | 业务字段 `join`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 3 | `leave` | `RoomLeaveEvent` | oneof: `oneof_0` | 业务字段 `leave`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 4 | `online` | `RoomOnlineEvent` | oneof: `oneof_0` | 业务字段 `online`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 5 | `msg` | `RoomMessageEvent` | oneof: `oneof_0` | 业务字段 `msg`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |

### 响应 `com.bapis.bilibili.broadcast.v1.RoomResp`

中文说明：直播间 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `string` | - | 标识 |
| 2 | `join` | `RoomJoinEvent` | oneof: `oneof_0` | 业务字段 `join`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 3 | `leave` | `RoomLeaveEvent` | oneof: `oneof_0` | 业务字段 `leave`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 4 | `online` | `RoomOnlineEvent` | oneof: `oneof_0` | 业务字段 `online`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 5 | `msg` | `RoomMessageEvent` | oneof: `oneof_0` | 业务字段 `msg`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
| 6 | `err` | `RoomErrorEvent` | oneof: `oneof_0` | 业务字段 `err`（名称未提供可靠中文语义）；与同一 oneof 中的字段互斥。 |
