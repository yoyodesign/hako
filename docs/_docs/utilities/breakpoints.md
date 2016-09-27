---
layout: doc
title:  Breakpoints
nav_order: 4
nav_group: utilities
---

{% include navigation.html type=site.docs group="utilities"%}
---

A variety of functions useful for generating breakpoints. Utilises the breakpoints settings from the configuration. Uses `em` to assign min and max values.

### hako-between-bp

Creates a breakpoint between two values.

#### Options

```
+hako-between-bp(
    $min = null,                                         \\ minimum value
    $max = null,                                         \\ maximum value
    $forIe8 = false,                                     \\ is true, will include styles for ie8
    $block = false,                                      \\ Can be a block of css
    $antiOverlap = $hako["breakpoints"]["antiOverlap"]   \\ If true will add and remove 1px to the max and min values respectively.
)
```

#### Example 1

**Usage**

```
.foo
    +hako-between-bp(756px, 1024px)
        content "style 1"
```

**Output**

```
@media screen and (min-width: 47.25em) and (max-width: 63.9375em) {
    .foo {
        content: "style 1";
    }
}
```
