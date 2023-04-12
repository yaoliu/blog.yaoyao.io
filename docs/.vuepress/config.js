const {viteBundler} = require("@vuepress/bundler-vite");
const themeConfig = require('./config/theme')

module.exports = {
  base: '/',
  title: "YaoYao's Blog",
  description: 'Have a great day.',
  // 最后更新时间
  lastUpdated: '上次更新时间', // string | boolean
  repo: 'yaoyaoio/yaoyao.io',
  // 如果你的文档不在仓库的根部
  docsDir: 'docs',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ["link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/img/logo/favicon-16x16.png`
    }],
    ["link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }],
    ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
    ["meta", {name: "theme-color", content: "#377bb5"}],
    ["meta", {name: "msapplication-TileColor", content: "#377bb5"}],
    ["meta", {name: "twitter:card", content: "summary"}],
    ["meta", {name: "twitter:site", content: "@yaoyaoio"}],
    ["meta", {name: "twitter:creator", content: "@yaoyaoio"}]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  bundler: viteBundler(),

  theme: themeConfig,

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
};
