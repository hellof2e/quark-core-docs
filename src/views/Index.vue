<template>
  <doc-header></doc-header>

  <doc-nav :fixed="fixed"></doc-nav>

  <div class="doc-content" id="doc-content">
    <div class="doc-content-document">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

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

    const state = reactive({
      fixed: false, // 是否吸顶
      hidden: false, // 是否隐藏
      // 组件名称
      componentName: {
        name: "",
        cName: "",
      },
    });

    return {
      ...toRefs(state),
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
  margin-left: 260px;
}
.pr-390 {
  padding-right: 390px;
}
</style>
