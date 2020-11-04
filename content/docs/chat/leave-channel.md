---
title: Leave Channel
layout: docs
weight: 1
menu: 
  docs:
    parent: Chat
---

# Leave Channel

## Description

Leaves a channel, will not receive any futher events (Messages, Subscriptions, Bits, ...)

## Example

```java
twitchClient.getChat().leaveChannel("PlayOverwatch");
```
