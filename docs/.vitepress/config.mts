import { defineConfig } from 'vitepress'
import VitePressSidebar from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  documentRootPath: '/docs'
};

export default defineConfig({
  base: '/blog/',
  title: "Chase's Blog",
  description: "Documenting my upbringing",
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithm training', link: '/Alg-training/' },
      { text: 'Other', link: '/Other/'}
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChanWillian' }
    ],
    sidebar: VitePressSidebar.generateSidebar(vitepressSidebarOptions)
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
