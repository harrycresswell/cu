---
title: "Cluster"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 2
---

<section class="region flow">

*Cluster* creates flex items which cluster inline, until space no longer permits. At this point, items begin to wrap and display in block. The width of an item is determined by its content.

This layout is handy for navigation links, breadcrumbs, etc. Use it by adding the `.cluster` class to an element with nested children.

<figure>
  <div class="demo | cluster">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  <figcaption>Cluster will cluster items inline while space permits</figcaption>
</figure>

```
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-size-1));
  justify-content: var(--cluster-horizontal-alignment, flex-start);
  align-items: var(--cluster-vertical-alignment, center);
}
```

</section>