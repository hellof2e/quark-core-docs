
## Ref

Access `dom` instance by `ref`.

```tsx
import { QuarkElement, customElement, property, state, createRef } from "quarkc"
import style from "./style.css"

@customElement({ tag: "my-element", style })
class MyComponent extends QuarkElement {

  inputRef: any = createRef()

  handleFocus = () => {
    // click to focus on input manually
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <button onClick={this.handleFocus}>manually focus on input</button>
      </div>
    )
  }
}
```


🎉Congratulations! You have got all the basics of Quark. Let us have a try ~


[Great Examples](#/zh-CN/docs/example)