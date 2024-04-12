## Slot
### Default Slot

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
class Count extends QuarkElement {
  render() {
    return (
      <button>
        <slot></slot>
      </button>
    )
  }
}
```

```html
<quark-count>default slot</quark-count>
```

### Named Slot
Add `name` property to `slot` element in the component, and specify which slot to use by `slot` property.

```tsx
import { QuarkElement, customElement } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
class Count extends QuarkElement {
  render() {
    return (
      <button>
        <slot name="abc"></slot>
      </button>
    )
  }
}
```

```html
<quark-count><span slot="abc">my named slot</span></quark-count>
```
### Advanced Usage
You can access the slot dom instance by `ref` and `onslotchange` event.

```tsx
import { QuarkElement, customElement, createRef } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
class Count extends QuarkElement {

  slotRef = createRef()

  onSlotChange = () => {
    // got slot dom instance.
    const { current } = this.slotRef
  }

  render() {
    return (
      <button>
        <slot name="abc" ref={this.slotRef} onslotchange={this.onSlotChange}></slot>
      </button>
    )
  }
}
```

For more exmaples of `slot` you can refer to [this article](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).
