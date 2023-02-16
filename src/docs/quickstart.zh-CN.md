# 快速上手

## 预览

> 扫描下方二维码体验，体验 Quark 组件库示例

<img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">

## CDN

使用 quark 最简单的方式是直接在 HTML 文件中引入 CDN 链接，之后你可以全局中任意使用，由于 quark 做到了 CSS-IN-JS，因此您只需加载下面链接即可。

```
<!-- 引入CDN文件，只有 80kb -->
<script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js"></script>
```

## 通过 npm 安装

```bash
# Vue / React / Preact / Angular / JQ / 其他技术栈或无框架项目
npm i quarkd
```

**React 使用须知**：由于 `quarkd` 提供的组件均为原生自定义元素（类比div），因此组件内派发（dispatch）的事件需要使用 `addEventLisener` 接收，比如 `dialog` 组件内部的自定义关闭事件 `close`。而 Vue 技术栈则可以直接使用 `@xx` 即可接收原生派发的事件，因此不需要使用 `addEventLisener` 接收。
<br />
<br />
为了提升开发体验，我们对 `quarkd` 进行了 [Reactify(React 化)](https://github.com/BBKolton/reactify-wc/)！所以，我们建议您在 React/Preact 项目中使用 `@quarkd/quark-react`！

```bash
# React 推荐使用
npm i @quarkd/quark-react
```

## 使用示例
### Vue

```tsx
<template>
  <div>
    <quark-button type="primary" @click="handleClick">按钮</quark-button>;
  </div>
</template>
<script>
  import "quarkd/lib/button";
</script>
```

### Angular

```
import { Component } from '@angular/core
import "quarkd/lib/button"

@Component({
  template: `<quark-button loading="{{loading}}"" (click)="handleClick()">
    Button
  </quark-button>`
})
```

### React

```jsx
import { Button } from "@quarkd/quark-react";

class Demo extends React.Component {
  render() {
    return <Button type="primary" onClick="() => handleClick()">Button</Button>;
  }
}
```

### 无框架/Jquery等

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <!-- cdn -->
  <script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js"></script>
<body>
  <quark-button loading="false" id="btn">Button</quark-button>
</body>

<script>
  const el = document.getElementById('btn')
  el.addEventListener('click', function handleClick() {
    el.loading = true
  })
</script>
</html>
```

## Polyfill

> Quark(Web components) 支持现代浏览器，如需兼容更低版本（ iOS 10 以下，Android 7 以下），请在 HTML 头部加入 polyfill。

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/"></script>
```

更多详情，参考官方Polyfill [点击查看更多](https://www.webcomponents.org/polyfills)。
