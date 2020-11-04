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

```java
TwitchClient twitchClient = TwitchClientBuilder.builder()
    ...
    .withProxyConfig(ProxyConfig.builder().hostname("my-proxy-host").port(8080).build())
    ...
    .build();
```

You can also call `.withProxyConfig()` on any module builder if you'r using some modules standalone.
