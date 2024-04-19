## Events
### Native Events
By prefixing the native event name with word `on`.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onClick = () => {
    console.log("btn clicked")
  }

  onInput = () => {
    console.log("input event")
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click</button>
        <input onInput={this.onInput}></input>
      </div>
    )
  }
}
```

### Custom Events
By using instance method `$emit`. The first parameter is name of the event and the second parameter is the data to be passed. The passed data can be accessed via `event.detail`.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onInput = () => {
    // ❗ If your custom element will only be used as an internal component in Quarkc,
    // you should avoid to use event name like `custom-event`
    const data = {}
    this.$emit("customEvent", {
      detail: data,
      // ...other event properties like `bubbles` goes here...
    })
  }

  render() {
    return (
      <input onInput={this.onInput}></input>
    )
  }
}
```

Then bind event listeners on your custom element:

#### Vue
```html
<template>
  <quark-input @custom-event="handler" id="quark-input" />
</template>
<script>
  export default {
    methods: {
      handler(e) {
        console.log(e.detail.value);
      },
    },
  };
</script>
```

#### React
```tsx
function App() {
  const handler = (e) => {
    console.log(e.detail.value);
  };
  return <quark-input onCustomEvent={handler} id="quark-input" />;
}
```

#### Quarkc
❗Unlike Vue, hyphens in custom event names are not supported under the ground (when using `$emit`).

❗Unlike React, custom event names will not be decapitalized.
```tsx
@customElement({ tag: "quark-input-parent", style })
class QuarkInputParent extends QuarkElement {
  handler = (e) => {
    console.log(e.detail.value)
  }

  render() {
    // onCustomEvent ❌ For this use-case, use `CustomEvent` as `$emit` name
    return (
      <quark-input id="quark-input" oncustomEvent={this.handler} />
    )
  }
}
```

#### Pure JS

```ts
const myInputElement = document.getElementById("quark-input")
myInputElement.addEventListener('customEvent', (e) => {
  console.log(e.detail.value)
})
```