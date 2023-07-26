---
title: "Wrapper"
date: 2023-07-12T12:59:06+01:00
draft: false
weight: 1
---

Sets a max width, adds a consistent gutter and horizontally centers content.

<figure>
  <div class="demo" style="display: flex;">
    <div class="margin"><mark>Margin</mark></div>
    <div class="padding">Padding</div>
    <div class="container" style="flex: 1; padding: 1rem;">Content</div>
    <div class="padding">Padding</div>
    <div class="margin"><mark>Margin</mark></div>
  </div>
  <figcaption>Wrapper with horizontal padding visualised in purple and margin in green</figcaption>
</figure>

```
/*
WRAPPER
@link: https://piccalil.li/quick-tip/use-css-clamp-to-create-a-more-flexible-wrapper-utility/
*/
.wrapper {
  max-width: var(--wrapper-max-width, 75rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  position: relative;
}
```
