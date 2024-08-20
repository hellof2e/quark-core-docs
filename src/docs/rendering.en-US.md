## Rendering

Add a `render` method to your custom element.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  render() {
    return (
      <>
        <h1>Welcome to Quarkc！</h1>
      </>
    )
  }
}
```

`Quarkc` uses `tsx/jsx` as `UI` expressions, so the `render` function can contain any `tsx/jsx` syntax, such as conditional rendering, ternary operators, etc. You can write `Quarkc` components just like `React` components.

### Conditional Rendering

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "my-element" })
class MyElement extends QuarkElement {
  isShow = false // class syntax, internal private variable, not part of state/property (no reactivity)

  renderNode = () => {
    if(isShow) {
      return <div>Render it</div>
    }

    return null
  }

  render() {
    return (
      <>
        { this.renderNode() }
      </>
    )
  }
}
```

### Ternary Operator

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "my-count" })
class MyCount extends QuarkElement {
  count = 0

  render() {
    return (
      <div>{this.count > 0 ? "More" : "Less"}</div>
    )
  }
}
```

### List Rendering

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "my-count" })
class MyCount extends QuarkElement {

  list = [{key: 1, value: 1}, {key: 2, value: 2},{key: 3, value: 3}]

  render() {
    return (
      <div>
        {
          this.list.map((item) => {
            return <div key={item.key}>{item.value}</div>
          })
        }
      </div>
    )
  }
}
```