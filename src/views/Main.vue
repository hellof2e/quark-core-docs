<template>
  <quark-doc-header></quark-doc-header>

  <main class="home-main">
    <section class="home-section">
      <div class="home-text">
        <div>
          <div class="home-logo">
            <img src="/src/assets/images/quark-logo.png" alt="" />
          </div>
          <h1 class="home-title">{{ t("homeTitle") }}</h1>
          <p class="home-subtitle2 text-grad">
            {{ t("homeSubtitle2") }}
            <span class="tech-name text-grad">{{
              framework[activeFwIndex]
            }}</span>
          </p>

          <div class="actions">
            <div class="action">
              <a
                class="get-started-quarkc"
                :href="`${
                  isZhLang ? `#/zh-CN/docs/introduce` : `#/en-US/docs/introduce`
                }`"
              >
                <p class="button-logo">
                  <img
                    src="https://m.hellobike.com/resource/helloyun/13459/5UF9v_quarkc.png?x-oss-process=image/quality,q_80"
                    alt=""
                  />
                </p>
                <p>
                  {{ t("getStartedQuarkc") }}
                </p>
              </a>
            </div>
            <div class="action">
              <a class="get-started-quarkd" :href="quarkdLink">
                <p class="button-logo">
                  <img
                    src="https://m.hellobike.com/resource/helloyun/13459/L4ass_quarkd.png?x-oss-process=image/quality,q_80"
                    alt=""
                  />
                </p>
                <p>
                  {{ t("getStartedQuarkd") }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        class="scroll-down"
        id="scroll-down"
        @click="scrollDown"
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

    <!-- <section class="our-product">
      <div class="wrap">
        <div class="quarkc">
          <a href="https://quark.hellobike.com/#/zh-CN/docs/introduce">
            <img
              src="https://m.hellobike.com/resource/helloyun/13459/H3kyK_quarkc-light.png?x-oss-process=image/quality,q_80"
              alt=""
            />
            <p>Quarkc，低成本构建跨技术栈，无框架 Web 组件！</p>
          </a>
        </div>
        <div class="quarkd">
          <a
            href="https://vue-quarkdesign.hellobike.com/#/zh-CN/component/button"
          >
            <img
              src="https://m.hellobike.com/resource/helloyun/13459/MRdWv_quarkd-light.png?x-oss-process=image/quality,q_80"
              alt=""
            />
            <p>Quarkd，下一代浏览器原生组件库！</p>
          </a>
        </div>
      </div>
    </section> -->

    <section class="advantage" id="advantage" ref="scrollToThisRef">
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
            <!-- <p>{{ t("whatDesc2") }}</p>
            <p>{{ t("whatDesc3") }}</p> -->
            <p>
              <a href="/#/zh-CN/docs/introduce" target="_blank">阅读此篇</a>
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
              <quark-button size="big">Button</quark-button>
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
import CodeDemo from "./components/codedemo/index.vue";

import "quarkd/lib/button";
import "quark-doc-header/lib/index";

export default defineComponent({
  name: "Main",
  components: {
    CodeDemo,
  },
  setup() {
    const { t } = useI18n();
    let darkMode = ref(false);
    const scrollToThisRef = ref(null);

    const data = reactive({
      tabs: ["Vue", "React", "Angular", "Html"],
      activeTab: "Vue",
      tabIndex: 1,
      framework: ["Vue2.x", "Vue3.x", "React", "Angular", "Svelte", "JQuery"],
      quarkdLink: `https://vue-quarkdesign.hellobike.com/#/${
        localStorage.getItem("language")
          ? localStorage.getItem("language")
          : "zh-CN"
      }/component/button`,
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

    watch(activeFwIndex, () => {
      document.querySelector(".tech-name").style.animation =
        "3s infinite text-alter";
    });

    onUnmounted(() => {
      clearInterval(state.timeInter); //销毁
      state.timeInter = null;
    });

    const scrollDown = () => {
      scrollToThisRef.value.scrollIntoView({
        behavior: "smooth",
      });
    };

    return {
      isZhLang: localStorage.getItem("language") === "zh-CN",
      t,
      darkMode,
      activeFwIndex,
      ...toRefs(data),
      handleTabSwitch,
      scrollDown,
      scrollToThisRef,
    };
  },
});
</script>

<style lang="scss" src="./main.scss"></style>
