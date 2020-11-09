---
title: EventHandler - Reactor
layout: docs
weight: 202
menu: 
  docs:
    parent: Events
---

# EventHandler - Reactor

## Description

The ReactorEventHandler will process all events asynchronous in a threadpool with at least 4 threads.

Check out the following class if you want to customize the parameters used when building a ReactorEventHandler instance:

- [ReactorEventHandler.java](https://github.com/PhilippHeuer/events4j/blob/master/handler-reactor/src/main/java/com/github/philippheuer/events4j/reactor/ReactorEventHandler.java)

## Dependencies

{{<builds>}}
{{<build gradle>}}
```groovy
api group: 'com.github.philippheuer.events4j', name: 'events4j-handler-reactor', version: '0.9.2'
```
{{</build>}}
{{<build kotlin>}}
```kotlin
api(group = "com.github.philippheuer.events4j", name = "events4j-handler-reactor", version = "0.9.2")
```
{{</build>}}
{{<build pom>}}
```xml
<dependency>
    <groupId>com.github.philippheuer.events4j</groupId>
    <artifactId>events4j-handler-reactor</artifactId>
    <version>0.9.2</version>
</dependency>
```
{{</build>}}
{{</builds>}}

## Set as default in Twitch4J and for eventManager.onEvent

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    .withDefaultEventHandler(ReactorEventHandler.class)
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
    .withDefaultEventHandler(ReactorEventHandler)
    .build();
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
    .withDefaultEventHandler(ReactorEventHandler::class.java)
    .build();
```
{{</code>}}
{{</codeblocks>}}
