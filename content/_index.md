---
title: Home
---

{{< index/header >}}

### Features

{{< index/features >}}

### TwitchClient Initialization

{{< codeblocks >}}
{{< code Java >}}
```java
public class Application {
  public static void main(String[] argv) {
    TwitchClient client = TwitchClientBuilder.builder().build();
  }
}
```
{{</ code >}}
{{< code Groovy >}}

```groovy
class Application {
  static void main(String[] argv) {
    TwitchClient client = TwitchClientBuilder.builder().build()
  }
}
```

{{</ code >}}
{{< code Kotlin >}}

```kotlin
fun main(argv: Array<String>) {
  val client: TwitchClient = TwitchClientBuilder.builder().build()
}
```

{{</ code >}}
{{</ codeblocks >}}

### Event Listeners

{{< codeblocks >}}
{{< code Java >}}

```java
client.getEventManager().onEvent(ChannelMessageEvent.class, event -> {
	System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());
});
```

{{</ code >}}
{{< code Groovy >}}

```groovy
client.eventManager.onEvent ChannelMessageEvent, { event ->
	System.out.println "[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}"
}
```

{{</ code >}}
{{< code Kotlin >}}

```kotlin
client.eventManager.onEvent(ChannelMessageEvent::class.java) { event ->
	println("[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}");
});
```

{{</ code >}}
{{</ codeblocks >}}