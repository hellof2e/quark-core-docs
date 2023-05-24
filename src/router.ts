/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import Main from "@/views/Main.vue";
import Docs from "@/views/Docs.vue";

const docsRouters: Array<RouteRecordRaw> = [];
const docsEnRouters: Array<RouteRecordRaw> = [];

/** 指南部分: 本工程 src/docs 文档 */
const modulesDocs = (import.meta as any).glob("/src/docs/*.zh-CN.md");
for (const path in modulesDocs) {
  const name = (/docs\/(.*).zh-CN.md/.exec(path) as any[])[1];

  docsRouters.push({
    path: `/zh-CN/docs/${name}`,
    component: modulesDocs[path],
    name: `zh-CN/docs/${name}`,
  });
}
const modulesEnDocs = (import.meta as any).glob("/src/docs/*.en-US.md");
for (const path in modulesEnDocs) {
  const name = (/docs\/(.*).en-US.md/.exec(path) as any[])[1];

  docsEnRouters.push({
    path: `/en-US/docs/${name}`,
    component: modulesEnDocs[path],
    name: `en-US/docs/${name}`,
  });
}

console.log(docsRouters, 999);

// 自定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    component: Main,
  },
  {
    path: "/docs",
    name: "docs",
    component: Index,
    children: [
      {
        path: "/zh-CN/docs",
        name: "docs",
        component: Docs,
        children: docsRouters,
      },
      {
        path: "/en-US/docs",
        name: "enDocs",
        component: Docs,
        children: docsEnRouters,
      },
    ],
  },
];

// 404 路由
// routes.push({
//   name: "notFound",
//   path: "/:path(.*)+",
//   redirect: {
//     name: "/",
//   },
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split("#")[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  },
});

// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });

export default router;
