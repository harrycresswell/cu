---
title: CUBE CSS in cu.css
weight: 2
---

*cu.css*, like CUBE CSS, aims to **broadly style as much as possible at a global level**, then let [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) – two core features of CSS – do the heavy lifting. This is done by styling native HTML elements to create a set of base (or global) styles, which results in HTML that looks great, without any additional classes.


Building on these global styles, *cu.css* takes **Compositions, Utilities, Blocks and Exceptions** (the core concepts of CUBE CSS), to create a consistent approach to structuring CSS. In *cu.css*, you will find a handful of useful [Compositions](/docs/compositions/), [Utilities](/docs/utilities/) and [Blocks](/docs/blocks/) to help kickstart your projects. Exceptions, which deal with state or layout changes (also from CUBE CSS), can be found extending Compositions and Blocks.

*cu.css* doesn’t assume you are working with a design system. Therefore, there is no abstraction of design tokens away from CSS, as you might find in a [token-based CSS](https://cube.fyi/utility.html#token-based-css) workflow. This prevents the need for an additional data file – JSON or similar – used to store tokens, and a tool to extract these tokens into useable CSS. In _cu.css_, tokens instead take the form of regular CSS Custom Properties, which remain tightly coupled with the CSS and permeate through it.

In a similar fashion, _cu.css_ doesn’t make use of any third-party tooling to generate utility classes. Instead, utility classes should be created by hand, as and when they are required. 

These opinionated decisions help to keep _cu.css_ simple, accessible to all and intuitive to work with. As well as lightweight and dependency free. 

Where [cube.fyi](https://cube.fyi/) teaches you the methodology, *cu.css* puts it into practice.