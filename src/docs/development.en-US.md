## Development

> 推荐使用：https://github.com/hellof2e/quark-cli 生成项目

`quarkc` 支持 `TypeScript`，用 `quarkc` 编写一个组件，其代码结构大概如下：

```tsx
import { QuarkElement, customElement, property } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-text", style })
class Text extends QuarkElement {
  @property() // 外部传入属性
  text = false

  render() {
    return (
      <div>{ this.text }</div>
    )
  }
}
```

外部使用
```html
<quark-text text="hello world"></quark-text>
```