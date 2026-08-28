# `com.bapis.bilibili.api.probe.v1.Probe`

中文说明：接口 探测 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `TestCode` | 一元调用 | `com.bapis.bilibili.api.probe.v1.CodeReq` | `com.bapis.bilibili.api.probe.v1.CodeReply` | 测试 状态码 |
| `TestReq` | 一元调用 | `com.bapis.bilibili.api.probe.v1.ProbeReq` | `com.bapis.bilibili.api.probe.v1.ProbeReply` | 测试 请求 |
| `TestStream` | 双向流 | `com.bapis.bilibili.api.probe.v1.ProbeStreamReq` | `com.bapis.bilibili.api.probe.v1.ProbeStreamReply` | 测试 流 |
| `TestSub` | 服务端流 | `com.bapis.bilibili.api.probe.v1.ProbeSubReq` | `com.bapis.bilibili.api.probe.v1.ProbeSubReply` | 测试 订阅 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.api.probe.v1.CodeReq`

中文说明：状态码 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int64` | - | 状态码 |

### 响应 `com.bapis.bilibili.api.probe.v1.CodeReply`

中文说明：状态码 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `string` | - | 标识 |
| 2 | `id1` | `string` | - | 业务字段 `id1`（名称未提供可靠中文语义） |
| 3 | `code` | `int64` | - | 状态码 |
| 4 | `messageS` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.api.probe.v1.ProbeReq`

中文说明：探测 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `buvid` | `string` | - | 设备标识 |

### 响应 `com.bapis.bilibili.api.probe.v1.ProbeReply`

中文说明：探测 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `content` | `string` | - | 内容 |
| 2 | `timestamp` | `int64` | - | 时间戳 |

### 请求 `com.bapis.bilibili.api.probe.v1.ProbeStreamReq`

中文说明：探测 流 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `sequence` | `int64` | - | 序号 |

### 响应 `com.bapis.bilibili.api.probe.v1.ProbeStreamReply`

中文说明：探测 流 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sequence` | `int64` | - | 序号 |
| 2 | `timestamp` | `int64` | - | 时间戳 |
| 3 | `content` | `string` | - | 内容 |

### 请求 `com.bapis.bilibili.api.probe.v1.ProbeSubReq`

中文说明：探测 订阅 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `buvid` | `string` | - | 设备标识 |

### 响应 `com.bapis.bilibili.api.probe.v1.ProbeSubReply`

中文说明：探测 订阅 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `messageId` | `int64` | - | 消息 标识 |
