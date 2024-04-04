---
title: Blocks
weight: 50
---

According to [cube.fyi](https://cube.fyi/block.html#block): “**A block is a skeletal component or organisational structure.** To compare it to common user interface elements: it is a card element or a button element.”

Personally, I like to think of Blocks as commonly used design patterns, which global styles, compositions and utilities don’t necessarily account for. For example, there is no pre-existing HTML `<card>` element and although we may be able to create a card using utilities alone, handling this level of complexity with a `.card` block makes life easier.

*cu.css* includes a handful of blocks to get you started. The CSS for which can be found in `assets/scss/blocks`.