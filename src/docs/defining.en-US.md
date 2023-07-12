## Defining a component
Define a class that inherits from `QuarkElement` and then use the `@customElement` decorator.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {/***/}
```

The `@customElement` decorator internally registers the custom element with the browser using [customElements.define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define).

### Quarkc components are essentially custom tags
Components created with `@customElement` are equivalent to [custom HTML elements](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define).

Therefore, you can use custom elements just like any built-in `HTML` element.

### Using Quarkc components
Unlike components created with technical frameworks, you only need to import Quarkc components to use them.

```js
import 'my-component'  // ☑️
// import Count from "my-component"  ❌
// import { Count } from "my-component" ❌

<quark-count />  // Usage
```
Or create the element (component) using JS.

```tsx
const count = document.createElement('quark-count')
```
