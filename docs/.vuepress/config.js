module.exports = {
  title: 'vue3-element-plus-admin',
  base: '/docs/',
  dest: 'frame-document',
  description: '一套基于vue3、element plus 和 Java 的快速开发后台管理权限系统的应用程序【私活神器，私活利器】',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.png',
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    nav: [
      { text: '📖 文档', link: '/views/start/' },
      { text: '📺 演示', link: 'http://frame.gumingchen.icu' },
      { text: '🤑 捐赠', link: '/views/donation/' },
      { 
        text: '⌨️ 源码',
        items: [
          { text: '🐱 Github', link: 'https://github.com/gmingchen/vue3-element-plus-admin' },
          { text: '🦁 Gitee', link: 'https://gitee.com/shychen/vue3-element-plus-admin' },
        ]
      }
    ],
    displayAllHeaders: false,
    sidebarDepth: 3,
    sidebar: {
      '/views/': [
        {
          title: '开始',
          collapsable: false,
          children: [
            ['/views/start/', '💻 介绍'],
            ['/views/start/prepare', '🛴 快速准备'],
            ['/views/start/structure', '🎮 项目结构'],
            ['/views/start/configuration', '⚙️ 项目配置'],
          ]
        },
        {
          title: '前端文档',
          collapsable: false,
          children: [
            ['/views/vue/', '🦥 开发规范'],
            ['/views/vue/layout', '🖐️ 布局'],
            ['/views/vue/router-sidebar', '🛣️ 路由和侧边栏'],
            ['/views/vue/permission', '🎛️ 权限'],
            ['/views/vue/iconfont', '🧩 图标'],
            ['/views/vue/flow', '👨‍💻 开发流程'],
          ]
        },
        {
          title: '后端文档',
          collapsable: false,
          children: [
            ['/views/java/', '🦥 整理中']
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['/views/other/release', '💡 版本发布']
          ]
        }
      ],
    }
  }
}