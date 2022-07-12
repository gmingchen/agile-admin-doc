# 项目结构

## 前端文件结构
```bash
vue3-src
├─api # 接口模块
│
├─assets # 静态资源模块
│  ├─font # 字体
│  └─sass # 样式
│ 
├─components # 通用组件
│  ├─global # 全局组件
│  │  ├─container # 布局组件
│  │  ├─iconfont # 使用阿里图库图标的组件
│  │  ├─page # 分页组件
│  │  └─index # 统一全局注册
│  ├─collapse # 折叠组件
│  ├─container-custom # 自定义布局组件
│  ├─container-sidebar # 左右布局组件
│  ├─enterprise-sidebar # 企业侧边栏组件
│  ├─icon-select-input # 阿里图库图标选择组件
│  ├─image-upload-single # 单图片上传组件
│  ├─region # 区域级联选择组件
│  └─view router-view # 视图组件
│ 
├─directive # 全局自定义指令
│ 
├─mixins # 代码复用 （vue2混入）
│  ├─dictionary # 字典
│  ├─model # 双向绑定
│  └─page # 分页
│ 
├─router # 动态路由
│ 
├─store # vuex
│  ├─modules
│  │  ├─administrator # 管理员登录信息模块
│  │  ├─dictionary # 数据字典模块
│  │  ├─enterprise # 企业模块
│  │  ├─menu # 菜单模块
│  │  ├─setting # 设置模块
│  │  ├─tabs # 标签页模块
│  │  ├─theme # 主题模块
│  │  └─websocket # 消息推送模块
│  └─index # 动态加载模块
│ 
├─utils # 工具模块
│  ├─constant # 常量
│  ├─dictionary # 字典
│  ├─index # 工具
│  ├─prompt # 单次提示处理类
│  ├─regular # 正则
│  ├─request # axios二次封装
│  ├─storage # 本地缓存工具
│  └─websocket # websocket对象封装
│
├─views # 视图模块
│  ├─common # 通用页面
│  │  ├─401 # 401页面
│  │  ├─404 # 404页面
│  │  ├─500 # 500页面
│  │  └─login # 登录页面
│  ├─layout
│  │  ├─components
│  │  │  ├─headbar # 顶部导航
│  │  │  ├─navigation # 导航布局组件
│  │  │  ├─sidebar # 侧边栏
│  │  │  ├─tabsbar # 标签页
│  │  │  └─websocket # 消息推送组件
│  │  └─index # 布局入口页面
└──└─modules # 页面模块
```

## 后端文件结构
```bash
java-admin
├─slipper-backstage # 后台接口、Controller模块
│  ├─modules # 模块
│  └─SlipperApplication # 入口
│
├─slipper-common # 通用模块
│  ├─config # 配置模块
│  │  ├─CaptchaConfig # 验证码配置
│  │  └─ValidatorConfig # 对象校验配置
│  ├─exception # 自定义异常
│  ├─utils # 工具类
│  └─validator # 对象校验工具类
│
├─slipper-core # 核心模块
│  ├─config # 配置模块
│  │  ├─FilterConfig # 过滤器配置
│  │  ├─MybatisPlusConfig # MybatisPlus配置
│  │  └─WebMvcConfig # web mvc配置 处理跨域
│  ├─utils # 工具类
│  │  └─RedisUtils # redis工具类
│  └─xss # 注入风险过滤配置
│
├─slipper-generator # 代码生成器
│
├─slipper-quartz # quartz定时任务
│
├─slipper-service # 业务模块
│  ├─annotation # 自定义注解
│  ├─aspect # 自定义注解实现切面
│  ├─handler # 处理器
│  │  └─RunExceptionHandler # 异常处理器
│  ├─model # 通用的数据模型
│  └─modules # 业务模块
│
├─slipper-shiro # shiro权限模块
│  ├─config # shiro配置
│  ├─filter # shiro过滤器
│  ├─realm # 授权领域
│  ├─service # 业务
│  ├─token # 授权凭证
└──└─utils # shiro工具类
```