<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    if (localStorage.theme === 'dark' || ('theme' in localStorage)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
});
</script>

<style lang="scss">
::selection {
  background: #38bdf8;
  color: #fff;
}
#doc {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
