
## 引用

通过 `ref` 获取 `dom` 节点实例。

```tsx
import { QuarkElement, customElement, property, state, createRef } from "quarkc"
import style from "./style.css"

@customElement({ tag: "my-element", style })
class MyComponent extends QuarkElement {

  inputRef: any = createRef()

  handleFocus = () => {
    this.inputRef.current.focus() // 点击手动聚焦 input 框
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <button onClick={this.handleFocus}>自己输入框聚焦</button>
      </div>
    )
  }
}
```


好了，至此您已经学完了有关于 Quarkc 的相关用法。赶紧去试一试吧～


[优秀案例参考](#/zh-CN/docs/example)