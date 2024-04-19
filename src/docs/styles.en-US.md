## Styles

### Independent CSS File

`Quarkc` supports using independent `CSS` file to development, you only need to pass the `CSS` file's content as `style` property's value to `@customElement`.

```tsx
import { QuarkElement, customElement, property } from "quarkc"
import style from './index.css'

@customElement({ tag: "my-element", style })
class MyElement extends QuarkElement {
  // ...
}
```

index.css：

```css
:host .quark_count_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: unset;
}

:host([disabled]) {
  cursor: not-allowed;
  opacity: 0.68;
  user-select: none;
}
```

you may need a plugin to import `css` files, such as [rollup-plugin-import-css](https://www.npmjs.com/package/rollup-plugin-import-css)

### CSS In JS
Write styles directly in the component.

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
class Count extends QuarkElement {

  render() {
    const style = {
      width: "100%",
      marginTop: "10px"
    }

    return (
      <button style={style}>Click</button>
    );
  }
}
```

recommend using the independent `css` file to develop.

### Theme

You can use [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to customize the theme.

index.css：

```css
:host .quark_count_button {
  color: var(--your-primary-color, red);
}

:host([disabled]) {
  color: var(--your-disable-color, gray);
}
```