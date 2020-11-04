# Write a documentation

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

There is no need specify layout of documentation for the new parent docs

* Specified shortcodes (if some nessecarly) - more about how to use shortcodes go to [Hugo Documentation](https://gohugo.io/content-management/shortcodes/). You have currently defined shortcodes below.

# Currently defined shortcodes

## Alert

Simple definition `alert <color>`:

- `<color>` - [color](#color) specific.

```md
{{< alert info >}}
This is info message
{{< alert >}}

{{< alert twitch-purple >}}
This is alert with **Twitch Purple** colored message
{{< alert >}}
```

## Blockquote

`blockqoute <author>`

- `author` - author of the quote or something else (Optional)

 ```md
{{< blockquote >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus at felis ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt eleifend nunc, sed tincidunt nibh interdum eget. In fermentum purus ac arcu finibus, et accumsan est tincidunt. Duis bibendum orci tellus, tempor aliquam nisl elementum nec. Phasellus pulvinar, ante non dictum pharetra, urna risus vehicula nisl, at cursus ipsum augue id risus. Phasellus quis nulla felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tristique, lacus ut congue dictum, nibh risus finibus nisl, quis ultrices lacus tellus faucibus libero. Curabitur vel ultrices mi.
{{</ blockquote >}}
 ```

 ```md
{{< blockquote "Twitch4J" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus at felis ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt eleifend nunc, sed tincidunt nibh interdum eget. In fermentum purus ac arcu finibus, et accumsan est tincidunt. Duis bibendum orci tellus, tempor aliquam nisl elementum nec. Phasellus pulvinar, ante non dictum pharetra, urna risus vehicula nisl, at cursus ipsum augue id risus. Phasellus quis nulla felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam tristique, lacus ut congue dictum, nibh risus finibus nisl, quis ultrices lacus tellus faucibus libero. Curabitur vel ultrices mi.
{{</ blockquote >}}
 ```

## Button

`button type="<type>"`

- `type` - `button` / `link` - default: `link` (Optional)
- `href` - url, only on `type=link`
- `btn_type` - button type, only on `type=button`
- `disabled` - mark your button as disabled
- `size` - your button size, following by [bootstrap documentation](https://getbootstrap.com/docs/4.5/components/buttons/#sizes): `sm`, `md`, `lg`, etc.
- `outline` - create button with outline
- `color` - button [color](#color)

### Examples

if `type` is not defined the `button` shortcode generates button as `link`


```md
{{< button type="link" href="https://twitch4j.com" >}}
Button 1
{{</ button >}}
```

Of course you can made him as ordinal button but you need define `btn_type` as type of button

```md
{{< button type="button" btn_type="submit" >}}
Submit
{{</ button >}}
```

There is more features like [size]() (`sm`, `md`, `lg`), outline, disabled, [colors](#color), etc.

```md
{{< button href="#" color="primary" outline="true" size="sm" >}}
Outline Button
{{</ button >}}
{{< button href="#" color="twitch-purple" disabled="true" size="lg" >}}
Disabled Button
{{</ button >}}
```

## Code Blocks / Build Blocks

For easing our library usage we recommend write it with codeblocks. Difference between `code` and `build` is usage:

- `code` is for library examples
- `build` is for build examples

booth of them are independent from sharable tab content. Each of them will remember it which tab the user choose.

### Single and simple (with markdown)

If you are using single language code block just only like this?

```md
    ```java
    public class Application {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }
    ```
```

### Using shortcode

putting code via shortcode `code <name>`

- `name` - codeblock name - Required

#### Just simple

The `name` it will be right side of the code. That is recommended to naming the code as the *file name*.

```md
  {{< code Application.java >}}
    ```java
    public class Application {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }
    ```
  {{</ code >}}
```

#### Codeblock with tabs

You wanna trying some multiple languages like: `java` and `kotlin` here is some helpful example:

```md
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
  {{< code Kotlin >}}
    ```kotlin
    fun main(args: Array<String>) {
      println("Hello World!");
    }
    ```
  {{</ code >}}
{{</ codeblocks >}}
```

### Using builds

Same rules like a [*Codeblock with tabs*](#codeblock-with-tabs), but:

* `codeblocks` shortcode rename to `builds`
* `code <Language>` shortcode rename to `build <name>`
  * `name` is build named specific (`gradle`,`kotlin`,`pom`)
    * `gradle` for `build.gradle`
    * `kotlin` for `build.gradle.kts`
    * `pom` for `pom.xml`

#### Example

```md
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
  {{< build xml >}}
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
```

#### Additional Notes

The `build` example shows only currently supported builds. In the near future we can expand to the other build tools.

# Color

Currently avaliable colors are followed up by the [Bootstrap documentation](https://getbootstrap.com/docs/4.5/utilities/colors/)

Additiona Avaliable Colors:

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