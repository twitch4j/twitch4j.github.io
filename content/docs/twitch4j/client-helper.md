---
title: Client Helper
layout: docs
weight: 1
menu: 
  docs:
    parent: Twitch4J
---

# Twitch4J Client Helper

The Twitch4J Client Helper aims to bundle some common code used by library users to prevent everyone from reinventing the wheel ;)

Current Features:
- Event: StreamGoLiveEvent / StreamGoOffflineEvent / StreamChangeGameEvent / StreamChangeTitleEvent
- Event: FollowEvent

Those methods require the `Helix Module`, so enable it in the `TwitchClientBuilder`.

## Default Credential

When using the client helper, you will need to specify a default credential (any) that gets used for all requests for increased ratelimits, this is mandatory!

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))
    .build();
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
    .withDefaultAuthToken(OAuth2Credential("twitch", "oauthtokenhere"))
    .build();
```
{{</code>}}
{{</codeblocks>}}

## Register for Stream GoLive / GoOffline / GameChange / TitleChange Events

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getClientHelper().enableStreamEventListener("twitch4j");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.clientHelper.enableStreamEventListener("twitch4j");
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.clientHelper.enableStreamEventListener("twitch4j");
```
{{</code>}}
{{</codeblocks>}}

## Register for Follow Event

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getClientHelper().enableFollowEventListener("twitch4j");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.clientHelper.enableFollowEventListener("twitch4j");
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.clientHelper.enableFollowEventListener("twitch4j");
```
{{</code>}}
{{</codeblocks>}}
