<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

import Footer from './Footer.vue'
import MyHome from './MyHome.vue'
</script>

<template>
  <Layout>
    <!-- Home slot-->
    <template #home-hero-before><MyHome /> </template>
    <template #home-features-after> <div>13123</div></template>
  </Layout>
  <Footer />
</template>
