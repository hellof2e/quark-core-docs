<template>
  <header class="header">
    <div>
      <div class="container">
        <div class="left-bar">
          <a href="/" class="logo"></a>
          <div style="margin-left: 20px; display: flex">
            <span style="margin-right: 4px"> (docs for Quarkc) </span>
          </div>

          <div ref="searchRef" id="docsearch"></div>
        </div>

        <div class="toper-bar">
          <div class="menu-group">
            <div class="nav-item flyout">
              <button type="button">
                <span>{{ ecosystemLangs.docs }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="flyout-button-text-icon"
                >
                  <path
                    d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
                  ></path>
                </svg>
              </button>

              <div class="flyout-menu">
                <div class="menu-wrap">
                  <div class="menu-items">
                    <div class="menu-item-group">
                      <p class="menu-group-title">
                        {{ ecosystemLangs.docsTitle }}
                      </p>

                      <a
                        v-for="item in ecosystemLangs.stacks"
                        :key="item"
                        class="link menu-link"
                        :href="`https://quark-ecosystem.github.io/quarkd-docs/${item.toLowerCase()}`"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ item }} {{ isZhLang ? "文档" : "documentation" }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nav-item menu">
              <a
                target="_blank"
                href="https://quark-ecosystem.github.io/quarkc-docs/playground"
              >
                Playground
              </a>
            </div>

            <div class="nav-item flyout">
              <button type="button">
                <span>{{ ecosystemLangs.ecosystem }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="flyout-button-text-icon"
                >
                  <path
                    d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
                  ></path>
                </svg>
              </button>
              <div class="flyout-menu">
                <div class="menu-wrap">
                  <div class="menu-items">
                    <div class="menu-item-group">
                      <p class="menu-group-title">
                        {{ ecosystemLangs.officialLibrary }}
                      </p>
                      <a
                        class="link menu-link"
                        href="https://github.com/hellof2e/quark-core/tree/main/packages/create-quarkc/template-quarkc-app-ts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ ecosystemLangs.stack }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        class="link menu-link"
                        href="https://github.com/hellof2e/quark-core/tree/main/packages/create-quarkc/template-quarkc-component-ts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ ecosystemLangs.noFrame }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <div class="menu-item-group">
                      <p class="menu-group-title">
                        {{ ecosystemLangs.resources }}
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link menu-link"
                        href="https://marketplace.visualstudio.com/items?itemName=quarkd.quarkd-vscode-extension"
                      >
                        {{ ecosystemLangs.vscodePlugin }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <div class="menu-item-group">
                      <p class="menu-group-title">{{ ecosystemLangs.help }}</p>
                      <a
                        class="link menu-link"
                        href="https://github.com/hellof2e/quark-design/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ ecosystemLangs.gitHubDiscussions }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-item flyout">
              <button type="button">
                <span>{{ ecosystemLangs.domesticMirror }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="flyout-button-text-icon"
                >
                  <path
                    d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
                  ></path>
                </svg>
              </button>

              <div class="flyout-menu">
                <div class="menu-wrap">
                  <div class="menu-items">
                    <div class="menu-item-group">
                      <p class="menu-group-title">
                        {{ ecosystemLangs.mirrorAddress }}
                      </p>
                      <a
                        v-for="item in ecosystemLangs.mirrors"
                        :key="item"
                        class="link menu-link"
                        :href="`https://quark-ecosystem.${item.toLocaleLowerCase()}.io/quarkc-docs`"
                        rel="noopener noreferrer"
                      >
                        {{ item }} {{ isZhLang ? "镜像" : "Mirror" }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          class="link-icon"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="translations">
            <a
              class="translate-lang"
              href="javascript:void(0);"
              @click="switchLang"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                  class="css-c4d79v"
                ></path>
              </svg>
            </a>
          </div>

          <div class="appearance">
            <div class="toggle">
              <div class="track">
                <div class="check">
                  <img
                    src="data:image/png;base64,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"
                    width="16"
                    height="16"
                    role="presentation"
                    style="pointer-events: none"
                  />
                </div>
                <div class="x">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABwNJREFUWAmtV1tsFFUY/s6Z2d22zLYlZakUCRVaQcqlWIiCiS1gTEB9UAO+GR9En3iQGI0xJiSiRB98MjEq8cEQTSBeHhQM0V7whtEGDWC90BYitxahtNtu25058/v/ZzvLbilawJNM5+yZ89+//1LgJhYRNLW1uDfBAvpGiIk2O5auvfFxqIH3ZJ8/u06GN6Z9+wVl5SjcD1IbZa/UPkPyYl2uR4dreoD2bnbYxTlBBRytkHXtAREphP5KuH4lddx9h70yxX05t7yYXwGb6W8nx1jibpl2rFlGBxcG9M18okOrn7Bnk/BAO/4bI0UeEE1zjBp3UmvjOxJXJdaKN/ZiIu4tOZrAb4aTdZAZArKmWeiiJZ6jt5tiagdCS9+6cgO1Ne6Mvhe+ixTIfyDVhipnK9p+P0Edqx9RW/YZtQVGmOLChRxNNlyPsTEgPQKMB3dbEHa0h1awYmQ83enTd2vmUtvKd1Glv2RkzBb+kZGRrKtjzG60Wguhd/lJZBingbcfWWe72vjT75bJDrhYtvA0hrurETDr5HyF2Knb1MM4ab//xIoOqueA0edRnkkinTyJdYvqLFDZO4zUPFCvVoDjJq4T7TE61IWh4x5KqxX5KVKkX8WZ/t2ov2cb3MHt4dhIyOxIJxJOOF6xRx/99BksXLoecWcXytILMNBDqKpnGZWPquYfPxY8iXGR9fK+SgFrgcRPXPjVqhehL+3EmZ5RGJQi1QBU8TPThQnOQzm+5UXGIcetUeEAfP13VwzpI+w1jGJWdSliNfvVhiMPiOsllJag4M/UGHiqM6dlBb2OTLKHHV6KkvogrJ4XhBWniWK/Gp1MQyf93FOeUXKmKk/FzJxbQtKLjFXYT4USupy8fQVir2ynVEBiZMG0qtOHMS/AW4Gwrk7BG3C1F0B5nqNKE0CME4MfVRLPnXkBKe+ipvoFhNQywOhdghvLi0F8ReyVXV4BKTBRbbe5f64zR/DHsdZw1hJfeWlHl/GNRJzDxrd5m192z78TMaVnKELZoINZS4BzQ7vtnZljSnha/pPCbkuxzXcupYwI5tIeCpGc0Yp9tWHZQy/rmYhRfNgg4bHJBYLzGkxsRJF4XKlE2jBOHNSv3kY7Tj6vthzPFl61BrYwqFlmEQhtSVXmLiksxLmtRgYXI1ULU61JJ4eVKmG3/5sCVgpbMT6OMJ2E08/29Xf3w6v4FnHdCjfWgXu/O8Z5mLdCkeRs2khHe1DqOtQwbHWTAnM5S2HNmhALYo5KjkPFrMMKjZl6HxhWIAb0BqE+/73GrBRQUsKYiBu4JX8ycI6wtw+i5ef3NZpsrKVSHYCP37jwGDgeE1SA0S/xtl5SU2fs1ApEp0qTLVRjgyycDSsLHMSwmFltZMStR3uLLg6BdLhDa5dC6ryU2pHBe1BVO9tUcwfitJt2CLJZUHoG6T7Op75u0IyK31TCPcwFqgPk/KCaD3dFOuZBCO7xvCT/j048b3I3c7F2+WuOW7qdgkucFYlcQ4qop3yzTX7WaKfOCccye3Ts1Etq0+a/BHCF1yPgF3tAUkR6OrtGmo6gl94qqcXKh3rDyrOkPa58URoWcov2Mo6M+0QjrqKB+b7++oMa9Sz+ZkM0mie6aAtnGUvhmxaI+TogPOSQedgWioGSHFLn3v4kLh4HRspNmOGv41k+55siLFp2z6xYeJjhljFcbmxJlr4ga06TbevSByz/glQq4BJx46/c+237PbBqEYKxX3HpmKZEnQnr65X20hqJYaNcLoFOLiJk2LuBbyg7Q0OEn+hm0P3honxFD6rdxYorKpeIoi4YSSvyQHQIbM5t4+YNxLj/OxhVOOE4585qGpjnq+wSx6Q9CtNxTjd5klB+g6Mv36r0+b9cZFi44WYkHdG2ZWb3TtOUOXyVAlKlpGvJIAJ3eBMyfYS5C0qRZGtC85j+4sOasDe9xznPYezhhO/2Q6eP2fSOvYHOjtuQ1a9Q1VKynVDaMc8E0tptdxUsTFpFIYjcZKcbnoaQTNdiqCwNlL4G7oziSqGnT1ALf34vhk4R5zU3qYV9ONp9K88RtouShE68JwaU8dFw5W617shWa9ykeaBIn2hcsvPgL00k45QdTCZuSVcTRNs+8fnyLvooQfR5iujAnR9bxfY2xOVOxFS8SK3Le0l48VyYu1M8HRe5JD8wKPTjYnifaK3Wfn/GChYQ8ZAi6WRzWgqLV5YrsVLnZaVSoXU1g9gOIDwFySiGi+Zdrnzr7J3r+SMuszlcQCRn8lNGcTuSy2jOI7o9mxjZo+vR3ej3tN+ifRSOyUTS0+VMOid93cCubeiy/6TImS0QxRSCq2vxKr45zV+FQnjWH6D2xg+E9EatLcLAdHTgtGGD80D6jM0+aOl4wJgO/f96R2aJKCQ3yvgftRhdFMOpd6oAAAAASUVORK5CYII="
                    width="16"
                    height="16"
                    role="presentation"
                    style="pointer-events: none"
                  />
                </div>
              </div>
              <div class="thumb"></div>
            </div>
          </div>

          <div class="social-links">
            <a
              href="https://github.com/hellof2e/quark-design/discussions"
              class="github-link"
              target="_blank"
            >
              <svg
                t="1679995277175"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5433"
                width="200"
                height="200"
              >
                <path
                  d="M860.16 430.08c0-223.744-192-402.944-431.616-402.944C191.488 27.136 0 209.408 0 430.08c0 73.728 22.528 143.872 57.344 201.216l-41.472 140.8c-9.728 35.328 9.728 51.2 41.472 41.472l134.144-44.544c67.072 41.472 146.944 64 233.472 64 243.2 3.072 435.2-179.2 435.2-402.944z m-214.528-54.272c28.672 0 54.272 25.6 54.272 54.272s-25.6 54.272-54.272 54.272-54.272-25.6-54.272-54.272 25.6-54.272 54.272-54.272zM214.016 484.352c-28.672 0-54.272-25.6-54.272-54.272s25.6-54.272 54.272-54.272 54.272 25.6 54.272 54.272-22.016 54.272-54.272 54.272z m163.328-54.272c0-28.672 25.6-54.272 54.272-54.272s54.272 25.6 54.272 54.272-25.6 54.272-54.272 54.272-54.272-22.528-54.272-54.272z m0 0"
                  p-id="5434"
                ></path>
                <path
                  d="M965.632 794.624c35.328-60.928 57.344-128 57.344-201.216 0-112.128-48.128-210.944-124.928-284.672 12.8 38.4 18.944 79.872 18.944 124.928v35.328c18.944 38.4 28.672 82.944 28.672 128 0 57.344-15.872 112.128-44.544 159.744l-18.944 28.672 9.728 35.328 15.872 54.272-51.2-15.872-35.328-12.8-31.744 18.944c-57.344 35.328-124.928 54.272-192 54.272-51.2 0-99.328-9.728-140.8-28.672H437.76c-54.272 0-108.544-9.728-156.672-25.6 79.872 79.872 192 131.072 320 131.072 86.528 0 166.4-25.6 233.472-64l143.872 48.128c28.672 9.728 44.544-6.144 35.328-35.328l-48.128-150.528z m0 0"
                  p-id="5435"
                ></path>
              </svg>
            </a>

            <a href="{this.githubUrl}" class="github-link" target="_blank">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from "vue";
import { docs } from "@/config";

const langs = {
  "zh-CN": {
    ecosystem: "生态系统",
    docsTitle: "组件库文档",
    component: "组件",
    docs: "组件库",
    guide: "指南",
    officialLibrary: "官方工具",
    stack: "用 Quark 构建跨技术栈组件",
    noFrame: "用 Quark 构建无框架应用（Beta）",
    resources: "资源",
    vscodePlugin: "VSCode 插件",
    help: "帮助",
    gitHubDiscussions: "GitHub 论坛",
    stacks: ["Vue", "React", "Vanilla", "Svelte", "Angular"],
    domesticMirror: "国内镜像",
    mirrorAddress: "镜像地址",
    mirrors: ["Github", "Gitee"],
  },
  "en-US": {
    ecosystem: "Ecosystem",
    docsTitle: "Docs",
    component: "Components",
    docs: "Docs",
    guide: "Guide",
    officialLibrary: "Offical Tools",
    stack: "Building cross-technology-stack components with Quark",
    noFrame: "Building frameworkless applications with Quark (Beta)",
    resources: "RESOURCES",
    vscodePlugin: "VSCode Plugin",
    help: "HELP",
    gitHubDiscussions: "GitHub Discussions",
    stacks: ["Vue", "React", "Vanilla", "Svelte", "Angular"],
    domesticMirror: "Domestic Mirror",
    mirrorAddress: "Mirror Address",
    mirrors: ["Github", "Gitee"],
  },
};

const turnDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const turnLight = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

export default defineComponent({
  name: "Header",
  props: {
    fixed: Boolean,
  },
  setup() {
    const isZhLang = localStorage.getItem("language") === "zh-CN";

    onMounted(() => {
      const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
      const toggle = document.querySelector(".toggle");

      if (localStorage.theme === "dark") {
        turnDark();
      } else if (localStorage.theme === "light") {
        toggle.classList.toggle("dark");
        turnLight();
      } else if (themeMedia.matches) {
        document.classList.add("dark");
      }

      toggle.addEventListener("click", (e) => {
        toggle.classList.toggle("dark");

        if (toggle.classList.contains("dark")) {
          turnLight();
        } else {
          turnDark();
        }
      });
    });

    const switchLang = (lang: string) => {
      let href = "";
      if (localStorage.getItem("language") === "en-US") {
        localStorage.setItem("language", "zh-CN");
        href = location.href.replace("en-US", "zh-CN");
      } else {
        localStorage.setItem("language", "en-US"); // 中文
        href = location.href.replace("zh-CN", "en-US");
      }
      location.href = href;
      window.location.reload();
    };

    return {
      isZhLang,
      lang: localStorage.getItem("language"),
      docs: reactive(docs),
      ecosystemLangs: isZhLang ? langs["zh-CN"] : langs["en-US"],
      curHost: location.origin,
      guideUrl: `${location.origin}${location.pathname}#/${localStorage.getItem(
        "language"
      )}/guide/quickstart`,
      switchLang,
    };
  },
});
</script>
<style lang="scss" src="./index.scss"></style>
