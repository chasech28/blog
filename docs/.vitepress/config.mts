import { defineConfig } from 'vitepress'
import VitePressSidebar from 'vitepress-sidebar';

const sidebarOptions = [ 
  {
    documentRootPath: 'docs',
    scanStartPath: 'ObsidianFiles/0400学习管理/算法训练',
    //简化前
    // resolvePath: 'ObsidianFiles/0400学习管理/算法训练/',
    //简化后
    resolvePath: '算法训练/',
  },
];

export default defineConfig({
  base: '/blog/',
  title: "Chase's Blog",
  description: "learn blog",
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  rewrites: { 
    //简化站内网页的路径
    //开启此选项后，站内的路径，必须使用简化后的路径
    'ObsidianFiles/0400学习管理/:dir/:article': ':dir/:article',
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '算法训练', link: '/算法训练/' },
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chasech28' }
    ],
    sidebar: VitePressSidebar.generateSidebar(sidebarOptions)
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})

