---
sidebar_position: 1
title: 起步接入
---

## 接口通信基础框架
根据官方说法，该接口服务框架结构应如下
![图像](https://qq-ai.cdn-go.cn/web/bot-docs/-/v1.10.0/assets/img/interface-base-framework.d01e0c4a.png)

## 接口调用与鉴权
:::info 说明
`QQ机器人` 服务端开放的 `openapi` 接口**均使用https通信**，并通过 `AccessToken` 机制实现对相关接口的鉴权
:::

### 获取调用凭证
- **请求**
<table>
	<tr>
	  <th colspan="2">获取AccessToken</th>
	</tr>
	<tr>
    <td>HTTP URL</td>
    <td>https://bots.qq.com/app/getAppAccessToken</td>
	</tr>
	<tr>
    <td>HTTP Method</td>
    <td>POST</td>
	</tr>
</table>

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| appId | **string** | 是 | 在开放平台管理端上获得 |
| clientSecret | string | 是 | 在开放平台管理端上获得 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| access_token | string | 获取到的凭证 |
| expires_in | number | 凭证有效时间，单位：秒 |

- **错误码**

| **错误码** | **错误码取值** | **说明** |
| --- | --- | --- |
| 0 | ok | 无 |
| 100002 | internal error | 传参类型错误 |
| 100016 | invalid appid or secret | APPID/ClientSecret不正确或根本没传 |

- **调用示例**

```shell
curl --location 'https://bots.qq.com/app/getAppAccessToken' \
--header 'Content-Type: application/json' \
--data '{
  "appId": "APPID",
  "clientSecret": "CLIENTSECRET"
}'
```

- **返回示例**
```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": "7200"
}
```

:::info 说明
目前 `access_token` 生命周期默认 `7200` 秒，每次请求不会刷新，开发者需要在过期后自行刷新 `access_token`。

在上一个 `access_token` 接近过期时间 `60` 秒内获取时，会获得一个新的 `access_token`，旧值在过期时间内仍然有效
:::

### 鉴权方式

在每次调用 https 的 openapi 开放接口请求的时候，需要在 header 内引入 `access_token` 进行调用权限验证。

**统一地址**

```
https://api.sgroup.qq.com
```


**请求头**

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Authorization | string | 是 | 格式为："QQBot ACCESS_TOKEN" |

**示例**
```json
{
  "headers": {
    "Authorization": "QQBot {ACCESS_TOKEN}"
  }
}
```