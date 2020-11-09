---
title: EventHandler - Simple
layout: docs
weight: 201
menu: 
  docs:
    parent: Events
---

# EventHandler - Simple

## Description

The SimpleEventHandler will process all events synchronous in the current thread.

## Dependencies

{{<builds>}}
{{<build gradle>}}
```groovy
api group: 'com.github.philippheuer.events4j', name: 'events4j-handler-simple', version: '0.9.2'
```
{{</build>}}
{{<build kotlin>}}
```kotlin
api(group = "com.github.philippheuer.events4j", name = "events4j-handler-simple", version = "0.9.2")
```
{{</build>}}
{{<build pom>}}
```xml
<dependency>
    <groupId>com.github.philippheuer.events4j</groupId>
    <artifactId>events4j-handler-simple</artifactId>
    <version>0.9.2</version>
</dependency>
```
{{</build>}}
{{</builds>}}

## Set as default in Twitch4J and for eventManager.onEvent

```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    .withDefaultEventHandler(SimpleEventHandler.class)
    .build();
```

{{<codeblocks>}}
{{<code Java>}}
```java

```
{{</code>}}
{{<code Groovy>}}
```groovy

```
{{</code>}}
{{<code Kotlin>}}
```kotlin

```
{{</code>}}
{{</codeblocks>}}