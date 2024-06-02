import { defineConfig } from 'vitepress'
import VitePressSidebar from 'vitepress-sidebar';

const vitepressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'others',
    resolvePath: '/others/',
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'algorithm',
    resolvePath: '/algorithm/',
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'problems',
    resolvePath: '/problems/',
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
      { text: 'Others', link: '/others/' },
      { text: 'Problems', link: '/problems/' },
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
