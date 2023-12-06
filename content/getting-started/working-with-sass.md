---
title: "Working with SASS"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 3
---

You can find the Sass files for *cu.css* inside the `assets/scss` directory. I’ve intentionally used SASS with a very light touch, mostly just to split the CSS into granular partial files.

This makes it super easy to ditch certain styles you have no use for in your project. For example, your project may not use cards, so you might delete the `blocks/_card.scss` partial file entirely.

### File structure

Inside `assets/scss` you will find 5 directories and a bunch of files.

- The `abstracts` directory contains the project configurations outlined above: 
  - `@font-face` declarations for including custom fonts in the project.
  - CSS custom properties for theming.
  - CSS custom properties for [Utopia](https://utopia.fyi/) fluid type and space scales.
- The `base` directory contains [global styles](/global-styles/) that style HTML elements, including:
  - A reset file.
  - “Core” global styles.
  - “Non-core” global styles, which you may wish to keep or discard depending on your project requirements.
- The `blocks` directory contains component styles, a.k.a [blocks](/blocks/).
- The `compositions` directory contains flexible layout styles, a.k.a [compositions](/compositions/).
- The `utilities` directory contains [utility](/utilities/) classes.
- The `main.scss` file pulls all other files together into a single file, ready for transpilation to CSS.