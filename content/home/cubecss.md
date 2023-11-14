---
title: CUBE CSS in cu.css
weight: 1
---

From [CUBE CSS](https://cube.fyi/), *cu.css* takes the concepts of **Compositions, Utilities, Blocks and Exceptions**, to create a consistent approach to structuring CSS.

*cu.css*, like CUBE CSS, aims to **broadly style as much as possible at a global level**, then let [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), two core features of CSS, do the heavy lifting. This is done by styling [Type Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#types_of_selectors) to create a set of [“global” styles](/docs/global/). The result of which is HTML that look great, without any additional classes. 

*cu.css* includes a handful of [Compositions](/docs/compositions/). These classes create flexible layout systems, helping to bring structure to any content. [Utilities](/docs/utilities/) help to solve common yet specific problems found throughout a project. [Blocks](/docs/blocks/) are essentially components – visually identifable elements and design patterns. Exceptions deal with state or layout changes, you will find them closely coupled with Compositions and Blocks.

*cu.css* doesn’t assume you are working with a design system. So there’s no abstracting design tokens away from CSS, which you may understand as [token-based CSS](https://cube.fyi/utility.html#token-based-css). This means there are no data files to worry about with *cu.css*. Instead, tokens take the form of the more familiar CSS Custom Properties, which remain a part of the CSS and permeate through it. Likewise, *cu.css* doesn’t make use of any third-party tooling to generate utility classes. Instead, utility classes  are created by hand, as and when they are required. 

These decisions help to keep *cu.css* simple, accessible and intuitive to work with. And most important of all, dependency free.

If you think of *cu.css* as a practical implementation of [cube.fyi](https://cube.fyi/), you’ll be off to the races.