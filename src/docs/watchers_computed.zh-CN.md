

## 监视器和计算属性

### 监视器
通过 `@watch` 监视响应式状态或属性的值的变化。

```tsx
@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @state()
  count = 0

  handleClick = () => {
    this.count += 1
  }

  // * 支持指定immediate选项，监视器回调会在初始化时立即触发
  @watch("count", { immediate: false })
  countLogger(val, oldVal) {
    console.log(`count from ${oldVal} to ${val}`);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{count}</button>
    )
  }
}
```

### 计算属性
通过 `@computed` 来创建由响应式状态或属性计算出来的新属性。区别于普通`getter`方法，计算属性会自动追踪依赖项的变化，并自动更新。只要依赖项未发生变化，其缓存值会被使用且不会被重新计算。

```tsx
@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @state()
  count = 0

  @computed()
  get doubleCount() {
    return this.count * 2;
  }

  handleClick = () => {
    this.count += 1
  }

  @watch("doubleCount", { immediate: true })
  doubleCountLogger(val, oldVal) {
    console.log(`doubleCount from ${oldVal} to ${val}`);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{doubleCount}</button>
    )
  }
}
```
