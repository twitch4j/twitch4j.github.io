---
title: Channel - Go Live Event
layout: docs
weight: 210
menu: 
  docs:
    parent: Events
---

# ChannelGoLiveEvent

## Description

The ChannelGoLiveEvent is triggered when a monitored channel goes live.

## Dependencies

Requires the specific channels to be registered with the TwitchClient Helper. See [TwitchClientHelper](../twitch4j/client-helper)

## Examples

### Example 1

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.onEvent(ChannelGoLiveEvent.class).subscribe(event -> {
	System.out.println("[" + event.getChannel().getName() + "] went live with title " + event.getTitle() + " on game " + event.getGameId() + "!");
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.onEvent(ChannelGoLiveEvent).subscribe { event ->
	System.out.println "[${event.channel.name}] went live with title ${event.title} on game ${event.gameId}!"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.onEvent(ChannelGoLiveEvent::class.java).subscribe { event ->
	println("[${event.channel.name}] went live with title ${event.title} on game ${event.gameId}!");
}
```
{{</code>}}
{{</codeblocks>}}
