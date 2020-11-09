---
title: Topic - Hype Train Events
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Hype Train Events

## Description

This topic can be used to monitor hype train events for a specified channel.

With all undocumented topics, use at your own risk.

## Method Definition

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | Auth Token (may not necessarily be required) |
| channelId | String | Target Channel Id |

## Code-Snippets

### Subscribe to the topic for a given channel

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForHypeTrainEvents(credential, "149223493");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForHypeTrainEvents(credential, "149223493")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForHypeTrainEvents(credential, "149223493")
```
{{</code>}}
{{</codeblocks>}}

### Listen for Hype Train Starts

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainStartEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainStartEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainStartEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Hype Train Progression

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainProgressionEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainProgressionEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainProgressionEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Hype Train Level Ups

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainLevelUpEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainLevelUpEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainLevelUpEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Hype Train Ends

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainEndEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainEndEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainEndEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Conductor Updates

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainConductorUpdateEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainConductorUpdateEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainConductorUpdateEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Cooldown Expiration

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(HypeTrainCooldownExpirationEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(HypeTrainCooldownExpirationEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(HypeTrainCooldownExpirationEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
