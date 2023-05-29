## Ref
通过 `ref` 获取 `dom` 节点实例。
```tsx
import { QuarkElement,
  customElement,
  property,
  state,
  createRef,
} from "quarkc";
import style from "./style.css";

@customElement({ tag: "quark-badge", style })
class QuarkBadge extends QuarkElement {

  inputRef: any = createRef();

  componentDidMount() {
    this.firstUpdated();
  }

  firstUpdated() {
    this.inputRef.current?.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
      </div>
    );
  }
}

export default QuarkBadge;
```
