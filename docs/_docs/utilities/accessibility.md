---
layout: doc
title:  Accessibility
nav_order: 1
nav_group: utilities
---

{% include navigation.html type=site.docs group="utilities"%}
---

### hako-visuallyhidden

When used, this will hide the element from view in a similar fashion to using `display: none;` but with the advantage that it will still accessible to screen readers.


**Usage**

```
.foo
    hako-visuallyhidden()
```

**Output**

```
.foo {
    position: absolute;
    overflow: hidden;
    padding: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
}
```

### hako-visuallyshow

Is using hako-visuallyhidden, this will reset the values change via hako-visuallyhidden to their default values.


**Usage**

```
.foo
    hako-visuallyshow()
```

**Output**

```
.foo {
    position: static;
    overflow: visible;
    width: auto;
    height: auto;
    margin: 0;
    clip: auto;
}
```

### hako-no-js &amp; hako-js-only

For instances where it can be useful to apply JavaScript specific styles such as modals or carousels, hako-no-js and hako-js-only are your friends. There are a number of ways they can be used.

#### Example 1

**Usage**

```
.foo
    +hako-no-js()
        content "style 1"

    +hako-js-only()
        content "style 2"
```

**Output**

```
html.no-js .foo {
    content: "style 1";
}

html:not(.no-js) .foo {
    content: "style 2";
}
```

#### Example 2

**Usage**

```
$style1 =
    content "style 1"

$style2 =
    content "style 2"

.bar
    hako-no-js($style1)

    hako-js-only($style2)

```

**Output**

```
html.no-js .bar {
    content: "style 1";
}

html:not(.no-js) .bar {
    content: "style 2";
}
```

#### Example 3

**Usage**

```
$style1 =
    content "style 1"

$style2 =
    content "style 2"

.baz
    +hako-no-js($style1)
        content "style 2"

    +hako-js-only($style1)
        content "style 2"
```

**Output**

```
html.no-js .baz {
    content: "style 1";
    content: "style 2";
}

html:not(.no-js) .baz {
    content: "style 1";
    content: "style 2";
}
```

#### Example 4

**Usage**

```
$style1 =
    content "style 1"

$style3 =
    content "style 3"

.foobar
    +hako-no-js($style1)
        content "style 2"

        {$style3}

    +hako-js-only($style1)
        content "style 2"

        {$style3}
```

**Output**

```
html.no-js .foobar {
    content: "style 1";
    content: "style 2";
    content: "style 3";
}

html:not(.no-js) .foobar {
    content: "style 1";
    content: "style 2";
    content: "style 3";
}
```
