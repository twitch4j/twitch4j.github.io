---
title: IRC Message
layout: docs
weight: 200
menu: 
  docs:
    parent: Events
---

# RAW IRC Message Event

## Description

The irc message received before it gets parsed and the real event gets dispatched.

## Dependencies

Requires the TwitchChat Module to be enabled and active for the source channel. See [TwitchChat](../../chat).

## Examples

### Printing the RAW Message

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(IRCMessageEvent.class, event -> {
	System.out.println(event.getRawMessage());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(IRCMessageEvent, { event ->
	System.out.println event.rawMessage
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.getEventHandler(SimpleEventHandler.class).onEvent(IRCMessageEvent::class.java, { event ->
	println(event.rawMessage);
}
```
{{</code>}}
{{</codeblocks>}}
