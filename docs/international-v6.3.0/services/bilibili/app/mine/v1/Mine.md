# `bilibili.app.mine.v1.Mine`

中文说明：应用 我的 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `DisplayReport` | 一元调用 | `com.bapis.bilibili.app.mine.v1.DisplayReportReq` | `google.protobuf.Empty` | 展示 |
| `PubModule` | 一元调用 | `com.bapis.bilibili.app.mine.v1.PubModuleReq` | `com.bapis.bilibili.app.mine.v1.PubModuleResp` | 发布 模块 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.mine.v1.DisplayReportReq`

中文说明：展示 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `content` | `DisplayReportReq_ReportContent` | repeated | 内容 |

### 响应 `google.protobuf.Empty`

中文说明：`Empty` 消息。

该消息来自 protobuf 标准库或当前归档未包含的定义。

### 请求 `com.bapis.bilibili.app.mine.v1.PubModuleReq`

中文说明：发布 模块 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `userOriginalState` | `int64` | - | 用户 状态 |
| 2 | `dynIds` | `int64` | repeated | 业务字段 `dynIds`（名称未提供可靠中文语义） |
| 3 | `cardNum` | `int64` | - | 卡片 |

### 响应 `com.bapis.bilibili.app.mine.v1.PubModuleResp`

中文说明：发布 模块 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pubCard` | `PubCard` | repeated | 发布 卡片 |
