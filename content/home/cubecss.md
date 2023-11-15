---
title: CUBE CSS in cu.css
weight: 1
---

*cu.css*, like CUBE CSS, aims to **broadly style as much as possible at a global level**, then let [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), two core features of CSS, do the heavy lifting. This is done by styling [Type Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#types_of_selectors) to create a set of [“global” styles](/docs/global/). The result of which is HTML that look great, without any additional classes.

From [CUBE CSS](https://cube.fyi/), *cu.css* takes the concepts of **Compositions, Utilities, Blocks and Exceptions**, to create a consistent approach to structuring CSS. In *cu.css*, you will find a handful of the most common [Compositions](/docs/compositions/), [Utilities](/docs/utilities/) and [Blocks](/docs/blocks/) to help kickstart your projects. Exceptions, which deal with state or layout changes, can be found extending Compositions and Blocks.

*cu.css* doesn’t assume you are working with a design system, therefore it doesn’t abstract design tokens away from CSS, into a JSON file or similar. An approach often refered to as [token-based CSS](https://cube.fyi/utility.html#token-based-css). In *cu.css*, tokens take the form of CSS Custom Properties, which remain tightly coupled with CSS and permeate through it. Likewise, *cu.css* doesn’t make use of any third-party tooling to generate utility classes. Instead, utility classes  are created by hand, as and when they are required. 

These decisions help to keep *cu.css* simple, accessible and intuitive to work with. And most of all, dependency free. 

Where [cube.fyi](https://cube.fyi/) teaches you the methodology, *cu.css* puts it into practice.