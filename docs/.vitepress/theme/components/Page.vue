<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { theme, isDark } = useData()
const postsAll = theme.value.posts || []
</script>
<template>
  <div class="ivy-page">
    <h1 class="ivy-page-blogs">Blogs</h1>
    <div
      v-for="(item, index) in postsAll"
      :key="index"
      class="ivy-page-item"
      :class="{ pageItemDark: isDark }"
    >
      {{ item }} --{{ isDark }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.ivy-page {
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ivy-page-blogs {
    margin: 2rem;
    font-size: 24px;
    font-weight: 600;
  }
  .ivy-page-item {
    width: 50%;
    height: 200px;
    background-color: #f5f5f5;
    border: var(--vp-c-brand);
    margin-bottom: 2rem;
    border-radius: 2rem;
  }
  .pageItemDark {
    background-color: var(--vp-c-brand-dimm);
    border: 1px solid rgba(219, 220, 224, 0.2);
    // box-shadow: 2px 2px 1px 1px rgba(255, 255, 255, 0.2);
  }
}
</style>
