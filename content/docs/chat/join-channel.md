---
title: Join Channel
layout: docs
weight: 0
menu: 
  docs:
    parent: Chat
---

# Join Channel

## Description

Joins a channel on irc, and as such will receive any kind of events for that channel (Messages, Subscriptions, Bits, ...)

A join is stored, as such you will automatically rejoin channels in case there was a disconnect or similar.

## Example
{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getChat().joinChannel("PlayOverwatch");
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.chat.joinChannel("PlayOverwatch")
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.chat.joinChannel("PlayOverwatch")
```
{{</code>}}
{{</codeblocks>}}
