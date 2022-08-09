---
sidebar_position: 10
---

# Releases

The release process is fully automated using GitLab CI and gets triggered by git tag creation. There are no further actions required.

## Release Notes

The releasenotes are generated using [EnvCLI/Modular-Pipeline](https://github.com/EnvCLI/modular-pipeline).

### Discord Announcements

The project contains a CI Variable called `RELEASE_WEBHOOK_DISCORD` which points to a discord webhook on the twitch4j announcements channel.

### GitHub Releases

The project contains a GH_TOKEN thats used to create new GitHub Releases using the API, using the same changelog information as discord but with a different markup template.

## Conventions

To generate a human readable changelog, the commits have to follow the following naming convention:

{{< col "12" "md-8" "xl-8" >}}
| Commit Message | Changelog Category |
|-------------:|:-----------------|
| `feature:` | Features |
| `feat:` | Features |
| `fix:` | Bug Fixes |
| `bugfix:` | Bug Fixes |
| `perf:` | Performance Improvements |
| `refactor:` | Code Refactoring |
| `chore:` | Internal |
| `docs:` | Documentation |
{{</ col >}}
