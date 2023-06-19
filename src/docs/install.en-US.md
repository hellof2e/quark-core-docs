## Install

```shell
npx create-quark-app create project-name
```

### 启动项目

```
npm install
npm run dev
```

### 快速开始

自定义元素：

```tsx
import { QuarkElement, property, customElement } from "quarkc";

@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
  @property({
    type: Number
  })
  count: number = 0;

  add = () => {
    this.count += 1;
  }

  render() {
    return (
        <button onClick={this.add}>count is: { this.count}</button>
    );
  }
}
```

开始使用：
```html
  <!-- 无框架 -->
 <my-element count="count" />

  <!-- vue -->
  <my-element :count="count" />

  <!-- react -->
  <my-element count={count} />

  <!-- svelte -->
  <my-element {count} />

  <!-- angular -->
  <my-element [count]="count" />
```

恭喜，你已经入门了！
