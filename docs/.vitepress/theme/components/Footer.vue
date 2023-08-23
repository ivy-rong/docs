<script setup lang="ts">
const data = new Date().getFullYear()
</script>

<template>
  <footer>
    Powered by
    <a
      href="https://github.com/Upwards-rwr"
      target="_blank"
      title="作者"
      >Upwards</a
    >
    | Copyright © 2023 - {{ data }} | MIT License
  </footer>
</template>

<style scoped lang="scss">
footer {
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  width: 100%;
  bottom: 0px;
  position: absolute;
  padding: 6px 0;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  a {
    color: var(--vp-c-brand);
    font-weight: bold;
  }
  a:hover {
    color: var(--vp-c-hover);
  }
}
</style>
