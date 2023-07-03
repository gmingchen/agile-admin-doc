# 快速开发

::: tip 环境需求
- Node >= 12.0.0
- Vue-Cli >= 5.0.0
- JDK = 1.8.x
- Mysql >= 8.0.0
:::

## 前端

### 下载
```bash
# 克隆项目
git clone https://github.com/gmingchen/agile-admin.git

# 进入项目目录
cd agile-admin
```

### 安装
```bash
# 安装依赖 若执行时候报错，可能node版本太高原因导致，可加上参数 --legacy-peer-deps
npm install

# 若执行时候报错，可能node版本太高原因导致，可加上参数 --legacy-peer-deps 尝试
npm install --legacy-peer-deps
```

### 运行
```bash
# 启动服务
npm run dev   # 开发环境
npm run prod  # 正式环境
npm run test  # 测试环境
```
::: warning 注意
建议不要用直接使用 cnpm 安装，可以通过配置 registry 来解决 npm 安装速度慢或中断的问题。
:::
启动完成打开浏览器访问 http://localhost:9528，你看到下面的页面就代表操作成功了。
![](http://oss.gumingchen.icu/frame/login.jpg)


### 打包
```bash
# 打包
npm run build:dev   # 开发环境
npm run build:prod  # 正式环境
npm run build:test  # 测试环境
```

### 发布
::: tip 发布
将打包好的文件放到服务器中 Nginx 或者 Tomcat。
:::

## 后端

### 下载
```bash
# 克隆项目
git clone https://github.com/gmingchen/java-admin.git

# 进入项目目录
cd java-admin
```

### 安装
> 使用开发工具（Idea）打开项目，等待 Jar 包下载完成。

### 运行
> 在开发工具中点击 Run SlipperApplication（快捷键: Shift + F10） 或者 Debug SlipperApplication（快捷键: Shift + F9）

### 打包
```bash
# 打包之前建议先清理项目缓存
mvn clean

# 打包
mvn package
```

### 发布
::: tip 发布
将打包好的 jar 包（java-admin/slipper-backstage/target/slipper-backstage-2.0.0.jar）放到服务器中并运行。
:::
```bash
# 查看运行进程
ps aux | grep slipper-backstage-2.0.0.jar

# 杀掉运行进程
kill -9 pid

# 运行 jar 包
nohup java -Xms10m -Xmx200m -jar slipper-backstage-2.0.0.jar &
```

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