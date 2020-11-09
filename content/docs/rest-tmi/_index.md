---
title: API - TMI
layout: docs
weight : 10
menu: 
  docs:
    parent: API - Kraken
---

# Twitch API - Messaging Interface

The Twitch Chat System has a few unofficial endpoints which get exposed from `https://tmi.twitch.tv`.

## As Module: Twitch4J

To use TMI you need to enable the TMI API when building the Twitch4J Instance, as shown below:

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableTMI(true)
    ...
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableTMI(true)
    ...
    .build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
    ...
    .withEnableTMI(true)
    ...
    .build()
```
{{</code>}}
{{</codeblocks>}}

## Standalone

Initialize the Helix API as Standalone Module:

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchHelix client = TwitchMessagingInterfaceBuilder.builder()
    .withClientId("clientId")
    .withClientSecret("clientSecret")
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def client = TwitchMessagingInterfaceBuilder.builder()
    .withClientId("clientId")
    .withClientSecret("clientSecret")
    .build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val client = TwitchMessagingInterfaceBuilder.builder()
    .withClientId("clientId")
    .withClientSecret("clientSecret")
    .build()
```
{{</code>}}
{{</codeblocks>}}

## API Methods

- [TMI -> Get Viewers](./get-viewers)
