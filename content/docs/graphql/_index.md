---
title: GraphQL
layout: docs
menu: docs
weight: 150
---

# Twitch4J - GraphQL

*Experimental / Unofficial*

The GraphQL API is as unofficial as it can be. It only works by emulating the twitch website (`clientId` and `accessToken` matching the `clientId` of the twitch site itself).

Therefore you need to use the client id of the twitch site and a auth token of the twitch site - a self generated token will not work.

## As Module: Twitch4J

To use GraphQL you need to enable the GraphQL Module when building the Twitch4J Instance, as shown below:

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableGraphQL(true)
    ...
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableGraphQL(true)
    ...
    .build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableGraphQL(true)
    ...
    .build()
```
{{</code>}}
{{</codeblocks>}}

## Standalone

Initialize the GraphQL as Standalone Module:

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchGraphQL client = TwitchGraphQLBuilder.builder().build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def client = TwitchGraphQLBuilder.builder().build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val client = TwitchGraphQLBuilder.builder().build()
```
{{</code>}}
{{</codeblocks>}}

## API Methods

User:

- [User -> Follow User](./user-follow)
- [User -> Unfollow User](./user-unfollow)
