---
title: Proxy Support
layout: docs
menu: docs
weight: 60
menu: 
  docs:
    parent: Getting started
---

# Proxy Support

All components support the usage of a proxy server, it can be set globally like this:

*TwitchClientBuilder*

{{<codeblocks>}}
{{<code Java>}}
```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    ...
    .withProxyConfig(ProxyConfig.builder().hostname("my-proxy-host").port(8080).build())
    ...
    .build();
```
{{</code>}}
{{<code Groovy>}}
```groovy
def twitchClient = TwitchClientBuilder.builder()
    ...
    .withProxyConfig(ProxyConfig.builder().hostname("my-proxy-host").port(8080).build())
    ...
    .build()
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val twitchClient = TwitchClientBuilder.builder()
    ...
    .withProxyConfig(ProxyConfig.builder().hostname("my-proxy-host").port(8080).build())
    ...
    .build()
```
{{</code>}}
{{</codeblocks>}}

You can also call `.withProxyConfig()` on any module builder if you'r using some modules standalone.
