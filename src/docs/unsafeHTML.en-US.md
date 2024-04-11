## Unsafe HTML

Rendering unsafe HTML structures.

```jsx
class MyComponent extends QuarkElement {
  render() {
    return <div dangerouslySetInnerHTML={{__html: `lorem <b onmouseover="alert('mouseover');">ipsum</b>`}}  />
  }
}
```
