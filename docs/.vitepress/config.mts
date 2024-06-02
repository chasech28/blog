import { defineConfig } from 'vitepress'
import VitePressSidebar from 'vitepress-sidebar';

const vitepressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'Others',
    resolvePath: '/others/',
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'Algorithm',
    resolvePath: '/algorithm/',
  }
];

export default defineConfig({
  base: '/blog/',
  title: "Chase's Blog",
  description: "learn blog",
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithm', link: '/algorithm/' },
      { text: 'Others', link: '/others/' }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chasech28' }
    ],
    sidebar: VitePressSidebar.generateSidebar(vitepressSidebarOptions)
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
