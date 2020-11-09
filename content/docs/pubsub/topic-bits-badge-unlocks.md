---
title: Topic - Bits Badge Unlocks
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Bits Badge Unlocks

## Description

This topic can be used to monitor whenever a new bits badge tier is unlocked by a user cheering in a specified channel.

## Method Definition

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target channel id, with the scope `bits:read` |
| channelId | String | Target Channel Id |

*Optional Parameters*

None

## Code-Snippets

Subscribe to all bits badge unlocks in the `twitch4j` channel and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForBitsBadgeEvents(credential, "149223493");

twitchClient.getEventManager().getEventHandler(ChannelBitsBadgeUnlockEvent.class).onEvent(ChannelSubscribeEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForBitsBadgeEvents(credential, "149223493")

twitchClient.eventManager.getEventHandler(ChannelBitsBadgeUnlockEvent).onEvent(ChannelSubscribeEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForBitsBadgeEvents(credential, "149223493")

twitchClient.eventManager.getEventHandler(ChannelBitsBadgeUnlockEvent::class.java).onEvent(ChannelSubscribeEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
