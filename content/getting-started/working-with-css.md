---
title: "Working with CSS"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 2
---

If you plan to customise or build upon *cu.css*, then you will find it much easier to work with the unminified css found in `public/css/main.css`. 

You will find configurations at the top of the file, which can be updated to customise the theme of *cu.css*. This includes [custom webfonts](#updating-fonts), Utopia fluid [type and space](#type-and-space) scales, colors and other [theming](#theming) related settings. Most of these configurations consist of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) which you can update based on your design preferences.

If you wish to use *cu.css* without modification, then working with the minified CSS found in `public/css/main.min.css` will ensure the smallest file size.