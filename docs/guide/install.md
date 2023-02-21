## npm 安装

```shell
npm i quarkc --save
``` 

### 快速开始  

Define custom element.
```tsx
import QuarkElement, { property, customElement } from "quarkc";

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

Use it.
```html
 <quark-count></quark-count>
```

恭喜，你已经入门了！
