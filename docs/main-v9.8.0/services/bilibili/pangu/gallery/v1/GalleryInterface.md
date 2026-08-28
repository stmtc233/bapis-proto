# `bilibili.pangu.gallery.v1.GalleryInterface`

中文说明：接口 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AgreePolicy` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.AgreePolicyReq` | `com.bapis.bilibili.pangu.gallery.v1.AgreePolicyReply` | `AgreePolicy` 调用 |
| `BasicInfo` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.BasicInfoReq` | `com.bapis.bilibili.pangu.gallery.v1.BasicInfoReply` | 信息 |
| `GetBanners` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.GetBannersReq` | `com.bapis.bilibili.pangu.gallery.v1.GetBannersReply` | 获取 |
| `GetLastPolicy` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.GetLastPolicyReq` | `com.bapis.bilibili.pangu.gallery.v1.GetLastPolicyReply` | 获取 |
| `ListNFTByMid` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.ListNFTByMidReq` | `com.bapis.bilibili.pangu.gallery.v1.ListNFTByMidReply` | 列表 用户 ID |
| `ListOrderByMid` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.ListOrderByMidReq` | `com.bapis.bilibili.pangu.gallery.v1.ListOrderByMidReply` | 列表 排序 用户 ID |
| `MinePage` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.MinePageReq` | `com.bapis.bilibili.pangu.gallery.v1.MinePageReply` | 我的 分页 |
| `Ping` | 一元调用 | `google.protobuf.Empty` | `google.protobuf.Empty` | `Ping` 调用 |
| `UserCheck` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.UserCheckReq` | `com.bapis.bilibili.pangu.gallery.v1.UserCheckReply` | 用户 校验 |
| `UserInfo` | 一元调用 | `com.bapis.bilibili.pangu.gallery.v1.GetUserInfoReq` | `com.bapis.bilibili.pangu.gallery.v1.GetUserInfoReply` | 用户 信息 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.pangu.gallery.v1.AgreePolicyReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `policyType` | `PolicyType` | - | 类型 |
| 2 | `version` | `string` | - | 版本 |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.AgreePolicyReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.pangu.gallery.v1.BasicInfoReq`

中文说明：信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.BasicInfoReply`

中文说明：信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `customerServiceUrl` | `string` | - | 地址 |
| 2 | `agreementUrl` | `string` | - | 地址 |
| 3 | `privacyUrl` | `string` | - | 隐私 地址 |
| 4 | `links` | `Link` | repeated | 业务字段 `links`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.GetBannersReq`

中文说明：获取 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.GetBannersReply`

中文说明：获取 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `bannerList` | `BannerInfo` | repeated | 列表 |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.GetLastPolicyReq`

中文说明：获取 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `policyType` | `PolicyType` | - | 类型 |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.GetLastPolicyReply`

中文说明：获取 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `shortDesc` | `string` | - | 描述 |
| 2 | `detailJump` | `string` | - | 详情 跳转 |
| 3 | `version` | `string` | - | 版本 |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.ListNFTByMidReq`

中文说明：列表 用户 ID 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `category` | `string` | - | 分类 |
| 3 | `bizType` | `string` | - | 类型 |
| 4 | `anchorId` | `int64` | - | 标识 |
| 5 | `pageSize` | `int64` | - | 分页 大小 |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.ListNFTByMidReply`

中文说明：列表 用户 ID 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `nfts` | `NFT` | repeated | 业务字段 `nfts`（名称未提供可靠中文语义） |
| 2 | `anchorId` | `int64` | - | 标识 |
| 3 | `end` | `bool` | - | 结束 |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.ListOrderByMidReq`

中文说明：列表 排序 用户 ID 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `anchorId` | `int64` | - | 标识 |
| 3 | `pageSize` | `int64` | - | 分页 大小 |
| 4 | `rcType` | `RecordType` | - | 类型 |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.ListOrderByMidReply`

中文说明：列表 排序 用户 ID 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `orders` | `Order` | repeated | 业务字段 `orders`（名称未提供可靠中文语义） |
| 2 | `anchorId` | `int64` | - | 标识 |
| 3 | `end` | `bool` | - | 结束 |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.MinePageReq`

中文说明：我的 分页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.MinePageReply`

中文说明：我的 分页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `uid` | `int64` | - | 用户 ID |
| 2 | `name` | `string` | - | 名称 |
| 3 | `address` | `string` | - | 业务字段 `address`（名称未提供可靠中文语义） |
| 4 | `avatarUrl` | `string` | - | 头像 地址 |
| 5 | `questionJump` | `string` | - | 跳转 |
| 6 | `aboutUsJump` | `string` | - | 跳转 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.pangu.gallery.v1.UserCheckReq`

中文说明：用户 校验 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `policyType` | `PolicyType` | - | 类型 |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.UserCheckReply`

中文说明：用户 校验 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `policyStatus` | `PolicyAgreeStatus` | - | 状态 |
| 2 | `gt14` | `GT14Status` | - | 业务字段 `gt14`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.pangu.gallery.v1.GetUserInfoReq`

中文说明：获取 用户 信息 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.pangu.gallery.v1.GetUserInfoReply`

中文说明：获取 用户 信息 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |
| 2 | `name` | `string` | - | 名称 |
| 3 | `address` | `string` | - | 业务字段 `address`（名称未提供可靠中文语义） |
| 4 | `avatarUrl` | `string` | - | 头像 地址 |
| 5 | `helpUrl` | `string` | - | 地址 |
