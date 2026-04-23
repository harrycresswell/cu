---
title: 'Disclosure widgets'
weight: 6
---

Disclosure widgets can be used to reveal and hide content. Create them using the `<details>` and `<summary>` elements.

<details>
  <summary>Disclosure control</summary>
  <p>Disclosed content</p>
</details>

```
<details>
  <summary>Disclosure control</summary>
  <p>Disclosed content</p>
</details>
```

Add `data-variant="fancy"` to hide default `::marker` and style disclosure widgets with fancy chevron, positioned to the far right of the `<summary>` text.

<details data-variant="fancy">
  <summary>Disclosure control</summary>
  <p>Disclosed content</p>
</details>

```
<details data-variant="fancy">
  <summary>Disclosure control</summary>
  <p>Disclosed content</p>
</details>
```