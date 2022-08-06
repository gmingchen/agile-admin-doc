# 项目配置

## 前端

### 全局配置
:::tip 全局配置
- 在项目的根目录下可以找到`vue.config.js`文件，此文件为项目整体的全局配置。
- 每次修改该文件项目都需要重新运行。
:::
```js
const { defineConfig } = require('@vue/cli-service')
// element-plus 按需加载
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 项目打包文件大小监控
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  // 部署应用时的基本路径.
  publicPath: './',
  // build时构建文件的目录,构建时传入 --no-clean 可关闭该行为.
  outputDir: 'admin',
  // build时放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录.
  assetsDir: 'static',
  // 指定生成的index.html的输出路径(相对于 outputDir ),也可以是一个绝对路径.
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存.
  filenameHashing: true,
  // 是否在开发环境下通过eslint-loader在每次保存时lint代码(在生产构建时禁用 eslint-loader).
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的Vue构建版本.
  runtimeCompiler: false,
  // Babel显式转译列表.
  transpileDependencies: true,
  // 如果你不需要生产环境的source map,可以将其设置为 false 以加速生产环境构建.
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 设置类型是Sring，设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性(仅影响构建时注入的标签).
  crossorigin: '',
  // 在生成的HTML中的<link rel="stylesheet">和<script>标签上启用Subresource Integrity(SRI).
  integrity: false,
  // 所有webpack-dev-server的选项都支持.
  devServer: {
    // 是否自动打开浏览器.
    open: false,
    // 局域网和本地访问.
    host: '0.0.0.0',
    // 端口.
    port: process.env.VUE_APP_PORT || 9585,
    // 代理.
    proxy: process.env.NODE_ENV.VUE_APP_PROXY === 'false' ? null
      : {
        '/proxy': {
          // 目标代理服务器地址.
          target: 'http://localhost:8888',
          // 是否允许跨域.
          changeOrigin: true,
          secure: true,
          pathRewrite: {
            '^/proxy': '/'
          }
        }
      }
  },
  // css相关配置.
  css: {
    // css文件名是否可省略module,默认为false.
    // requireModuleExtension: false,
    // 是否使用css分离插件 默认生产环境下是true, 开发环境下是false.
    extract: false,
    // 是否为CSS开启source map.设置为true之后可能会影响构建的性能.
    sourceMap: false
    // 向CSS相关的loader传递选项(支持:css-loader postcss-loader sass-loader less-loader stylus-loader).
    /* loaderOptions: {
      sass: {
        // 引入全局scss全局样式
        prependData: `@import '~@/assets/sass/element.scss';`
      }
    } */
  },

  /*
  * 如果你需要基于环境有条件地配置行为,或者想要直接修改配置,那就换成一个函数(该函数会在环境变量被设置之后懒执行).
  * 该方法的第一个参数会收到已经解析好的配置.
  * 在函数内,你可以直接修改配置,或者返回一个将会被合并的对象.
  */
  configureWebpack: {
    plugins: [
      // 按需引入Element-plus
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: false })]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      fallback: { 'path': require.resolve('path-browserify') }
    }
  },
  // 对内部的webpack配置(比如修改、增加Loader选项)(链式操作).
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // const analyzer = new BundleAnalyzerPlugin({
      //   analyzerPort: 9999
      // })
      // config.plugin('webpack-bundle-analyzer').use(analyzer)
    }
    config.resolve.alias
      .set('@', resolve('src'))
    config.module.rules.delete('svg')
    config.module
      .rule('svg-smart')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
    config.optimization.splitChunks({
      // 优化块：all-所有 async-异步 initial-同步
      chunks: 'all',
      // 按需加载时的最大并行请求数。
      maxAsyncRequests: 30,
      // 入口点的最大并行请求数。
      maxInitialRequests: 30,
      // 在拆分之前，模块必须在块之间共享的最少次数。
      minChunks: 1,
      // 在为按 maxSize 分割的部分创建名称时防止暴露路径信息。
      hidePathInfo: true,
      // 要生成的块的最小大小（以字节为单位）。
      minSize: 30000,
      // maxSize: 50000,
      // name: true,
      cacheGroups: {
        apis: {
          // 当它是初始块时才允许覆盖文件名
          name: 'chunk-apis',
          // 控制此缓存组选择哪些模块
          test: resolve('src/apis'),
          // 在拆分之前，模块必须在块之间共享的最少次数。
          minChunks: 1,
          // 优先级
          priority: 10,
          // 如果当前块包含已经从主包中分离出来的模块，它将被重用，而不是生成一个新的。
          reuseExistingChunk: true
        },
        components: {
          name: 'chunk-components',
          test: resolve('src/components'),
          minChunks: 1,
          priority: 10,
          reuseExistingChunk: true
        },
        quill: {
          name: 'chunk-quill',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?quill(.*)/
        },
        elementPlus: {
          name: 'chunk-elementPlus',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-plus(.*)/
        },
        elementIcon: {
          name: 'chunk-elementIcon',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?@element-plus(.*)/
        },
        echarts: {
          name: 'chunk-echarts',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?echarts(.*)/
        },
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 5,
          chunks: 'initial'
        }
      }
    })
    // 页面太多会导致很多无意义的请求
    config.plugins.delete('prefetch')
  }
})

```

