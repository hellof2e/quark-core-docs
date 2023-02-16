# 国际化

## 介绍

Quark 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 多语言切换

Quark 通过 Locale 组件实现多语言支持，使用 Locale.use 方法可以切换当前使用的语言。

```ts
import Locale, {enUS} from "quarkd/lib/locale";
Locale.use(enUS);
```

## 覆盖语言包

通过 Locale.add 方法可以实现文案的修改，示例如下：

```ts
import Locale from "quarkd/lib/locale";

Locale.add({
  confirm: "Custom confirm",
  pullRefresh: {
    pulling: "Custom pull to refresh...",
    loosing: "Custom loose to refresh...",
  },
});
```

## 目前支持的语言

| 语言         | 文件名 | 版本      |
| ------------ | ------ | --------- |
| 英语         | en-US  | `v1.0.0` |
| 简体中文     | zh-CN  | `v1.0.0` |
| 繁體中文     | zh-TW  | 等待 PR   |
| 印度尼西亚语 | id-ID  | 等待 PR   |
| 泰语         | th-TH  | 等待 PR   |

## 内置的变量

```ts
// 中文示例
export default {
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  placehold: "请输入内容",
  image: {
    loadError: "加载失败",
  },
  pullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新...",
  },
  search: {
    placeholder: "请输入搜索关键词",
  },
  actionSheet: {
    shareTitle: "分享到",
  },
};
```

## 业务代码如何实现国际化？

可以使用 `i18n` 来实现。
