## Testing

如您需要对您的组件编写单元测试，我们推荐 [@open-wc/testing](https://open-wc.org/docs/testing/testing-package/) 作为 Web components 的测试框架，`@open-wc/testing`是一个专门针对 Web components 的测试库。

以一个 button 组件为例：

```tsx
import { QuarkElement, property } from "quarkc";
import style from "./style.css";

@customElement({ tag: "quark-button", style })
export default class QuarkButton extends QuarkElement {
  @property()
  type = "primary";

  render() {
    return (
      <div class="quark-button">
        <slot></slot>
      </div>
    );
  }
}
```

其单测用例如下：
```tsx
import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/button";
import sinon from "sinon";

const data = {
  type: "primary",
};
let el;

describe("<quark-button>", async () => {
  it("type attribute", async () => {
    el = await fixture(
      `<quark-button type=${data.type}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.type).to.equal(data.type);
  });
});


```

更多使用示例，可参考[Open Web Components 官网](https://open-wc.org/docs/testing/testing-package/)
