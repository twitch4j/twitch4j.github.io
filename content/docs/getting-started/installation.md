---
title: Installation
layout: docs
weight: 2
menu: 
  docs:
    parent: Getting started
---

# Installation

We recommend using a dependency management tool to manage twitch4j and sub dependencies. ~~As a fallback method you can also download a fatJar.~~
{{< builds >}}
{{< build gradle >}}
```groovy
repositories {
    jcenter()
}

dependencies {
    implementation group: 'com.github.twitch4j', name: 'twitch4j', version: '1.1.3'
    // or using it into compile
    api group: 'com.github.twitch4j', name: 'twitch4j', version: '1.1.3'
}
```
{{</ build >}}
{{< build kotlin >}}
```kotlin
repositories {
    jcenter()
}

dependencies {
    implementation(group = "com.github.twitch4j", name = "twitch4j", version = "1.1.3")
    // or using it into compile
    api(group = "com.github.twitch4j", name = "twitch4j", version = "1.1.3")
}
```
{{</ build >}}
{{< build pom >}}
```xml
<repositories>
    <repository>
      <id>jcenter</id>
      <url>https://jcenter.bintray.com/</url>
    </repository>
</repositories>
...
<dependency>
    <groupId>com.github.twitch4j</groupId>
    <artifactId>twitch4j</artifactId>
    <version>1.1.3</version>
</dependency>
```
{{</ build >}}
{{</ builds >}}
