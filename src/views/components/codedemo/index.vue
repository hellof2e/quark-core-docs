<template>
  <codemirror
    v-model="code"
    disabled
    foldGutter
    :dark="true"
    :style="{ height: '460px' }"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
  />
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";

import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

const codes = {
  React: `import react from 'react'
import { Button } from '@quarkd/quark-react'

export default () => {
  return (
    <Button>Button</Button>
  )
}`,
  Vue: `<template>
    <quark-button>Button</quark-button>
</template>

<script>
  import "quarkd/lib/button"
<\/script>`,
  Angular: `import { Component } from '@angular/core
import "quarkd/lib/button"

@Component({
  template: \`<quark-button>Button</quark-button>\`
})`,
  Html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <script src="https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js" />
  <body>

    <quark-button>Button</quark-button>

  </body>
</html>
  `,
};

export default defineComponent({
  name: "CodeDemo",
  components: {
    Codemirror,
  },
  props: {
    tabName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { tabName } = toRefs(props);
    const code = ref(codes["Vue"]);
    const extensions = reactive([html(), oneDark]);

    watch(tabName, () => {
      code.value = codes[tabName.value];
      if (tabName.value === "React" || tabName.value === "Angular") {
        extensions[0] = [javascript(), oneDark];
      } else {
        extensions[0] = reactive([html(), oneDark]);
      }
    });

    return {
      code,
      extensions,
    };
  },
});
</script>
<style src="./index.scss" scoped></style>
