---
title: 'Images'
weight: 10
---

Use the `<img>` element in the usual way. Images have `max-width: 100%` applied, ensuring they fill the entire width of parent element, as we’ve come to expect.

<img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" loading="lazy" />

```
<img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" />
```

To give your image a caption, place your `<img>` inside a `<figure>` and use `<figcaption>` for the caption. 

<figure>
  <img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" loading="lazy" />
  <figcaption>Photo by <a href="https://unsplash.com/@sushioutlaw">Brian McGowan</a> on Unsplash.
</figcaption>
</figure>

```
<figure>
  <img src="/img/brian-mcgowan-HiftPDiIVTY-unsplash.jpg" alt="" />
  <figcaption>
    Photo by <a href="https://unsplash.com/@sushioutlaw">Brian McGowan</a> on Unsplash.
  </figcaption>
</figure>
```