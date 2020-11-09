---
title: CredentialManager
layout: docs
weight: 10
---

# Twitch4J - CredentialManager

If you use any module that reqires auth directly, you need to setup your credentialManager and pass it into the builder on the `.withCredentialManager(credentialManager)` method.

## Register the twitch identity provider using the AuthModule

{{<codeblocks>}}
{{<code Java>}}
```java

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

## Register the twitch identity provider manually

```java

```
{{<codeblocks>}}
{{<code Java>}}
```java
CredentialManager credentialManager = CredentialManagerBuilder.builder().build();
credentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""));
```
{{</code>}}
{{<code Groovy>}}
```groovy
def credentialManager = CredentialManagerBuilder.builder().build()
credentialManager.registerIdentityProvider(new TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))
```
{{</code>}}
{{<code Kotlin>}}
```kotlin
val credentialManager = CredentialManagerBuilder.builder().build().also {
  it.registerIdentityProvider(TwitchIdentityProvider("jzkbprff40iqj646a697cyrvl0zt2m6", "**SECRET**", ""))
}
```
{{</code>}}
{{</codeblocks>}}
