## 安装

```js
npm create quarkc@latest
// 选择 component
```

## 启动项目
```
npm install
npm run dev
```

### 快速开始

#### 创建组件（元素）

```tsx
import { QuarkElement, property, customElement } from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
  @property({
    type: Number
  })
  count: number = 0

  add = () => {
    this.count += 1
  }

  render() {
    return (
      <button onClick={this.add}>count is: { this.count}</button>
    )
  }
}
```

#### 构建

```js
npm run build
```

生成的打包产物在 lib/ 文件夹下:

```tree
.
├── types
|     └── install.d.ts
├── index.js
└── index.umd.js
```

#### 使用

产物可以直接被任何前端项目使用

```js
import "path/lib/your-component"
```

或发布到 npm：
```js
import "your-component"
```

或使用 CDN：
```js
<script src="https://fastly.jsdelivr.net/npm/quarkc@latest"></script>
<script src="https://fastly.jsdelivr.net/npm/your-published-component@latest"></script>
```

开始使用：
```html
  <!-- 无框架 -->
 <my-element count="count" />

  <!-- vue -->
  <my-element :count="count" />

  <!-- react -->
  <my-element count={count} />

  <!-- svelte -->
  <my-element {count} />

  <!-- angular -->
  <my-element [count]="count" />
```

恭喜，你已经入门了！
