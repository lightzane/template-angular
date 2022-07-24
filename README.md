# Template Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## With Bootstrap

https://getbootstrap.com/docs/5.2/customize/sass

```
npm i bootstrap@5
```

**Option A: All bootstrap**

```scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

**Option B: Include parts of bootstrap**

> **Notice** not to name @angular/material variables with the same variable name that bootstrap uses

```scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
// @import "../node_modules/bootstrap/scss/root"; // generate :root color palettes and fonts

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities"; // utility classes for showing, hiding, aligning, and spacing content
@import "../node_modules/bootstrap/scss/reboot";
// @import "../node_modules/bootstrap/scss/type";
// @import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid"; // column and rows (e.g. .col-md-4)
// @import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

## Example Bootstrap Utilities

### Flex

```html
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
<div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
```

### Spacing

```html
<h1 class="m-0">Heading with margin setting to 0</h1>
<h1 class="mt-3">Heading with default margin-top</h1>
```

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where property is one of:

-   `m` - for classes that set `margin`
-   `p` - for classes that set `padding`

Where sides is one of:

-   `t` - for classes that set `margin-top` or `padding-top`
-   `b` - for classes that set `margin-bottom` or `padding-bottom`
-   `s` - (start) for classes that set `margin-left` or `padding-left` in `LTR`, `margin-right` or `padding-right` in `RTL`
-   `e` - (end) for classes that set `margin-right` or `padding-right` in `LTR`, `margin-left` or `padding-left` in `RTL`
-   `x` - for classes that set both `*-left` and `*-right`
-   `y` - for classes that set both `*-top` and `*-bottom`
-   `blank` - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

-   `0` - for classes that eliminate the `margin` or padding by setting it to 0
-   `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`
-   `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .5`
-   `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`
-   `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`
-   `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3`

`auto` - for classes that set the `margin` to auto

# References

See more details:

-   https://getbootstrap.com/docs/5.2/customize/sass/
-   https://getbootstrap.com/docs/5.1/utilities
-   https://getbootstrap.com/docs/5.1/utilities/flex/
-   https://getbootstrap.com/docs/5.1/utilities/spacing/
