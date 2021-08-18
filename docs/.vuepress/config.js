module.exports = {
  // base: '/vue3-element-plus-admin-doc/',
  base: '/',
  title: 'vue3-element-plus-admin',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/images/3.jpg' }]
  ],
  host: '0.0.0.0',
  port: '6666',
  temp: '/path/to/@vuepress/core/.temp',
  dest: 'dist',
  locales: undefined,
  shouldPrefetch: () => true,
  cache: true,
  extraWatchFiles: [],
  patterns: ['**/*.md', '**/*.vue'],
  themeConfig: {
    logo: '/images/3.jpg',
    nav: [
      { text: '指南', link: '/' },
      { text: 'Github', link: 'https://github.com/gmingchen/vue3-element-plus-admin' }
    ],
    displayAllHeaders: false,
    sidebarDepth: 2,
    sidebar: [
      {
          title: '前端Vue手册',
          collapsable: false,
          children: [
            ['/views/vue/introduce/', '介绍'],
            ['/views/vue/layout/', '布局'],
            ['/views/vue/router-sidebar/', '路由和侧边栏'],
            ['/views/vue/permission/', '权限'],
            ['/views/vue/add/', '新增模块页面'],
            ['/views/vue/release/', '发布流程'],
          ]
      },
      {
        title: '后端Java手册',
        collapsable: false,
        children: [
          ['/views/java/introduce/', '介绍'],
        ]
      }
    ]
  }
}