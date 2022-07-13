# 开发规范

### 视图
在```@/views/modules```创建对应的模块文件夹，一般性一个路由对应一个文件，文件夹命名使用中横线，文件夹下的```.vue```文件统一使用```index.vue```。各个功能模块下维护自己的components组件，不强制使用中横线命名。

### 组件
在```@/components/global```写一些全局的组件，如分页组件、sve图标组件等等能被公用的组件，文件夹命名使用中横线，文件夹下的```.vue```文件统一使用```index.vue```。已经统一注册文件夹下的所有组件，组件名称为文件夹名称。

### 样式
在```@/assets/sass```放置全局公用的样式，已经内置了一些通用样式。

### API
在```@/api```文件夹下创建对应模块的API服务，文件夹命名使用中横线，文件夹下的```.js```文件统一使用```index.js```。