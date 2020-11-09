---
title: Topic - Leaderboard Events
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Leaderboard Events

## Description

This topic can be used to monitor weekly/monthly leaderboard events of a specified channel in terms of bits used and subs gifted.

With all undocumented topics, use at your own risk.

## Method Definition

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | Auth Token (may not necessarily be required) |
| channelId | String | Target Channel Id |

## Code-Snippets

### Subscribe: Weekly Leaderboard Events

{{<codeblocks>}}
{{<code Java>}}
```java
// One can subscribe to one or both of these:
twitchClient.getPubSub().listenForChannelBitsLeaderboardEvents(credential, "149223493");
twitchClient.getPubSub().listenForChannelSubLeaderboardEvents(credential, "149223493");

// Alternatively, this helper method can be used to subscribe to the above two topics in one line:
twitchClient.getPubSub().listenForLeaderboardEvents(credential, "149223493");
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

### Subscribe: Monthly Leaderboard Events

{{<codeblocks>}}
{{<code Java>}}
```java
// One can subscribe to one or both of these:
twitchClient.getPubSub().listenForChannelBitsLeaderboardMonthlyEvents(credential, "149223493");
twitchClient.getPubSub().listenForChannelSubLeaderboardMonthlyEvents(credential, "149223493");

// Alternatively, this helper method can be used to subscribe to the above two topics in one line:
twitchClient.getPubSub().listenForLeaderboardMonthlyEvents(credential, "149223493");
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

### Listen: Bits Leaderboard Update

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(BitsLeaderboardEvent.class, System.out::println);
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

### Listen: Sub Gifts Leaderboard Update

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(SubLeaderboardEvent.class, System.out::println);
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
