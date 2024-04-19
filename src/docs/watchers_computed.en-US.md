

## Watchers and Computed

### Watchers
Watching changes of reactive states or properties by `@watch` directive.

```tsx
@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @state()
  count = 0

  handleClick = () => {
    this.count += 1
  }

  // * support immediate option, the watcher callback will be triggered immediately after initialization
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

### Computed
Create a new property computed from reactive states or properties by `@computed` directive. Different from normal `getter` methods, computed properties will track the changes of its dependencies and updates automatically. As long as its dependecies are not changed, cached value will be used and no computation will be triggered.

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
