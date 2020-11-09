---
title: Documentation
layout: docs
weight: 50
menu: 
  docs:
    parent: Contribution
---

## Documentation

Documentation content is builded via [Hugo](https://gohugo.io), using own styling colors combined with [Brand Assets](https://brand.twitch.tv/) guidelines colors and [Bootstrap 4](https://getbootstrap.com/) assets (delivered from [`package.json`](package.json)). For search engine we are using [Fuse.js](https://fusejs.io/). All content are be cloneable from [this page](https://github.com/twitch4j/twitch4j.github.io).

## Configuration 

Using [`config.yml`](config.yml) we define a custom menu content... and the other stuff.

## Write your documentation

To write documentation propertly use:

* Front Matter template
  
  * for specific child

  ```md
  ---
  title: A page title
  weight: (next iterable number)
  menu:
    docs:
      parent: A parent page title
  ---
  ```

  * for new parent

  ```md
  ---
  title: A page title
  weight: (next iterable number)
  menu: docs
  ---
  ```
  There is no need specify layout of documentation for the new parent `docs`.


* Specified shortcodes (if some nessecarly)

### Currently defined shortcodes

All shortcodes are supported only on `content` directory. More about how to use shortcodes go to [Hugo Documentation](https://gohugo.io/content-management/shortcodes/). You have currently defined shortcodes below.

#### Alert

Simple definition `alert <color>`:

- `<color>` - [color](#color) specific.

{{< alert info >}}
This is info message
{{</ alert >}}

{{< alert twitch-purple >}}
This is alert with **Twitch Purple** colored message
{{</ alert >}}

#### Blockquote

`blockqoute <author>`

- `author` - author of the quote or something else (Optional)

{{< blockquote >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus at felis ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt eleifend nunc, sed tincidunt nibh interdum eget. In fermentum purus ac arcu finibus, et accumsan est tincidunt. Duis bibendum orci tellus, tempor aliquam nisl elementum nec. Phasellus pulvinar, ante non dictum pharetra, urna risus vehicula nisl, at cursus ipsum augue id risus. Phasellus quis nulla felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tristique, lacus ut congue dictum, nibh risus finibus nisl, quis ultrices lacus tellus faucibus libero. Curabitur vel ultrices mi.
{{</ blockquote >}}

{{< blockquote "Twitch4J" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus at felis ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt eleifend nunc, sed tincidunt nibh interdum eget. In fermentum purus ac arcu finibus, et accumsan est tincidunt. Duis bibendum orci tellus, tempor aliquam nisl elementum nec. Phasellus pulvinar, ante non dictum pharetra, urna risus vehicula nisl, at cursus ipsum augue id risus. Phasellus quis nulla felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tristique, lacus ut congue dictum, nibh risus finibus nisl, quis ultrices lacus tellus faucibus libero. Curabitur vel ultrices mi.
{{</ blockquote >}}


#### Button

`button type="<type>"`

- `type` - `button` / `link` - default: `link` (Optional)
- `href` - url, only on `type=link`
- `btn_type` - button type, only on `type=button`
- `disabled` - mark your button as disabled
- `size` - your button size, following by [bootstrap documentation](https://getbootstrap.com/docs/4.5/components/buttons/#sizes): `sm`, `md`, `lg`, etc.
- `outline` - create button with outline
- `color` - button [color](#color)

##### Examples

if `type` is not defined the `button` shortcode generates button as `link`

{{< button type="link" href="https://twitch4j.com" >}}
Button 1
{{</ button >}}

Of course you can made him as ordinal button but you need define `btn_type` as type of button

{{< button type="button" btn_type="submit" >}}
Submit
{{</ button >}}

There is more features like [size]() (`sm`, `md`, `lg`), outline, disabled, [colors](#color), etc.

{{< button href="#" color="primary" outline="true" size="sm" >}}
Outline Button
{{</ button >}}

{{< button href="#" color="twitch-purple" disabled="true" size="lg" >}}
Disabled Button
{{</ button >}}

#### Code Blocks / Build Blocks

For easing our library usage we recommend write it with codeblocks. Difference between `code` and `build` is usage:

- `code` is for library examples
- `build` is for build examples

booth of them are independent from sharable tab content. Each of them will remember it which tab the user choose.

##### Single and simple (with markdown)

If you are using single language code block just only like this?

```java
public class Application {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

##### Using shortcode

putting code via shortcode `code <name>`

- `name` - codeblock name - Required

###### Just simple

The `name` it will be right side of the code. That is recommended to naming the code as the *file name*.

{{< code Application.java >}}
  ```java
  public class Application {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
  ```
{{</ code >}}

###### Codeblock with tabs

You wanna trying some multiple languages like: `java` and `kotlin` here is some helpful example:

{{< codeblocks >}}
  {{< code Java >}}
```java
public class Application {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```
  {{</ code >}}
  {{< code Groovy >}}
```groovy
class Application {
  static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```
  {{</ code >}}
  {{< code Kotlin >}}
```kotlin
fun main(args: Array<String>) {
  println("Hello World!");
}
```
  {{</ code >}}
{{</ codeblocks >}}

##### Using builds

Same rules like a [*Codeblock with tabs*](#codeblock-with-tabs), but:

* `codeblocks` shortcode rename to `builds`
* `code <Language>` shortcode rename to `build <name>`
  * `name` is build named specific (`gradle`,`kotlin`,`pom`)
    * `gradle` for `build.gradle`
    * `kotlin` for `build.gradle.kts`
    * `pom` for `pom.xml`

###### Example

{{< builds >}}
  {{< build gradle >}}
```groovy
plugins {
  id "java-library"
  id "maven-publish"
}

depdendencies {
  implementation "com.github.twitch4j:twitch4j:1.0.0"
}
```
  {{</ build >}}
  {{< build kotlin >}}
```kotlin
plugins {
  `java-library`
  `maven-publish`
}

depdendencies {
  implementation("com.github.twitch4j:twitch4j:1.0.0")
}
```
  {{</ build >}}
  {{< build pom >}}
```xml
<dependencies>
  <dependency>
    <groupId>com.github.twitch4j</groupId>
    <artifactId>twitch4j</artifactId>
    <version>1.0.0</version>
  </dependency>
</dependencies>
```
  {{</ build >}}
{{</ builds >}}

###### Additional Notes

The `build` example shows only currently supported builds. In the near future we can expand to the other build tools.


#### Column sizes

Using [Grid System](https://getbootstrap.com/docs/4.5/layout/grid/) provided by Bootstrap we can define flexible columns for responsive size.

`col <size...>`

- `size` - using by grid options we can specify only sizes divided of 12 columns on current row. in example `col 12 md-6` we get context in the half on the container and the whole container size content below 720px. See: [grid options](https://getbootstrap.com/docs/4.5/layout/grid/#grid-options)

#### Spoiler

The content which you wanna hide it
`spoiler <name>`
- `name` spoiler name (optional)

{{< spoiler >}}
This is content to hide.
{{</ spoiler >}}

{{< spoiler "Example" >}}
This is content to hide.
{{</ spoiler >}}

### Color

Currently avaliable colors are followed up by the [Bootstrap documentation](https://getbootstrap.com/docs/4.5/utilities/colors/)

Additiona Avaliable Colors followed up by [Brand Asset Guidelines](https://brand.twitch.tv/):

- ![black-ops](https://via.placeholder.com/15/000000/000000?text=+) - `black-ops`
- ![twitch-purple](https://via.placeholder.com/15/9146FF/000000?text=+) - `twitch-purple`
- ![ice](https://via.placeholder.com/15/F0F0FF/000000?text=+) - `ice`
- ![jiggle](https://via.placeholder.com/15/FAB4FF/000000?text=+) - `jiggle`
- ![worm](https://via.placeholder.com/15/FACDCD/000000?text=+) - `worm`
- ![isabelle](https://via.placeholder.com/15/FEEE85/000000?text=+) - `isabelle`
- ![droid](https://via.placeholder.com/15/BEFAE1/000000?text=+) - `droid`
- ![wipe-out](https://via.placeholder.com/15/00C8AF/000000?text=+) - `wipe-out`
- ![smoke](https://via.placeholder.com/15/D2D2E6/000000?text=+) - `smoke`
- ![widow](https://via.placeholder.com/15/BFABFF/000000?text=+) - `widow`
- ![peach](https://via.placeholder.com/15/FC6675/000000?text=+) - `peach`
- ![pac-man](https://via.placeholder.com/15/FFCA5F/000000?text=+) - `pac-man`
- ![felicia](https://via.placeholder.com/15/57BEE6/000000?text=+) - `felicia`
- ![sonic](https://via.placeholder.com/15/0014A5/000000?text=+) - `sonic`
- ![dragon](https://via.placeholder.com/15/8205B4/000000?text=+) - `dragon`
- ![cuddle](https://via.placeholder.com/15/FA1ED2/000000?text=+) - `cuddle`
- ![bandit](https://via.placeholder.com/15/FF6905/000000?text=+) - `bandit`
- ![lightning](https://via.placeholder.com/15/FAFA19/000000?text=+) - `lightning`
- ![ko](https://via.placeholder.com/15/BEFF00/000000?text=+) - `ko`
- ![mega](https://via.placeholder.com/15/00FAFA/000000?text=+) - `mega`
- ![nights](https://via.placeholder.com/15/41145F/000000?text=+) - `nights`
- ![osu](https://via.placeholder.com/15/BE0078/000000?text=+) - `osu`
- ![sniper](https://via.placeholder.com/15/FA2828/000000?text=+) - `sniper`
- ![egg](https://via.placeholder.com/15/00FA05/000000?text=+) - `egg`
- ![legend](https://via.placeholder.com/15/69FFC3/000000?text=+) - `legend`
- ![zero](https://via.placeholder.com/15/1E69FF/000000?text=+) - `zero`

## Additional Notes

To before starting editing documentation you needs

- [`hugo`](https://gohugo.io) - to generate this page
- [`node`](https://nodejs.org) - to install and deliver those [packages](package.json)

**IMPORTANT**: *This readme is not a part of the content generated by hugo.*

## Live View

To editing this project type in project console `npm start` or `hugo server`

## Generate files

To generate ready to deploy project just type in project console `npm run generate` or `npm run generate:minify`. All content are be generated in: `public` folder.

## GitHub Actions

Project will automatically generate files and push them into `gh-pages` branch.
To define own configuration please go to [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml) and follow those useful documentation:

- [Github Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions for GitHub Pages](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Actions for Hugo](https://github.com/peaceiris/actions-hugo)