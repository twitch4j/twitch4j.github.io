---
title: Installation
layout: docs
weight: 2
menu: 
  docs:
    parent: Getting started
---

# Installation

We recommend using a dependency management tool to manage twitch4j and sub dependencies. As a fallback method you can also download a fatJar adding `shaded` scope to your configuration build.
{{< builds >}}
{{< build gradle >}}
```groovy
dependencies {
    implementation group: 'com.github.twitch4j', name: 'twitch4j', version: '{{< current_version >}}'
    // or using it into compile
    api group: 'com.github.twitch4j', name: 'twitch4j', version: '{{< current_version >}}'
}
```
{{</ build >}}
{{< build kotlin >}}
```kotlin
dependencies {
    implementation(group = "com.github.twitch4j", name = "twitch4j", version = "{{< current_version >}}")
    // or using it into compile
    api(group = "com.github.twitch4j", name = "twitch4j", version = "{{< current_version >}}")
}
```
{{</ build >}}
{{< build pom >}}
```xml
<dependencies>
    ...
    <dependency>
        <groupId>com.github.twitch4j</groupId>
        <artifactId>twitch4j</artifactId>
        <version>{{< current_version >}}</version>
    </dependency>
    ...
</dependencies>
```
{{</ build >}}
{{</ builds >}}
