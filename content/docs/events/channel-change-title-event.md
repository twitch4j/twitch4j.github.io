---
title: Channel - Change Title Event
layout: docs
weight: 210
menu: 
  docs:
    parent: Events
---

# ChannelChangeTitleEvent

## Description

The ChannelChangeTitleEvent is triggered when a monitored channel changes it's title.

## Dependencies

Requires the specific channels to be registered with the TwitchClient Helper. See [TwitchClientHelper](../twitch4j/client-helper)

## Examples

### Example 1

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.onEvent(ChannelChangeTitleEvent.class).subscribe(event -> {
	System.out.println("[" + event.getChannel().getName() + "] changed his stream title to " + event.getTitle() + "!");
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.onEvent(ChannelChangeTitleEvent).subscribe { event ->
	System.out.println "[${event.channel.name}] changed his stream title to ${event.title}!"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.onEvent(ChannelChangeTitleEvent::class.java).subscribe { event ->
	println("[${event.channel.name}] changed his stream title to ${event.title}!")
}
```
{{</code>}}
{{</codeblocks>}}
