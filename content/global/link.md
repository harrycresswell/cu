---
title: 'Links'
weight: 9
---

Use the anchor element, a.k.a `<a>` tag to link to different pages

```
<a href="/about">About</a>
```

Links look [like this](/), by default. 

But you can also use use the data attribute `data-variant="naked"` to make them look like text.

```
<a href="/" data-variant="naked">A naked link</a>
```

An example of `data-variant="naked"` being used on links can be seen in the navigation found at the top of each page on this website.

You can also use the `.button` class to style links as buttons.

<a class="button" href="#">A link as a button</a>
<a class="button" data-variant="outline" href="#">A link as a button</a>
<a class="button" role="link" aria-disabled="true">A disabled link as a button</a>

```
<a class="button" href="#">A link styled as a button</a>
<a class="button" data-variant="outline" href="#">A link as a button</a>
<a class="button" role="link" aria-disabled="true">A disabled link as a button</a>
```

Combine this with the `w-full` utility class to make a button styled link fill the full width of it’s container.

<div>
<a class="button w-full" href="#">Link styled as a full-width button</a>
</div>

```
<a class="button w-full" href="#">Link styled as a full-width button</a>
```