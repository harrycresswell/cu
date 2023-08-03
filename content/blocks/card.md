---
title: "Card"
date: 2023-07-27T17:16:37+01:00
draft: false
weight: 3
---

`.card` can be used to distinguish content relating to a specific topic. Optionally include an *image*, *heading*, *paragraph content*, *links* and *buttons*. 

To make the whole card clickable, add an `<a>` element inside a heading element. Both links and buttons found elsewhere in the card will remain clickable.

Use the [Grid](/compositions/#grid) compostition to display multiple cards in columns, as shown below.

<ul role="list" class="grid" data-layout="33x3">
  <li class="card">
    <img src="/img/josue-as-_nprTIIwSk4-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/Millennium_Falcon">Millennium Falcon</a></h3>
      <p>Won by Han Solo from Lando Calrissian in a game of sabacc. Made the infamous Kessel run in slightly over 12 parsecs.</p>
      <p>Photo by <a href="https://unsplash.com/@yehoshuaas">Josué AS</a> on Unsplash.</p>
    </div> 
  </li>
   <li class="card">
    <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/X-wing_fighter">X-wing starfighter</a></h3>
      <p>Used by the Rebel Alliance in their conflict with the Galactic Empire and famously by Luke Skywalker to destroy the Death Star.</p>
      <a href="https://unsplash.com/photos/3bETLGHcAUU" class="button w-full">View photo on Unsplash</a>
    </div>
  </li>
   <li class="card">
    <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/A-wing">A-wing starfighter</a></h3>
      <p>The fastest vessels in the Star Wars canon, with the advantage of being the smallest hyperspace drive-equipped craft.</p>
      <p>Photo by <a href="https://unsplash.com/@one_dwigt">Chuck Givens</a> on Unsplash.</p>
    </div>
  </li>
</ul>

```
<ul role="list" class="grid" data-layout="33x3">
  <li class="card">
    <img src="/img/josue-as-_nprTIIwSk4-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/Millennium_Falcon">Millennium Falcon</a></h3>
      <p>Won by Han Solo from Lando Calrissian in a game of sabacc. Made the infamous Kessel run in slightly over 12 parsecs.</p>
      <p>Photo by <a href="https://unsplash.com/@yehoshuaas">Josué AS</a> on Unsplash.</p>
    </div> 
  </li>
   <li class="card">
    <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/X-wing_fighter">X-wing starfighter</a></h3>
      <p>Used by the Rebel Alliance in their conflict with the Galactic Empire and famously by Luke Skywalker to destroy the Death Star.</p>
      <a href="https://unsplash.com/photos/3bETLGHcAUU" class="button w-full">View photo on Unsplash</a>
    </div>
  </li>
   <li class="card">
    <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/A-wing">A-wing starfighter</a></h3>
      <p>The fastest vessels in the Star Wars canon, with the advantage of being the smallest hyperspace drive-equipped craft.</p>
      <p>Photo by <a href="https://unsplash.com/@one_dwigt">Chuck Givens</a> on Unsplash.</p>
    </div>
  </li>
</ul>
```

To vary the card design you might consider the following tips:

- Omit the image altogether.
- Flip the card layout using the `data-state="reversed"` exception.
- Nest the image inside the `.flow` container to prevent a full bleed image.
- Omit `data-variant="naked"` to use default link style.

<ul role="list" class="grid" data-layout="33x3">
  <li class="card">
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/Millennium_Falcon">Millennium Falcon</a></h3>
      <p>Won by Han Solo from Lando Calrissian in a game of sabacc. Made the infamous Kessel run in slightly over 12 parsecs.</p>
      <p>Photo by <a href="https://unsplash.com/@yehoshuaas">Josué AS</a> on Unsplash.</p>
    </div> 
  </li>
   <li class="card" data-state="reversed">
    <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/X-wing_fighter">X-wing starfighter</a></h3>
      <p>Used by the Rebel Alliance in their conflict with the Galactic Empire and famously by Luke Skywalker to destroy the Death Star.</p>
      <a href="https://unsplash.com/photos/3bETLGHcAUU" class="button w-full">View photo on Unsplash</a>
    </div>
  </li>
   <li class="card">
    <div class="flow">
      <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
      <h3><a href="https://en.wikipedia.org/wiki/A-wing">A-wing starfighter</a></h3>
      <p>The fastest vessels in the Star Wars canon, with the advantage of being the smallest hyperspace drive-equipped craft.</p>
      <p>Photo by <a href="https://unsplash.com/@one_dwigt">Chuck Givens</a> on Unsplash.</p>
    </div>
  </li>
</ul>

```
<ul role="list" class="grid" data-layout="33x3">
  <li class="card">
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/Millennium_Falcon">Millennium Falcon</a></h3>
      <p>Won by Han Solo from Lando Calrissian in a game of sabacc. Made the infamous Kessel run in slightly over 12 parsecs.</p>
      <p>Photo by <a href="https://unsplash.com/@yehoshuaas">Josué AS</a> on Unsplash.</p>
    </div> 
  </li>
   <li class="card" data-state="reversed">
    <img src="/img/brian-mcgowan-3bETLGHcAUU-unsplash.jpg" alt="" />
    <div class="flow">
      <h3><a data-variant="naked" href="https://en.wikipedia.org/wiki/X-wing_fighter">X-wing starfighter</a></h3>
      <p>Used by the Rebel Alliance in their conflict with the Galactic Empire and famously by Luke Skywalker to destroy the Death Star.</p>
      <a href="https://unsplash.com/photos/3bETLGHcAUU" class="button w-full">View photo on Unsplash</a>
    </div>
  </li>
   <li class="card">
    <div class="flow">
      <img src="/img/chuck-givens-02AQdLh4gP4-unsplash.jpg" alt="" />
      <h3><a href="https://en.wikipedia.org/wiki/A-wing">A-wing starfighter</a></h3>
      <p>The fastest vessels in the Star Wars canon, with the advantage of being the smallest hyperspace drive-equipped craft.</p>
      <p>Photo by <a href="https://unsplash.com/@one_dwigt">Chuck Givens</a> on Unsplash.</p>
    </div>
  </li>
</ul>
```