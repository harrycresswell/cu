---
title: "Grid"
date: 2023-07-11T16:42:51+01:00
draft: false
weight: 1
---

Grid comes in three flavours: *Two-column*, *Three-column* and *Masonry* layout.

### Two-column layout

The *two-column* layout positions grid items side-by-side when space permits, so that items proportionately share the available space. 

Use the layout by adding `data-layout="50-50"` to any element with the `.grid` class applied.

<figure>
  <div class="demo | grid" data-layout="50-50">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
  <figcaption>Two column when space permits</figcaption>
</figure>

```
/* Two column when space permits */
.grid[data-layout='50-50'] {
  --grid-placement: auto-fit;
  --grid-min-item-size: clamp(16rem, 50vw, 26rem);
}
```

### Three-column layout

The *three-column* layout positions grid items in three columns when space permits, so that items proportionately share the available space. 

Use the layout by adding `data-layout="33x3"` to any element with the `.grid` class applied.

<figure>
  <div class="demo | grid" data-layout="33x3">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  <figcaption>Three column when space permits</figcaption>
</figure>

```
/* Three column when space permits */
.grid[data-layout='33x3'] {
  --grid-placement: auto-fit;
  --grid-min-item-size: clamp(16rem, 33vw, 18rem);
}
```

### Masonry layout

The *masonry layout* removes the extra gap often left between rows by grid items of varying size. Use the layout by applying `data-rows="masonry"` to any element with the `.grid` class applied.


<aside class="callout" data-variant="brand">Currently the feature is only implemented in Firefox, and can be enabled by setting the flag <code>layout.css.grid-template-masonry-value.enabled</code> to <code>true</code> in <code>about:config</code>.</aside>

<figure>
  <div class="demo | grid" data-rows="masonry">
    <div class="item">Item 1</div>
    <div class="item" style="height: 6rem;">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item" style="height: 8rem;">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  <figcaption>Masonry layout (will work one day in all browsers)</figcaption>
</figure>

```
/* Masonry layout (will work one day in all browsers) */
.grid[data-rows='masonry'] {
  grid-template-rows: masonry;
  align-items: start;
}
```