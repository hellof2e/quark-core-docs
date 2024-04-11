## Lifecycle
`Quarkc` 对外提供了如下几个生命周期：

| 生命周期方法                         | 调用时机                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `componentDidMount`                  | Invoked after `connectedCallback` triggered and the component finishes first rendering (mounted, inserted into th e `dom` tree). You can access the `dom` at this time.                                                                                                                       |
| `shouldComponentUpdate`              | Invoked after `attributeChangedCallback` triggered and before the component rendering. You can decide whether to update the component or not by letting this method return `true` or `false`. *（⚠️ deprecated from v2.0.0 and is not recommended，it will be removed in next major version）* |
| `componentDidUpdate`                 | Invoked everytime `attributeChangedCallback` was triggered and the component finishes rendering. You can access the `dom` at this time. *（⚠️ from v2.0.0, when `componentDidMount` is also defined, it will not be invoked at mount phase）*                                                  |
| `componentUpdated` *（new⭐️ v2.0.0）* | Distinct from `componentDidUpdate`, it will be invoked after all of the component's props and states' updates finished. You can access the `dom` at this time.                                                                                                                                |
| `componentWillUnmount`               | Invoked after `disconnectedCallback` triggered and before the `dom` removed. You can clean up the side effects here.                                                                                                                                                                          |

Among them, `connectedCallback`、`attributeChangedCallback`、`disconnectedCallback` are all native `Web Components`'s lifecycle method，you can refer to [this article](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks) for more details.

### example

```tsx

import { QuarkElement, property, state, customElement } from "quarkc"
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
      // prevent update
      return false
    }
    return true
  }

  componentDidUpdate(propName, oldValue, newValue) {
    // invoked everytime any of the props or states updated
  }

  componentUpdated() {
    // access the updated states or props
    console.log(this.count)
  }

  componentWillUnmount() {
    // clean the side effects
    clearInterval(this.interval)
  }

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