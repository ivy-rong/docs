<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div class="content">
    <img
      :src="theme.avator"
      width="135"
      height="135"
      class="avator"
    />
    <div class="enTitle">Freedom Sobriety Independence</div>
    <div class="znTitle">自由 清醒 独立</div>
  </div>
</template>

<style scroped lang="scss">
@keyframes avator-transform {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avator {
    border-radius: 50%;
    border: 5px solid var(--vp-avator-border);
    margin-bottom: 2rem;
  }
  .avator:hover {
    animation: 3s linear 0s infinite avator-transform;
  }
  .enTitle {
    font-size: 36px;
    white-space: nowrap;
  }
  .znTitle {
    font-size: 24px;
  }
}
</style>