### 环境变量配置
所有环境变量的配置都在 `.env.xxx` 文件中。

它们都会通过 `webpack.DefinePlugin` 插件注入到全局。
::: warning 注意
环境变量必须以 `VUE_APP_` 为开头。如: `VUE_APP_BASE_API`、`VUE_APP_PORT`。

代码可以通过一下方式获取：
``` js
console.log(process.env.VUE_APP_xxx)
```
:::
:::tip 全局配置
- 在项目的根目录下可以找到`.env.`开头的文件，这些文件分别为不同环境下的变量配置文件。
- 它们都会通过 `webpack.DefinePlugin` 插件注入到全局。
- 环境变量必须以 `VUE_APP_` 为开头。如: `VUE_APP_BASE_API`、`VUE_APP_PORT`。
- 可以根据自己的需求自定义变量。
- 代码可以通过一下方式获取：
``` js
console.log(process.env.VUE_APP_xxx)
```
:::
`.env.development`
```js
// 环境
NODE_ENV = 'development'
// Api请求地址
VUE_APP_BASE_API = 'http://localhost:8806'
// WebSocket连接地址
VUE_APP_WS_URL = 'ws://localhost:8806/slipper/websocket/'
// todo: 以下两个变量是在本地开发的时候使用
// 项目本地运行端口号
VUE_APP_PORT = '9585'
// 是否开启本地代理
VUE_APP_PROXY = 'false'
```
`.env.production`
```js
// 环境
NODE_ENV = 'production'
// Api请求地址
VUE_APP_BASE_API = 'http://api.admin.gumingchen.icu'
// WebSocket连接地址
VUE_APP_WS_URL = 'ws://139.196.182.46:8806/slipper/websocket/'
// todo: 以下两个变量是在本地开发的时候使用
// 项目本地运行端口号
VUE_APP_PORT = '9585'
// 是否开启本地代理
VUE_APP_PROXY = 'false'
```
`.env.testing`
```js
// 环境
NODE_ENV = 'testing'
// Api请求地址
VUE_APP_BASE_API = 'http://api.admin.gumingchen.icu'
// WebSocket连接地址
VUE_APP_WS_URL = 'ws://139.196.182.46:8806/slipper/websocket/'
// todo: 以下两个变量是在本地开发的时候使用
// 项目本地运行端口号
VUE_APP_PORT = '9585'
// 是否开启本地代理
VUE_APP_PROXY = 'false'
```

## 后端

