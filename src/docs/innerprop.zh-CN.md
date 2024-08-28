## 组件之间复杂数据传递

父组件的数据

```tsx
import { QuarkElement, customElement, state } from 'quarkc';
import './child.tsx';

@customElement({ tag: 'parent-ele' })
class Dad extends QuarkElement {
  @state()
  obj = { a: 1, b: 2, arr: [1, 2, 3] };

  render() {
    return (
      <div>
        <child-ele obj={this.obj}></child-ele>
      </div>
    );
  }
}
```

子组件通过 `internalProp` 接收
```tsx
import { QuarkElement, customElement, internalProp } from 'quarkc';
import './child.tsx';

@customElement({ tag: 'child-ele' })
class Dad extends QuarkElement {
  @internalProp()
  obj;

  handleClick = () => {
    // 打开控制台，查看打印数据
    console.log('data from parent', this.obj);
  };

  render() {
    return <div onClick={this.handleClick}>Click to get data</div>;
  }
}

```

<p align="left">
Live Demo:
<a href="https://stackblitz.com/edit/vite-quarkc-internalprop?file=src%2Findex.tsx&file=src%2Fchild.tsx"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

