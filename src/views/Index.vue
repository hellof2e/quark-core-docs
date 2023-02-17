<template>
  <doc-header></doc-header>

  <doc-nav :fixed="fixed"></doc-nav>

  <div
    :class="{ 'pr-[390px]': isShow() }"
    class="flex flex-col ml-[260px] doc-content"
    id="doc-content"
  >
    <div class="min-h-[800px] bg-white dark:bg-gray-900 doc-content-document">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
  useRouter,
} from "vue-router";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import DemoPreview from "@/components/DemoPreview.vue";

export default defineComponent({
  name: "doc",
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview,
  },
  setup() {
    const isZhLang = localStorage.getItem("language") === "zh-CN";
    const docMd = localStorage.getItem("docMd");
    const route = useRoute();
    // const router = useRouter();
    const state = reactive({
      fixed: false, // 是否吸顶
      hidden: false, // 是否隐藏
      // 组件名称
      componentName: {
        name: "",
        cName: "",
      },
    });

    const data = reactive({
      demoUrl: "demo.html",
      curKey: docMd,
      tabs: [
        {
          key: "vue",
          text: "vue",
        },
        {
          key: "react",
          text: "react",
        },
      ],
    });

    const isShow = () => {
      return !(route.path.includes("guide") || route.path.includes("pages"));
    };

    onMounted(async () => {
      document.addEventListener("scroll", scrollTitle);
    });

    const scrollTitle = () => {
      let top = document.documentElement.scrollTop;
      if (top > 127) {
        state.fixed = true;
        if (top < 142) {
          state.hidden = true;
        } else {
          state.hidden = false;
        }
      } else {
        state.fixed = false;
        state.hidden = false;
      }
    };

    onBeforeRouteUpdate((to) => {
     
      
      document.getElementById("doc-content")?.scrollTo({ top: 0 });
    });
    return {
      ...toRefs(state),
      ...toRefs(data),
      isShow,
      isZhLang,
    };
  },
});
</script>
<style lang="scss" scoped>
.doc-content {
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.doc-content-document {
  min-height: 800px;
  flex-shrink: 0;
}
</style>
