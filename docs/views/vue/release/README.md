# 发布流程

## 构建
当项目开发完毕，只需要运行一行命令就可以打包你的应用：
``` sh
# 打包开发环境
npm run build:dev

# 打包测试环境
npm run build:test

# 打包正式环境
npm run build:prod
```
构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js`、`***.css`、`index.html` 等静态文件。

如果需要自定义构建，则需要在 `vue.config.js` 中进行配置。

## 环境变量
所有环境变量的配置都在 `.env.xxx` 文件中。

它们都会通过 `webpack.DefinePlugin` 插件注入到全局。
::: warning 注意
环境变量必须以 `VUE_APP_` 为开头。如: `VUE_APP_BASE_API`、`VUE_APP_PORT`。

代码可以通过一下方式获取：
``` js
console.log(process.env.VUE_APP_xxx)
```
:::

## 构建文件体积
项目中已经配置了 `webpack-bundle-analyzer`。当构建完成之后会自动打开 `http://localhost:9999` 页面看到具体的体积分布。

如果需要更改相关配置，则需要在 `vue.config.js` 中进行配置。

![](/images/analysis.png)

## 发布
只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 `cdn` 或者静态服务器即可。

