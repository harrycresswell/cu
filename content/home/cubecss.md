---
title: CUBE CSS in cu.css
weight: 1
---

*cu.css*, like CUBE CSS, aims to **broadly style as much as possible at a global level**, then let [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) – two core features of CSS – do the heavy lifting. This is done by styling [Type Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#types_of_selectors) to create a set of base styles – a.k.a [global styles](/docs/global/) – for native HTML elements. This results in HTML that looks great, without any additional classes.

Building on these base styles, *cu.css* takes **Compositions, Utilities, Blocks and Exceptions**, the core concepts of CUBE CSS, to create a consistent approach to structuring CSS. In *cu.css*, you will find a handful of use [Compositions](/docs/compositions/), [Utilities](/docs/utilities/) and [Blocks](/docs/blocks/) to help kickstart your projects. Exceptions, which deal with state or layout changes, can be found extending Compositions and Blocks.

*cu.css* doesn’t assume you are working with a design system. Therefore there is no abstraction of design tokens away from CSS. This approach is often refered to as [token-based CSS](https://cube.fyi/utility.html#token-based-css) and involves an additional data file – JSON or similar. In *cu.css*, tokens, take the form of CSS Custom Properties, which remain a part of the CSS and permeate through it. 

Likewise, *cu.css* doesn’t make use of any third-party tooling to generate utility classes. Instead, utility classes  are created by hand, as and when they are required. 

These decisions help to keep *cu.css* simple, accessible and intuitive to work with. And perhaps most of all, lightweight and dependency free. 

Where [cube.fyi](https://cube.fyi/) teaches you the methodology, *cu.css* puts it into practice.