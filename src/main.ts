import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import i18n from "@/lang";
import "@/assets/styles/reset.scss";
import "@/assets/styles/md-style.scss";

// 主题 light or dark
import "@/assets/styles/theme.scss";

import Header from "@/components/Header/index.vue";
const app = createApp(App);

app.component("Header", Header);
app.use(i18n);
app.use(router);
app.mount("#doc");
