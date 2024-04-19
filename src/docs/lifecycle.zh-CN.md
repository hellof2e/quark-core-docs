## 生命周期
`Quarkc` 对外提供了如下几个生命周期：

| 生命周期方法                         | 调用时机                                                                                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `componentDidMount`                  | `connectedCallback` 触发并在组件首次`render`渲染完成后执行，此时可访问组件`dom`                                                                                               |
| `shouldComponentUpdate`              | `attributeChangedCallback` 触发后执行，用于控制当前属性变化是否导致组件更新渲染 *（⚠️ v2.0.0起废弃并不再推荐使用，将在后续major版本中移除）*                                   |
| `componentDidUpdate`                 | `attributeChangedCallback` 触发并在`render`渲染完成后执行，此时可拿到更新后的 `dom` 做相关操作 *（⚠️ v2.0.0起，当组件定义了`componentDidMount`的情况下，mount阶段时不会触发）* |
| `componentUpdated` *（new⭐️ v2.0.0）* | 区别于`componentDidUpdate`，当组件完成所有属性的更新后触发，此时可拿到更新后的 `dom` 做相关操作                                                                               |
| `componentWillUnmount`               | `disconnectedCallback` 触发并在`dom` 移除前执行，此时可做副作用清理等相关操作                                                                                                 |

其中 `connectedCallback`、`attributeChangedCallback`、`disconnectedCallback` 均为 `Web Components` 组件原生生命周期，详情可参考[这篇文章](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)。

### 示例

```tsx

import { QuarkElement,
  property,
  state
  customElement
} from "quarkc"
import style from "./style.css"

@customElement({
  tag: "quark-count",
  style,
})
class QuarkCount extends QuarkElement {
  @state()
  count = 0

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  shouldComponentUpdate(propName, oldValue, newValue) {
    if (propName === "xxx") {
      // 阻止更新
      return false
    }
    return true
  }

  componentDidUpdate(propName, oldValue, newValue) {
    // 已更新
  }

  componentUpdated() {
    // 访问最新的props和states
    console.log(this.count)
  }

  componentWillUnmount() {
    // 清除副作用
    clearInterval(this.interval)
  }

  // 自定义事件建议使用箭头函数
  tick = () => {
    this.count++
  }

  render() {
    return (
     <div>{this.count}</div>
    )
  }
}

```