## Requirements

关于 `quarkc` 的几点说明：

- `quarkc` is  published as es5.
- `quarkc` 使用现代浏览器 APIs such as slot, custom elements, shadow DOM and so on.

这些 feature 现代主流浏览器(包括 Chrome，Safari，Fiefox) 均支持。当使用 `quarkc` 来开发组件时， 如需兼容低版本浏览器，请加载官方[polyfills](https://www.webcomponents.org/polyfills)。

Web componnets 的浏览器兼容情况如下表：

| 浏览器              | 版本             | 
| ------------------ | ---------------- | 
| Chrome              | >= 67         |
| Safari            | >= 10         | 
| Firefox         | >= 63         | 
| Edge "classic"      | > 18     |
| Internet Explorer    | 11 | 