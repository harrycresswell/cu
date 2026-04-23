---
title: Visibility
weight: 13
---

You can use the `[hidden]` attribute to prevent the browser from rendering content. This is useful when you are manipulating content with JavaScript, or if you wish to hide content from the accessibility tree. 

```
<p hidden>This paragraph is hidden from the browser and will not render</p>
```

If you don’t want content to be visible in the browser, but would like it to remain accessible to screen readers and other assistive technologies, then use the [visually hidden](/utilities/#visually-hidden) utility class instead. 