### 全局配置
:::tip 全局配置
- 在项目的根目录`slipper-backstage`模块下可以找到`application.yml`文件，此文件为项目整体的全局配置。
- 具体文件路径：`/java-admin/slipper-backstage/src/main/resources/application.ym`。
:::
```bash
spring:
  profiles:
    active: dev # 环境 dev|test|prod
  jackson:
    time-zone: GMT+8 # 时区
    date-format: yyyy-MM-dd HH:mm:ss # 时间格式化
    default-property-inclusion: non_null # 为 null 时字段不进行序列化 减少流量
  servlet:
    multipart:
      max-file-size: 10MB # 单个文件最大
      max-request-size: 100MB # 总上传数据最大
      enabled: true # 是否启用
  mvc:
    throw-exception-if-no-handler-found: true
    static-path-pattern: /static/**
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver # 数据库驱动名称
      url: jdbc:mysql://${database.ip}:${database.port}/${database.name}?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&useSSL=false # url
      username: ${database.username} # 用户名
      password: ${database.password} # 密码

      initial-size: 10 # 初始化大小
      max-active: 100 # 最大个数
      min-idle: 10 # 最小个数
      max-wait: 6000 # 最大等待时间

      time-between-eviction-runs-millis: 60000 # 间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒

      min-evictable-idle-time-millis: 300000 # 最小生存时间
      max-evictable-idle-time-millis: 600000 # 最大生存时间

      #validation-query: SELECT 1 FROM DUAL # 用来检测连接是否有效的sql TODO:Oracle 需要使用
      test-on-return: false # 在连接归还到连接池时是否测试该连接
      test-on-borrow: false # 获取连接时候验证
      test-while-idle: true # 验证连接的有效性

      pool-prepared-statements: false # 是否缓存preparedStatement，TODO:比如说oracle。在mysql下建议关闭。
      keep-alive: true # 连接池中的minIdle数量以内的连接，空闲时间超过minEvictableIdleTimeMillis，则会执行keepAlive操作

      stat-view-servlet: # 监控
        enabled: true #是否启用StatViewServlet TODO: 启用建议设置密码或白名单
        reset-enable: true # 是否允许清空统计数据
        url-pattern: ${druid.url-pattern} # 页面路径
        login-username: ${druid.username} # 用户名
        login-password: ${druid.password} # 密码
        # 访问控制
        allow: 127.0.0.1,172.17.1.169,157.0.142.162
#        allow: 128.242.127.1/24,128.242.128.1
        #deny: 128.242.127.4
      filter:
        stat:
          enabled: true
          log-slow-sql: true
          slow-sql-millis: 100
        wall:
          enabled: true
          config:
            multi-statement-allow: true # 是否允许一次执行多条语句
  redis:
    database: 0
    host: ${redis.host}
    port: ${redis.port}
    password: ${redis.password}
    timeout: 6000ms
    jedis:
      pool:
        max-active: 1000
        max-wait: -1ms
        max-idle: 10
        min-idle: 5

server:
  port: ${service.port} # 启动端口
  servlet:
    context-path: ${service.context-path} # 项目路径
  tomcat:
    uri-encoding: utf-8 # 编码
    connection-timeout: 5000ms # 连接超时
    threads:
      max: 1000 # 最大线程数
      min-spare: 30 # 最小闲置线程

mybatis-plus:
  mapper-locations: classpath*:/mapper/**/*.xml # mapper路径 多个用逗号隔开
  type-aliases-package: com.slipper.**.entity # 实体路径 多个用逗号隔开
  global-config:
    db-config:
      id-type: auto # 主键类型 AUTO:"数据库ID自增", INPUT:"用户输入ID", ID_WORKER:"全局唯一ID (数字类型唯一ID)", UUID:"全局唯一ID UUID"
      table-underline: true # 表名是否使用驼峰转下划线命名,只对表名生效
      # 字段验证策略 IGNORED:"忽略判断",NOT_NULL:"非 NULL 判断",NOT_EMPTY:"非空判断"
      insert-strategy: NOT_EMPTY
      update-strategy: NOT_NULL
      logic-delete-field: deleted # 逻辑删除字段
      logic-delete-value: 1 # 已删除值
      logic-not-delete-value: 0 # 未删除值
    banner: false # 是否控制台 print mybatis-plus 的 LOGO
  configuration:
    map-underscore-to-camel-case: true # 是否开启自动驼峰命名规则
    cache-enabled: false # 是否开启Mybatis二级缓存
    call-setters-on-nulls: true # 指定当结果集中值为 null 的时候是否调用映射对象的 Setter（Map 对象时为 put）方法，通常运用于有 Map.keySet() 依赖或 null 值初始化的情况
    jdbc-type-for-null: 'null' # 当没有为参数指定特定的 JDBC 类型时，空值的默认 JDBC 类型
```

### 环境变量配置
:::tip 全局配置
- 在项目的根目录`slipper-backstage`模块下可以找到`application-*.yml`文件，这些文件分别为不同环境下的变量配置文件。
- 具体文件路径：`/java-admin/slipper-backstage/src/main/resources/application-*.ym`。
- 可以根据自己的需求自定义变量。
:::
```bash
project: # 项目配置
  group: # 项目分组
  name: # 项目名称

service: # 服务配置
  port: 8806 # 端口
  context-path: /slipper # 环境路径

database: # 数据库配置
  ip: # IP地址
  port: # 端口
  name: # 名称
  username: # 帐号
  password: # 密码

druid: # 连接池监控组件配置
  url-pattern: /druid/* # 路径
  username: # 帐号
  password: # 密码

token: # 凭证配置
  expire: 86400 # 凭证过期时间

redis: # redis配置
  host: localhost # ip
  port: 6379 # 端口
  password: # 密码
```
