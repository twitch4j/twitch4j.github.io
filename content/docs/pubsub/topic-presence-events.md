---
title: Topic - Presence Events
layout: docs
weight: 50
menu: 
  docs:
    parent: PubSub
---

# Topic - Presence Events

## Description

This topic can be used to monitor the presence of a specified user's friends (and oneself, to an extent).

Example availabilities include:
* `busy`
* `idle`
* `offline`
* `online`

Example activities include:
* `none`
* `watching`
* `broadcasting`

With all undocumented topics, use at your own risk.

## Method Definition

| Name		  | Type	  | Description  |
| ------------- |:---------:| -----------------:|
| credential | OAuth2Credential | User Auth Token for the target user id, with the scope `user_presence_friends_read` and/or `user_presence_edit` |
| userId | String | Target User Id |

## Code-Snippets

### Example: General use

Subscribe to presence events for user `twitch4j` and register a listener that prints all messages to console

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getPubSub().listenForPresenceEvents(credential, "149223493");

// Listen for presence updates
twitchClient.getEventManager().onEvent(UserPresenceEvent.class, System.out::println);

// Listen for updates to the user's presence settings
twitchClient.getEventManager().onEvent(PresenceSettingsEvent.class, System.out::println);
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.pubSub.listenForPresenceEvents(credential, "149223493")

// Listen for presence updates
twitchClient.eventManager.onEvent(UserPresenceEvent, System.out::println)

// Listen for updates to the user's presence settings
twitchClient.eventManager.onEvent(PresenceSettingsEvent, System.out::println)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.pubSub.listenForPresenceEvents(credential, "149223493")

// Listen for presence updates
twitchClient.eventManager.onEvent(UserPresenceEvent::class.java, System.out::println)

// Listen for updates to the user's presence settings
twitchClient.eventManager.onEvent(PresenceSettingsEvent::class.java, System.out::println)
```
{{</code>}}
{{</codeblocks>}}

### Example: Live status monitoring

Note: a single account can befriend 500 users on Twitch (which is necessary for such presence events to occur), at the time of writing.

Note: these events tend to be fired significantly faster than the documented analogs in the Helix API.

Disclaimer: do not solely rely upon this code; fallback mechanisms should be employed as well.

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getEventManager().onEvent(UserPresenceEvent.class, e -> {
	boolean wentLive = e.getData().getActivities().stream().anyMatch(a -> a.getType().equalsIgnoreCase("broadcasting"));
	if (wentLive) {
		System.out.println(e); // Handle Go Live
	}
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
twitchClient.eventManager.onEvent(UserPresenceEvent) { e ->
	boolean wentLive = e.data.activities.any { it.type.equalsIgnoreCase("broadcasting") }
	if (wentLive) {
		System.out.println(e); // Handle Go Live
	}
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
twitchClient.eventManager.onEvent(UserPresenceEvent::class.java) { e ->
	boolean wentLive = e.`data`.activities.any { it.type.equalsIgnoreCase("broadcasting") }
	if (wentLive) {
		println(e); // Handle Go Live
	}
}
```
{{</code>}}
{{</codeblocks>}}
