---
title: Send Channel Message
layout: docs
weight: 2
menu: 
  docs:
    parent: Chat
---

# Send Channel Message

## Description

Sends a message to a twitch channel.

* The messages will go into a queue internally so we won't hit the rate-limit.
* This could cause some minor deleays when sending a lot of messages.
* The queue will only be processed when we're connected to twitch.

## Example

```java
twitchClient.getChat().sendMessage("twitch4j", "Hey!");
```
