<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

import Footer from './Footer.vue'
import MyHome from './MyHome.vue'
import Page from './Page.vue'
</script>

<template>
  <Layout>
    <div></div>
    <!-- Home slot -->
    <template #home-hero-before><MyHome /></template>
    <template #home-hero-after><Page /></template>
  </Layout>
  <Footer />
</template>
