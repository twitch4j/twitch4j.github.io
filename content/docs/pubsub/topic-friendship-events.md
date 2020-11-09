---
title: Topic - Friendship Events
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Friendship Events

## Description

This topic can be used to monitor changes to the friendship state of a specified user with others.

Possible friendship changes include:
* Requested
* Rejected
* Accepted
* Removed
* and self variants (i.e. when this account itself is responsible for the change rather than the other entity)

With all undocumented topics, use at your own risk.

## Method Definition

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target user id, with the scope `user_friends_read` |
| userId | String | Target User Id |

## Code-Snippets

Subscribe to friendship events for user twitch4j and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForFriendshipEvents(credential, "149223493");

twitchClient.getEventManager().onEvent(FriendshipEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForFriendshipEvents(credential, "149223493");

twitchClient.eventManager.onEvent(FriendshipEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForFriendshipEvents(credential, "149223493");

twitchClient.eventManager.onEvent(FriendshipEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}
