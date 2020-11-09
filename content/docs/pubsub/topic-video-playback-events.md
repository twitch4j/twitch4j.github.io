---
title: Topic - Video Playback Events
layout: docs
weight : 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Video Playback Events

## Description

This topic can be used to monitor video playback events for a specified channel.

Subtypes include:
* Commercial started
* Stream went down
* Stream went up
* View count update

Note: The stream up/down events tend to be fired significantly faster than what is reported by Helix.
Note: the view count reported by this topic is more reflective of the value on the website than API - TMI > Get Viewers

With all undocumented topics, use at your own risk.

## Method Definition

### By Channel ID (Preferred)

| Name		  | Type	  | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | Auth Token (may not necessarily be required) |
| channelId | String | Target Channel Id |

### By Channel Name (Alternative)

| Name		  | Type	  | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | Auth Token (may not necessarily be required) |
| channelName | String | Target Channel Name |

## Code-Snippets

### Subscribe to topic

#### By Channel ID

**Preferred** way to subscribe to the topic; used by first-party clients and more resistant to name weirdness.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForVideoPlaybackEvents(credential, "149223493");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForVideoPlaybackEvents(credential, "149223493")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForVideoPlaybackEvents(credential, "149223493")
```
{{</code>}}
{{</codeblocks>}}

#### By Channel Name

An _alternative_ means to subscribe to the topic, if one does not have the channel ID and does not wish to query it.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForVideoPlaybackByNameEvents(credential, "twitch4j");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForVideoPlaybackByNameEvents(credential, "twitch4j")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForVideoPlaybackByNameEvents(credential, "twitch4j")
```
{{</code>}}
{{</codeblocks>}}

### Listen for Events

{{<codeblocks>}}
{{<code Java>}}
```java
// Handle all subtypes
twitchClient.getEventManager().onEvent(VideoPlaybackEvent.class, System.out::println);

// Alternatively, only consider a specific subtype
twitchClient.getEventManager().onEvent(VideoPlaybackEvent.class, e -> {
	if (e.getData().getType() == VideoPlaybackData.Type.STREAM_UP) {
		System.out.println(e); // Handle Go Live
	}
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
// Handle all subtypes
twitchClient.eventManager.onEvent(VideoPlaybackEvent, System.out::println)

// Alternatively, only consider a specific subtype
twitchClient.eventManager.onEvent(VideoPlaybackEvent) { e -> 
	if (e.data.type == VideoPlaybackData.Type.STREAM_UP) {
		System.out.println(e); // Handle Go Live
	}
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
// Handle all subtypes
twitchClient.eventManager.onEvent(VideoPlaybackEvent::class.java, System.out::println)

// Alternatively, only consider a specific subtype
twitchClient.eventManager.onEvent(VideoPlaybackEvent::class.java) { e -> 
	if (e.data.type == VideoPlaybackData.Type.STREAM_UP) {
		println(e); // Handle Go Live
	}
}
```
{{</code>}}
{{</codeblocks>}}
