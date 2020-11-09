---
title: Channel - Update Title
layout: docs
weight : 90
menu: 
  docs:
    parent: API - Kraken
---

# Update the title of a channel

## Description

Updates the channel / stream title

## Method Definition

```java
@RequestLine("PUT /channels/{channelId}?channel[status]={title}")
HystrixCommand<Object> updateTitle(
    @Param("token") String authToken,
    @Param("channelId") String channelId,
    @Param("title") String title
);
```

*Required Parameters (one of)*

| Name          | Type      | Description  |
| ------------- |:---------:| -----------------:|
| token | string | auth token |
| channelId | string | channel id |
| title | string | new channel title |

*Optional Parameters*

None

## Code-Snippets

### get team by name

{{<codeblocks>}}
{{<code Java>}}
```java
twitchClient.getKraken().updateTitle("authToken", "44322889", "Hello World!").execute();
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
