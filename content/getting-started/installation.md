---
title: "Installation"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 1
---


There are currently two different ways to install *cu.css* in your project, depending on whether you prefer to work with CSS or SASS. 

### Installing CSS

Follow these steps if you plan to work with CSS:

1. [Download the full project from Github](https://github.com/harrycresswell/cu/archive/refs/heads/master.zip).
2. Copy `main.css` or `main.min.css` from the [public/css]() folder into your project.
3. Copy the [fonts directory](https://github.com/harrycresswell/cu/tree/7f37e74f462eb80f8804ae3969a7fa46bd6739c7/static/fonts) into your project.

The final step is to link to your stylesheet file inside the `<head>` of your pages:

```
<link rel="stylesheet" href="main.min.css" media="screen">
```

<!-- Include via a CDN.

Paste the following into the `<head>` of your HTML:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cu.css@2/out/cu.css">
``` -->


### Installing SASS

Follow these steps if you plan to work with the SASS:

1. [Download the full project from Github](https://github.com/harrycresswell/cu/archive/refs/heads/master.zip).
2. Copy the [scss directory](https://github.com/harrycresswell/cu/tree/2028d2df88602bc79f67937a2f323f5c806e7e3b/assets/scss) into your project.
3. Copy the [fonts directory](https://github.com/harrycresswell/cu/tree/2028d2df88602bc79f67937a2f323f5c806e7e3b/static/fonts) into your project.

You will also need a build step to transpile Sass to CSS. Those working with Hugo can refer to the [Hugo Docs](https://gohugo.io/hugo-pipes/transpile-sass-to-css/) or the [cu.css repository](https://github.com/harrycresswell/cu/) to learn how this works.

