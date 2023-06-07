<template>
  <div class="doc-nav" :class="{ 'fixed-class': fixed }">
    <div class="nav-wrap">
      <section v-for="item in docs.packages" :key="item">
        <h2>{{ isZhLang ? item.cName : item.name }}</h2>

        <router-link
          v-for="subItem in item.children"
          :key="subItem"
          :to="subItem.name.toLowerCase()"
        >
          {{ isZhLang ? subItem.cName : subItem.name }}
        </router-link>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { docs } from "@/config";

export default defineComponent({
  name: "DocNav",
  props: {
    fixed: Boolean,
  },
  setup() {
    return {
      isZhLang: localStorage.getItem("language") === "zh-CN",
      docs: reactive(docs),
    };
  },
});
</script>

<style lang="scss">
.doc-nav {
  overflow: auto;
  transition: all 150ms;
  padding: 32px 32px 0;

  h2 {
    color: #213547;
    line-height: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  a {
    display: flex;
    font-size: 15px;
    line-height: 32px;
  }

  .router-link-active {
    color: #646cff;
  }

  section {
    margin-bottom: 26px;
  }
}
.nav-wrap {
  position: fixed;
  overflow: scroll;
  height: 100%;
  padding: 32px 40px 0;
}
.nav-wrap ::-webkit-scrollbar {
  display: none;
}
</style>
