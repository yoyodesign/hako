---
layout: doc
title:  Block
nav_order: 3
nav_group: utilities
---

{% include navigation.html type=site.docs group="utilities"%}
---

### hako-apply-block

#### Example 1

**Usage**

```
.foo
    +hako-apply-block()
    	content "style 1"

```

**Output**

```
.foo {
    content: "style 1";
}
```

#### Example 2

**Usage**

```
$style1 =
    content "style 1"

.bar
    hako-apply-block($style1)
```

**Output**

```
.bar {
    content: "style 1";
}
```

#### Example 3

**Usage**

```
$style1  =
    content "style 1"

.foobar
    +hako-apply-block($style1)
        content "style 2"
```

**Output**

```
.foobar {
    content: "style 1";
    content: "style 2";
}
```
