# 布局
页面整体布局一般包含导航、侧边栏、标签栏以及内容等。

## Layout
::: tip 说明
- 顶部导航-[haedbar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/headbar)
- 标签页-[tabsbar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/tabsbar)
- 侧边栏-[sidebar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/sidebar)
- 整体布局-[main](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout)
:::
布局中主要使用了`NavigationActive`和`NavigationFixed`这两个组件来实现动态布局。其中`<View>`组件是二次封装的`<router-view>`组件，外部包了一层 `keep-alive`，主要是为了缓存`<router-view>`，可以在菜单模块控制是否缓存，如不需要也可以去除，`<router-view>`标签上使用了`<transition>`定义了页面之间切换动画，这边是使用了`element-plus`中的动画，可以根据自己的需求，自行修改动画。其中`<Websocket>`是处理WebSocket消息的组件。
``` html
<div class="layout-container height-full flex-box overflow-auto">
  <Sidebar />
  <component :is="component" class="navigation-container">
    <template #headbar>
      <Headbar />
    </template>
    <template #tabsbar v-if="showTabs">
      <Tabsbar />
    </template>
    <template #default v-if="!refresh">
      <View class="margin-20 flex-item_f-1" transition="left-in-right-out" />
    </template>
  </component>
  <Websocket />
</div>
```
除了个别页面如：`login`、`404`、`401` 等，都是基于 `layout` 的。这里使用了 vue-router 路由嵌套, 所以一般情况下，增加或者修改页面只会影响 `main` 主要内容区域。
``` js
const constant = [
  { path: '/', redirect: { name: 'login' }, meta: { title_cn: '重定向', title_en: 'Redirect' } },
  { path: '/login', name: 'login', component: () => import('@/views/constant/login.vue'), meta: { title_cn: '登录', title_en: 'Login' } },
  { path: '/401', name: '401', component: () => import('@/views/constant/401.vue'), meta: { title_cn: '401', title_en: '401' } },
  { path: '/404', name: '404', component: () => import('@/views/constant/404.vue'), meta: { title_cn: '404', title_en: '404' } },
  { path: '/500', name: '500', component: () => import('@/views/constant/500.vue'), meta: { title_cn: '500', title_en: '500' } }
]

const main = {
  path: '/layout',
  name: 'layout',
  component: () => import('@/views/layout/index.vue'),
  meta: { title_cn: '主入口整体布局', title_en: 'Overall layout of main entrance' },
  children: []
}

const routes = global.concat(main)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
```
