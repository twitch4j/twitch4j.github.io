---
title: Ingests - Get
layout: docs
weight : 60
menu: 
  docs:
    parent: API - Kraken
---

# Get Ingest Server List

## Description

The Twitch ingesting system is the first stop for a broadcast stream. An ingest server receives your stream, and the ingesting system authorizes and registers streams, then prepares them for viewers.

## Method Definition

```java
@RequestLine("GET /ingests")
HystrixCommand<KrakenIngestList> getIngestServers();
```

*Required Parameters (one of)*

None

*Optional Parameters*

None

## Code-Snippets

### print name of all ingest servers

```java
KrakenIngestList resultList = twitchClient.getKraken().getIngestServers().execute();
resultList.getIngests().forEach(ingest -> {
	System.out.println(ingest.getName());
});
```
