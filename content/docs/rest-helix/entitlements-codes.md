---
title: Entitlements - Get Code Status
layout: docs
weight : 20
menu: 
  docs:
    parent: API - Helix
---

# Get Code Status

## Description

Gets the status of one or more provided codes. 


## Method Definition

```java
@RequestLine("GET /entitlements/codes?code={code}&user_id={user_id}")
@Headers("Authorization: Bearer {token}")
HystrixCommand<CodeStatusList> getCodeStatus(
    @Param("token") String authToken,
    @Param("code") List<String> code,
    @Param("user_id") Integer userId
);
```

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| authToken     | string    | App Access Token |
| code     | string    | The code to get the status of. |
| userId     | integer    | Represents a numeric Twitch user ID |

## Code-Snippets

### print code status

{{<codeblocks>}}
{{<code Java>}}
```java
CodeStatusList codeStatusList = twitchClient.getHelix().getCodeStatus(authToken, Arrays.asList("KUHXV-4GXYP-AKAKK"), 156900877).execute();
codeStatusList.getStatuses().forEach(codeStatus -> {
    System.out.println(codeStatus.getCode() + " " + codeStatus.getStatus());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
def codeStatusList = twitchClient.helix.getCodeStatus(authToken, ["KUHXV-4GXYP-AKAKK"], 156900877).execute();
codeStatusList.statuses.each { codeStatus -> 
    System.out.println "${codeStatus.code} ${codeStatus.status}"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
def codeStatusList = twitchClient.helix.getCodeStatus(authToken, listOf("KUHXV-4GXYP-AKAKK"), 156900877).execute();
codeStatusList.statuses.forEach { codeStatus -> 
    println("${codeStatus.code} ${codeStatus.status}")
}
```
{{</code>}}
{{</codeblocks>}}
