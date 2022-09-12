const {gungnirTheme} = require("vuepress-theme-gungnir");
const isProd = process.env.NODE_ENV === "production";

module.exports = gungnirTheme({
  navbarTitle: "YaoYao's Blog",
  repo: "yaoliu/blog-v2",
  docsDir: "docs",
  docsBranch: "main",

  hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
  searchText: "Search",
  catalog: true,
  blogNumPerPage: 20, // 可选：每页的博客数量，默认：10
  // personal information
  personalInfo: {
    name: "YaoYao",
    avatar: "/img/avatar.jpg",
    description: "Have a great day.",
    sns: {
      github: "yaoliu",
      twitter: "yaoyaoio",
      email: "liuyao@163.com",
      rss: "/rss.xml"
    }
  },

  // header images on home page
  homeHeaderImages: [
    {
      path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/1.webp",
      mask: "rgba(40, 57, 101, .4)"
    },
    // {
    //   path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/2.webp",
    //   mask: "rgba(196, 176, 131, .1)"
    // },
    {
      path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/3.webp",
      mask: "rgba(19, 75, 50, .2)"
    },
    // {
    //   path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/4.webp",
    //   mask: "rgba(196, 176, 131, .1)"
    // },
    {
      path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/5.webp",
      mask: "rgba(196, 176, 131, .1)"
    },
    {
      path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/6.webp",
      mask: "rgba(196, 176, 131, .1)"
    },
    {
      path: "https://img.liu-yao.com/yaoyaoio/img/home-bg/7.webp",
      mask: "rgba(196, 176, 131, .1)"
    },
  ],

  // other pages
  pages: {
    tags: {
      subtitle: "Even the best make mistakes sometimes.",
      bgImage: {
        path: "/img/pages/tags.jpg",
        mask: "rgba(211, 136, 37, .5)"
      }
    },
    timelines: {
      subtitle: "To the time to life, rather than to life in time.",
      bgImage: {
        path: "/img/pages/timelines.jpeg"
      }
    }
  },

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
    katex: true,
    giscus: {
      repo: "yaoliu/blog-comments",
      repoId: "R_kgDOHX02Ew",
      category: "Announcements",
      categoryId: "DIC_kwDOHX02E84CPN8T",
      lazyLoad: true
    },
    ga: "",
    ba: "",
    mdPlus: {
      all: true
    },
    rss: {
      siteURL: "https://yaoyao.io",
      title: "YaoYao's Blog",
      copyright: "YaoYao 2015-2022"
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
      text: "Timelines",
      link: "/timelines/",
      icon: "ri-timer-line"
    },
    {
      text: "About",
      link: "/about/",
      icon: "fa-paw"
    },
  ],

  footer: `
      &copy; <a href="https://github.com/yaoliu" target="_blank">YaoYao</a> 2015-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
})
