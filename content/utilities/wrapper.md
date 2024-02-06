---
title: "Wrapper"
date: 2023-07-12T12:59:06+01:00
draft: false
weight: 1
---

`.wrapper` horizontally centers content and adds a minimum margin either side to prevent content sitting flush to the parent element.

This is useful for creating site wide content wrappers, or simply centering sections of content, as you see on the [*cu.css* homepage](/).

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
  max-width: var(--wrapper-max-width, 90rem);
  margin-inline: auto;
  padding-inline: var(--gutter);
  position: relative;
}
```

The default max-width of `.wrapper` is set to `90rem`. However, by setting a `--wrapper-max-width` value, you can control the maximum width of an element that has the class applied.

```
<section class="wrapper" style="--wrapper-max-width: 70ch;">
  <div>Some centered content</div>
</section>
```

Similarly, set a value for `--gutter` to control the minimum margin applied either side of an element with `.wrapper` applied.

For those familiar with Every Layout, you may recognise `.wrapper` as the [Center Layout](https://every-layout.dev/layouts/center/).