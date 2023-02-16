import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/lang";
import { isMobile } from "@/assets/util";
// 全局样式初始化
import "@/assets/styles/reset.scss";
// demo 文档样式
import "@/assets/styles/md-style.scss";

// 默认中文
if (localStorage.getItem("language") === null) {
  localStorage.setItem("language", "zh-CN");
}
// 默认 vue 文档
if (localStorage.getItem("docMd") === null) {
  localStorage.setItem("docMd", "vue");
}

if (isMobile) {
  location.replace("/demo/demo.html" + location.hash);
}

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("quark-");
app.use(i18n);
app.use(router);
app.mount("#doc");

// app.config.errorHandler = (err: any, vm, info) => {
//   // 处理错误
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//   console.log(err, 'quarkui.config.errorHandler err------>')
//   console.log(vm, 'quarkui.config.errorHandler vm------>')
//   console.log(info, 'quarkui.config.errorHandler info------>')
// }
