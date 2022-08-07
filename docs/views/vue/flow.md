# 流程
::: tip 新增企业
该项目是一个多企业管理后台系统，所以系统中会默认一个企业作为总后台，在总后台中可以对企业进行管理。<br>
新增企业的操作流程：
- 在`企业管理`中的`企业列表`新增一个企业。
- 在`企业管理`中的`企业菜单`为该企业新增权限菜单
- 在`企业管理`中的`企业管理员`新增一个超管帐号
使用超管帐号就可以登录到该企业的管理后台中。
:::

## 第一步 创建文件
先在模块下创建对应的视图文件`@/views/modules`。<br>
如现在要新增一个轮播图模块。则先在`@/views/modules`文件夹下创建文件夹`banner`，再在`@/views/modules/banner`文件夹下创建`index.vue`文件。<br>
一般一个模块会有增改的功能，这边就拿弹窗举例。因为模块的组件都是单独维护，所以先在`@/views/modules/banner`文件夹下创建`components`，再在`@/views/modules/banner/components`文件夹下创建`add-edit.vue`文件，然后在模块页面引入该组件使用。<br>

## 第二步 添加菜单权限
### 新增菜单
使用总后台帐号登录系统，在`开发配置`中的`菜单权限`新增一个菜单权限。<br>
![](http://oss.gumingchen.icu/frame/menu.jpg)
如上步骤中说到的轮播图模块。点击新增按钮并选中，在表单的各个字段中填上基本信息如下：
```bash
# 中文名称
  轮播图
# 英文名称
  Banner
# 类型
  菜单
# 组件Path
  banner/index
# 路由Path
  /banner
# 路由Name
  banner
# 授权标识
  banner:page
# 图标
  banner
# 排序
  1
# 是否在侧边菜单栏显示
  是
# 是否在tab页签显示
  是
# 是否支持tab页签多开
  否
# 是否支持缓存
  否
```
### 新增操作权限
几乎每一个模块下都会有增伤改查这四个权限，所以还需要在该菜单下新增按钮级别的操作权限。
如上步骤中说到的轮播图模块，用新增举例。点击改菜单上新增按钮并选中，在表单的各个字段中填上基本信息如下：
```bash
# 中文名称
  新增
# 英文名称
  Add
# 类型
  按钮
# 授权标识
# 建议每个菜单下都有一个查看的权限 banner:info
# 若是编辑则需要是多个权限同时存在，则添加多个使用分号隔开如：banner:info;banner:update
  banner:create
# 排序
  1
```
::: tip 授权标识
授权标识须与后端接口上shiro权限注解的标识一致且不能重复。建议`模块名:操作`
:::


## 第三步 添加企业菜单
使用总后台帐号登录系统，在`企业管理`中的`企业菜单`给需要的企业新增一个菜单权限。

## 第四步 页面开发
### 页面
以上步骤完成后可以使用企业帐号登录到后台，可以在侧边菜单栏看到新增的模块。可以进行相关的页面开发。<br>
项目中统一封装了<a href="https://github.com/gmingchen/vue3-element-plus-admin/blob/master/src/components/global/container/index.vue">上下布局组件</a>、<a href="
https://github.com/gmingchen/vue3-element-plus-admin/blob/master/src/components/container-sidebar/index.vue">左右布局组件</a>用来动态修改项目内置的布局。如不需要可以不使用该组件。

### 接口
该项目的接口是统一管理的，新增接口的时候需在`@/api`下创建文件夹和js文件。<br>
::: warning 注意
该项目的接口没有做全局统一注册，所以需要在页面中单独引入。
:::
如上步骤中说到的轮播图模块。先在`@/api`文件夹下创建文件夹`banner`，再在`@/api/banner`文件夹下创建`index.js`文件。内容大概如下：
```js
import service from '@/utils/request'
/**
 * @description: 分页列表
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function pageApi(params) {
  return service({
    url: '/backstage/banner/page',
    method: 'get',
    params: params
  })
}

/**
 * @description: 信息
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function infoApi(params) {
  return service({
    url: `/backstage/banner/info/${ params }`,
    method: 'get'
  })
}

/**
 * @description: 新增
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function addApi(params) {
  return service({
    url: `/backstage/banner/create`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 编辑
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function editApi(params) {
  return service({
    url: `/backstage/banner/update`,
    method: 'post',
    data: params
  })
}

/**
 * @description: 删除
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function deleteApi(params) {
  return service({
    url: `/backstage/banner/delete`,
    method: 'post',
    data: params
  })
}
```

## 代码生成器
本项目中内内置了代码生成器，可以对单表进行前端代码（模块列表组件、模块新增编辑弹窗组件、接口文件）、后端代码快速生成（entity、mapper、dao、model、service、controller，实现了分页查询、详情查询、新增、编辑、删除的操作）减少了开发者70%的工作量，只有30%需要开发者自己调整。解放开发者，再也不用 Ctrl + C 、Ctrl + V了 ✊
![](http://oss.gumingchen.icu/frame/generator.jpg)
