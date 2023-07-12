---
title: "Region"
date: 2023-07-12T12:58:48+01:00
draft: false
weight: 2
---

```
/*
REGION 
Add consistent vertical padding to create regions of content 
Can either be configured by setting --region-space or use a default from the space scale
*/
.region {
 padding-top: var(--region-space, var(--space-l-xl));
 padding-bottom: var(--region-space, var(--space-l-xl));
}
```