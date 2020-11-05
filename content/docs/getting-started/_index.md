---
title: Getting started
weight: 1
aliases: [/docs/]
menu: docs
---

# Twitch4J

Welcome and thanks for using Twitch4J!

Please check out the [Installation](../installation) page to install the Twitch4J dependency.

After that the [Client-Builder](../client-builder) will show you how to create a Twitch4J Instance.

Now you'r ready to check out a few example projects:

* [Twitch4J Chatbot](https://github.com/twitch4j/twitch4j-chatbot)

## Events

Many modules can generate events which you can handle in some way, like PubSub, Chat, ...

For a list of available events / information on how to listen to events please check out: [Events](./events)

## Results of API Calls

This API Client provides you 3 methods to handle / process the results of api calls.

### Synchronous Execution

You can execute any api call synchronously with the execute() method, as shown in the following example:

{{< codeblocks >}}
{{< code Java >}}
```java
UserList users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).execute();
```
{{</ code >}}
{{< code Groovy >}}
```groovy
UserList users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute();
```
{{</ code >}}
{{< code Kotlin >}}
```kotlin
var userList: users = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).execute();
```
{{</ code >}}
{{</ codeblocks >}}

### Asynchronous Execution

You can execute any api call asynchronously with the queue() method, as shown in the following example:



{{< codeblocks >}}
{{< code Java >}}
```java
UserList users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j"))
        .execute();
```
{{</ code >}}
{{< code Groovy >}}
```groovy
UserList users = twitchClient.helix.getUsers(null, null, ["twitch4j"]).execute()
```
{{</ code >}}
{{< code Kotlin >}}
```kotlin
var users: UserList = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).execute()
```
{{</ code >}}
{{</ codeblocks >}}

You can retrieve the result of the command by using the Future:

{{< codeblocks >}}
{{< code Java >}}
```java
Future<UserList> users = twitchClient.getHelix().getUsers(null, null, Arrays.asList("twitch4j")).queue();
```
{{</ code >}}
{{< code Groovy >}}
```groovy
Future<UserList> users = twitchClient.helix.getUsers(null, null, Arrays.asList("twitch4j")).queue()
```
{{</ code >}}
{{< code Kotlin >}}
```kotlin
var users: Future<UserList> = twitchClient.helix.getUsers(null, null, arrayOf("twitch4j")).queue()
```
{{</ code >}}
{{</ codeblocks >}}

### Reactive Execution

You can also observe the results of any api call as an Observable by using one of the following methods:

* observe() — returns a “hot” Observable that executes the command immediately, though because the Observable is filtered through a ReplaySubject you are not in danger of losing any items that it emits before you have a chance to subscribe
* toObservable() — returns a “cold” Observable that won’t execute the command and begin emitting its results until you subscribe to the Observable

{{< codeblocks >}}
{{< code Java >}}
```java
Observable<UserList> users = twitchClient.getKraken().getUsers(null, null, Arrays.asList("twitch4j"))
        .observe();
```
{{</ code >}}
{{< code Groovy >}}
```groovy
Observable<UserList> users = twitchClient.kraken.getUsers(null, null, ["twitch4j"]).observe()
```
{{</ code >}}
{{< code Kotlin >}}
```kotlin
var users: Observable<UserList> = twitchClient.kraken.getUsers(null, null, arrayOf("twitch4j"))
        .observe()
```
{{</ code >}}
{{</ codeblocks >}}

You then retrieve the value of the command by subscribing to the Observable:

{{< codeblocks >}}
{{< code Java >}}
```java
users.subscribe(data -> {
  // your code to work with the result data
});
```
{{</ code >}}
{{< code Groovy >}}
```groovy
users.subscribe { data ->
  // your code to work with the result data
}
```
{{</ code >}}
{{< code Kotlin >}}
```kotlin
users.subscribe { data ->
  // your code to work with the result data
}
```
{{</ code >}}
{{</ codeblocks >}}

## Contribute to this documentation

Feel free to update this content, just press this button below to edit it as usual markdown files and send a pull request.