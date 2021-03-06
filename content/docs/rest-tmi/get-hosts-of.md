---
title: TMI - Get Hosts of target channel
weight: 12
layout: docs
menu: 
  docs:
    parent: API - Kraken
---

# Get Hosts of target channel

## Description

This endpoint returns a "host" record for each channel hosting the channel with the provided targetId. It does not 
return the login of the target, only of the hosts. Therefore getTargetLogin will return null for each Host in 
HostList.getHosts().

## Method Definition

```java
@RequestLine("GET /hosts?include_logins=1&target={id}")
HystrixCommand<HostList> getHostsOf(
    @Param("id") String targetId
);
```

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| targetId | text | The user ID of the channel for which to get host information. |

*Optional Parameters*

None

## Code-Snippets

### print who is hosting a channel

{{<codeblocks>}}
{{<code Java>}}
```java
HostList hosts = twitchClient.getMessagingInterface().getHostsOf("29829912").execute();
hosts.getHosts().forEach(host -> {
    System.out.println(host.getHostDisplayName());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
def hosts = twitchClient.messagingInterface.getHostsOf("29829912").execute()
hosts.hosts.each { host ->
    System.out.println(host.hostDisplayName);
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val hosts = twitchClient.messagingInterface.getHostsOf("29829912").execute()
hosts.hosts.each { host ->
    println(host.hostDisplayName);
}
```
{{</code>}}
{{</codeblocks>}}