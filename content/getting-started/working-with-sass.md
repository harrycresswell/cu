---
title: "Working with SASS"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 3
---

You can find the Sass files for *cu.css* inside the `assets/scss` directory.

### File structure

- The `abstracts` directory contains the project configuration: 
  - @font-face declarations for including custom fonts in the project.
  - CSS custom properties for theming.
  - CSS custom properties for Utopia fluid type and space scales.
- The `base` directory contains [global styles](/global-styles/) that style HTML elements, including:
  - A reset file.
  - “Core” global styles.
  - “Non-core” global styles, which you may wish to keep or discard depending on your project requirements.
- The `blocks` directory contains component styles, a.k.a [blocks](/blocks/).
- The `compositions` directory contains flexible layout styles, a.k.a [compositions](/compositions/).
- The `utilities` directory contains [utility](/utilities/) classes.
- The `main.scss`` file pulls all other files together into a single file, ready for transpilation to CSS.