---
title: Theming
weight: 6
---

Assuming you have already configured custom fonts, as well as type and space scales, head to `scss/abstracts/_theme.scss` to customise the theme of *cu.css* using CSS Custom Properties. Typography, color (light and dark mode), grid gutter, border radius etc, are all managed here. 

These custom properties are used throughout the boilerplate, cascading through the entire CSS, so any changes you make here will have a wide reaching impact.

### Primitive vs semantic tokens

*cu.css* adopts a two-layered approach to theming. This is done by borrowing the concept of *primitive* and *semantic* design tokens from the world of design systems.

Primitive tokens store raw values and generally aren’t used to author styles. Their primary purpose is to construct semantic tokens. In *cu.css*, the custom properties found inside `_type.scss` are considered primitive tokens. As are the first block of color tokens found inside `_theme.scss`.

As the name suggests, semantic tokens convey meaning and purpose. They often consume primitive tokens and describe how or where the token should be used when authoring styles. The custom properties found inside `_space.scss` are considered semantic tokens. As are the second block of color tokens found inside `_theme.scss`, as well as the typography and UI related tokens.

I’ve purposely kept the naming of semantic tokens quite general to make sure they are easy to use in a variety of situations when extending existing styles. For example, you will find `--font-size-2xl` rather than `--heading-level-1`, as it’s more widely applicable. I appreciate the difference between primitive and semantic tokens may seem negligable.


### Customising the theme

First update the color primitives based on your design preferences.

```
:root {
  /* 
  Color primitive tokens (not to be used in CSS styles)
  Created with Utopia Kickstarter project 
  @link https://www.figma.com/community/file/1122903924123950023
  */
  --color-dark: #0d101c;
  --color-dark-mod-1: #14182b;
  --color-dark-mod-2: #1b2036;
  --color-dark-mod-3: #676972;
  --color-light: #FFFFFF;
  --color-light-mod-1: #f8f8f8;
  --color-light-mod-2: #ededed;
  --color-light-mod-3: #d1d5e9;
  --color-light-mod-4: #c4cae3;
  --color-light-mod-5: #a2a9d8;
  --color-primary: #4f29f0;
  --color-primary-tint: #a08aff;
  --color-secondary: #9f2c5e;
  --color-secondary-tint: #FF70AE;
  --color-tertiary: #ddf87f;
  --color-tertiary-tint: #eefbc1;
}
```

Then update the semantic tokens for typography and UI.

```
:root {
 /* Typography semantic tokens */
  --font-base: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-display: var(--font-base);
  --font-accent: 'Menlo', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', 'Courier New', monospace;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --font-size-base: var(--step-0);
  --font-size-lede: var(--step-1);
  --font-size-meta: var(--step--1);
  --font-size-2xl: var(--step-4);
  --font-size-xl: var(--step-3);
  --font-size-l: var(--step-2);
  --font-size-m: var(--step-1);
  --font-size-s: var(--step-0);
  --font-size-xs: var(--step--1);
  --line-height-flat: 1;
  --line-height-compact: 1.2;
  --line-height-base: 1.5;
  --line-height-loose: 1.7;
  --measure-compact: 35ch;
  --measure-longform: 65ch;
  --tracking: -0.04ch;
  --tracking-compact: -0.05ch;
  --text-decoration-color: currentColor;
  --text-decoration-line: underline;
  --text-decoration-style: solid;
  --text-decoration-thickness: 2px;
  
  /* UI semantic tokens */
  --gutter: var(--space-s-m);
  --focus-ring-width: 2px;
  --focus-ring-color: currentColor;
  --focus-ring-offset: 2px;
  --focus-ring-style: dotted;
  // Use stroke tokens for borders, outlines, SVG paths etc
  --stroke-style: solid;
  --stroke-width: .1rem;
  --stroke-color: var(--color-border, currentColor);
  --radius: 0; // Set a rem value to add border radius to buttons, form elements, callouts and accordians. 
  --shadow: 0px 3px 7px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.025);
}
```

### Dark mode

You’ll find the user-preference dark mode configuration at the bottom of the `scss/abstracts/_theme.scss` file. 

Here you’ll find semantic color tokens referencing the primitive color tokens found at the top of the file. If you wish to customise the dark mode colors, then you will need to configure the primitive color tokens first.

```
/* 
DARK MODE 
If theme doesn’t require system preferences dark mode then remove everything below.
*/

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: var(--color-light-mod-3); 
    --color-text-subtle: var(--color-light-mod-5);
    --color-text-invert: var(--color-dark);
    --color-canvas: var(--color-dark);
    --color-surface: var(--color-dark-mod-1);
    --color-surface-raised: var(--color-dark-mod-2);
    --color-border: var(--color-light-mod-3);
    --color-brand: var(--color-primary-tint);
    --color-accent: var(--color-secondary-tint);
    --color-highlight: var(--color-tertiary-tint);
    --text-decoration-color: currentColor;
    --focus-ring-color: currentColor;
    --stroke-color: currentColor;  
  }
}
```

If your project doesn’t require a dark mode, then remove this code entirely.
