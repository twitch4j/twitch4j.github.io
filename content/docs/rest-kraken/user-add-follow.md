---
title: Users - Add Follow
layout: docs
weight : 50
menu: 
  docs:
    parent: API - Kraken
---

# Follow Channel

## Description

Adds a specified user to the followers of a specified channel.

There is an error response (422 Unprocessable Entity) if the channel could not be followed.

## Method Definition

```java
@RequestLine("PUT /users/{user}/follows/channels/{targetUser}")
@Headers("Authorization: Bearer {token}")
HystrixCommand<Object> addFollow(
	@Param("token") String authToken,
	@Param("user") Long userId,
	@Param("targetUser") Long targetUserId
);
```

*Required Parameters*

None

*Optional Parameters*

None

## Code-Snippets

### follow a channel

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getKraken().addFollow(auth, user, targetUserId).execute();
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
