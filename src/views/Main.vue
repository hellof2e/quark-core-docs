<template>
  <Header></Header>

  <main class="home-main">
    <section class="home-section">
      <div class="home-text">
        <div>
          <span class="home-title">Quarkc</span>

          <p class="home-subtitle">
            {{ t("homeSubtitle") }}
          </p>
          <p class="tagline">WebComponents · JSX/TSX</p>

          <div class="actions">
            <a
              class="link-btn get-started"
              :href="`${
                isZhLang ? `#/zh-CN/docs/introduce` : `#/en-US/docs/introduce`
              }`"
            >
              Get started →
            </a>

            <button class="btn install-btn" @click="copyPrompt">
              npm create quarkc@latest
              <div class="cta-icon">
                <svg
                  :class="iconCopiedChange ? 'copy icon-copied' : 'copy'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  aria-label="copy icon"
                >
                  <path
                    stroke="#73849A"
                    stroke-linejoin="round"
                    d="M12.72 4H5.78C4.8 4 4 4.8 4 5.78v6.94c0 .98.8 1.78 1.78 1.78h6.94c.98 0 1.78-.8 1.78-1.78V5.78c0-.98-.8-1.78-1.78-1.78Z"
                  ></path>
                  <path
                    stroke="#73849A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.98 4 .02-.75a1.75 1.75 0 0 0-1.75-1.75H3.5a2 2 0 0 0-2 2v6.75A1.76 1.76 0 0 0 3.25 12H4"
                  ></path>
                </svg>

                <svg
                  :class="
                    iconCopiedChange ? 'checkmark icon-copied' : 'checkmark'
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                  aria-label="checkmark icon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M416 128L192 384l-96-96"
                  ></path>
                </svg>
              </div>
            </button>

            <button class="btn">Playground</button>
          </div>
        </div>
      </div>
      <div class="home-logo">
        <div class="image-bg"></div>
        <div class="logo-bg"></div>
      </div>
    </section>

    <section class="advantage" id="advantage" ref="scrollToThisRef">
      <div class="wrap">
        <div class="box-group">
          <a
            class="box box1 link-box"
            target="_blank"
            href="https://github.com/hellof2e/quark-core/tree/main/packages/create-quarkc/template-quarkc-app-ts"
          >
            <h2>
              {{ t("box1Title") }}
            </h2>
            <p>{{ t("box1Desc") }}</p>

            <div class="box-link">
              <div class="box-link-text">
                Getting Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="link-text-icon"
                  data-v-ee984185=""
                >
                  <path
                    d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
          <a
            class="box box2 link-box"
            target="_blank"
            href="https://github.com/hellof2e/quark-core/tree/main/packages/create-quarkc/template-quarkc-component-ts"
          >
            <h2>{{ t("box2Title") }}</h2>
            <p>{{ t("box2Desc") }}</p>

            <div class="box-link">
              <p class="box-link-text">
                Getting Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="link-text-icon"
                  data-v-ee984185=""
                >
                  <path
                    d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"
                  ></path>
                </svg>
              </p>
            </div>
          </a>
          <div class="box box3">
            <h2>{{ t("box3Title") }}</h2>
            <p>{{ t("box3Desc") }}</p>
          </div>
          <div class="box box4">
            <h2>{{ t("box4Title") }}</h2>
            <p>{{ t("box4Desc") }}</p>
          </div>
          <div class="box box5">
            <h2>{{ t("box5Title") }}</h2>
            <p>{{ t("box5Desc") }}</p>
          </div>
          <div class="box box6">
            <h2>{{ t("box6Title") }}</h2>
            <p>{{ t("box6Desc") }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="main-footer">
    <div class="container">
      <p class="message" data-v-8c8dec7c="">Released under the MIT License.</p>
      <p class="copyright" data-v-8c8dec7c="">
        Copyright © 2021-PRESENT Hellof2e
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  toRefs,
  reactive,
  watch,
  onUnmounted,
} from "vue";
import { useI18n } from "vue-i18n";
import Header from "@/components/Header/index.vue";

export default defineComponent({
  name: "Main",
  components: {
    Header,
  },
  setup() {
    const { t } = useI18n();
    let darkMode = ref(false);
    const scrollToThisRef = ref(null);

    const state = reactive({
      timeInter: null, //定义定时器
    });

    onMounted(() => {
      if (document.documentElement.classList.contains("dark")) {
        darkMode.value = true;
      }
    });

    onUnmounted(() => {
      state.timeInter = null;
    });

    let iconCopiedChange = ref(false);
    const copyPrompt = function () {
      const text = "npm create quarkc@latest";
      if (navigator.clipboard) {
        // clipboard api 复制
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = "fixed";
        textarea.style.clip = "rect(0 0 0 0)";
        textarea.style.top = "10px";
        // 赋值
        textarea.value = text;
        // 选中
        textarea.select();
        // 复制
        document.execCommand("copy", true);
        // 移除输入框
        document.body.removeChild(textarea);
      }

      iconCopiedChange.value = true;

      setTimeout(() => {
        iconCopiedChange.value = false;
      }, 2000);
    };

    const handleLinkToTemplate = () => {
      location.href =
        "https://github.com/hellof2e/quark-core/tree/main/packages/create-quarkc/template-quarkc-app-ts";
    };

    return {
      isZhLang: localStorage.getItem("language") === "zh-CN",
      t,
      darkMode,
      handleLinkToTemplate,
      scrollToThisRef,
      copyPrompt,
      iconCopiedChange,
    };
  },
});
</script>

<style lang="scss" src="./main.scss"></style>
