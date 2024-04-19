## 危险的HTML注入

渲染不安全的 HTML 结构。

```jsx
class MyComponent extends QuarkElement {
  render() {
    return <div dangerouslySetInnerHTML={{__html: `lorem <b onmouseover="alert('mouseover');">ipsum</b>`}}  />
  }
}
```