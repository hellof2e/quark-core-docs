## Reactivity

Reactive state.

### Internal State

**Reactive data** within the component.

Use the `@state` decorator to add reactivity to your component's internal state.

```tsx
import { QuarkElement, customElement, state} from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @state()
  count = 0

  click = () => {
    this.count += 1
  }

  render() {
    return (
      <button onClick={this.click}>{count}</button>
    )
  }
}
```

After clicking the button, the component will automatically update.

### No need for internal reactivity?

When you don't need reactive variables, you can also use [private variables in ES6 Class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes). Example:

```js
@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  #height = 0
  #width

  constructor(height, width) {
    this.#height = height
    this.#width = width
  }

  render() {/**/}
}
```

### External State (Props)

**Reactive data** passed into the component through attributes.

Use the `@property` decorator to add reactive properties to your component. The `@property` decorator supports the `type` parameter to annotate property types and the `attribute` parameter to mark attribute names.

```tsx
import { QuarkElement, customElement, property} from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @property({
    type: Number,
    attribute: 'count-number'
  })
  countNumber = 0

  @property({
    type: Boolean,
  })
  disabled = false

  @property()
  text = ''

  click = () => {
    if(!disabled) {
      console.log('count click')
    }
  }

  render() {
    return (
      <>
      <button onClick={this.click}>{this.countNumber}</button>
      <span>{this.text}</span>
      </>
    )
  }
}
```

```html
<quark-count count-number="6" text="I'm a Quark calculator" disabled/>
```

When the `count-number`, `text`, or `disabled` attributes change, the component will automatically update.

- Since HTML element attributes can only be strings, the component's internal properties need to be correctly marked with types, so Quark will help with type conversion. The default type is String.

Since HTML element attributes are case-insensitive, Quarkc supports two ways to write component attributes:

1. Use the `attribute` parameter to mark attribute names:

```tsx
  @property({
    attribute: 'count-number' // Mark attribute name
  })
  countNumber = 0 // The component's internal property can still use camelCase

  // Use count-number to pass the attribute when using the component
  <quark-count count-number="6" />
```

2. Use word concatenation:

```tsx
  @property()
  countnumber = 0 // The component's internal property uses word concatenation, not camelCase

  // Use countnumber to pass the attribute when using the component, keeping the attribute name consistent with the internal property variable name
  <quark-count countnumber="6" />
```

### Advanced Techniques

For scenarios where some components need to pass complex data types, you can use the following method:

Expose a `setData` method within the component.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({tag: "my-picker"})
class MyPicker extends QuarkElement {
  data = []

  setData(data) {
    this.data = data
  }

  render() {
    return (
      /***/
    )
  }
}
```

When using the component, get the component instance through `ref`, and then call the exposed `setData` method to complete the complex data type transfer.

```tsx
// React example:
() => {
  const pickerRef = useRef(null)

  useEffect(() => {

    pickerRef.current.setData([])

  }, [])

  return <my-picker ref={pickerRef} />
}
```

[For more usage techniques, refer to this example](https://github.com/hellof2e/quark-design/blob/main/packages/quarkd/src/cascadepicker/index.tsx)