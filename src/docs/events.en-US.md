## Events
### Native events

Listen to native events using `onXXX` approach.

```jsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onClick = () => {
    console.log("button is clicked")
  }

  onInput = () => {
    console.log("input event“)
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
Send events using `$emit`.

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onInput = () => {
    this.$emit("input", {
      detail: {
        value: 'xxx',
      },
    })
  }

  render() {
    return (
      <div>
        <input onInput={this.onInput}></input>
      </div>
    )
  }
}
```

Then bind the event on your custom element:

```tsx
/** In vue framework*/
<quark-input @input="this.onInput" id="quark-input"/>
```



```tsx
/** In any other framework or framework-less environment */

const myInputElement = document.getElementById("quark-input")
myInputElement.addEventListener('input', (evt) => {})
```
To triggering a custom event using `this.$emit`, The first parameter of `emit` method is the event name, and the second parameter is the data to be passed.The passed data can be accessed through `evt.detail`.