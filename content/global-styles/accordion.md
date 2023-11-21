---
title: 'Accordions'
weight: 6
---

Use the `<details>` and `<summary>` elements to create accordions.

<details>
  <summary>Do you ship internationally?</summary>
  <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
</details>

```
<details>
  <summary>Do you ship internationally?</summary>
  <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
</details>
```

Add `data-variant="fancy"` to hide default `::marker` and enhance accordions with fancy “more” and “less” arrows, positioned on the far right of the `<summary>` text.

<details data-variant="fancy">
  <summary>Do you ship internationally?</summary>
  <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
</details>

```
<details data-variant="fancy">
  <summary>Do you ship internationally?</summary>
  <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
</details>
```