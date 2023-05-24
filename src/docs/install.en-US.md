## Install

```shell
npm i quarkc --save
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
 <quark-count count="6"></quark-count>
```

恭喜，你已经入门了！
