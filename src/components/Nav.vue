<template>
  <div
    v-if="isShowSideBar()"
    class="doc-nav w-[260px] border-r border-solid border-gray-200 dark:border-gray-800 overflow-auto fixed left-0 bottom-0 z-10 transition-all"
    :class="{ 'fixed-class': fixed }"
  >
    <ol
      class="pl-[32px] mb-6 dark:text-gray-400"
      v-for="_nav in docs"
      :key="_nav"
    >
      <li>{{ isZhLang ? _nav.cName : _nav.name }}</li>
      <ul>
        <template
          :class="{}"
          v-for="_package in reorder(_nav.packages)"
          :key="_package"
        >
          <li v-if="_package.show">
            <router-link
              :to="_package.name.toLowerCase()"
              :class="{ active: isActive(_package.name) }"
              class="dark:text-gray-400 dark:dark-router-link-active"
            >
              {{ isZhLang ? _package.cName : _package.name }}&nbsp;&nbsp;
            </router-link>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { RefData } from "@/assets/util/ref";
import { docs } from "@/config";

export default defineComponent({
  name: "DocNav",
  props: {
    fixed: Boolean,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      // fixed: false,
      isGuideNav: false,
    });

    const docMd = localStorage.getItem("docMd");
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
      return true;
    };

    const isShowSideBar = () => {
      return true;
    };

    const isActive = computed(() => {
      return function (name: string) {
        // const currentValue = RefData.getInstance().currentRoute.value;
        // const value = currentValue;
        // return value == name.toLowerCase();
        return false;
      };
    });

    const reorder = (packages: any) => {
      return packages.sort(function (x: any, y: any) {
        return x["name"].localeCompare(y["name"]);
      });
    };

    onMounted(() => {
      if (route.path) getIsGuaid(route.path);
    });

    const getIsGuaid = (path: string) => {
      state.isGuideNav = path.indexOf("guide") > -1;
    };

    onBeforeRouteUpdate((to: any) => {
      getIsGuaid(to.path);
    });

    return {
      ...toRefs(data),
      ...toRefs(state),
      isZhLang: localStorage.getItem("language") === "zh-CN",
      isActive,
      docMd: localStorage.getItem("docMd"),
      docs: reactive(docs),
      reorder,
      isShow,
      isShowSideBar,
    };
  },
});
</script>

<style lang="scss">
.doc-nav {
  top: 75px;
  &.fixed-class {
    top: 0;
  }
  ol {
    margin-bottom: 20px;
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
      li {
        padding-left: 29px;
        cursor: pointer;

        &:hover {
          a {
            color: #38bdf8;
          }
        }

        a {
          height: 48px;
          line-height: 48px;
          display: flex;

          &.router-link-active,
          &.active {
            color: #38bdf8;
          }

          &:hover {
            color: #38bdf8;

            &:visited {
              color: #38bdf8;
            }
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
