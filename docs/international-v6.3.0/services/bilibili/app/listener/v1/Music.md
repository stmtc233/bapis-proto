# `bilibili.app.listener.v1.Music`

中文说明：应用 听播 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `Click` | 一元调用 | `com.bapis.bilibili.app.listener.v1.ClickReq` | `com.bapis.bilibili.app.listener.v1.ClickResp` | 点击 |
| `FavTabShow` | 一元调用 | `com.bapis.bilibili.app.listener.v1.FavTabShowReq` | `com.bapis.bilibili.app.listener.v1.FavTabShowResp` | 收藏 标签页 |
| `MainFavMusicMenuList` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MainFavMusicMenuListReq` | `com.bapis.bilibili.app.listener.v1.MainFavMusicMenuListResp` | 收藏 列表 |
| `MainFavMusicSubTabList` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MainFavMusicSubTabListReq` | `com.bapis.bilibili.app.listener.v1.MainFavMusicSubTabListResp` | 收藏 订阅 标签页 列表 |
| `MenuDelete` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MenuDeleteReq` | `com.bapis.bilibili.app.listener.v1.MenuDeleteResp` | 删除 |
| `MenuEdit` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MenuEditReq` | `com.bapis.bilibili.app.listener.v1.MenuEditResp` | 编辑 |
| `MenuSubscribe` | 一元调用 | `com.bapis.bilibili.app.listener.v1.MenuSubscribeReq` | `com.bapis.bilibili.app.listener.v1.MenuSubscribeResp` | `MenuSubscribe` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.listener.v1.ClickReq`

中文说明：点击 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `sid` | `int64` | - | 会话 ID |
| 2 | `action` | `ClickAction` | - | 操作 |

### 响应 `com.bapis.bilibili.app.listener.v1.ClickResp`

中文说明：点击 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.listener.v1.FavTabShowReq`

中文说明：收藏 标签页 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `mid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.app.listener.v1.FavTabShowResp`

中文说明：收藏 标签页 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `showMenu` | `bool` | - | 业务字段 `showMenu`（名称未提供可靠中文语义） |

### 请求 `com.bapis.bilibili.app.listener.v1.MainFavMusicMenuListReq`

中文说明：收藏 列表 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabType` | `int32` | - | 标签页 类型 |
| 2 | `offset` | `string` | - | 偏移量 |

### 响应 `com.bapis.bilibili.app.listener.v1.MainFavMusicMenuListResp`

中文说明：收藏 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabType` | `int32` | - | 标签页 类型 |
| 2 | `menuList` | `MusicMenu` | repeated | 列表 |
| 3 | `hasMore` | `bool` | - | 是否具有 |
| 4 | `offset` | `string` | - | 偏移量 |

### 请求 `com.bapis.bilibili.app.listener.v1.MainFavMusicSubTabListReq`

中文说明：收藏 订阅 标签页 列表 请求。

该消息没有声明字段。

### 响应 `com.bapis.bilibili.app.listener.v1.MainFavMusicSubTabListResp`

中文说明：收藏 订阅 标签页 列表 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `tabs` | `MusicSubTab` | repeated | 业务字段 `tabs`（名称未提供可靠中文语义） |
| 2 | `defaultTabRes` | `MainFavMusicMenuListResp` | - | 标签页 |
| 3 | `firstPageRes` | `map<int32, MainFavMusicMenuListResp>` | map | 分页 |

### 请求 `com.bapis.bilibili.app.listener.v1.MenuDeleteReq`

中文说明：删除 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.listener.v1.MenuDeleteResp`

中文说明：删除 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.MenuEditReq`

中文说明：编辑 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `id` | `int64` | - | 标识 |
| 2 | `title` | `string` | - | 标题 |
| 3 | `desc` | `string` | - | 描述 |
| 4 | `isPublic` | `int32` | - | 是否 |

### 响应 `com.bapis.bilibili.app.listener.v1.MenuEditResp`

中文说明：编辑 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |

### 请求 `com.bapis.bilibili.app.listener.v1.MenuSubscribeReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `action` | `SubscribeAction` | - | 操作 |
| 2 | `targetId` | `int64` | - | 标识 |

### 响应 `com.bapis.bilibili.app.listener.v1.MenuSubscribeResp`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `message_` | `string` | - | 消息 |
