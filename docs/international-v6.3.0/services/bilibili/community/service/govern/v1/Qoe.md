# `bilibili.community.service.govern.v1.Qoe`

中文说明：社区 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `QoeReport` | 一元调用 | `com.bapis.bilibili.community.service.govern.v1.QoeReportReq` | `google.protobuf.Empty` | `QoeReport` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.community.service.govern.v1.QoeReportReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `scene` | `int64` | - | 业务字段 `scene`（名称未提供可靠中文语义） |
| 3 | `type` | `int32` | - | 类型 |
| 4 | `cancel` | `bool` | - | 业务字段 `cancel`（名称未提供可靠中文语义） |
| 5 | `businessType` | `string` | - | 业务 类型 |
| 6 | `oid` | `int64` | - | 对象 ID |
| 7 | `scoreResult` | `QoeScoreResult` | - | 结果 |
| 8 | `businessData` | `string` | - | 业务 数据 |
| 9 | `result` | `QoeResult` | - | 结果 |
| 10 | `deviceInfo` | `DeviceInfo` | - | 设备 信息 |
| 11 | `contentId` | `int64` | - | 内容 标识 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。
