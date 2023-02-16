# Load onDemand

## Vue

You can manually introduce component in `Vue`.

```js
import "quarkd/lib/button";
```

## React

Using `babel` plugin [babel-plugin-import](https://github.com/umijs/babel-plugin-import)

```js
import { Button } from "@quarkd/quark-react";
```

config `.babelrc`

```js
module.exports = {
  plugins: [["import", { libraryName: "@quarkd/quark-react" }]],
};
```

or you can manually introduce component，but not recommend.

```js
import Button from "@quarkd/quark-react/lib/button";
```
