<template>
  <doc-header></doc-header>

  <main class="home-main">
    <section class="home-section">
      <div class="home-text">
        <div>
          <div class="home-logo">
            <img src="/src/assets/images/quark-logo.png" alt="" />
          </div>
          <h1 class="home-title">
            {{ t("homeTitle") }}
          </h1>
          <p class="home-subtitle2 text-grad">
            {{ t("homeSubtitle2") }}
            <span class="tech-name text-grad">{{
              framework[activeFwIndex]
            }}</span>
          </p>

          <div class="actions">
            <div class="action">
              <a
                class="get-started"
                :href="`${
                  isZhLang
                    ? `#/zh-CN/guide/quickstart`
                    : `#/en-US/guide/quickstart`
                }`"
                >{{ t("getStarted") }}</a
              >
            </div>
            <div class="action">
              <a
                class="why-quark"
                :href="`${
                  isZhLang
                    ? `#/zh-CN/guide/introduction`
                    : `#/en-US/guide/introduction`
                }`"
                >{{ t("whyQuark") }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <a
        class="scroll-down"
        id="scroll-down"
        href="#we-believe"
        style="opacity: 1"
      >
        <span>{{ t("scrollDown") }}</span>
        <span class="arrow">
          <img
            v-if="darkMode"
            src="/src/assets/images/arrow2.png"
            alt="arrow"
          />
          <img v-else src="/src/assets/images/arrow-light.png" alt="arrow" />
        </span>
      </a>
    </section>

    <section class="we-believe" id="we-believe">
      <div class="wrap">
        <h2>
          {{ t("weBelieve") }}
          <img
            v-if="darkMode"
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down.png"
            height="34"
            width="36"
          />
          <img
            v-else
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down-light.png"
            height="34"
            width="36"
          />
        </h2>
        <p>
          {{ t("weBelieveDesc1") }}
        </p>
        <p style="margin-top: 1.5rem">
          {{ t("weBelieveDesc2") }}
        </p>
        <p style="margin-top: 1.5rem">
          {{ t("weBelieveDesc3") }}
        </p>
      </div>
    </section>

    <section class="what-we-do" id="what-we-do">
      <div class="wrap">
        <h2>
          {{ t("whatWeDo") }}
          <img
            v-if="darkMode"
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down.png"
            height="34"
            width="36"
          />
          <img
            v-else
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down-light.png"
            height="34"
            width="36"
          />
        </h2>
        <p>
          {{ t("whatWeDoDesc1") }}
        </p>
        <p style="margin-top: 1.5rem">
          {{ t("whatWeDoDesc2") }}
        </p>

        <div class="code-demo-tab-group">
          <button
            v-for="item in tabs"
            :key="item"
            @click="handleTabSwitch(item)"
            :class="activeTab === item ? 'active-tab' : ''"
          >
            {{ item }}
          </button>
        </div>

        <div class="code-demo-container">
          <div class="code-demo relative">
            <div>
              <div class="editor-skin-header">
                <div class="editor-skin-header-btn-group">
                  <span class="editor-skin-header-btn red"></span>
                  <span class="editor-skin-header-btn yellow"></span>
                  <span class="editor-skin-header-btn green"></span>
                </div>
              </div>
              <CodeDemo :tabName="activeTab" />
            </div>

            <div class="preview">
              <quark-button size="big" :loading="isLoading" @click="handleClick"
                >Button</quark-button
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="advantage" id="advantage">
      <div class="wrap">
        <h2>
          {{ t("advantage") }}
          <img
            v-if="darkMode"
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down.png"
            height="34"
            width="36"
          />
          <img
            v-else
            class="down-icon"
            alt="down-icon"
            src="/src/assets/images/i-down-light.png"
            height="34"
            width="36"
          />
        </h2>
        <div class="box-group">
          <div class="box1">
            <h2>{{ t("box1Title") }}</h2>
            <p>{{ t("box1Desc") }}</p>
          </div>
          <div class="box2">
            <h2>{{ t("box2Title") }}</h2>
            <p>{{ t("box2Desc") }}</p>
          </div>
          <div class="box3">
            <h2>{{ t("box3Title") }}</h2>
            <p>{{ t("box3Desc") }}</p>
          </div>
          <div class="what">
            <p>{{ t("whatDesc1") }}</p>
            <p>{{ t("whatDesc2") }}</p>
            <p>
              <a href="https://github.com/hellof2e/quark-cli" target="_blank"
                >阅读此篇</a
              >
              了解更多信息。
            </p>
          </div>
          <div class="how">
            <div class="bash-code">
              <pre class="language-bash">
npx create-quark-app create project-name
cd project-name

npm install
npm start
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div class="footer-container">
    <footer>
      <div class="text-xs text-gray-400">
        A project by <a href="/"> Quark Labs</a>
      </div>
    </footer>
  </div>
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
import Header from "@/components/Header.vue";
import CodeDemo from "./components/codedemo/index.vue";

export default defineComponent({
  name: "Main",
  components: {
    [Header.name]: Header,
    CodeDemo,
  },
  setup() {
    const { t } = useI18n();
    let darkMode = ref(false);
    const isLoading = ref(false);

    const data = reactive({
      tabs: ["Vue", "React", "Angular", "Html"],
      activeTab: "Vue",
      tabIndex: 1,
      framework: ["Vue2.x", "Vue3.x", "React", "Angular", "Svelte", "JQuery"],
    });

    let activeFwIndex = ref(0);
    const state = reactive({
      timeInter: null, //定义定时器
    });

    onMounted(() => {
      state.timeInter = setInterval(() => {
        if (activeFwIndex.value >= 5) {
          activeFwIndex.value = 0;
        } else {
          activeFwIndex.value++;
        }
      }, 3000);

      if (document.documentElement.classList.contains("dark")) {
        darkMode.value = true;
      }

      const intersectionObserver = new IntersectionObserver((entries) => {
        // 进入视窗
        if (entries[0].isIntersecting) {
          document.querySelector("#scroll-down").style.opacity = 0;
        } else {
          document.querySelector("#scroll-down").style.opacity = 1;
        }
      });
      intersectionObserver.observe(document.querySelector("#we-believe"));
    });

    const handleTabSwitch = (tab) => {
      data.activeTab = tab;
    };

    const handleClick = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000); // 点击2s后loading消失
    };

    watch(activeFwIndex, () => {
      document.querySelector(".tech-name").style.animation =
        "3s infinite text-alter";
    });

    onUnmounted(() => {
      clearInterval(state.timeInter); //销毁
      state.timeInter = null;
    });

    return {
      isZhLang: localStorage.getItem("language") === "zh-CN",
      t,
      darkMode,
      activeFwIndex,
      ...toRefs(data),
      isLoading,
      handleClick,
      handleTabSwitch,
    };
  },
});
</script>

<style lang="scss" src="./main.scss"></style>
