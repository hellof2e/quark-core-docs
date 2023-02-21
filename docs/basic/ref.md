## Ref
通过 `ref` 获取 `dom` 节点实例。
```tsx
import QuarkElement, {
  customElement,
  property,
  state,
  createRef,
} from "quarkc";
import style from "./style.css";

@customElement({
  tag: "quark-badge",
  style,
})
class QuarkBadge extends QuarkElement {

  slotRef: any = createRef();

  deal = () => {
    if (this.slotRef.current?.assignedNodes().length) {
        console.log("slot 有子节点")
    } else {
        console.log("slot 无子节点")
    }
  };

  render() {
    return (
      <div class="quark-badge">
        <slot ref={this.slotRef} onslotchange={this.deal}></slot>
      </div>
    );
  }
}

export default QuarkBadge;
```
