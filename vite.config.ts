import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import path from "path";
const hljs = require("highlight.js"); // https://highlightjs.org/

const resolve = path.resolve;

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 2022,
    host: "0.0.0.0",
    open: "/",
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      // template: {
      //   compilerOptions: {
      //     isCustomElement: (tag) => ["dark-", "quark-"].includes(tag),
      //   },
      // },
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (error) {
              console.log(error);
            }
          }

          return ""; // 使用额外的默认转义
        },
      },
    }),
  ],
  build: {
    target: "es2015",
    outDir: "dist",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        vue: resolve(__dirname, "index.html"),
      },
    },
  },
});
