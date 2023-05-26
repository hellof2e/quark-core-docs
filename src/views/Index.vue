<template>
  <quark-doc-header></quark-doc-header>

  <section class="doc-section">
    <doc-nav />

    <div class="doc-content-document">
      <router-view />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import "quark-doc-header/lib/index";

export default defineComponent({
  name: "doc",
  components: {
    [Nav.name]: Nav,
  },
  setup() {
    const isZhLang = localStorage.getItem("language") === "zh-CN";

    return {
      isZhLang,
    };
  },
});
</script>
<style lang="scss" scoped>
.doc-section {
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
