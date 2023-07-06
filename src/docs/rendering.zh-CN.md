## Rendering
为你的自定义元素添加一个 `render` 方法。
```tsx
import { QuarkElement, customElement } from "quarkc"

import './my-header.js'
import './my-body.js'
import './my-footer.js'

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  render() {
    return (
      <>
        <h1>Welcome to Quarkc！</h1>

        <my-header></my-header>
        <my-body></my-body>
        <my-footer></my-footer>
      </>
    );
  }
}
```

`Quarkc` 使用 `tsx/jsx` 来作为 `UI` 表达式，因此 `render` 函数内可以包含任何 `tsx/jsx` 语法,如条件渲染、三目运算符等。你可以像写 `React` 组件一样，写 `Quarkc` 组件。

### 条件渲染：
```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "my-element" })
class MyElement extends QuarkElement {
  isShow = false // class 写法，内部私有变量，不属于 state/property（无响应式）

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
    );
  }
}
```

### 三目运算符
```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "my-count" })
class MyCount extends QuarkElement {
  count = 0

  render() {
    return (
      <div>{this.count > 0 ? "More" : "Less"}</div>
    );
  }
}
```

### 列表渲染
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
    );
  }
}
```
等...