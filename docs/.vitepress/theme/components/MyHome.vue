<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div class="Ivy-content">
    <img
      :src="theme.avator"
      width="135"
      height="135"
      class="avator"
    />
    <div class="enTitle">Hi, I'm Ivy</div>
    <div class="znTitle">A frontend developer who is building in web3.</div>
    <svg
      t="1692845102359"
      class="bottom-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4005"
      width="32"
      height="32"
      @click=""
    >
      <path
        d="M497.408 716.8l-417.792-287.1808a25.6 25.6 0 0 1-6.656-35.84l36.608-53.1968a25.6 25.6 0 0 1 35.84-6.656l367.2064 252.416 365.9264-252.3136a25.6 25.6 0 0 1 35.84 6.5536l36.6592 53.1968a25.6 25.6 0 0 1-6.5536 35.84L528.0768 716.8a27.0848 27.0848 0 0 1-30.6688 0z"
        p-id="4006"
        fill="#ffffff"
      ></path>
    </svg>
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
@keyframes bottom-transform {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0px);
  }
}
.Ivy-content {
  background: url('/bg-dark.jpg');
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  .avator {
    border-radius: 50%;
    border: 5px solid var(--vp-avator-border);
    margin-bottom: 1rem;
  }
  .avator:hover {
    animation: 3s linear 0s infinite avator-transform;
    cursor: pointer;
  }
  .enTitle {
    font-size: 28px;
    // white-space: nowrap;
    margin-bottom: 1rem;
  }
  .znTitle {
    font-size: 18px;
    margin-bottom: 4rem;
    font-weight: 300;
  }
  .bottom-icon {
    animation: bottom-transform 1s infinite alternate;
    cursor: pointer;
  }
}
</style>
