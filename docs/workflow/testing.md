## Testing
一个面向生产环境的组件，其单元测试是少不了的。我们推荐使用[@open-wc/testing](https://open-wc.org/docs/testing/testing-package/),一个专门针对 Web components 的测试库。
以一个 button 组件为例：

```tsx
import QuarkElement, { property, customElement, createRef } from "quarkc";
import "../loading";
import style from "./style.css";

@customElement({
  tag: "quark-button",
  style,
})
class QuarkButton extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  disabled = false;

  @property()
  size: string;

  @property()
  type = "";

  @property()
  icon: string | undefined = undefined;

  @property()
  shape: string;

  @property({
    type: Boolean,
  })
  loading = false;

  @property()
  loadtype: string;

  @property()
  loadingcolor: string;

  @property()
  loadingsize: number;

  @property({
    type: Boolean,
  })
  plain = false;

  slotRef: any = createRef();

  renderIcon = () => {
    if (this.icon && this.icon.startsWith("http")) {
      return <img class="quark-button-icon" src={this.icon}></img>;
    }
    if (this.loading) {
      return (
        <quark-loading
          class="quark-button-load"
          color={this.loadingcolor ? this.loadingcolor : "#fff"}
          size={this.loadingsize ? pxToVw(this.loadingsize) : pxToVw(20)}
          type={this.loadtype ? this.loadtype : "spinner"}
        />
      );
    }
    return null;
  };

  componentDidMount() {
    this.slotRef.current.addEventListener("click", (e: Event) => {
      if (this.disabled || this.loading) {
        e.stopPropagation();
      }
    });
  }

  render() {
    return (
      <div ref={this.slotRef} class="quark-button">
        {this.renderIcon()}
        <slot></slot>
      </div>
    );
  }
}

export default QuarkButton;

```

其单测用例如下：
```tsx
import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/button";
import sinon from "sinon";

const data = {
  slotText: "主要按钮",
  disabled: false,
  type: "primary",
  icon: "https://nve_tel%20(1).png",
  loading: true,
  shape: "round",
};
let el;

describe("<quark-button>", async () => {
  it("icon exist", async () => {
    el = await fixture(
      `<quark-button 
          icon=${data.icon}
        >
          ${data.slotText}
        </quark-button>`
    );
    const icon = el.shadowRoot.querySelector(".quark-button-icon");
    expect(icon).to.exist;
  });

  it("disabled attribute", async () => {
    el = await fixture(
      `<quark-button disabled=${data.disabled}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.disabled).to.equal(data.disabled);
  });

  it("type attribute", async () => {
    el = await fixture(
      `<quark-button type=${data.type}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.type).to.equal(data.type);
  });

  it("loading attribute", async () => {
    el = await fixture(
      `<quark-button loading=${data.loading}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.loading).to.equal(data.loading);
  });

  it("shape attribute", async () => {
    el = await fixture(
      `<quark-button shape=${data.shape}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.shape).to.equal(data.shape);
  });

  it("slot attribute", async () => {
    el = await fixture(
      `<quark-button shape=${data.shape}>${data.slotText}</quark-button>`
    );
    const slot = el.textContent;
    expect(data.slotText).to.equal(slot);
  });

  it("plain attribute", async () => {
    el = await fixture(`<quark-button>${data.slotText}</quark-button>`);
    expect(el.plain).to.equal(false);
  });

  it("loading attribute default type", async () => {
    el = await fixture(`<quark-button loading>${data.slotText}</quark-button>`);
    const loading = el.shadowRoot.querySelector(".quark-button-load");
    expect(loading.color).to.equal("#fff");
    expect(loading.type).to.equal("spinner");
    expect(loading.size).to.equal("20");
  });

  it("loading attribute customize type", async () => {
    el = await fixture(
      `<quark-button loading loadtype="circular" loadingcolor="red" loadingsize="30">${data.slotText}</quark-button>`
    );
    const loading = el.shadowRoot.querySelector(".quark-button-load");
    expect(loading.color).to.equal("red");
    expect(loading.type).to.equal("circular");
    expect(loading.size).to.equal("30");
  });

  it("should change loading state instantly by default", async () => {
    el = await fixture(
      `<quark-button loading="false" id="btn">${data.slotText}</quark-button>`
    );
    el.addEventListener("click", function handleClick() {
      el.loading = true;
    });
    el.dispatchEvent(new Event("click"));
    expect(el.loading).to.equal(true);
  });

  it("should not clickable when button is loading", async () => {
    const eventspy = sinon.spy();
    el = await fixture(
      `<quark-button loading="true">${data.slotText}</quark-button>`
    );
    el.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(false);
  });
});


```

更多使用示例，请参考[官网](https://open-wc.org/docs/testing/testing-package/)
