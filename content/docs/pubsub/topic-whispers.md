---
title: Topic - Whispers
layout: docs
weight : 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Whispers

## Description

This topic can be used to monitor whenever a specified user receives a whisper.

Note that this can cause duplication of `PrivateMessageEvent` if one is also using `TwitchChat` to monitor whispers.

## Method Definition

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target user id, with the scope `whispers:read` |
| userId | String | Target User Id |

*Optional Parameters*

None

## Code-Snippets

Subscribe to all whispers to user twitch4j and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForWhisperEvents(credential, "149223493");

twitchClient.getEventManager().onEvent(PrivateMessageEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForWhisperEvents(credential, "149223493")

twitchClient.eventManager.onEvent(PrivateMessageEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForWhisperEvents(credential, "149223493")

twitchClient.eventManager.onEvent(PrivateMessageEvent, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
