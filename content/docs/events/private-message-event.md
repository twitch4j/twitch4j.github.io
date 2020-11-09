---
title: User - Private Message / Whisper
layout: docs
weight: 210
menu: 
  docs:
    parent: Events
---

# PrivateMessageEvent

## Description

The PrivateMessageEvent is triggered for private messages / whispers and can be triggered from PubSub or Chat.

## Dependencies

Requires the TwitchChat Module to be enabled and active for the source channel. See [TwitchChat](../chat).
Otherwise you will need to enable [PubSub](../pubsub) and subscribe to the whispers topic the receive PrivateMessageEvents.

## Examples

### Listen for PrivateMessageEvent

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.onEvent(PrivateMessageEvent.class).subscribe(event -> {
	System.out.println("[Whisper] " + event.getUser().getName() + ": " + event.getMessage());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.onEvent(PrivateMessageEvent).subscribe { event ->
	System.out.println "[Whisper] ${event.user.name}: ${event.message}"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.onEvent(PrivateMessageEvent::class.java).subscribe { event ->
	println("[Whisper] ${event.user.name}: ${event.message}")
}
```
{{</code>}}
{{</codeblocks>}}
