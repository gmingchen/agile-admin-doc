# 权限
项目中权限的实现方式是：登录成功之后获取用户拥有的菜单权限信息，存入 `vuex` 中。
其配置也是在菜单模块中配置 `授权标识`。
![](/images/menu-add-menu.png)

## 权限指令
项目中封装了一个权限指令，能简单快速的实现按钮级别的权限判断。
__代码__
``` js
// @/utils/index.js
/**
 * @description: 判断是否有按钮级权限
 * @param {*} key
 * @return {*}
 * @author: gumingchen
 */
export function isAuth(key) {
  let result = false
  result = store.getters['menu/permissions'].indexOf(key) !== -1 || false
  return result
}

// @/directive/index.js
/**
 * @description: 权限控制指令
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
app.directive('permission', {
  mounted: (el, binding, vnode) => {
    const permission = binding.value
    const result = isAuth(permission)
    const tagName = el.localName
    if (!result) {
      switch (tagName) {
        case 'button': // 按钮权限控制-删除tag
          el.remove()
          break
        case 'div': // element-plus switch 组件权限控制
          if (vnode.props.role && vnode.props.role === 'switch') {
            nextTick(() => {
              el.className += ' is-disabled' // 设置禁用样式
              const tag = el.cloneNode(true) // 深拷贝节点以解除绑定事件
              const parent = el.parentNode
              el.remove()
              parent.append(tag)
            })
          }
          break
      }
    }
  }
})

```
__用法__
``` html
<template>
  <el-button type="primary" v-permission="'backstage:backup:backup'" />
</template>
```
::: tip 提示
该自定义指令已经被注册为全局指令，可以直接使用。

也可以使用权限判断函数 `isAuth` 直接判断。
:::
