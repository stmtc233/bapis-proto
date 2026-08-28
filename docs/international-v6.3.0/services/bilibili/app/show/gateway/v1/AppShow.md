# `bilibili.app.show.gateway.v1.AppShow`

中文说明：应用 网关 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `GetActProgress` | 一元调用 | `com.bapis.bilibili.app.show.gateway.v1.GetActProgressReq` | `com.bapis.bilibili.app.show.gateway.v1.GetActProgressReply` | 获取 进度 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.show.gateway.v1.GetActProgressReq`

中文说明：获取 进度 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pageid` | `int64` | - | 页面 ID |
| 2 | `mid` | `int64` | - | 用户 ID |

### 响应 `com.bapis.bilibili.app.show.gateway.v1.GetActProgressReply`

中文说明：获取 进度 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `event` | `com.bapis.bilibili.broadcast.message.main.NativePageEvent` | - | 事件 |
