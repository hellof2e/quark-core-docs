## Publishing
当你使用 `quarkc` 编写完组件，就可以发布你自己的无框架组件啦。
先根据 [Development](http://localhost:8080/workflow/development.html) 配置好你的打包工具，当然你也可以按照自己的需要修改打包配置。

你的 package.json 文件 内容大致如下：
```json
{
  "name": "xxx",
  "version": "1.0.0",
  "description": "Web components",
  "main": "lib/index.js",
  "module": "lib/index.js",
  "files": [
    "/lib",
    "README.md",
    "package.json"
  ],
  "scripts": {
    "build": "rimraf lib && rollup -c"
  },
  "dependencies": {
    "quarkc":"^1.0.4"
  },
  "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/plugin-proposal-decorators": "^7.16.5",
    "@babel/plugin-transform-runtime": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-typescript": "^7.16.5",
    "@babel/runtime": "^7.5.5",
    "@rollup/plugin-babel": "^5.3.0",
    "@rollup/plugin-commonjs": "^21.0.0",
    "@rollup/plugin-node-resolve": "^13.0.5",
    "@rollup/plugin-typescript": "^8.3.0",
    "@types/node": "^14.14.31",
    "babel-loader": "^8.0.6",
    "rollup-plugin-terser": "^7.0.2",
    "typescript": "^4.1.5",
    "rimraf": "3.0.2",
    "rollup": "2.77.0",
  },
  "homepage": "https://xxx",
  "repository": {
    "type": "git",
    "url": "xxxx"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "author": "",
  "license": "ISC"
}

```

执行：
```shell
npm run build
```

生成的打包产物在 lib 文件夹下，其中已包含 TypeScript 的类型声明。打包结束，就可以将你的 component 发布到 npm 啦。npm 发布相关可参考[链接](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)。