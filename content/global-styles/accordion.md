---
title: 'Accordions'
weight: 7
---

Create accordions by grouping multiple [disclosure widgets](#disclosure-widgets) together.  

<div role="group" aria-labelledby="accordion-faq">
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
<div role="group" aria-labelledby="accordion-faq">
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

The example above exposes the disclosure widgets as a _named group_ to communicate their semantic relationship to assistive technologies. This is done by applying the ARIA `group` role to the container, then using `aria-labelledby` to reference a [hidden](#visibility) name. 

To include your accordion in the document outline, expose your widgets as a landmark either by using the ARIA `region` role, or by giving the `<section>` element an accessible name. In this case, you’ll most likely want to use a visible heading.

```
<section aria-labelledby="accordion-faq">
  <h2 id="accordion-faq">Frequently Asked Questions</h2>
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
</section>
```


As with single discloure widgets, you can use `data-variant="fancy"` to hide default `::marker` and style accordions with a fancy chevron, positioned on the far right of the `<summary>` text.

<div role="group" aria-labelledby="accordion-faq-fancy">
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
<div role="group" aria-labelledby="accordion-faq">
  <span id="accordion-faq" hidden>Frequently Asked Questions</span>
  <details data-variant="fancy">
    <summary>Do you ship internationally?</summary>
    <p>Unfortunately, we only ship domestically at this time, however we hope to ship internationally in the not too distant future.</p>
  </details>
  <details data-variant="fancy">
    <summary>What’s your returns policy?</summary>
    <p>Please return unworn items within 30 days of purchase.</p>
  </details data-variant="fancy">
  <details>
    <summary>Which credit cards do you accept?</summary>
    <p>We accept Visa, Mastercard and Maestro credit and debit cards, we are also able to accept payment through PayPal.</p>
  </details>
</div>
```

Use a `name` attribute with a matching value on each `<details>` element to create an exclusive accordion. This will ensure only one widget expands at any one time.

<div role="group" aria-labelledby="accordion-faq-exclusive">
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
<div role="group" aria-labelledby="accordion-faq-exclusive">
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