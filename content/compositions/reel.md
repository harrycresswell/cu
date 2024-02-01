---
title: "Reel"
date: 2024-01-31T11:13:58Z
draft: false
---

Real creates a carousel-like layout, where items that exceed the available horizontal space become horizontally scrollable. 

This is a useful pattern for browsing lots of similar content in a limited amount of vertical space. For example, when creating [sausage links](https://btxx.org/posts/hamburger-menu-alternative/) or image galleries.

To create a *Reel*, add the `.reel` class to a parent element containing any number of child elements. 

<figure>
  <div class="demo | reel">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
    <div class="item">Item 7</div>
    <div class="item">Item 8</div>
  </div>
  <figcaption>Default reel – a carousel-like horizontally scrollable layout</figcaption>
</figure>

```
<div class="reel">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
  </div>
```

Use the `data-scroll="snap"` attribute to apply [CSS scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) to your reel items.

<figure>
  <div class="demo | reel" data-scroll="snap">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
    <div class="item">Item 7</div>
    <div class="item">Item 8</div>
    <div class="item">Item 9</div>
    <div class="item">Item 10</div>
    <div class="item">Item 11</div>
    <div class="item">Item 12</div>
  </div>
  <figcaption>Reel with scroll snap applied</figcaption>
</figure>

```
<div class="reel" data-scroll="snap">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
    <div>Item 10</div>
    <div>Item 11</div>
    <div>Item 12</div>
  </div>
```

Use the `data-variant="img"` attribute when creating a reel containing images. This ensures all images maintain their original aspect ratio. By default, the reel height is set to `50vh`, however you can control the height of your reel by setting a custom value for `--reel-height`.

<figure>
  <div class="demo | reel" data-variant="img" style="--reel-height: 60vh;">
    <img src="/img/josue-as-_nprTIIwSk4-unsplash.jpg" alt="" />
    <img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" />
    <img src="/img/christian-crocker-ShY6Jn6n9jQ-unsplash.jpeg" alt="" />
    <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
    <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
  </div>
  <figcaption>Reel with images. Images by <a href="https://unsplash.com/@one_dwigt">Chuck Givens</a>, <a href="https://unsplash.com/@christian_crocker">Christian Croker</a>, <a href="https://unsplash.com/@sushioutlaw">Brian McGowan</a> and <a href="https://unsplash.com/@yehoshuaas">Josué AS</a>.</figcaption>
</figure>

```
<div class="reel" data-variant="img" style="--reel-height: 60vh;">
  <img src="/img/josue-as-_nprTIIwSk4-unsplash.jpg" alt="" />
  <img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" />
  <img src="/img/christian-crocker-ShY6Jn6n9jQ-unsplash.jpeg" alt="" />
  <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
  <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
</div>
```

In the interest of keeping *cu.css* lightweight, Reel uses the native scrollbar. Should you wish to create a custom scrollbar, refer to [Every Layout](https://every-layout.dev/layouts/reel/) to learn more about what’s possible.



