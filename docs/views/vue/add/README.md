# 新增模块
之前有提到过该项目是将路由存入数据库中，然后根据用户的权限返回用户拥有的权限菜单，然后动态注册路由。

首先在 `@/views/modules` 下面创建文件夹，和 `vue` 文件。
一般都是以模块名称命名文件夹，文件夹下 `index.vue` 作为列表页，`details.vue` 作为详情页，弹窗、以及一些小组件都会存放在当前文件夹下 `components` 文件夹中。

## 新增视图
__例：新增一个 `demo` 页面，创建如下文件：__
``` sh
├─ src
│  ├─ views
│  │  ├─ modules
│  │  │  ├─ demo
│  │  │  │  └─ index.vue
```
__然后到菜单模块添加相应的菜单，以及权限，如：__
![](/images/menu-add-demo.png)
__随后给相应的帐号添加上对应的权限即可看到对应的模块页面。__

## 新增api
最后在 `@/api` 下添加相应的模块对应的api服务

__例：__
``` js
// @/api/message/email-template/index.js
import service from '@/utils/request'

/**
 * @description: 列表
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function listApi(params) {
  return service({
    url: '/backstage/email/template/list',
    method: 'get',
    params: params
  })
}
```
