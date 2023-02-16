# Internationalization

## Intro

Quark uses Chinese as the default language and supports multi-language switching. Please follow the tutorial below to set internationalization.

## Multi-language switch

Quark implements multi-language support through the Locale component, and you can use the Locale.use method to switch the currently used language.

```ts
import Locale, { zhCN } from "quarkd/lib/locale";

Locale.use(zhCN);
```

## Override language packs

The Locale.add method can be used to modify the text. Examples are as follows:

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

## Currently supported languages

| Languages           | File  | Version    |
| ------------------- | ----- | ---------- |
| English             | en-US | `v1.0.0`  |
| Simplified Chinese  | zh-CN | `v1.0.0`  |
| Traditional Chinese | zh-TW | waiting PR |
| Indonesian          | id-ID | waiting PR |
| Thai                | th-TH | waiting PR |

<br>
<br>

## Variables

View all language configs

```ts
// English Examples
export default {
  save: "Save",
  confirm: "Confirm",
  cancel: "Cancel",
  delete: "Delete",
  loading: "Loading...",
  placehold: "Please input content",
  image: {
    loadError: "Loaded error",
  },
  pullRefresh: {
    pulling: "Pull to refresh...",
    loosing: "Loose to refresh...",
  },
  search: {
    placeholder: "Please input keywords",
  },
  actionSheet: {
    shareTitle: "Share to",
  },
};
```

## How to internationalize business code?

This can be done using `i18n`.
