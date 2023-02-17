/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import Main from "@/views/Main.vue";
import Guide from "@/views/Guide.vue";
import Component from "@/views/Component.vue";
import OtherDocs from "@/views/otherdocs/index.vue";

const pagesRouter: Array<RouteRecordRaw> = [];
const pagesEnRouter: Array<RouteRecordRaw> = [];
const guideRouters: Array<RouteRecordRaw> = [];
const guideEnRouters: Array<RouteRecordRaw> = [];

/** 指南部分: 本工程 src/docs 文档 */
const modulesDocs = (import.meta as any).glob("/src/docs/**/*.zh-CN.md");
for (const path in modulesDocs) {
  const name = (/docs\/(.*).zh-CN.md/.exec(path) as any[])[1];

  guideRouters.push({
    path: `/zh-CN/${name}`,
    component: modulesDocs[path],
    name: `zh-CN/${name}`,
  });
}
const modulesEnDocs = (import.meta as any).glob("/src/docs/*.en-US.md");
for (const path in modulesEnDocs) {
  const name = (/docs\/(.*).en-US.md/.exec(path) as any[])[1];

  guideEnRouters.push({
    path: `/en-US/${name}`,
    component: modulesEnDocs[path],
    name: `en-US/${name}`,
  });
}

// 自定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    component: Main,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "/zh-CN/pages/otherDocs",
        name: "pages",
        component: Guide,
        children: [
          {
            path: `/zh-CN/pages/otherDocs`,
            component: OtherDocs,
            name: `zh-CN/pages/otherDocs`,
          },
          {
            path: `/en-US/pages/otherDocs`,
            component: OtherDocs,
            name: `en-US/pages/otherDocs`,
          },
        ],
      },
      {
        path: "/zh-CN/guide",
        name: "guide",
        component: Guide,
        children: guideRouters,
      },
      {
        path: "/en-US/guide",
        name: "enGuide",
        component: Guide,
        children: guideEnRouters,
      },
      {
        path: "/zh-CN/component",
        name: "component",
        component: Component,
        children: pagesRouter,
      },
      {
        path: "/en-US/component",
        name: "enComponent",
        component: Component,
        children: pagesEnRouter,
      },
    ],
  },
];

// 404 路由
routes.push({
  name: "notFound",
  path: "/:path(.*)+",
  redirect: {
    name: "/",
  },
});

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

export default router;
