# 介绍

<p>
  <a href="https://github.com/vuejs/vue-next">
    <img src="https://img.shields.io/badge/vue-3.1.2-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/element--plus-1.0.2--beta.59-brightgreen.svg" alt="element-plus">
  </a>
  <a href="https://github.com/gmingchen/vue3-element-plus-admin">
    <img src="https://img.shields.io/badge/version-3.2.2-brightgreen.svg" alt="license">
  </a>
  <a href="https://github.com/gmingchen/vue3-element-plus-admin">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

[vue3-element-plus-admin](https://github.com/gmingchen/vue3-element-plus-admin)
是一个后台前端、后端解决方案，它基于
[vue3](https://github.com/vuejs/vue-next)
和
[element-plus](https://github.com/element-plus/element-plus)
实现。使用了最新的前端技术栈，内置了 i18n 国际化，Typescript，动态路由，菜单权限管理，提炼了典型的业务功能，它可以帮助你快速搭建后台产品原型。

::: tip 提示
master 分支默认使用 composition-api ，若需要 class 风格 + Typescript 请使用[class-style](https://github.com/1240235512/vue3/tree/class-style)分支，若需要 composition-api + Typescript + I18n 请使用[composition-api](https://github.com/1240235512/vue3/tree/composition-api)分支，若只需要 基础版本 请使用[base](https://github.com/1240235512/vue3/tree/base)分支，但它们不会和 master 保持同步更新。
- [master](https://github.com/gmingchen/vue3-element-plus-admin/tree/master) 轻量版本：持续维护分支
- [base](https://github.com/gmingchen/vue3-element-plus-admin/tree/base) 精简版本：RBAC 权限功能-仅包含`菜单管理`、`角色管理`、`用户管理`三个模块
- [composition-api](https://github.com/1240235512/vue3/tree/composition-api) 内置`Type Script`、`I18n`
- [class-style](https://github.com/1240235512/vue3/tree/class-style) 使用 class 风格开发，内置`Type Script`、`I18n`
:::

::: warning 说明
本文档只说明 master 分支，其他功能（如：I18n、TypeScript...）的使用请参考对应分支。
:::

## 功能
```
- 登录 / 登出

- 系统管理
  - 角色管理
  - 管理员管理

- 消息管理
  - 邮件模版
  - 邮件记录

- 日志管理
  - 登陆日志
  - 操作日志
  - 定时任务日志
  - 异常日志
  
- 开发管理
  - 菜单管理
  - 配置管理
  - 定时任务
  - 备份管理
  - 文件上传
  - 代码生成器
  - 接口文档
  - Druid监控
```
