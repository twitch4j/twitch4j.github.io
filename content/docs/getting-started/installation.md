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
    implementation group: 'com.github.twitch4j', name: 'twitch4j', version: '{{< current_version >}}'
    // or using it into compile
    api group: 'com.github.twitch4j', name: 'twitch4j', version: '{{< current_version >}}'
}
```
{{</ build >}}
{{< build kotlin >}}
```kotlin
repositories {
    jcenter()
}

dependencies {
    implementation(group = "com.github.twitch4j", name = "twitch4j", version = "{{< current_version >}}")
    // or using it into compile
    api(group = "com.github.twitch4j", name = "twitch4j", version = "{{< current_version >}}")
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
    <version>{{< current_version >}}</version>
</dependency>
```
{{</ build >}}
{{</ builds >}}
