# 权限
项目中权限的实现方式是：登录成功之后获取用户拥有的菜单权限信息，存入 `vuex` 和 浏览器本地 中。
其配置也是在菜单模块中配置 `授权标识`。
![](http://oss.gumingchen.icu/frame/menu.jpg)

## 权限方法
项目中封装了一个方法，能简单快速的实现按钮级别的权限判断。<br>
`@/utils/index.js`
``` js
/**
 * @description: 判断是否有按钮级权限
 * @param {String} permission 多个使用 & 或 | 分隔开
 * @param {String} separator 分隔符：&-并且 |-或者
 * @return {*}
 * @author: gumingchen
 */
export function havePermission(permission, separator = '&') {
  let result = false
  const permissions = permission.split(separator)
  let fn = ''
  switch (separator) {
    case '&':
      fn = 'every'
      break
    case '|':
      fn = 'some'
      break
  }
  const list = store.getters['menu/permissions']
  result = fn && permissions[fn](item => {
    return list.indexOf(item) !== -1
  })
  return result
}
```

## 权限指令
项目中封装了一个权限指令，能简单快速的实现按钮级别的权限判断。<br>
`@/directive/index.js`
``` js
/**
 * @description: 判断是否有按钮级权限
 * @param {String} permission 多个使用 & 或 | 分隔开
 * @param {String} separator 分隔符：&-并且 |-或者
 * @return {*}
 * @author: gumingchen
 */
export function havePermission(permission, separator = '&') {
  let result = false
  const permissions = permission.split(separator)
  let fn = ''
  switch (separator) {
    case '&':
      fn = 'every'
      break
    case '|':
      fn = 'some'
      break
  }
  const list = store.getters['menu/permissions']
  result = fn && permissions[fn](item => {
    return list.indexOf(item) !== -1
  })
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
<br>
也可以使用权限判断函数 `havePermission` 直接判断。
:::
