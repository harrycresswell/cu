---
title: Global styles
weight: 20
---

*cu.css* aims to **broadly style as much as possible at a global level**. This is done by applying default styles directly to native HTML elements, an approach  often referred to as creating *base* or *global styles*. 

The result of creating global styles is HTML that looks great without any additional classes. By leaning heavily on [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) – two core features of CSS — we are styling as much as possible, using as little CSS as possible.

If you’re familiar with classless CSS frameworks, like [Water.CSS](https://watercss.kognise.dev/), [Concrete.css](https://concrete.style/) or [Simple.css](https://simplecss.org/) (a big inspiration for this project), then this part of *cu.css* is exactly that.

In *cu.css*, global styles can be found in the `assets/scss/base` folder. 

Most projects will likely require both `assets/scss/base/global.scss` and `assets/scss/base/reset.scss`, however you may prefer to remove other partials from your project, depending on your  requirements.


<!-- *cu.css*, like CUBE CSS, aims to **broadly style as much as possible at a global level**, then let [the cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) – two core features of CSS — do the heavy lifting.

This is done by styling [Type Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#types_of_selectors) to create a set of base a.k.a [global styles](/docs/global/) for native HTML elements. The result of which is HTML that looks great, without any additional classes.


Global styles are default styles applied directly to HTML elements. This means HTML looks great without any additional classes.

With CUBE CSS, we embrace the cascade and inheritance to style as much as possible at a high level. This means that when nothing but your global styles make it to the browser, the page will still look great. It’s progressive enhancement in action and enables us to write as little CSS as possible. -->