# `com.bapis.bilibili.polymer.chronos.v1.ChronosService`

中文说明：资源包 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `ObtainChronosPackage` | 一元调用 | `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageReq` | `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageRsp` | 资源包 |
| `ObtainChronosPackageV2` | 一元调用 | `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageV2Req` | `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageRsp` | 资源包 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageReq`

中文说明：资源包 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `serviceKey` | `string` | - | 业务字段 `serviceKey`（名称未提供可靠中文语义） |
| 2 | `engineVersion` | `string` | - | 版本 |
| 3 | `bizId` | `string` | - | 标识 |

### 响应 `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageRsp`

中文说明：资源包 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `md5` | `string` | - | 业务字段 `md5`（名称未提供可靠中文语义） |
| 2 | `url` | `string` | - | 地址 |
| 3 | `sign` | `string` | - | 业务字段 `sign`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.polymer.chronos.v1.ObtainChronosPackageV2Req`

中文说明：资源包 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `serviceKey` | `string` | - | 业务字段 `serviceKey`（名称未提供可靠中文语义） |
| 2 | `engineVersion` | `string` | - | 版本 |
| 3 | `bizId` | `string` | - | 标识 |
| 4 | `businessAppKey` | `string` | - | 业务 应用 |
