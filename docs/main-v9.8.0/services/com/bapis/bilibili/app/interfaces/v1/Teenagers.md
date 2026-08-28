# `com.bapis.bilibili.app.interfaces.v1.Teenagers`

中文说明：应用 业务 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `FacialRecognitionVerify` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.FacialRecognitionVerifyReq` | `com.bapis.bilibili.app.interfaces.v1.FacialRecognitionVerifyReply` | `FacialRecognitionVerify` 调用 |
| `ModeStatus` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.ModeStatusReq` | `com.bapis.bilibili.app.interfaces.v1.ModeStatusReply` | 模式 状态 |
| `ModifyPwd` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.ModifyPwdReq` | `com.bapis.bilibili.app.interfaces.v1.ModifyPwdReply` | `ModifyPwd` 调用 |
| `SetTeenagersModelAge` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.SetTeenagersModelAgeReq` | `com.bapis.bilibili.app.interfaces.v1.SetTeenagersModelAgeReply` | `SetTeenagersModelAge` 调用 |
| `UpdateStatus` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.UpdateStatusReq` | `com.bapis.bilibili.app.interfaces.v1.UpdateStatusReply` | 更新 状态 |
| `VerifyPwd` | 一元调用 | `com.bapis.bilibili.app.interfaces.v1.VerifyPwdReq` | `com.bapis.bilibili.app.interfaces.v1.VerifyPwdReply` | `VerifyPwd` 调用 |

## 请求与响应字段

### 请求 `com.bapis.bilibili.app.interfaces.v1.FacialRecognitionVerifyReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `from` | `FacialRecognitionVerifyFrom` | - | 来源 |
| 2 | `deviceToken` | `string` | - | 设备 凭据 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.FacialRecognitionVerifyReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.ModeStatusReq`

中文说明：模式 状态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `deviceToken` | `string` | - | 设备 凭据 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.ModeStatusReply`

中文说明：模式 状态 响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `userModels` | `UserModel` | repeated | 用户 |

### 请求 `com.bapis.bilibili.app.interfaces.v1.ModifyPwdReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `oldPwd` | `string` | - | 业务字段 `oldPwd`（名称未提供可靠中文语义） |
| 2 | `newPwd` | `string` | - | 业务字段 `newPwd`（名称未提供可靠中文语义） |
| 3 | `deviceToken` | `string` | - | 设备 凭据 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.ModifyPwdReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.SetTeenagersModelAgeReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pwd` | `string` | - | 业务字段 `pwd`（名称未提供可靠中文语义） |
| 2 | `pwdFrom` | `PwdFrom` | - | 来源 |
| 3 | `deviceToken` | `string` | - | 设备 凭据 |
| 4 | `age` | `int32` | - | 业务字段 `age`（名称未提供可靠中文语义） |
| 5 | `isDynamic` | `bool` | - | 是否 动态 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.SetTeenagersModelAgeReply`

中文说明：响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.UpdateStatusReq`

中文说明：更新 状态 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pwd` | `string` | - | 业务字段 `pwd`（名称未提供可靠中文语义） |
| 2 | `switch` | `bool` | - | 业务字段 `switch`（名称未提供可靠中文语义） |
| 3 | `pwdFrom` | `PwdFrom` | - | 来源 |
| 4 | `deviceToken` | `string` | - | 设备 凭据 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.UpdateStatusReply`

中文说明：更新 状态 响应。

该消息没有声明字段。

### 请求 `com.bapis.bilibili.app.interfaces.v1.VerifyPwdReq`

中文说明：请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `pwd` | `string` | - | 业务字段 `pwd`（名称未提供可靠中文语义） |
| 2 | `pwdFrom` | `PwdFrom` | - | 来源 |
| 3 | `isDynamic` | `bool` | - | 是否 动态 |
| 4 | `closeDevice` | `bool` | - | 设备 |
| 5 | `deviceToken` | `string` | - | 设备 凭据 |

### 响应 `com.bapis.bilibili.app.interfaces.v1.VerifyPwdReply`

中文说明：响应。

该消息没有声明字段。
