---
title: Entitlements - Redeem Code
layout: docs
weight : 20
menu: 
  docs:
    parent: API - Helix
---

# Redeem Code

## Description

Redeems one or more provided codes to the authenticated Twitch user.


## Method Definition

```java
@RequestLine("POST /entitlements/codes?code={code}&user_id={user_id}")
@Headers("Authorization: Bearer {token}")
HystrixCommand<CodeStatusList> redeemCode(
    @Param("token") String authToken,
    @Param("code") List<String> code,
    @Param("user_id") Integer userId
);
```

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| authToken     | string    | App Access Token |
| code     | string    | The code to redeem to the authenticated user’s account. |
| userId     | integer    | Represents a numeric Twitch user ID |

## Code-Snippets

### redeem code and print status

{{<codeblocks>}}
{{<code Java>}}
```java
CodeStatusList codeStatusList = twitchClient.getHelix().redeemCode(authToken, Arrays.asList("KUHXV-4GXYP-AKAKK"), 156900877).execute();
codeStatusList.getStatuses().forEach(codeStatus -> {
    System.out.println(codeStatus.getCode() + " " + codeStatus.getStatus());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
def codeStatusList = twitchClient.helix.redeemCode(authToken, ["KUHXV-4GXYP-AKAKK"], 156900877).execute()
codeStatusList.statuses.each { codeStatus ->
    System.out.println("${codeStatus.code} ${codeStatus.status}")
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val codeStatusList = twitchClient.helix.redeemCode(authToken, listOf("KUHXV-4GXYP-AKAKK"), 156900877).execute()
codeStatusList.statuses.forEach { codeStatus ->
    println("${codeStatus.code} ${codeStatus.status}")
}
```
{{</code>}}
{{</codeblocks>}}
