---
title: Topic - Raid Events
layout: docs
weight : 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Raid Events

## Description

This topic can be used to monitor raid events for a specified channel. This does not refer to the specified channel *getting* raided, only actions taken by the channel itself (or its editors).

With all undocumented topics, use at your own risk.

## Method Definition

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | Auth Token (may not necessarily be required) |
| channelId | String | Target Channel Id |

## Code-Snippets

Subscribe to all raid events in channel `twitch4j` and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
// Subscribe to the topic
twitchClient.getPubSub().listenForRaidEvents(credential, "149223493");

// Listen for the channel executing a raid
twitchClient.getEventManager().onEvent(RaidGoEvent.class, System.out::println);

// Listen for raid progress (counting down until the raid can go through)
twitchClient.getEventManager()onEvent(RaidUpdateEvent.class, System.out::println);

// Listen for raid cancellations
twitchClient.getEventManager().onEvent(RaidCancelEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
// Subscribe to the topic
twitchClient.pubSub.listenForRaidEvents(credential, "149223493")

// Listen for the channel executing a raid
twitchClient.eventManager.onEvent(RaidGoEvent, System.out::println)

// Listen for raid progress (counting down until the raid can go through)
twitchClient.eventManageronEvent(RaidUpdateEvent, System.out::println)

// Listen for raid cancellations
twitchClient.eventManager.onEvent(RaidCancelEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
// Subscribe to the topic
twitchClient.pubSub.listenForRaidEvents(credential, "149223493")

// Listen for the channel executing a raid
twitchClient.eventManager.onEvent(RaidGoEvent::class.java, System.out::println)

// Listen for raid progress (counting down until the raid can go through)
twitchClient.eventManageronEvent(RaidUpdateEvent::class.java, System.out::println)

// Listen for raid cancellations
twitchClient.eventManager.onEvent(RaidCancelEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
