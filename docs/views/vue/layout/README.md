# 布局
页面整体布局一般包含导航、侧边栏、标签栏以及内容等。

## Layout
![](/images/layout.png)
::: tip 说明
- 绿色区域-[main](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout)：主要内容
- 蓝色区域-[headbar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/headbar)：导航栏
- 红色区域-[sidebar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/sidebar)：侧边栏
- 黄色区域-[tabsbar](https://github.com/gmingchen/vue3-element-plus-admin/tree/master/src/views/layout/components/tabsbar)：标签栏
:::
除了个别页面如：`login`、`404`、`401` 等，都是基于 `layout` 的。这里使用了 vue-router 路由嵌套, 所以一般情况下，增加或者修改页面只会影响 `main` 主要内容区域。
``` js
...
/* 通用 */
const global = [
  { path: '/', redirect: { name: 'login' }, meta: { title_cn: '重定向', title_en: 'Redirect' } },
  { path: '/login', name: 'login', component: () => import('@/views/global/login.vue'), meta: { title_cn: '登录', title_en: 'Login' } },
  { path: '/404', name: '404', component: () => import('@/views/global/404.vue'), meta: { title_cn: '404', title_en: '404' } },
  { path: '/401', name: '401', component: () => import('@/views/global/401.vue'), meta: { title_cn: '401', title_en: '401' } }
]

/* 主入口 */
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
...
```

## main
``` html
...
<router-view v-slot="{ Component }">
  <transition name="el-fade-in">
    <keep-alive :include="$route.meta.keepAlive ? '': []">
      <component :is="Component" class="component" />
    </keep-alive>
  </transition>
</router-view>
...
```
这边`main`主要内容外部包了一层 `keep-alive`，主要是为了缓存`<router-view>`，配合页面的 `tabsbar` 标签栏使用，可以在菜单模块控制是否缓存，如不需要也可以去除。

其中 `<transition>` 定义了页面之间切换动画，这边是使用了 `element-plus` 中的动画，可以根据自己的需求，自行修改动画。
