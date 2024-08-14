---
title: "Hero"
date: 2023-07-27T17:16:41+01:00
draft: false
weight: 4
---

Use `.hero`, in combination with [region](/utilities#region) and [flow](/utilities#flow), to create a distictive section on pages. You can see `.hero` in action at the top of each page on this website.

<div class="hero | region flow">
  <h1>A modern CSS framework</h1>
  <p>cu.css is built using Cube CSS and Utopia fluid responsive design.</p>
</div>

```
<div class="hero | region flow">
  <h1>Some page title</h1>
  <p>Some page description</p>
</div>
```

Notice pipes are used to [group classes](https://cube.fyi/grouping.html#grouping-order), as seen in the example code above. In this case, a pipe (`|`) seperates the block class `hero` from the utility classes `region` and `flow`. The purpose of this is simply to improve clarity. 
