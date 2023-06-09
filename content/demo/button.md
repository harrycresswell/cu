---
title: 'Buttons'
weight: 8
---

Use the `<button>` element to create interactive buttons. To style a button with the outline style, use the data attribute `data-variant="outline"`. For more on this approach see [Exception’s in Cube CSS](https://cube.fyi/exception.html). 

<div class="flow" style="--flow-space: 1rem;">
  <button type="submit" value="Submit">Submit</button>
  <button type="submit" data-variant="outline" value="Clear">Clear</button>
  <button type="submit" disabled="">Disabled</button>
</div>

```
<button type="submit" value="Submit">Submit</button>
<button type="submit" data-variant="outline" value="Clear">Clear</button>
<button type="submit" disabled="">Disabled</button>
```

Just like with form elements, you can also use the `w-full` utility class to make a button fill the full width of its parent container.

<div class="flow">
<button class="w-full" type="submit" value="Submit">Sign up</button>
</div>

```
<button class="w-full" type="submit" value="Submit">Sign up</button>
```

You can also use the `.button` class to style `<a>` elements (or links).

<a class="button" href="#">A link as a button</a>
<a class="button" data-variant="outline" href="#">A link as a button</a>
<a class="button" role="link" aria-disabled="true">A disabled link as a button</a>

```
<a class="button" href="#">A link styled as a button</a>
<a class="button" data-variant="outline" href="#">A link as a button</a>
<a class="button" role="link" aria-disabled="true">A disabled link as a button</a>
```

Inputs with `type="submit"`, `type="reset"` or `type="button"` applied also inherit button styles. Therefore, you can apply the variant style to these elements too.

<input type="submit" />
<input type="submit" data-variant="outline" />

```
<input type="submit" />
<input type="submit" data-variant="outline" />
```