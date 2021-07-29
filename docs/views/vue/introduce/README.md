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

## 准备
你需要在本地安装 [node](https:#nodejs.org/en/) 和 [git](https:#git-scm.com/)。
本项目技术栈基于 [ES2015](https:#es6.ruanyifeng.com/)、[vue3](https:#github.com/vuejs/vue-next)、[vuex](https:#github.com/vuejs/vuex)、[vue-router](https:#github.com/vuejs/vue-router-next)、[vue-cli](https:#github.com/vuejs/vue-cli)、[axios](https:#github.com/axios/axios)、[element-plus](https:#github.com/element-plus/element-plus)和 [sass](https:#github.com/sass/sass)，所有的请求数据都是真实接口响应，提前了解和学习这些知识会对使用本项目有很大的帮助。

__本项目不支持低版本浏览器(如 ie)__

## 目录
本项目已经生成了一个完整的开发框架，提供了后台开发的基本功能，下面是整个项目的目录结构。
``` sh
├─ public                 # 静态资源
│  ├─ favicon.ico           # favicon图标
│  └─ index.html            # html模板
├─ src                    # 源代码
│  ├─ api                   # 请求接口
│  ├─ assets                # 静态资源
│  │  ├─ icon                 # svg图标
│  │  ├─ images               # 图片
│  │  └─ sass                 # 样式
│  ├─ components            # 全局组件
│  │  ├─ editor               # 富文本组件
│  │  ├─ global               # 全局注册组件
│  │  └─ page                 # 分页组件
│  ├─ directive             # 全局自定义指令
│  ├─ element               # element-plus按需加载
│  ├─ mixins                # 代码复用 （vue2混入）
│  │  ├─ instance             # element的$message、$confirm、$loading可进行补充
│  │  └─ page                 # 分页
│  ├─ router                # 路由
│  ├─ store                 # vuex store管理
│  │  ├─ modules              # 模块
│  │  │  ├─ menu                 # 菜单
│  │  │  ├─ setting              # 设置
│  │  │  ├─ tab                  # 标签页
│  │  │  └─ user                 # 用户登录信息
│  │  └─ index                # 动态加载模块
│  ├─ utils                 # 工具模块
│  │  ├─ constants            # 常量
│  │  ├─ index                # 工具
│  │  ├─ regular              # 正则
│  │  ├─ request              #axios二次封装
│  │  └─ storage              # 本地缓存工具
│  ├─ views                 # 所有视图
│  │  ├─ global               # 通用页面
│  │  │  ├─ 401                 # 401页面
│  │  │  ├─ 404                 # 404页面
│  │  │  └─ login               # 登录页面
│  │  ├─ layout               # 布局
│  │  │  ├─ components          # 组件
│  │  │  │  ├─ edit-info          # 修改信息
│  │  │  │  ├─ headbar            # 顶部导航
│  │  │  │  ├─ sidebar            # 侧边栏
│  │  │  │  └─ tabsbar            # 标签页
│  │  │  └─ index               # 布局入口页面
│  │  ├─ modules              # 页面模块
│  │  │  ├─ demo                # demo
│  │  │  ├─ develop               # 开发模块
│  │  │  │  ├─ backup             # 备份
│  │  │  │  ├─ config             # 配置
│  │  │  │  ├─ generator          # 代码生成器
│  │  │  │  ├─ menu               # 菜单
│  │  │  │  ├─ oss                # 文件上传
│  │  │  │  └─ task               # 定时任务
│  │  │  ├─ home                # 首页
│  │  │  ├─ iframe              # iframe 嵌套页面组件
│  │  │  ├─ log                 # 日志模块
│  │  │  │  ├─ error              # 异常日志
│  │  │  │  ├─ login              # 登录日志
│  │  │  │  ├─ operation          # 操作日志
│  │  │  │  └─ task               # 定时任务
│  │  │  ├─ message             # 消息模块
│  │  │  │  ├─ email              # 邮件记录
│  │  │  │  └─ email-template     # 邮件模版
│  │  │  ├─ set                 # 设置
│  │  │  ├─ system              # 系统模块
│  │  │  │  ├─ admin              # 管理员
│  │  │  │  └─ role               # 角色
│  │  ├─ App                  # 入口文件
│  └─ └─ main                 # 入口文件
├─ .babelrc               # babel-loader配置
├─ .browserslistrc        # 目标环境配置
├─ .env.development       # 开发环境变量配置
├─ .env.production        # 生产环境变量配置
├─ .env.testing           # 测试环境变量配置
├─ .eslintrc.js           # eslint配置
├─ .gitignore             # git配置
├─ babel.config.js        # babel配置
├─ LICENSE                # MIT
├─ package-lock.json      # package-lock.json
├─ package.json           # package.json
├─ README.md              # 项目说明
└─ vue.config.js          # vue-cli配置
```

## 运行
``` sh
# 克隆项目
git clone https://github.com/gmingchen/vue3-element-plus-admin.git

# 进入项目目录
cd vue3-element-plus-admin

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```
::: warning 注意
建议不要用直接使用 cnpm 安装，可以通过配置 registry 来解决 npm 安装速度慢或中断的问题。
:::
启动完成打开浏览器访问 http://localhost:9527，你看到下面的页面就代表操作成功了。
![](/images/login.png)![](/images/home.png)

