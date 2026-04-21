---
title: Updating fonts
weight: 4
---

The default font used in *cu.css* is [Inter](https://rsms.me/inter/) by Rasmus Andersson. The font has been subset and the `@font-face` code generated using [Google Webfonts Helper](https://gwfh.mranftl.com/fonts). This makes it easier to self-host Google Fonts and optimse for performance.

You can find the code inside `scss/abstracts/_fonts.scss`. 

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

You may wish to replace the generated code with a different font using Google Webfonts Helper, or remove this code entirely and use a [system font stack](https://modernfontstacks.com/) instead.

When replacing the default fonts, you will also need to update the typography related custom properties found inside `scss/abstracts/_theme.scss`. For example, `--font-base`, and potentially `--font-display` and `--font-accent`.