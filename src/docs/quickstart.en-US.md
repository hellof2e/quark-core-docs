# Quick Start

## Preview

> Scan the QR code below to experience the Quark component library example

<img src="https://m.hellobike.com/resource/helloyun/16682/76s6X_quark.demo.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">


## CDN

The easiest way to use quark is to directly introduce the CDN link in the HTML file, and then you can use it anywhere in the world. Since quark has achieved CSS-IN-JS, you only need to load the link below.

```
<!-- Introduce CDN files, only 80kb -->
<script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js"></script>
```

## NPM Install

```shell
# Vue / Angular / HTML / Other project
npm i quarkd
```

**React usage notes**: Since the components provided by `quarkd` are all native custom elements (analogous to div), events dispatched in the component need to be received by `addEventLisener`, such as the custom close event `close` inside the `dialog` component. The Vue technology stack can directly use `@xx` to receive natively dispatched events, so there is no need to use `addEventLisener` to receive.
<br />
<br />
In order to improve the development experience, we have [Reactify (Reactify)](https://github.com/BBKolton/reactify-wc/) for `quarkd`! So, we recommend that you use `@quarkd/quark-react` in your React/Preact projects!

```bash
# Recommended Use for React
npm i @quarkd/quark-react
```

## Usage

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

### Jquery/No framework etc.

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

## 3 、Polyfill

> Use Quark(Web components) today and have them work in all major browsers. [Polyfill](https://www.webcomponents.org/polyfills).

Install polyfills

```
npm install @webcomponents/webcomponentsjs
```

You can also load the code from a CDN such as unpkg: https://unpkg.com/@webcomponents/webcomponentsjs@^2/
