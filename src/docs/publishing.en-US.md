## Publishing

> 推荐使用：https://github.com/hellof2e/quark-cli 生成项目

当你使用 `quarkc` 编写完组件，就可以发布你自己的无框架组件啦。

<br/>

quark-cli 生成的项目已经附带了打包配置，执行

```shell
npm run build
```
即可。

<br />

生成的打包产物在 lib/ 文件夹下:

```tree
.
├── types
|     └── install.d.ts
├── index.js
├── index.umd.cjs
└── style.css
```

### 发布到 npm

打包结束，就可以将你的 component 发布到 npm ~

<br />
npm 发布相关可参考[链接](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)。

作为 node 包使用

```js
import "you-component"
```

作为 CDN 使用

```html
<script src="https://unpkg.com/your-component/lib/index.js" />
```

### 直接项目中使用

直接拷贝产物 `index.js` 到您的项目

```js
import "index.js"
```

### 相关案例

使用 quarkc 构建的组件案例，供参考！
https://github.com/hellof2e/quark#%E4%BC%98%E7%A7%80%E6%A1%88%E4%BE%8B