---
title: "Frame"
date: 2024-08-14T11:57:01+01:00
draft: false
weight: 7
---

*Frame* allows you to control the aspect ratio of a child element. Frame is mostly useful for cropping media (videos and images) to a desired aspect ratio.

By default, *Frame* uses an aspect ratio of 16/9, however you can change this by setting a value for `--n`, (the numerator, or n), which represents the width, and `--d` (the denominator, or d), which represents the height.

<figure>
  <div class="demo | frame">
    <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
  </div>
  <figcaption>By default, Frame will crop content to an aspect ratio of 16/9.</figcaption>
</figure>

```
<div class="frame">
  <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
</div>
```

<figure>
  <div class="demo | frame" style="--n: 1; --d:1;">
    <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
  </div>
  <figcaption>The default aspect ratio can be changed by updating the values of `--n` and `--d`.</figcaption>
</figure>

```
<div class="frame" style="--n: 1; --d:1;">
  <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
</div>
```