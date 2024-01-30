---
title: "Sidebar"
date: 2024-01-30T14:46:29Z
draft: false
weight: 4
---

*Sidebar* creates a classic sidebar layout, where two elements appear side-by-side, when space permits. The first of the two adjacent elements has a fixed width – the sidebar, itself – and the second takes up the rest of the available space.

To use *Sidebar*, add the `.sidebar` class to a parent element containing two child elements.  

You can learn more about this composition in [Every Layout](https://every-layout.dev/layouts/sidebar/).

<figure>
  <div class="demo | sidebar">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
  </div>
  <figcaption>Sidebar will create a classic sidebar layout while space permits</figcaption>
</figure>

```
.sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, var(--space-s-l));
}

.sidebar:not([data-direction]) > :first-child {
  flex-basis: var(--sidebar-target-width, 20rem);
  flex-grow: 1;
}

.sidebar:not([data-direction]) > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: var(--sidebar-content-min-width, 50%);
}
```

Use the `data-direction="rtl"` exception to flip the orientation of the sidebar.


<figure>
  <div class="demo | sidebar" data-direction="rtl">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
  </div>
  <figcaption>Sidebar with orientation flipped</figcaption>
</figure>

```
<div class="sidebar" data-direction="rtl">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```

Use the `data-variant="sticky"` exception to create a sticky sidebar when space permits.

```
<div class="sidebar" data-variant="sticky">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```

A good example of sidebar in use, and indeed the sticky exception, is here in navigation and content of the *cu.css* docs.