---
layout: doc
title:  Breakpoints
nav_group: configuration
nav_order: 1

---

{% include navigation.html type=site.docs group="configuration" back=true %}


```
$hako["breakpoints"] = -hako-default-settings($hako["breakpoints"], {
	emBreakpoints: true
	baseFontSize: 16px
	antiOverlap: -1px
	scale: {
		xs: 0
		s: -hako-em(375px)
		meds: -hako-em(414px)
		smed: -hako-em(600px)
		med: -hako-em(768px)
		reg: -hako-em(1024px)
		l: -hako-em(1280px)
		xl: -hako-em(1600px)
		hd: -hako-em(1920px)
	}
})
```
