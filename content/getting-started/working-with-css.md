---
title: "Working with CSS"
date: 2023-07-11T16:42:27+01:00
draft: false
weight: 2
---

If you plan to customise or build upon *cu.css*, then you will find it much easier to work with the unminified css found in `public/css/main.css`. Otherwise, working with `public/css/main.min.css` will ensure the smallest file size.


The stylesheets in `public/css` contain the various configurations for fonts, customising the theme of *cu.css*, and managing fluid type and space scales. Most of these configurations consist of CSS custom properties.

### Updating fonts

```
/* 
Google fonts with subsetting via Google Webfonts Helper
@link https://gwfh.mranftl.com/fonts/inter?subsets=latin 
*/
@font-face {
  font-display: swap;
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/inter-v12-latin-regular.woff2") format("woff2"), url("../fonts/inter-v12-latin-regular.woff") format("woff");
  /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }

@font-face {
  font-display: swap;
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url("../fonts/inter-v12-latin-700.woff2") format("woff2"), url("../fonts/inter-v12-latin-700.woff") format("woff");
  /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }
```

### Customising the theme

```
/* 
Global theme tokens
*/
:root {
  /* Typography */
  --font-base: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-display: var(--font-base);
  --font-accent: 'Menlo', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', 'Droid Sans Mono', 'Source Code Pro', 'Courier New', monospace;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --line-height-compact: 1.2;
  --line-height-base: 1.5;
  --line-height-loose: 1.7;
  --width-compact: 35ch;
  --width-longform: 65ch;
  --tracking: -0.05ch;
  --tracking-s: -0.05ch;
  /* 
  Colors created with Utopia Kickstarter project 
  @link https://www.figma.com/community/file/1122903924123950023
  */
  --color-text: #1D1D1D;
  --color-text-mod-1: #494949;
  --color-text-mod-2: #616161;
  --color-bg: #ffffff;
  --color-bg-mod-1:#F8F8F8;
  --color-bg-mod-2: #EDEDED;
  --color-border: #1D1D1D;
  --color-brand: #4f29f0;
  --color-accent: #9F2C5E;
  --color-highlight: #eefbc1;
  
  @media (prefers-color-scheme: dark) {
    /* 
      If theme doesn’t require a dark mode then remove this media query altogether
    */
    --color-text: #CED3E8;
    --color-text-mod-1: #C4CAE3;
    --color-text-mod-2: #8995C8;
    --color-bg: #0D101A;
    --color-bg-mod-1:#121626;
    --color-bg-mod-2: #212845;
    --color-border: #CED3E8;
    --color-brand: #a08aff;
    --color-accent: #FF70AE;
  }

  /* Grid */
  --gutter: var(--space-s-m);
  /* Effects */
  --border-radius: 0; // Set a rem value to add border radius to buttons, form elements, cards, callouts and accordians. 
  --shadow: 0px 3px 7px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.025);
}
```

### Choosing a fluid type scale

```
/* 
Utopia fluid type

@link https://utopia.fyi/type/calculator?c=320,16,1.2,1240,20,1.25,4,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,NaN 
*/
:root {
  --step--1: clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem);
  --step-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
  --step-1: clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem);
  --step-2: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
  --step-3: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
  --step-4: clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem);
}
```

### Choosing a fluid space scale

```
/* 
Utopia fluid space

@link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 
*/
:root {
  --space-3xs: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);
  --space-2xs: clamp(0.50rem, calc(0.46rem + 0.22vw), 0.63rem);
  --space-xs: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);
  --space-s: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
  --space-m: clamp(1.50rem, calc(1.37rem + 0.65vw), 1.88rem);
  --space-l: clamp(2.00rem, calc(1.83rem + 0.87vw), 2.50rem);
  --space-xl: clamp(3.00rem, calc(2.74rem + 1.30vw), 3.75rem);
  --space-2xl: clamp(4.00rem, calc(3.65rem + 1.74vw), 5.00rem);
  --space-3xl: clamp(6.00rem, calc(5.48rem + 2.61vw), 7.50rem);
  /* One-up pairs */
  --space-3xs-2xs: clamp(0.25rem, calc(0.12rem + 0.65vw), 0.63rem);
  --space-2xs-xs: clamp(0.50rem, calc(0.35rem + 0.76vw), 0.94rem);
  --space-xs-s: clamp(0.75rem, calc(0.58rem + 0.87vw), 1.25rem);
  --space-s-m: clamp(1.00rem, calc(0.70rem + 1.52vw), 1.88rem);
  --space-m-l: clamp(1.50rem, calc(1.15rem + 1.74vw), 2.50rem);
  --space-l-xl: clamp(2.00rem, calc(1.39rem + 3.04vw), 3.75rem);
  --space-xl-2xl: clamp(3.00rem, calc(2.30rem + 3.48vw), 5.00rem);
  --space-2xl-3xl: clamp(4.00rem, calc(2.78rem + 6.09vw), 7.50rem);
  /* Custom pairs */
  --space-s-l: clamp(1.00rem, calc(0.48rem + 2.61vw), 2.50rem); 
}

```