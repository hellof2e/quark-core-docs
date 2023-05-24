import { createI18n } from "vue-i18n";
import zh_CN from "./zh-CN";
import en_US from "./en-US";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale:
    localStorage.getItem("language") === "en-US" ||
    localStorage.getItem("language") === null
      ? "en_US"
      : "zh_CN",
  messages: {
    en_US,
    zh_CN,
  },
});

export default i18n;
