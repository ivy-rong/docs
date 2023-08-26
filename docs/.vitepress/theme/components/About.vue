<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme, isDark, frontmatter } = useData()
const bgUrl = computed(() => {
  return isDark.value ? '/bg-dark.jpg' : '/bg-light.jpg'
})
</script>

<template>
  <div class="ivy-about">
    <!-- <div style="background:url({{widget_data.my_hero_image.src}})></div> -->
    <div>
      <div>qeqweqw</div>
      <div>
        :::info | Tables | Are | Cool | | ------------- | :-----------: | ----: | | col 3 is | right-aligned | $1600 | |
        col 2 is | centered | $12 | | zebra stripes | are neat | $1 | :::
      </div>
    </div>
    <!-- <div>{{ theme }}</div> -->
  </div>
</template>

<style scoped lang="scss">
.ivy-about {
  width: 100%;
  height: 100vh;
  background: url('/bg-dark.jpg');
}
</style>
