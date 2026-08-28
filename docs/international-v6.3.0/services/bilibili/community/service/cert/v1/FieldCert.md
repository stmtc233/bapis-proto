# `bilibili.community.service.cert.v1.FieldCert`

中文说明：社区 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `FieldCertPopAction` | 一元调用 | `com.bapis.bilibili.community.service.cert.v1.FieldCertPopActionReq` | `com.bapis.bilibili.community.service.cert.v1.FieldCertPopActionRsp` | 操作 |
| `FieldCertPopRecord` | 一元调用 | `com.bapis.bilibili.community.service.cert.v1.FieldCertPopRecordReq` | `com.bapis.bilibili.community.service.cert.v1.FieldCertPopRecordRsp` | `FieldCertPopRecord` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.community.service.cert.v1.FieldCertPopActionReq`

中文说明：操作 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `avid` | `int64` | - | AV视频 ID |
| 2 | `action` | `Action` | - | 操作 |

### 响应 `com.bapis.bilibili.community.service.cert.v1.FieldCertPopActionRsp`

中文说明：操作 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.community.service.cert.v1.FieldCertPopRecordReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `avid` | `int64` | - | AV视频 ID |

### 响应 `com.bapis.bilibili.community.service.cert.v1.FieldCertPopRecordRsp`

中文说明：响应。

该消息没有声明字段。
