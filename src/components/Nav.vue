<template>
  <div class="doc-nav" :class="{ 'fixed-class': fixed }">
    <div
      v-for="item in docs.packages"
      :class="{ active: isActive(item.name) }"
      :key="item"
    >
      <p>{{ isZhLang ? item.cName : item.name }}</p>
      <router-link
        :to="item.name.toLowerCase()"
        v-for="subItem in item.children"
        :key="subItem"
      >
        {{ item.name }}
        {{ isZhLang ? subItem.cName : subItem.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { RefData } from "@/assets/util/ref";
import { nav, docs } from "@/config";

export default defineComponent({
  name: "DocNav",
  props: {
    fixed: Boolean,
  },
  setup() {
    const route = useRoute();

    const isActive = computed(() => {
      return function (name: string) {
        const currentValue = RefData.getInstance().currentRoute.value;
        const value = currentValue;
        return value == name.toLowerCase();
      };
    });

    return {
      isZhLang: localStorage.getItem("language") === "zh-CN",
      isActive,
      docs: reactive(docs),
    };
  },
});
</script>

<style lang="scss">
.doc-nav {
  bottom: 0px;
  left: 0px;
  z-index: 10;
  width: 260px;
  position: fixed;
  top: 75px;
  overflow: auto;
  transition: all 150ms;

  &.fixed-class {
    top: 0;
  }
  ol {
    margin-bottom: 20px;
    // padding-left: 32px;

    li {
      font-size: 14px;
      font-weight: bold;
      position: relative;

      &.active {
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 50%;
          width: 22px;
          margin-top: -5px;
          height: 10px;
          transform: rotate(90deg);
        }
      }
    }

    > ul {
      // padding-left: 26px;

      li {
        /* padding-left: 29px; */
        cursor: pointer;

        &:hover {
          a {
            color: #646cff;
          }
        }

        a {
          height: 48px;
          line-height: 48px;
          display: flex;

          &.router-link-active,
          &.active {
            color: #646cff;
          }

          b {
            font-weight: normal;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
