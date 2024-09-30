import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "*c* CTF wiki",
  description: "NUAA wiki for *c* CTFer.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/index' },
      { text: 'CTF新生培训2024秋', link: '/CTF新生培训2024秋/index' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'index', link: '/wiki/index' },
          {
            text: 'Web',
            items: [
              { text: 'index', link: '/wiki/web/index' },
            ]
          },
          {
            text: 'Reverse',
            items: [
              { text: 'index', link: '/wiki/reverse/index' },
            ]
          },
          {
            text: 'Pwn',
            items: [
              { text: 'index', link: '/wiki/pwn/index' },
            ]
          },
          {
            text: 'Crypto',
            items: [
              { text: '密码学指北', link: '/wiki/crypto/密码学指北' },
            ]
          },
          {
            text: 'Misc',
            items: [
              { text: 'index', link: '/wiki/misc/index' },
            ]
          },
          {
            text: 'AI',
            items: [
              { text: 'index', link: '/wiki/ai/index' },
            ]
          },
        ]
      },
      {
        text: 'CTF新生培训2024秋',
        items: [
          { text: '大纲', link: '/CTF新生培训2024秋/index' },
          { text: '第一周', link: '/CTF新生培训2024秋/第一周' },
          { text: '第二周', link: '/CTF新生培训2024秋/第二周' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/starcstar/CTF-wiki' }
    ],

    search: {
      provider: 'local'
    }
  }
})
