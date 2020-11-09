---
title: Users - Update
layout: docs
weight : 62
menu: 
  docs:
    parent: API - Helix
---

# Update User

## Description

Updates the description of a user specified by a Bearer token.

## Method Definition

```java
@RequestLine("PUT /users?description={description}")
@Headers("Authorization: Bearer {token}")
HystrixCommand<UserList> updateUser(
	@Param("token") String authToken,
	@Param("description") String description
);
```

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| authToken | string | User Auth Token -> `user:edit` |
| description | string | The new description |

*Optional Parameters*

None

## Code-Snippets

### update the description of a user

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getHelix().updateUser(accessToken, "Twitch4J IntegrationTest User").execute();
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.helix.updateUser(accessToken, "Twitch4J IntegrationTest User").execute()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.helix.updateUser(accessToken, "Twitch4J IntegrationTest User").execute()
```
{{</code>}}
{{</codeblocks>}}
