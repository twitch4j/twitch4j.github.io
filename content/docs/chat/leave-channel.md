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

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getChat().leaveChannel("PlayOverwatch");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.chat.leaveChannel("PlayOverwatch")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.chat.leaveChannel("PlayOverwatch")
```
{{</code>}}
{{</codeblocks>}}