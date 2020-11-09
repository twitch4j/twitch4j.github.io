---
title: Topic - Channel Points Events
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Channel Points Events

## Description

This topic can be used to monitor a channel's community points events.
The only officially documented subtype of this event is for a custom reward being redeemed, but this library also includes other subtypes.

## Method Definition

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target channel id, with the scope `channel:read:redemptions` |
| channelId | String | Target Channel Id |

*Optional Parameters*

None

## Code-Snippets

### Subscribe to the topic for a given channel

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForChannelPointsRedemptionEvents(credential, "149223493");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForChannelPointsRedemptionEvents(credential, "149223493")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForChannelPointsRedemptionEvents(credential, "149223493")
```
{{</code>}}
{{</codeblocks>}}

### Listen for Custom Reward Redemptions

Fired when a _custom_ reward is redeemed in the channel.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(RewardRedeemedEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(RewardRedeemedEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(RewardRedeemedEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Redemption Status Updates

Not documented by Twitch.

Fired when the status of a redemption changes (e.g. completed or rejected). 

Note that, at the time of writing, the status is `ACTION_TAKEN` whether the reward was completed or rejected, rather than `FULFILLED` or `UNFULFILLED`.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(RedemptionStatusUpdateEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(RedemptionStatusUpdateEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(RedemptionStatusUpdateEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Reward Creations

Not documented by Twitch.

Fired when a _custom_ reward is **created**.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(CustomRewardCreatedEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(CustomRewardCreatedEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(CustomRewardCreatedEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Reward Updates

Not documented by Twitch.

Fired when a _custom_ reward is **updated**.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(CustomRewardUpdatedEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(CustomRewardUpdatedEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(CustomRewardUpdatedEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Reward Deletions

Not documented by Twitch.

Fired when _custom_ reward is **deleted**.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(CustomRewardDeletedEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(CustomRewardDeletedEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(CustomRewardDeletedEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Update Redemption Status Progress

Not documented by Twitch.

Fired when there is an update to the redemption progress.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(UpdateRedemptionProgressEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(UpdateRedemptionProgressEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(UpdateRedemptionProgressEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Listen for Update Redemption Status Completion

Not documented by Twitch.

Fired when the redemption progress has completed.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(UpdateRedemptionFinishedEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(UpdateRedemptionFinishedEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(UpdateRedemptionFinishedEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
