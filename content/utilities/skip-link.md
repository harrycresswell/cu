---
title: "Skip link"
date: 2024-01-26T10:19:37Z
draft: false
weight: 7
---

The `.skip-link` utility can be used to create [skip navigation links](https://webaim.org/techniques/skipnav/). These are links that are visually hidden by default and become visible on focus, usually when using the keyboard <kbd>Tab</kbd> button to navigate a website.

```
<a class="skip-link" href="#main-content">Skip to main content</a>
...
<main id="main-content">
    ...
</main>
```

Useful if, for example, you want to offer your website visitors the option to skip the navigation and head straight to your main page content without the need to tab through every link in your navigation. 
