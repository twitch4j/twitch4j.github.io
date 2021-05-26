---
title: Events
layout: docs
menu: docs
weight: 200
---

# Events

Twitch4J uses [Events4J](https://github.com/PhilippHeuer/events4j) to dispatch events and handle them, you can also build your own event handler to handle them however you like.
You can use those events to build chat bots or similar tools.

## Publish Event

Publish a event that should be processed somewhere:

* The event object needs to implement the IEvent interface.
* The event will be passed to all registered handlers.

{{<codeblocks>}}
{{<code Java>}}
```java
eventManager.publish(object);
```
{{</code>}}
{{<code Groovy>}}
```groovy
eventManager.publish(object)
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
eventManager.publish(`object`)
```
{{</code>}}
{{</codeblocks>}}

## Handle / Process Events

Twitch4J uses the `SimpleHandler` by default which works on all platforms.

Handlers:

- SimpleHandler
- ReactorHandler
- SpringHandler

You can register listeners directly on the eventManager, the call is forwarded and registered on the current `defaultEventHandler` set in the eventManager instance.

##### Switch the default event handler

If you want all your events to be processed by a specific eventHandler, then check out the following pages on all available eventHandlers:

* [SimpleEventHandler (Default)](./eventhandler-simple)
* [ReactorEventHandler](./ceventhandler-reactor)

##### Register your event listeners in a generic way

Only the consumers registered with `eventManager.onEvent` will use the `defaultEventHandler`.

{{<codeblocks>}}
{{<code Java>}}
```java
// register handler
IDisposable handlerReg = twitchClient.getEventManager().onEvent(ChannelMessageEvent.class, event -> {
	System.out.println "[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());
});

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose();
```
{{</code>}}
{{<code Groovy>}}
```groovy
// register handler
def handlerReg = twitchClient.eventManager.onEvent(ChannelMessageEvent) { event ->
	System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}"
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
// register handler
val handlerReg = twitchClient.eventManager.onEvent(ChannelMessageEvent::class.java) { event ->
	println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose()

```
{{</code>}}
{{</codeblocks>}}

This is the recommended method to register listeners, as you can switch between the different EventHandlers by chaning a single line of code.

### Simple Handler

The default event handler can register `handlers` with annotations or provide lambdas as consumers.

###### Lambda / Consumer Example

{{<codeblocks>}}
{{<code Java>}}
```java
// register handler
IDisposable handlerReg = twitchClient.getEventManager().getEventHandler(SimpleEventHandler.class).onEvent(ChannelMessageEvent.class, event -> {
	System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());
});

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose();
```
{{</code>}}
{{<code Groovy>}}
```groovy
// register handler
def handlerReg = twitchClient.eventManager.getEventHandler(SimpleEventHandler).onEvent ChannelMessageEvent, { event -> 
	System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message} "
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
// register handler
val handlerReg = twitchClient.eventManager.getEventHandler(SimpleEventHandler::class.java).onEvent(ChannelMessageEvent::class.java) { event -> 
	println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose()
```
{{</code>}}
{{</codeblocks>}}

###### Annotation Example

{{<codeblocks>}}
{{<code Java>}}
```java
public class MyEventHandler {

    // the type of the 1st argument is relevant, you can pick any method name you want
    @EventSubscriber
    public void printChannelMessage(ChannelMessageEvent event) {
        System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());
    }

}

// register your handler class
MyEventHandler myEventHandler = new MyEventHandler();
eventManager.getEventHandler(SimpleEventHandler.class).registerListener(myEventHandler);
```
{{</code>}}
{{<code Groovy>}}
```groovy
class MyEventHandler {

    // the type of the 1st argument is relevant, you can pick any method name you want
    @EventSubscriber
    def printChannelMessage(ChannelMessageEvent event) {
        System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}"
    }

}

// register your handler class
def myEventHandler = new MyEventHandler();
eventManager.getEventHandler(SimpleEventHandler).registerListener(myEventHandler);
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
class MyEventHandler {

    // the type of the 1st argument is relevant, you can pick any method name you want
    @EventSubscriber
    fun printChannelMessage(ChannelMessageEvent event) {
        println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")
    }

}

// register your handler class
val myEventHandler = MyEventHandler();
eventManager.getEventHandler(SimpleEventHandler::class.java).registerListener(myEventHandler);
```
{{</code>}}
{{</codeblocks>}}

###### Cheat Sheet

| Key | Value |
|---|---|
| Handler Execution | sync |
| Android | compatible |

### Reactor Handler

If desired you can also use the `ReactorHandler` to use reactive streams to process events (keep in mind that this will not work with android).
To enable reactor add the `ReactorHandler` dependency, it will be discovered and registered automatically.

{{<builds>}}
{{<build gradle>}}
```groovy
compile group: 'com.github.philippheuer.events4j', name: 'events4j-handler-reactor', version: '0.9.8'
// Since Gradle 5+
implementation group: 'com.github.philippheuer.events4j', name: 'events4j-handler-reactor', version: '0.9.8'
```
{{</build>}}
{{<build kotlin>}}
```kotlin
implementation(group = "com.github.philippheuer.events4j", name = "events4j-handler-reactor", version = "0.9.8")
```
{{</build>}}
{{<build pom>}}
```xml
<dependency>
  <groupId>com.github.philippheuer.events4j</groupId>
  <artifactId>events4j-handler-reactor</artifactId>
  <version>0.9.8</version>
</dependency>
```
{{</build>}}
{{</builds>}}

{{<codeblocks>}}
{{<code Java>}}
```java
// register handler
Disposable handlerReg = twitchClient.getEventManager().getEventHandler(ReactorEventHandler.class).onEvent(ChannelMessageEvent.class, event -> {
	System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());
});

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose();
```
{{</code>}}
{{<code Groovy>}}
```groovy
// register handler
def handlerReg = twitchClient.eventManager.getEventHandler(ReactorEventHandler).onEvent ChannelMessageEvent, { event ->
	System.out.println "[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}"
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose();
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
// register handler
val handlerReg = twitchClient.eventManager.getEventHandler(ReactorEventHandler::class.java).onEvent(ChannelMessageEvent::class.java) { event ->
	println("[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}")
}

// cancel handler (don't call the method for new events of the required type anymore)
handlerReg.dispose();
```
{{</code>}}
{{</codeblocks>}}

###### Cheat Sheet

| Key | Value |
|---|---|
| Handler Execution | async |
| Android | incompatible |

### Spring Handler

If desired you can also use the `SpringHandler` to handle all events as Spring Application Events.
To enable reactor add the `SpringHandler` dependency, it will be discovered and registered automatically.

{{<builds>}}
{{<build gradle>}}
```groovy
compile group: 'com.github.philippheuer.events4j', name: 'events4j-handler-spring', version: '0.9.8'
// Since Gradle 5+
implementation group: 'com.github.philippheuer.events4j', name: 'events4j-handler-spring', version: '0.9.8'
```
{{</build>}}
{{<build kotlin>}}
```kotlin
implementation(group = "com.github.philippheuer.events4j", name = "events4j-handler-spring", version = "0.9.8")
```
{{</build>}}
{{<build pom>}}
```xml
<dependency>
  <groupId>com.github.philippheuer.events4j</groupId>
  <artifactId>events4j-handler-spring</artifactId>
  <version>0.9.8</version>
</dependency>
```
{{</build>}}
{{</builds>}}

## Event Catalog

This will become a list of all available events.

Channel:
* [ChannelMessageEvent](./channel-message-event)
* [ChannelChangeGameEvent](./channel-change-game-event)
* [ChannelChangeTitleEvent](./channel-change-title-event)
* [ChannelGoLiveEvent](./channel-go-live-event)
* [ChannelGoOfflineEvent](./channel-go-offline-event)

User:
* [PrivateMessageEvent](./private-message-event)

Generic:
* [IRCMessageEvent](./irc-message-event)

*And many more, this is a very incomplete list*
