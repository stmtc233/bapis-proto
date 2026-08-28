# `com.bapis.bilibili.app.dynamic.v1.Dynamic`

中文说明：应用 动态 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `DynDetails` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynDetailsReq` | `com.bapis.bilibili.app.dynamic.v1.DynDetailsReply` | `DynDetails` 调用 |
| `DynOurCity` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynOurCityReq` | `com.bapis.bilibili.app.dynamic.v1.DynOurCityReply` | `DynOurCity` 调用 |
| `DynOurCitySwitch` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynOurCitySwitchReq` | `com.bapis.bilibili.app.dynamic.v1.NoReply` | `DynOurCitySwitch` 调用 |
| `DynRed` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynRedReq` | `com.bapis.bilibili.app.dynamic.v1.DynRedReply` | `DynRed` 调用 |
| `DynTab` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynTabReq` | `com.bapis.bilibili.app.dynamic.v1.DynTabReply` | 标签页 |
| `DynUpdOffset` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynUpdOffsetReq` | `com.bapis.bilibili.app.dynamic.v1.NoReply` | 偏移量 |
| `DynVideo` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynVideoReq` | `com.bapis.bilibili.app.dynamic.v1.DynVideoReqReply` | 视频 |
| `DynVideoPersonal` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.DynVideoPersonalReq` | `com.bapis.bilibili.app.dynamic.v1.DynVideoPersonalReply` | 视频 |
| `SVideo` | 一元调用 | `com.bapis.bilibili.app.dynamic.v1.SVideoReq` | `com.bapis.bilibili.app.dynamic.v1.SVideoReply` | 视频 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynDetailsReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagersMode` | `int32` | - | 模式 |
| 2 | `dynamicIds` | `string` | - | 动态 |
| 3 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 4 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 5 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 6 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 7 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynDetailsReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynOurCityReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `cityId` | `int64` | - | 标识 |
| 2 | `lat` | `double` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 3 | `lng` | `double` | - | 业务字段 `lng`（名称未提供可靠中文语义） |
| 4 | `offset` | `string` | - | 偏移量 |
| 5 | `pageSize` | `int32` | - | 分页 大小 |
| 6 | `teenagersMode` | `int32` | - | 模式 |
| 7 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 8 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 9 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 10 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 11 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 12 | `lbsState` | `int32` | - | 状态 |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynOurCityReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `offset` | `string` | - | 偏移量 |
| 2 | `hasMore` | `int32` | - | 是否具有 |
| 3 | `style` | `int32` | - | 业务字段 `style`（名称未提供可靠中文语义） |
| 4 | `topLabel` | `string` | - | 业务字段 `topLabel`（名称未提供可靠中文语义） |
| 5 | `list` | `DynOurCityItem` | repeated | 列表 |
| 6 | `topButtonLabel` | `string` | - | 业务字段 `topButtonLabel`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynOurCitySwitchReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `switch` | `int32` | - | 业务字段 `switch`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v1.NoReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynRedReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabOffset` | `TabOffset` | repeated | 标签页 偏移量 |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynRedReply`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `redType` | `string` | - | 类型 |
| 2 | `dynRedItem` | `DynRedItem` | - | 条目 |
| 3 | `defaultTab` | `string` | - | 标签页 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynTabReq`

中文说明：标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagersMode` | `int32` | - | 模式 |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynTabReply`

中文说明：标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `dynTab` | `DynTab` | repeated | 标签页 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynUpdOffsetReq`

中文说明：偏移量 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `hostUid` | `int64` | - | 用户 ID |
| 2 | `readOffset` | `string` | - | 偏移量 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynVideoReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagersMode` | `int32` | - | 模式 |
| 2 | `updateBaseline` | `string` | - | 更新 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `page` | `int32` | - | 分页 |
| 5 | `refreshType` | `int32` | - | 类型 |
| 6 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 7 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 8 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 9 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 10 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynVideoReqReply`

中文说明：视频 请求 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `updateNum` | `int32` | - | 更新 |
| 3 | `historyOffset` | `string` | - | 历史记录 偏移量 |
| 4 | `updateBaseline` | `string` | - | 更新 |
| 5 | `hasMore` | `int32` | - | 是否具有 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.DynVideoPersonalReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `teenagersMode` | `int32` | - | 模式 |
| 2 | `hostUid` | `int64` | - | 用户 ID |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `page` | `int32` | - | 分页 |
| 5 | `isPreload` | `int32` | - | 是否 |
| 6 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 7 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 8 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 9 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 10 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |

### 响应 `com.bapis.bilibili.app.dynamic.v1.DynVideoPersonalReply`

中文说明：视频 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `DynamicItem` | repeated | 列表 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `hasMore` | `int32` | - | 是否具有 |
| 4 | `readOffset` | `string` | - | 偏移量 |

### 请求 `com.bapis.bilibili.app.dynamic.v1.SVideoReq`

中文说明：视频 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oid` | `int64` | - | 对象 ID |
| 2 | `type` | `SVideoType` | - | 类型 |
| 3 | `offset` | `string` | - | 偏移量 |
| 4 | `qn` | `int32` | - | 业务字段 `qn`（名称未提供可靠中文语义） |
| 5 | `fnver` | `int32` | - | 业务字段 `fnver`（名称未提供可靠中文语义） |
| 6 | `fnval` | `int32` | - | 业务字段 `fnval`（名称未提供可靠中文语义） |
| 7 | `forceHost` | `int32` | - | 业务字段 `forceHost`（名称未提供可靠中文语义） |
| 8 | `fourk` | `int32` | - | 业务字段 `fourk`（名称未提供可靠中文语义） |
| 9 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 10 | `fromSpmid` | `string` | - | 来源 |

### 响应 `com.bapis.bilibili.app.dynamic.v1.SVideoReply`

中文说明：视频 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `list` | `SVideoItem` | repeated | 列表 |
| 2 | `offset` | `string` | - | 偏移量 |
| 3 | `hasMore` | `int32` | - | 是否具有 |
