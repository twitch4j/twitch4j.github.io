---
title: IDE - Development Environment
layout: docs
weight: 5
menu: 
  docs:
    parent: Contribution
---

# Development Environment

We are using Project Lombok to generate some parts of the java code, so you will have to setup the lombok plugin in your ide to compile / run `Twitch4J`.

## Project Lombok
This repository uses lombok to avoid the Getter/Setter boilerplate code in many classes.
Therefore you need to install Lombok for you IDE:

### IntelliJ - Plugin Installation

In `2020.3+` Lombok plugin has been embeded to IDE. There is no need to installing proper version. But in older version is required if you wanna contribute to our repository.

- Using IDE built-in plugin system on Windows:
  ```txt
  File > Settings > Plugins > Browse repositories... > Search for "lombok" > Install Plugin
  ```
- Using IDE built-in plugin system on MacOs:
  ```txt
  Preferences > Settings > Plugins > Browse repositories... > Search for "lombok" > Install Plugin
  ```
- Manually:
  Download the [latest release](https://github.com/mplushnikov/lombok-intellij-plugin/releases/latest) and install it manually using **`Preferences > Plugins > Install plugin from disk...`**

Restart IDE.

### Eclipse - Plugin Installation

Download the latest `lombok.jar` from the [official Website](https://projectlombok.org/download.html).

Just run `lombok.jar` which will open the setup dialog, you need to specify your eclipse installation path here.

## Javadoc Generation

To generate the Javadocs in HTML5 you should use JDK9 or newer - the option will be set automatically based on your java version.
