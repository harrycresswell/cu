---
title: "Skip link"
date: 2024-01-26T10:19:37Z
draft: false
weight: 6
---

Apply `.skip-link` to an `<a>` element placed directly before the site `<header>` to create a [skip navigation link](https://webaim.org/techniques/skipnav/).

This gives website visitors the option to skip the navigation and head straight to your main page content without the need to tab through every link in your navigation.

```
<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
  <nav>
    ...
  </nav>
</header>
<main id="main-content">
  ...
</main>
```

The skip link will remain visually hidden until the link receives focus, for example when using the keyboard <kbd>Tab</kbd> button to navigate the page.

Note, you will need to create an anchor link using the `href` attribute, which references an `id` with the same value, that’s attached to `<main>`.