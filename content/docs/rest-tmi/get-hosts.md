---
title: TMI - Get Hosts
weight: 11
layout: docs
menu: 
  docs:
    parent: API - Kraken
---

# Get Hosts

## Description

This endpoint returns a "host" record for each channel ID provided. If the channel is not hosting anyone, the target_id 
and target_login fields will not be present.

## Method Definition

```java
@RequestLine("GET /hosts?include_logins=1&host={id}")
HystrixCommand<HostList> getHosts(
    @Param("id") List<String> channelIds
);
```

*Required Parameters*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| channelIds | text | A list containing a user ID for each channel to check. |

*Optional Parameters*

None

## Code-Snippets

### print who a channel is hosting

{{<codeblocks>}}
{{<code Java>}}
```java
HostList hosts = twitchClient.getMessagingInterface().getHosts(Arrays.asList("29829912")).execute();
hosts.getHosts().forEach(host -> {
    System.out.println(host.getHostDisplayName() + " hosting " + host.getTargetDisplayName());
});
```
{{</code>}}
{{<code Groovy>}}
```groovy
def hosts = twitchClient.messagingInterface.getHosts(["29829912"]).execute()
hosts.hosts.each { host ->
    System.out.println "${host.hostDisplayName} hosting ${host.targetDisplayName}"
}
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val hosts = twitchClient.messagingInterface.getHosts(["29829912"]).execute()
hosts.hosts.each { host ->
    println("${host.hostDisplayName} hosting ${host.targetDisplayName}")
}
```
{{</code>}}
{{</codeblocks>}}