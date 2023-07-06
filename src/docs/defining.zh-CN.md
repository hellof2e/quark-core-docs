## Defining a component
自定义一个继承自 `QuarkElement` 的类， 然后使用 `@customElement` 装饰器修饰。

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {/***/}
```

装饰器 `@customElement` 底层通过 [customElements.define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 向浏览器注册自定义元素。

### Quarkc 组件本质是一个自定义标签
通过 `@customElement` 创建的组件，相当于在[自定义HTML元素](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 。

因此，你可以像使用任何 `HTML` 内置元素那样使用自定义元素。


### 使用 Quarkc 组件
不像技术框架创建的组件，使用 Quarkc 组件的时候你只需要导入即可

```js
import 'my-component'  // ☑️
// import Count from "my-component"  ❌
// import { Count } from "my-component" ❌

<quark-count />  // 使用
```
或者用 JS 的方式创建这个元素（组件）。
```tsx
const count = document.createElement('quark-count')
```