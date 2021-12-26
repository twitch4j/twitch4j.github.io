---
title: Client-Builder
layout: docs
weight: 5
menu: 
  docs:
    parent: Getting started
---

# Twitch4J Client Builder

## All Features
Initialize the Twitch4J Client and specify which modules you want to use:

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
            .withEnableHelix(true)
            .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
            .withEnableHelix(true)
            .build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
            .withEnableHelix(true)
            .build()
```
{{</code>}}
{{</codeblocks>}}

## Logging

Please check out [Logging](../logging) on how to set up logging.
