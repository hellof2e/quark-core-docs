# 按需加载

## Vue

`Vue` 采用手动按需加载的方式。

```js
import "quarkd/lib/button";
```

## React

借助 `babel` 插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)实现按需。

```js
import { Button } from "@quarkd/quark-react";
```

在 `.babelrc` 这样配置

```js
module.exports = {
  plugins: [["import", { libraryName: "@quarkd/quark-react" }]],
};
```

或者也可以采用手动按需加载的方式，但不推荐。

```js
import Button from "@quarkd/quark-react/lib/button";
```
