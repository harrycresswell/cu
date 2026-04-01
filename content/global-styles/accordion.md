---
title: 'Accordions'
weight: 6
---

Create accordions by grouping multiple disclosure widgets (`<details>` and `<summary>` elements) inside a `<div>` with the ARIA `group` role applied. 

<div role="group" aria-labeledby="accordion-faq">
  <span id="accordion-faq" hidden>Frequently Asked Questions</span>
  <details>
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
  </details>
  <details>
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details>
  <details>
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>

```
<div role="group" aria-labeledby="accordion-faq">
  <span id="accordion-faq" hidden>Frequently Asked Questions</span>
  <details>
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
  </details>
  <details>
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details>
  <details>
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>
```

Add `data-variant="fancy"` to hide default `::marker` and enhance accordions with fancy “more” and “less” arrows, positioned on the far right of the `<summary>` text.

<div role="group" aria-labeledby="accordion-faq-fancy">
  <span id="accordion-faq-fancy" hidden>Frequently Asked Questions</span>
  <details data-variant="fancy">
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>  
  </details>
  <details data-variant="fancy">
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details>
  <details data-variant="fancy">
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>

```
<details data-variant="fancy">
  <summary>Do you ship internationally?</summary>
  <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
</details>
```

Use a `name` attribute with a matching value on each `<details>` element to create an exclusive accordions. This will ensure only one widget can be expanded at any one time.

<div role="group" aria-labeledby="accordion-faq-exclusive">
  <span id="accordion-faq-exclusive" hidden>Frequently Asked Questions</span>
  <details name="accordion-exclusive">
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
  </details>
  <details name="accordion-exclusive">
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details>
  <details name="accordion-exclusive">
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>

```
<div role="group" aria-labeledby="accordion-faq-exclusive">
  <span id="accordion-faq-exclusive" hidden>Frequently Asked Questions</span>
  <details name="accordion-exclusive">
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
  </details>
  <details name="accordion-exclusive">
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details>
  <details name="accordion-exclusive">
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>
```

Be mindful of the various [accessibility challenges of exclusive accordions](https://yatil.net/blog/exclusive-accordions) before use them.