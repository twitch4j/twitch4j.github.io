---
title: Channel - MessageEvent
layout: docs
weight: 210
menu: 
  docs:
    parent: Events
---

# ChannelMessageEvent

## Description

The ChannelMessageEvent is triggered for every normal message in irc.

## Dependencies

Requires the TwitchChat Module to be enabled and active for the source channel. See [TwitchChat](../chat).

## Examples

### Write Chat to Console

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.onEvent(ChannelMessageEvent.class, event -> {
	System.out.println("[" + event.getChannel().getName() + "] " + event.getUser().getName() + ": " + event.getMessage());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.onEvent(ChannelMessageEvent, { event ->
	System.out.println "[${event.channel.name}] ${event.user.name}: ${event.message}"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.onEvent(ChannelMessageEvent::class.java, { event ->
	println("[${event.channel.name}] ${event.user.name}: ${event.message}")
});
```
{{</code>}}
{{</codeblocks>}}
