<template>
  <div
    class="doc-demo-preview transition-all rounded-xl overflow-hidden right-[30px] top-[88px] w-[360px] min-h-[620px] fixed drop-shadow-xl"
    :class="{ 'fixed-class': fixed }">
    <iframe :src="url" id="quark-demo" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";

export default defineComponent({
  name: "DocDemoPreview",
  props: {
    url: String,
    type: String,
    fixed: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.doc-demo-preview {
  iframe {
    height: 590px;
    width: 100%;
  }
}
.fixed-class {
  top: 20px;
}
</style>
