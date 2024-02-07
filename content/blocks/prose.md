---
title: "Prose"
date: 2024-02-07T13:35:24Z
draft: false
weight: 5
---

`.prose` can be used alongside the [flow utility](/utilities/#flow) to improve the legibility of longform content. Particular useful for improving the look of typography in articles and pages.

Apply `.prose` to any HTML element that accepts [flow content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content), to subtly increasing line-height, along with the default `--flow-space` of its children.



Consider the following extract with `.prose` and `.flow` applied:

<div>
  <article class="prose | flow" style="padding: 2rem; background-color: var(--color-bg-mod-1); --flow-space: 1rem;">
    <h2>The Chosen One</h2>
    <p>Long ago, in a galaxy far, far away, the Skywalker saga began. Anakin Skywalker, a young slave from Tatooine, was discovered by Jedi Master Qui-Gon Jinn. Sensing the Force was strong with him, Qui-Gon believed Anakin was the chosen one, destined to bring balance to the Force.</p>
    <h2>The Rise of Darth Vader</h2>
    <p>Anakin's path was fraught with temptation. Seduced by the dark side of the Force, he became Darth Vader, apprentice to the Sith Lord Darth Sidious. His actions led to the fall of the Jedi Order and the rise of the Galactic Empire.</p>
    <h2>A New Hope</h2>
    <p>Years later, a new hope emerged in the form of Luke Skywalker, Anakin's son. Trained by Jedi Master Obi-Wan Kenobi and the wise Jedi Master Yoda, Luke sought to redeem his father and restore peace to the galaxy.</p>
  </article>
</div>

```
<article class="prose | flow">
  <h2>The Chosen One</h2>
  
  <p>Long ago, in a galaxy far, far away, the Skywalker saga began. Anakin Skywalker, a young slave from Tatooine, was discovered by Jedi Master Qui-Gon Jinn. Sensing the Force was strong with him, Qui-Gon believed Anakin was the chosen one, destined to bring balance to the Force.</p>

  <h2>The Rise of Darth Vader</h2>
  
  <p>Anakin's path was fraught with temptation. Seduced by the dark side of the Force, he became Darth Vader, apprentice to the Sith Lord Darth Sidious. His actions led to the fall of the Jedi Order and the rise of the Galactic Empire.</p>

  <h2>A New Hope</h2>
  
  <p>Years later, a new hope emerged in the form of Luke Skywalker, Anakin's son. Trained by Jedi Master Obi-Wan Kenobi and the wise Jedi Master Yoda, Luke sought to redeem his father and restore peace to the galaxy.</p>
</article>
```

Now consider the same extract without `.prose` and `.flow` applied:

<div>
  <article style="padding: 2rem; background-color: var(--color-bg-mod-1); line-height: 1.5;">
    <h2>1. The Chosen One</h2>
    <p>Long ago, in a galaxy far, far away, the Skywalker saga began. Anakin Skywalker, a young slave from Tatooine, was discovered by Jedi Master Qui-Gon Jinn. Sensing the Force was strong with him, Qui-Gon believed Anakin was the chosen one, destined to bring balance to the Force.</p>
    <h2>2. The Rise of Darth Vader</h2>
    <p>Anakin's path was fraught with temptation. Seduced by the dark side of the Force, he became Darth Vader, apprentice to the Sith Lord Darth Sidious. His actions led to the fall of the Jedi Order and the rise of the Galactic Empire.</p>
    <h2>3. A New Hope</h2>
    <p>Years later, a new hope emerged in the form of Luke Skywalker, Anakin's son. Trained by Jedi Master Obi-Wan Kenobi and the wise Jedi Master Yoda, Luke sought to redeem his father and restore peace to the galaxy.</p>
  </article>
</div>