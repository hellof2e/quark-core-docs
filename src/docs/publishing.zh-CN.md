## 发布

> 推荐使用：npm create quarkc@latest 生成模版工程

当你使用 `quarkc` 编写完组件，就可以发布你自己的无框架组件啦。

<br/>

模版工程中已经附带了打包配置，执行：

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
└── index.umd.js
```

### 直接项目中使用：

你也可以在项目中直接引用产物。直接拷贝产物 `index.js` 到您的项目，然后直接按照路径导入即可使用。

```js
<script src="./lib/index.js">
```

或者

```js
import "./lib/index.js"
```

### 发布到 Npm 使用：

或者，打包结束，也可将你的产物发布到 npm。[npm Docs](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)。

1、作为 npm 包使用：

```js
import "you-component"
```

2、也可以采用 CDN 使用：

```html
<script src="https://fastly.jsdelivr.net/npm/quarkc@latest"></script>
<script src="https://fastly.jsdelivr.net/npm/your-published-component@latest"></script>
```

### 优秀案例

使用 quarkc 构建的组件的[优秀案例](https://github.com/hellof2e/quark#%E4%BC%98%E7%A7%80%E6%A1%88%E4%BE%8B)，供参考！

| 作者      | github 地址                                          | 截图 / 链接                                                                                                                                               |
| --------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @khno     | https://github.com/khno/quark-element-demo-celebrate | https://unpkg.com/quarkc-demo-celebrate@latest/demo.html                                                                                                  |
| @hellof2e | https://github.com/hellof2e/quark-doc-header         | ![1685501041275](https://github.com/hellof2e/quark/assets/14307551/24dd5626-e6a9-452c-9c95-c2cdb8891573) https://quark-ecosystem.github.io/quarkc-docs/#/ |
| @xsf0105  | https://github.com/xsf0105/dark-light-element        | https://unpkg.com/dark-light-element@latest/demo.html                                                                                                     |
| @dyf19118 | https://github.com/dyf19118/quark-ui-rate            | ![image](https://github.com/hellof2e/quark-cli/assets/14307551/e11e6c49-4c18-4bca-adc3-01a7198ab2e2)                                                      |
| @xsf0105  | https://github.com/hellof2e/quark-doc-home           | https://quark-ecosystem.github.io/quarkd-docs/vue/#/                                                                                                      |
