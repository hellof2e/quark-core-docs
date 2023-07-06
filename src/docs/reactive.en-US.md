## Reactive

响应式状态。

## 内部状态 State

组件内部 **响应式数据**。

<br />

通过 `@state` 为你组件的内部状态增加响应式特性。

```tsx
import { QuarkElement, customElement, state} from "quarkc"

@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
  @state()
  count = 0

  click = () => {
    this.count += 1
  }

  render() {
    return (
      <button onClick={this.click}>{count}</button>
    )
  }
}
```

点击按钮后，组件将自动更新。

当你不需要响应式变量的时候，也可以直接使用 [ES6 中的 Class 类的私有变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)。示例：

```js
@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
  #height = 0;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  render() {/**/}
}
```


## 外部状态 Props

组件通过属性从外部传入的 **响应式数据**。

<br />

通过 `@property` 装饰器可以为你的组件属性增加响应式属性，`@property` 支持通过参数 `type` 来标注属性类型，通过参数 `attribute` 来标记属性名

```tsx
import { QuarkElement, customElement, property} from "quarkc"

@customElement({ tag: "quark-count" })
export default class Count extends QuarkElement {
  @property({
    type: Number,
    attribute: 'count-number'
  })
  countNumber = 0

  @property({
    type: Boolean,
  })
  disabled = false

  @property()
  text = ''

  click = () => {
    if(!disabled) {
      console.log('count click')
    }
  }

  render() {
    return (
      <>
      <button onClick={this.click}>{this.countNumber}</button>
      <span>{this.text}</span>
      </>
    );
  }
}
```

```html
<quark-count count-number="6" text="我是 Quark 计算器" disabled/>
```

当 `count-number`、`text` 或者 `disabled` 属性变更后，组件将自动更新。

- 由于 `HTML` 元素的属性只能是字符串，因此组件内部的属性需要正确标记类型，这样 `Quark` 底层会帮助做类型转换，默认 String 类型


由于 `HTML` 元素的属性是大小写不敏感的，Quarkc 支持以下两种方式来书写组件属性

第一种方式：通过 attribute 来标记属性名
```tsx
  @property({
    attribute: 'count-number' // 标记属性名
  })
  countNumber = 0 // 组件内部仍可以采用驼峰命名

  // 使用时通过 count-number 传递属性
  <quark-count count-number="6" />
```

第二种方式：采用单词拼接方式
```tsx
  @property()
  countnumber = 0 // 组件内部属性采用单词拼接，不可使用驼峰

  // 使用时通过 countnumber 传递属性，即跟组件内部属性变量名保持一致
  <quark-count countnumber="6" />
```


### 高级技巧

针对有些组件需要传递复杂数据类型的场景，可采用如下方式：

组件内部暴露一个 `setData` 方法。

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({tag: "my-picker"})
class MyPicker extends QuarkElement {
  data = [];

  setData(data) {
    this.data = data;
  }

  render() {
    return (
      /***/
    );
  }
}

export default MyPicker;
```

使用时，通过 `ref` 拿到组件的实例，然后调用暴露的 `setData` 方法即可完成复杂数据类型的传递。

```tsx
// React 示例：
export default () => {
  const pickerRef = useRef(null);

  useEffect(() => {

    pickerRef.current.setData([]);

  }, []);

  return <my-picker ref={pickerRef} />
};
```

[更多使用技巧参考](https://github.com/hellof2e/quark-design/blob/main/packages/quarkd/src/cascadepicker/index.tsx)
