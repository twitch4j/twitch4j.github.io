---
title: Topic - Subscribe Events
layout: docs
weight : 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Subscribe Events

## Description

This topic can be used to monitor whenever a specified channel receives a new subscription.

## Method Definition

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target channel id, with the scope `channel_subscriptions` |
| channelId | String | Target Channel Id |

*Optional Parameters*

None

## Code-Snippets

Subscribe to all subscription events to the twitch4j channel and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForSubscriptionEvents(credential, "149223493");

twitchClient.getEventManager().onEvent(ChannelSubscribeEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForSubscriptionEvents(credential, "149223493")

twitchClient.eventManager.onEvent(ChannelSubscribeEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForSubscriptionEvents(credential, "149223493")

twitchClient.eventManager.onEvent(ChannelSubscribeEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
