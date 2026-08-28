# `com.bapis.bcg.sunspot.test.api.Sunspot`

中文说明：测试 接口 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AdSearch` | 一元调用 | `com.bapis.bcg.sunspot.test.vo.SunspotAdRequestForView` | `com.bapis.bcg.sunspot.test.vo.SunspotAdReplyForView` | 广告 搜索 |

## 请求与响应字段

### 请求 `com.bapis.bcg.sunspot.test.vo.SunspotAdRequestForView`

中文说明：广告 请求 查看。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `buvid` | `string` | - | 设备标识 |
| 3 | `resource` | `int32` | repeated | 资源 |
| 4 | `ip` | `string` | - | IP 地址 |
| 5 | `country` | `string` | - | 业务字段 `country`（名称未提供可靠中文语义） |
| 6 | `province` | `string` | - | 业务字段 `province`（名称未提供可靠中文语义） |
| 7 | `city` | `string` | - | 业务字段 `city`（名称未提供可靠中文语义） |
| 8 | `network` | `string` | - | 网络 |
| 9 | `mobiApp` | `string` | - | 应用 |
| 10 | `aid` | `int64` | - | 稿件 ID |
| 11 | `cid` | `int64` | - | 分 P ID |
| 12 | `avRid` | `int64` | - | 业务字段 `avRid`（名称未提供可靠中文语义） |
| 13 | `avTid` | `string` | - | 业务字段 `avTid`（名称未提供可靠中文语义） |
| 14 | `avUpId` | `int64` | - | 标识 |
| 15 | `adExtra` | `string` | - | 广告 扩展数据 |
| 16 | `build` | `int32` | - | 业务字段 `build`（名称未提供可靠中文语义） |
| 17 | `openEvent` | `string` | - | 事件 |
| 18 | `style` | `int32` | - | 业务字段 `style`（名称未提供可靠中文语义） |
| 19 | `seasonId` | `int64` | - | 剧集 标识 |
| 20 | `epId` | `int64` | - | 标识 |
| 21 | `fromSpmid` | `string` | - | 来源 |
| 22 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 23 | `topViewId` | `int32` | - | 查看 标识 |
| 24 | `sid` | `string` | - | 会话 ID |
| 25 | `dynamicfrom` | `string` | - | 业务字段 `dynamicfrom`（名称未提供可靠中文语义） |
| 26 | `index` | `int32` | - | 业务字段 `index`（名称未提供可靠中文语义） |
| 27 | `mayResistGif` | `int32` | - | 业务字段 `mayResistGif`（名称未提供可靠中文语义） |
| 28 | `device` | `string` | - | 设备 |

### 响应 `com.bapis.bcg.sunspot.test.vo.SunspotAdReplyForView`

中文说明：广告 响应 查看。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `adsControl` | `com.bapis.bcg.sunspot.test.dto.AdsControlDto` | - | 业务字段 `adsControl`（名称未提供可靠中文语义） |
| 2 | `resourceContents` | `map<int32, MixResourceContentDto>` | map | 资源 |
