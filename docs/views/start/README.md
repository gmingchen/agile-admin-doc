# 介绍
<h1 class="center">agile-admin</h1>

<div class="svg-box center">
  <img src="https://img.shields.io/badge/vue-3.x-brightgreen.svg" alt="vue">
  <img src="https://img.shields.io/badge/element--plus-1.x-brightgreen.svg" alt="element-plus">
  <img src="https://img.shields.io/badge/License-Apache--2.0-brightgreen.svg" />
  <img src="https://www.oscs1024.com/platform/badge/gmingchen/agile-admin.svg?size=small" alt="vue">
</div>

<div class="svg-box center">
  <img src="https://img.shields.io/github/stars/gmingchen/agile-admin.svg?logo=github&color=brightgreen">
  <img src="https://img.shields.io/github/forks/gmingchen/agile-admin.svg?logo=github&color=brightgreen">
  <img src="https://gitee.com/shychen/agile-admin/badge/star.svg?theme=dark">
  <img src="https://gitee.com/shychen/agile-admin/badge/fork.svg?theme=dark">
</div>

::: tip
- Java + Vue 有很多优秀的后台管理系统，但是为了可以高效的开发后台权限管理系统，作者就自己开发出 agile-admin。
- [agile-admin](https://github.com/gmingchen/agile-admin) 是一个基于 Vue3 + Element-plus + Java + Spring boot + maven + mysql 的多企业后台权限管理系统，提供了完善的权限体系，让开发者把注意力集中到具体业务当中，降低开发成本，提高项目效率。
- 可以用于网站管理后台、SAAS、CMS、CRM、OA、ERP等，企业和个人都可以免费使用。欢迎提交PR（需求），若开发中遇到问题可以上 Github 提 Issues。
- 如果觉着还不错，请点个 ⭐star 支持一下吧，这将是对我最大的支持和鼓励！ 
:::

::: tip
由于有部分开发者需要完整后端代码，目前开始售卖后端代码。如有需要购买完整后端代码的开发者添加作者微信，价格私聊！
:::

## 内置功能
- 系统管理：基本功能
  - 角色：角色菜单权限分配，角色支持配置数据权限
  - 管理员：支持多角色分配，根据角色拥有的菜单权限展示不同的页面
  - 菜单管理：支持修改当前企业菜单的名称、图标、排序
  - 部门管理：支持用户配置数据权限
- 日志管理：企业日志
  - 登录日志：当前企业管理员登录系统的记录查询
  - 操作日志：当前企业管理员对系统的正常操作的记录查询
- 消息管理：消息的推送以及邮件的发送
  - WebSocket：当前企业内 websocket 企业推送记录、系统推送记录查询
  - 邮件管理：邮件的相关配置
    - 邮件模版：配置邮件发送的模版：如验证码
    - 邮件记录：企业内发送的邮件记录查询
- 企业管理：完成企业相关配置
  - 企业列表： 新增、编辑、删除，系统企业的来源
  - 企业角色： 新增、编辑、删除企业内的角色
  - 企业管理员： 新增、编辑、删除企业内的管理员
  - 企业菜单： 企业拥有菜单权限的配置
- 数据中心：系统的一些配置管理
  - 数据字典：系统内常用且固定的数据的维护
  - 配置管理：系统内第三方的配置：如 oss、邮箱
  - 文件管理：管理当前系统上传的文件及图片等信息
  - 备份管理：对系统数据库的备份与恢复
  - 区域管理：级联区域的维护
- 系统监控：对系统的监控管理
  - 在线管理员：当前登录系统的管理员
  - 日志：整个系统内的日志
    - 登录日志：系统内所有管理员登录系统的记录查询
    - 操作日志：系统内所有管理员对系统的正常操作的记录查询
    - 异常日志：系统内运行是后的异常记录查询
    - 定时任务日志：系统内定时任务执行的记录查询
- 开发配置：开发过程中的相关配置操作
  - 菜单权限：整个系统内的菜单权限配置，支持拖拽排序
  - 定时任务：系统内的所有定时任务维护
  - 代码生成器：前端（api.js、list.vue、add-edit.vue）后端单表的增删改查相关代码生成
  - 接口文档：后端使用的是 apidoc 生成的接口文档
- 主题设置：整体页面主题设置，布局设置，暗黑模式

## 技术交流

### QQ群 - 作者QQ
<div class="img-box">
  <img src="https://admin.gumingchen.icu/file/static/qq-group-qr-code.jpg" title="QQ交流群" alt="QQ交流群:124371554" />
  <img src="https://admin.gumingchen.icu/file/static/qq-qr-code.jpg" title="QQ" alt="QQ:1240235512" />
</div>

### 微信群 - 作者微信
<div class="img-box">
  <img src="https://admin.gumingchen.icu/file/static/wechat-group-qr-code.jpg?time=1"title="微信交流群" alt="微信交流群:124371554" />
  <img src="https://admin.gumingchen.icu/file/static/wechat-qr-code-1.jpg" title="微信" alt="微信:Gy1240235512" />
</div>

### 公众号
<div class="img-box">
  <img src="https://admin.gumingchen.icu/file/static/official-account-qr-code.jpg" title="公众号" alt="公众号:loafer-man" />
</div>

## 演示图片
<table>
   <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/home.jpg" title="演示图片" alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/personal.jpg" title="演示图片" alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/menu.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/theme.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/log-operate.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/log-error.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/log-login.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/log-job.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/dict.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/job.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/generator.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/ip.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/backup.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/region.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/notice-template.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/notice.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/file-config.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/file.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/package.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/tenant.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/role.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/adminer.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/post.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/dept.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/mail-account.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/mail-template.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
  <tr>
    <td><img src="https://admin.gumingchen.icu/file/frame/mail.jpg" title="演示图片"  alt="演示图片" /></td>
    <td><img src="https://admin.gumingchen.icu/file/frame/login.jpg" title="演示图片"  alt="演示图片" /></td>
  </tr>
</table>

<style>
.center {
  text-align: center;
}
.svg-box {
  margin-top: 20px;
}
.img-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: start;
}
.img-box img {
  width: 300px;
}
</style>