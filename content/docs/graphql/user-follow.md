---
title: User - Follow
layout: docs
weight: 20
menu: 
  docs:
    parent: GraphQL
---

# User - Follow

## Description

Follow a user on twitch (and turn of notifications if desired).

## Method Definition

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| authToken | string | User Auth Token |
| targetUserId | number | Target User Id |
| notification | boolean | Enable notifications? |

*Optional Parameters*

None

## Code-Snippets

### follow a user (without notifications)

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getGraphQL().followUser(credential, 24943033l, false).execute();
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

### follow a user (with notifications)

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getGraphQL().followUser(credential, 24943033l, true).execute();
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
