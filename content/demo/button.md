---
title: 'Buttons'
weight: 8
---

Use the `<button>` element to create interactive buttons. To style a button with a secondary colour, use the data attribute `data-style="secondary"`. For more on this approach see [Exception’s in Cube CSS](https://cube.fyi/exception.html). 

<div class="flow" style="--flow-space: 1rem;">
  <button type="submit" value="Submit">Submit</button>
  <button type="submit" data-style="secondary" value="Clear">Clear</button>
  <button type="submit" disabled="">Disabled</button>
</div>

```
<button type="submit" value="Submit">Submit</button>
<button type="submit" data-style="secondary" value="Clear">Clear</button>
```

Similar to with form elements, you can also use the `w-full` utility class to make a button fill the full width of its container.

<div class="flow">
<button class="w-full" type="submit" value="Submit">Sign up</button>
</div>

```
<button class="w-full" type="submit" value="Submit">Sign up</button>
```
