import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "陈元进",
  description: "前端开发",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'vue', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'vue3X',
        items: [
          { text: 'vue3发布订阅模式解析', link: '/markdown-examples' },
          { text: 'vue3的响应式数据解析', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '' }
    ]
  }
})
