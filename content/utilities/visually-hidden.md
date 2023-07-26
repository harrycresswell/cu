---
title: "Visually Hidden"
date: 2023-07-12T12:59:32+01:00
draft: false
weight: 4
---

Use the `.visually-hidden` utility to visually hide an element while ensuring it’s still accessible to assistive technologies, screen readers, and so on.

```
/* 
VISUALLY HIDDEN
@link: https://piccalil.li/quick-tip/visually-hidden/ 
*/
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
```