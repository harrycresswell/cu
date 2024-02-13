---
title: "Switcher"
date: 2024-02-13T11:53:42Z
draft: false
weight: 6
---

Switcher can be used to switch directly between a horizontal and vertical layout. 

Useful where each item should be considered equal to one another. For example, when displaying content in a number list of steps or showing product benefits.

To create a Switcher, add the `.switcher` class to a parent element containing any number of child elements.

Switcher will display up to 4 items next to each other while horizontal space permits.

<figure>
  <div class="demo | switcher">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
  <figcaption>Switcher display up to 4 items next to each other while horizontal space permits.</figcaption>
</figure>

With more than 4 items, switcher will stack all items vertically.

<figure>
  <div class="demo | switcher">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
  </div>
  <figcaption>With more than 4 items, switcher will stack all items vertically.
</figcaption>
</figure>

Use `--switcher-target-container-width` to define how wide the container needs to be for items to sit inline.

Control the space between each item by setting a value for `--gutter`.

Set how items should align vertically using `--switcher-vertical-alignment` with any flexbox alignment value. 

