## 事件处理
### 原生事件
通过在原生事件名前添加 `on` 前缀来绑定原生事件。

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onClick = () => {
    console.log("按钮被点击")
  }

  onInput = () => {
    console.log("input事件")
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click</button>
        <input onInput={this.onInput}></input>
      </div>
    )
  }
}
```

### 自定义事件
通过使用实例方法 `$emit`来发送自定义事件。第一个参数是事件的名称，第二个参数是传递的数据。传递的数据可以通过 `event.detail` 获取。

```tsx
import { QuarkElement, customElement } from "quarkc"

@customElement({ tag: "quark-input", style })
class Input extends QuarkElement {

  onInput = () => {
    // ❗ 如果你的自定义元素只会作为 Quarkc 内部组件使用，
    // 你应该避免使用诸如 `custom-event` 的事件名称
    const data = {}
    this.$emit("customEvent", {
      detail: data,
      // ...其他事件属性，例如 `bubbles` 等等...
    })
  }

  render() {
    return (
      <input onInput={this.onInput}></input>
    )
  }
}
```

然后在自定义元素上绑定事件监听器：

#### Vue
```html
<template>
  <quark-input @custom-event="handler" id="quark-input" />
</template>
<script>
  export default {
    methods: {
      handler(e) {
        console.log(e.detail.value);
      },
    },
  };
</script>
```

#### React
```tsx
function App() {
  const handler = (e) => {
    console.log(e.detail.value);
  };
  return <quark-input onCustomEvent={handler} id="quark-input" />;
}
```

#### Quarkc
❗不同于Vue，在底层（使用`$emit`时）不支持带有连字符的自定义事件名。

❗与原生事件不同，自定义事件名不会被首字母小写化处理。
```tsx
@customElement({ tag: "quark-input-parent", style })
class QuarkInputParent extends QuarkElement {
  handler = (e) => {
    console.log(e.detail.value)
  }

  render() {
    // onCustomEvent ❌ 这种情况需要将`CustomEvent`作为$emit的事件名
    return (
      <quark-input id="quark-input" oncustomEvent={this.handler} />
    )
  }
}
```

#### Pure JS

```ts
const myInputElement = document.getElementById("quark-input")
myInputElement.addEventListener('customEvent', (e) => {
  console.log(e.detail.value)
})
```