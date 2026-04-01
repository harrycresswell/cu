---
title: Lists
weight: 2
---

Create unordered lists using the `ul` element:

- Unordered list item
- Unordered list item

```
<ul>
  <li>Unordered list item</li>
  <li>Unordered list item</li>
</ul>
```

Create ordered lists using the `ol` element:

1. Ordered list item
2. Ordered list item

```
<ol>
  <li>Unordered list item</li>
  <li>Unordered list item</li>
</ol>
```

Apply the ARIA `list` role to remove markers (bullets, numbers, etc) from list items without affecting list semantics. This will ensure assistive technologies such as screen readers are still able to identify list items. Scott O’Hara writes about why this is important in ["Fixing" Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

```
<ul role="list">
  <li>Unordered list item</li>
  <li>Unordered list item</li>
</ul>
```

This technique is useful when creating navigation items or a [list of cards](/blocks/#card), for example. Or, indeed, any other list that you don’t need markers for, and wish to style in a way that doesn’t represent a typical list of items.