---
title: "Wrapper"
date: 2023-07-12T12:59:06+01:00
draft: false
weight: 1
---

```
/*
WRAPPER
Sets a max width, adds a consistent gutter and horizontally
centers the contents
@link: https://piccalil.li/quick-tip/use-css-clamp-to-create-a-more-flexible-wrapper-utility/
*/
.wrapper {
  max-width: var(--wrapper-max-width, 85rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  position: relative;
}
```

