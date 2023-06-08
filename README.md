# A Modern CSS Starter

This CSS starter is based heavily on [Cube CSS](https://cube.fyi/), a methodology orientated towards simplicity, pragmatism and consistency.

However, unlike Cube CSS, this starter doesn’t abstract design tokens away from the CSS. Or generate utility classes for you. 

Instead, tokens are added directly to the CSS in the form of Custom Properties. And utility classes are created by hand, as and when they are required. 

This keeps things simple, approachable and most of all, dependency free.

## Features

- [Cube CSS](https://cube.fyi/) methodology
- Fluid responsive type with [Utopia](https://utopia.fyi/).
- Custom fonts

## Getting started

Drop the `/src` folder into the root of your project.

Then link to the folder in the head of your pages.

```html
<link rel="stylesheet" href="src/css/main.css">
```

## Usage

### The `abstracts` folder

Contains the config, a.k.a the settings, the design tokens which power the rest of the CSS. Making changes here will cascade through the entire CSS.

`abstracts/break` is a handy mixin for working with breakpoints. `abstracts/fonts` handles custom fonts.

[Utopia](https://utopia.fyi/) provides a systematic approach to fluid type, space and grid.

### The `base` folder

Low-specificity, global styles that apply to the whole project (see https://cube.fyi/css.html). Target only element selectors here so you do as much of the work as high as possible. Ditch any partials you don’t need in your project. For example, you may not need code, table or form styles, so remove the corresponding file from the folder. 

### The `blocks` folder

The B in Cube CSS.

### The `compositions` folder

The C in Cube CSS.

### The `utilities` folder

The U in Cube CSS.

## Extending the project

No two projects are exactly the same, but under the hood, a good bit of the CSS still might well be. This starter project is that “good bit” of CSS. And if the name “starter” isn’t a give away, it’s expected to be built upon. 

How you extend this theme is very much up to you. You make find you only need to update a few custom properties, or you may have big plans to turn it into something unrecognisable.

Either way, I chose to lean on existing methodologies to make the process as easy as possible.

There is plenty of documentation online about how to work with both Cube CSS and Utopia, meaning that anyone with some knowledge of CSS should be able to adopt the project and extend it in a systematic way. 


## Author

Harry Cresswell

https://harrycresswell.com/
https://github.com/harrycresswell

## Credits

- [Andy Bell](https://andy-bell.co.uk/)
- [Cube CSS](https://cube.fyi/)
- [James Gilyead](https://hustlersquad.net/)
- [Trys Mudford](https://www.trysmudford.com/)
- [Utopia](https://utopia.fyi/)

## License

MIT