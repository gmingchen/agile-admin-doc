# 路由和侧边栏
路由和侧边栏是组织起一个后台应用的关键。

本项目的所有路由菜单侧边栏和路由是绑定在一起的，是维护在数据库中的，所以你只有在菜单权限模块中直接添加相应的模块菜单，侧边栏就能动态的生成。大大减轻了手动重复编辑侧边栏的工作量，这样就需要在配置路由的时候遵循一些约定的规则。
![](http://oss.gumingchen.icu/frame/menu.jpg)

## 配置
先了解一下本项目配置路由的配置项。
``` js
meta {
  id: '', // 路由ID 类型不限 但是必须唯一 
  title_cn: '', // 路由中文名称 会显示在侧边栏和标签栏以及浏览器页签
  title_en: '', // 路由英文名称 如果不是用国际化可以忽略
  type: '', // 路由类型：0-目录 1-菜单 3-iframe 4-外链 主要用作侧边栏不同类型的不同操作
  url: '', // 路由类型为 3-iframe 或者 4-外链 时存储的连接，用作跳转
  dynamic: false, // 是否是动态路由
  tab: false, // 是否显示在标签栏
  keepalive: false, // 是否缓存路由
  multiple: false // 标签栏是否可以多开 例如不同ID的详情页
}

```
__示例__
``` js
// 菜单
{
  path: '/demo',
  name: 'demo',
  component: () => import('@/views/modules/demo/index.vue'),
  meta: {
    id: 'demo',
    title_cn: 'Demo',
    title_en: 'Demo',
    type: 1,
    url: '',
    dynamic: true,
    tab: true,
    keepalive: true,
    multiple: true
  }
},
// iframe 内置了 iframe 组件
{
  path: '/iframe',
  name: 'iframe',
  component: () => import('@/views/modules/iframe/index.vue'),
  meta: {
    id: 'iframe',
    title_cn: 'Iframe',
    title_en: 'Iframe',
    type: 3,
    url: 'https://www.baidu.com',
    dynamic: true,
    tab: true,
    keepalive: true,
    multiple: true
  }
},
```

## 路由
这里的路由分为两种，`constantRoutes` 和 `dynamicRoutes`。

__constantRoutes__：代表那些不需要动态判断权限的路由，如登录页、404、401、500等通用页面。

__dynamicRoutes__：代表那些需求动态判断权限并通过 `addRoute` 动态添加的页面。
::: warning 注意
`vue-router4` 中移除了 `addRoutes`。所以这边是直接添加的父级路由。
还要注意的是 `vue-router4` 中移除了 `path:'*'`
__示例__
``` js
router.addRoute({ path: '/:pathMatch(.*)', redirect: { name: '401' } })
```
:::

## 侧边栏
本项目侧边栏主要基于 `element-plus` 的 `el-menu` 改造。
<br>
侧边栏是通过请求接口、注册路由，动态生成的，因为需要支持路由无限嵌套，所以这里使用到了递归组件。
<br>
一般侧边栏有两种形式即：`el-submenu`、`el-menu-item`,。 一个是嵌套子菜单，另一个则是直接一个链接。
<br>
在 `Sidebar` 中已经做了判断，当你一个路由下面的 children 的路由 `>1` 个时，自动会变成嵌套的模式。如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中。
::: tip 代码地址
<a href="https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/sidebar">@/views/layout/components/sidebar</a>
:::
## 侧边栏多级目录
如果路由是多级目录，只需要在菜单模块添加多级目录即可。后续会修改成目录也为一个菜单路由，从而实现路由嵌套

## 侧边栏Iframe
你也可以在侧边栏中配置一个链接，只要你在菜单模块 `URL` 填入合法的链接即可在项目里面 `main` 主要内容部分显示链接内容。主要是通过项目中 `iframe` 组件实现。

## 侧边栏外链
你也可以在侧边栏中配置一个链接，只要你在菜单模块 `URL` 填入合法的链接即可在项目里面侧边栏点击会在新窗口打开该链接
