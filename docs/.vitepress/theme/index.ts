// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Articles from './components/Articles.vue'
import MyHome from './components/MyHome.vue'
import Link from './components/Link.vue'
import About from './components/About.vue'
import Layout from './components/Layout.vue'
import './style.css'

export default {
  extends: Theme,
  Layout,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Link', Link)
    app.component('About', About)
    app.component('Articles', Articles)
    app.component('MyHome', MyHome)
  }
}
