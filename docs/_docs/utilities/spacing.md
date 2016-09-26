---
layout: doc
title:  Spacing
nav_order: 14
nav_group: utilities
---

{% include navigation.html type=site.docs group="utilities" back=true %}

```
.module
	hako-module-margin(20px 15px)

	hako-module-margin($top: 20px, $right: 30px)

	hako-module-margin({
		xs: 20px 0
	})

	hako-module-margin(20px, 30px, 20px, 40px, false)

	hako-module-margin({
		xs: { topBottom: 20px }
		med: { topBottom: 40px }
	}, $removeVerticalSpacing: false)
```
