---
title: "Region"
date: 2023-07-12T12:58:48+01:00
draft: false
weight: 2
---

Adds consistent vertical padding to an element to create regions of content. Can either be configured by setting `--region-space` or use a default from a space scale.

<figure>
  <div class="demo | region">
    <div class="padding">Padding</div>
    <div class="container">Content</div>
    <div class="padding">Padding</div>
  </div>
  <figcaption>A region of content with vertical padding visualised in purple</figcaption>
</figure>

```
/*
REGION 
Add consistent vertical padding to create regions of content 
Can either be configured by setting --region-space or use a default from the space scale
@link: https://codepen.io/harrycresswell/pen/bGQmBNL
*/
.region {
 padding-top: var(--region-space, var(--space-l-xl));
 padding-bottom: var(--region-space, var(--space-l-xl));
}
```