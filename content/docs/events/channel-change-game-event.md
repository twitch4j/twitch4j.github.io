---
title: Channel - Change Game Event
layout: docs
weight: 210
menu: 
  docs:
    parent: Events
---

# ChannelChangeGameEvent

## Description

The ChannelChangeGameEvent is triggered when a monitored channel changes the game.

## Dependencies

Requires the specific channels to be registered with the TwitchClient Helper. See [TwitchClientHelper](../twitch4j/client-helper)

## Examples

### Example 1

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(ChannelChangeGameEvent.class, event -> {
	System.out.println("[" + event.getChannel().getName() + "] is now playing " + event.getGameId() + "!");
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(ChannelChangeGameEvent, { event ->
	System.out.println "[${event.channel.name}] is now playing ${event.gameId}!"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(ChannelChangeGameEvent::class.java, { event ->
	println("[${event.channel.name}] is now playing ${event.gameId}!")
}
```
{{</code>}}
{{</codeblocks>}}
