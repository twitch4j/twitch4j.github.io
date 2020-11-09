---
title: Users - Get
layout: docs
weight : 60
menu: 
  docs:
    parent: API - Helix
---

# Get Users

## Description

Gets information about one or more specified Twitch users. Users are identified by optional user IDs and/or login name. If neither a user ID nor a login name is specified, the user is looked up by Bearer token.

## Method Definition

```java
@RequestLine("GET /users?id={id}&login={login}")
@Headers("Authorization: Bearer {token}")
HystrixCommand<UserList> getUsers(
	@Param("token") String authToken,
	@Param("id") List<Long> userIds,
	@Param("login") List<String> userNames
);
```

*Required Parameters*

None

*Optional Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| authToken     | string    | Can be used if requesting information about your own account, to include the email |
| id            | string    | User ID. Multiple user IDs can be specified. Limit: `100`. |
| login         | string    | User login name. Multiple login names can be specified. Limit: `100`. |

## Code-Snippets

### print user list - search by id

{{<codeblocks>}}
{{<code Java>}}
```java
UserList resultList = twitchClient.getHelix().getUsers(null, Arrays.asList("149223493"), null).execute();
resultList.getUsers().forEach(user -> {
	System.out.println(user);
});
```
{{</code>}}
{{<code Groovy>}}
```groovy

```
{{</code>}}
{{<code Kotlin>}}
```kotlin

```
{{</code>}}
{{</codeblocks>}}


### print user list - search by name

{{<codeblocks>}}
{{<code Java>}}
```java
UserList resultList = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).execute();
resultList.getUsers().forEach(user -> {
	System.out.println(user);
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
def resultList = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute()
resultList.users.each { user ->
	System.out.println user
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val resultList = twitchClient.helix.getUsers(null, null, listOf("twitch4j")).execute()
resultList.users.forEach { user ->
	println(user)
}
```
{{</code>}}
{{</codeblocks>}}
