## Development
`quarkc` 支持 `TypeScript`，用 `quarkc` 编写一个组件，其代码结构大概如下：

```tsx
import { QuarkElement, customElement, property } from "quarkc"
import style from './index.css'

@customElement({ tag: "quark-count", style })
export default class Count extends QuarkElement {
   @property({
     type: Boolean,
   })
   disabled = false
   render() {
        return (
            <button class="quark_count_button">Click</button>
        );
  } 
}
```

其中样式采用独立文件的方式，因此要求你的构建支持这种 css 文件的导入，比如 `rollup` 的 `rollup-plugin-import-css`.
如果你的组件需要做屏幕适配，可以在构建阶段使用相关插件解决，比如 `postcss-px-to-viewport`.

以 `rollup` 打包工具为示例，一个可用于构建面向生产的构建配置如下：
```js
/*
* rollup.config.js
*/
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "@quarkd/rollup-plugin-postcss";
import px2vp from "postcss-px-to-viewport";

const extensions = [".js", ".ts", ".tsx"];

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
  {
    input: "./src/index.ts",
    output: {
      dir: "lib",
      chunkFileNames: "[name].js",
      format: "es",
    },
    treeshake: true,
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
        // modulesOnly: true,
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions,
      }),
    ],
  },
];

export default options;
```

```js
/*
* babel.config.js
*/
const presets = [["@babel/preset-env"], ["@babel/preset-typescript"]];
const plugins = [
  ["@babel/plugin-transform-runtime"],
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
];

module.exports = { presets, plugins };
```


```js
/*
* tsconfig.json
*/
{
  "compilerOptions": {
    "noImplicitAny": false,
    "noImplicitThis": false,
    "baseUrl": ".",
    "rootDir": "./src",
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": false,
    "jsx": "react",
    "jsxFactory": "QuarkElement.h",
    "sourceMap": false,
    "removeComments": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "outDir": "lib",
    "declarationDir": "./lib",
    "declaration": true /* 生成相关的 '.d.ts' 文件。 */,
    "emitDeclarationOnly": true /* 只生成声明文件，不生成 js 文件*/,
    "lib": ["esnext", "dom"],
    "types": ["vite/client"],
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
}
```

