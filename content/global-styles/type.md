---
title: 'Typography'
weight: 1
slug: 'typography'
---

All typography is fluid responsive, set using Utopia’s [Fluid Type Calculator](https://utopia.fyi/type/calculator), which makes use of the [CSS Clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) function. Choose your min and max font size, then select a type scale and Utopia will generate the code.

### Headings

All six [heading level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) are available to use.

# h1 Heading 1
## h2 Heading 2
### h3 Heading 3
#### h4 Heading 4
##### h5 Heading 5
###### h6 Heading 6

```
<h1>h1 Heading 1</h1>
<h2>h2 Heading 2</h2>
<h3>h3 Heading 3</h3>
<h4>h4 Heading 4</h4>
<h5>h5 Heading 5</h5>
<h6>h6 Heading 6</h6>
```

### Semantic heading classes

All 6 headings sizes can also be applied as classes. This is important for when you wish to keep the semantic order of headings, but wish to style them in different sizes. For example, if the correct order of a heading means it should be an `h2`, but you would like it styled as an `h1`, you can add `class="h1"` to your `h2` element, and so on.

```
<h2 class="h1">This is a h2 heading styled as an h1 heading</h2>
```

### Text basics

There are various HTML elements you can use to format inline text in a bunch of different ways:

- `<strong>` to create **Bold** text.
- `<em>` to create *emphasised* text.
- `<u>` to <u>underline</u> text.
- `<small>` to make <small>small</small> text.
- `<code>` to create inline code examples.
- `<mark>` element to <mark>highlight text</mark>.
- `<kbd>` for keyboard commands; <kbd>Ctrl</kbd> + <kbd>V</kbd>.
- `<del>`  to create <del>text with a strikethrough</del>