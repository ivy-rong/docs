---
# https://vitepress.dev/reference/default-theme-home-page
# layout: about
# title: about
# sidebar: false
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
import { useData } from 'vitepress'

const { page } = useData()
</script>

## 1111111111

耳机我二姐

## 11111111

<pre>{{ page }}</pre>

The count is: {{ count }}
:::info
| Tables | Are | Cool |
| ------------- | :-----------: | ----: |
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |
:::
::: v-pre
{{ This will be displayed as-is }}
:::

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
