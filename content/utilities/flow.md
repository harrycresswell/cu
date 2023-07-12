---
title: "Flow"
date: 2023-07-12T12:58:27+01:00
draft: false
weight: 3
---

```
/*
FLOW
Applies a margin to sibling elements based on a --flow-space custom property.
@link: See The Stack in Every Layout https://every-layout.dev/layouts/stack/
@link: https://piccalil.li/tutorial/improve-the-readability-of-the-content-on-your-website#heading-the-flow-utility
@link: https://piccalil.li/quick-tip/flow-utility/
*/
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```