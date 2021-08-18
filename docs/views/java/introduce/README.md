# 介绍
<p>
  <a href="https://github.com/spring-projects/spring-boot">
    <img src="https://img.shields.io/badge/springboot-2.5.1-brightgreen.svg" alt="springboot">
  </a>
  <a href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/mysql-8.0.23-brightgreen.svg" alt="mysql">
  </a>
  <a href="https://github.com/baomidou/mybatis-plus.git">
    <img src="https://img.shields.io/badge/mybatis--plus-3.4.2-brightgreen.svg" alt="mybatis">
  </a>
  <a href="https://github.com/apache/shiro">
    <img src="https://img.shields.io/badge/shiro-1.7.1-brightgreen.svg" alt="shiro">
  </a>
  <a href="https://github.com/gmingchen/vue3-element-plus-admin">
    <img src="https://img.shields.io/badge/version-3.2.2-brightgreen.svg" alt="license">
  </a>
  <a href="https://github.com/gmingchen/vue3-element-plus-admin">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## 准备
你需要在本地安装 [jdk](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)、[maven](https://maven.apache.org/download.cgi) 和 [git](https:#git-scm.com/)。
本项目技术栈基于 [springboot](https://github.com/spring-projects/spring-boot)、[mysql](https://www.mysql.com/)、[mybatis-plus](https://github.com/baomidou/mybatis-plus.git)和 [shiro](https://github.com/apache/shiro) 等，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 目录
本项目已经生成了一个完整的开发框架，提供了后台开发的基本功能，下面是整个项目的目录结构。
``` sh
├─ slipper-backstage        # 后台接口层，包含环境文件，启动类
├─ slipper-common           # 通用工具模块
├─ slipper-core             # 核心模块
├─ slipper-generator        # 代码生成器
├─ slipper-oss              # 文件上传oss
├─ slipper-quartz           # 定时任务
├─ slipper-service          # 服务层 包括 dao、entity、service
├─ slipper-shiro            # 权限管理 shiro
├─ .gitignore               # git配置
├─ apidoc.json              # apidoc配置
├─ apidoc-footer.md         # apidoc页脚页
├─ apidoc-header.md         # apidoc页头页
├─ LICENSE                  # MIT
└─ pom.xml                  # pom-jar
```

## 运行
``` sh
# 克隆项目
git clone https://gitee.com/shychen/slipper.git

# idea maven 下载依赖

# idea 运行启动类
```
::: warning 注意
如果下载依赖太慢可以在 `pom` 文件中加入国内镜像
:::
启动后看到下面的样子就代表操作成功了。
![](/images/idea-run.png)
