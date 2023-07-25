---
title: "Repel"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 3
---


<section class="region flow">

*Repel* adds as much inline space as possibe between two grid items, so that 100% of the inline space has been filled. When space doesn’t permit, items will wrap, appearing as block elements. 

Add the `.repel` class to site headers, site footers or anywhere you want to push two items away from each other.

<figure>
  <div class="demo | repel">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
  </div>
  <figcaption>Repel quite literally repels two items from one another</figcaption>
</figure>

```
.repel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: var(--repel-vertical-alignment, center);
  gap: var(--gutter, var(--space-s-l));
}

.repel[data-nowrap] {
  flex-wrap: nowrap;
}
```

</section>
