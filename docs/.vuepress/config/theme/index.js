const {gungnirTheme} = require("vuepress-theme-gungnir");
const isProd = process.env.NODE_ENV === "production";

module.exports = gungnirTheme({
  navbarTitle: "YaoYao's Blog",
  repo: "yaoyaoio/yaoyao.io",
  docsDir: "docs",
  docsBranch: "main",

  hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
  searchText: "Search",
  catalog: true,
  blogNumPerPage: 20, // 可选：每页的博客数量，默认：10
  // personal information
  personalInfo: {
    name: "YaoYao",
    avatar: "/img/avatar.jpeg",
    description: "Have a great day.",
    sns: {
      github: "yaoyaoio",
      twitter: "yaoyaoio",
      email: "i@yaoyao.io",
      rss: "/rss.xml"
    }
  },

  // header images on home page
  homeHeaderImages: [
    {
      path: "https://i.yaoyao.io/bg/1.webp",
      mask: "rgba(40, 57, 101, .4)"
    },
    {
      path: "https://i.yaoyao.io/bg/2.webp",
      mask: "rgba(19, 75, 50, .2)"
    },
    {
      path: "https://i.yaoyao.io/bg/3.webp",
      mask: "rgba(196, 176, 131, .1)"
    },
    {
      path: "https://i.yaoyao.io/bg/4.webp",
      mask: "rgba(196, 176, 131, .1)"
    }
  ],

  // other pages
  pages: {
    tags: {
      subtitle: "Even the best make mistakes sometimes.",
      bgImage: {
        path: "/img/pages/tags.jpg",
        mask: "rgba(211, 136, 37, .5)"
      }
    }
  },

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
    katex: true,
    giscus: {
      repo: "yaoyaoio/blog-comments",
      repoId: "R_kgDOHX02Ew",
      category: "Announcements",
      categoryId: "DIC_kwDOHX02E84CPN8T",
      lazyLoad: true
    },
    ga: "G-VTV8TERKLB",
    ba: "",
    mdPlus: {
      all: true
    },
    rss: {
      siteURL: "https://yaoyao.io",
      title: "YaoYao's Blog",
      description: "Have a great day.",
      copyright: "YaoYao 2015-2022",
      count: 20,
      filter: (page) => true,
    }
  },

  navbar: [
    {
      text: "Home",
      link: "/",
      icon: "fa-fort-awesome"
    },
    {
      text: "Tags",
      link: "/tags/",
      icon: "fa-tag"
    },
    {
      text: "Notion",
      link: "https://notion.yaoyao.io",
      icon: "co-notion"
    },
    {
      text: "About",
      link: "/about/",
      icon: "fa-paw"
    },
  ],

  footer: `
      &copy; <a href="https://github.com/yaoyaoio" target="_blank">YaoYao</a> 2015-2023
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
})
