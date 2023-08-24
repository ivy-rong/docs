import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Blog',
  description: 'A VitePress Site',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }]
    // ['meta', { property: 'og:type', content: 'website' }]
  ],
  sitemap: {
    hostname: 'https://example.com'
  },
  themeConfig: {
    logo: '/logo.png',
    avator: '/avator.jpg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'articles', link: '/articles' },
      { text: 'about', link: '/about' },
      { text: 'link', link: '/link' }
    ],
    aside: 'left',
    outlineTitle: 'In hac pagina',
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2023-present Ivy'
    // },
    sidebar: [
      {
        text: 'articles',
        collapsed: false,
        items: [
          { text: 'vue', link: '/articles/vue/vue' },
          { text: 'Typescript', link: '/articles/typescript/typescript' },
          { text: 'Javascript', link: '/articles/javascript/javascript' }
        ]
      },
      {
        text: 'about',
        collapsed: false,
        items: [
          { text: 'react', link: '/articles/vue/vue' },
          { text: 'ES6', link: '/articles/typescript/typescript' },
          { text: 'Javascript', link: '/articles/javascript/javascript' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Upwards-rwr/blog' }]
  }
})
