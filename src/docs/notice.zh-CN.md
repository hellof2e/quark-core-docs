# 常见问题

## Vue 使用注意事项

Vue 工程中使用 `quark` 组件可能会出现**告警**：

```html
<!-- vue@2.x: -->
Unknown custom element:
<quark-card>
  - did you register the component correctly? For recursive components, make
  sure to provide the "name" option.

  <!-- vue@3.x -->
  [Vue warn]: Failed to resolve component: quark-icon
</quark-card>
```

不用担心，这是由于 Vue 组件的语法部分参考了自定义元素，为了避免与 Vue 组件产生冲突，需要将自定义元素忽略！请在工程中注入如下代码即可：

```tsx
// vue@2.x
Vue.config.ignoredElements = [/^quark-/];

// vue@3.x
const app = createApp({});
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("quark-");
```

如果您使用的是 vite，修改 vite.config.js:

```tsx
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("quark-"),
        },
      },
    }),
  ],
};
```
