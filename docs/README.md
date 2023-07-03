---
home: true
heroImage: /logo.png
heroText: agile-admin
---

<div class="btn-box">
  <a href="./views/start/" class="start">开始</a>
  <a href="http://admin.gumingchen.icu" target="blank" class="demo">演示</a>
</div>

<div class="img-box">
  <img class="home-img" src="http://oss.gumingchen.icu/frame/home.jpg" />
  <img class="personal-img" src="http://oss.gumingchen.icu/frame/personal.jpg" />
  <img class="file-img" src="http://oss.gumingchen.icu/frame/file.jpg" />
</div>

<div class="other-title">其他开源</div>
<div class="other-box">
  <div>
    <h3>Admin基础版后端服务</h3>
    <p>一个基于Java、Spring boot、Mysql、Mybatis-plus、shiro的后端 RBAC 权限管理系统。内置菜单管理、企业管理、角色管理、管理员管理、操作日志、登录日志等功能。</p>
    <a href="https://github.com/gmingchen/java-spring-boot-admin" target="blank">查看详情</a>
  </div>
  <div>
    <h3>IM即时聊天</h3>
    <p>一个基于Vue3、Element-plus、Java、Spring boot、Maven、Netty、Mysql、Mybatis-plus的即时聊天系统，内置添加好友、好友私聊等功能。</p>
    <a href="https://github.com/gmingchen/vue3-element-plus-im" target="blank">查看详情</a>
  </div>
  <div>
    <h3>Node后端服务</h3>
    <p>是一个基于node、koa2、koa-router、mysql开发的后端服务框架，并使用 gulp 和 gulp-nodemon 实现了热加载功能，只要你会 SQL 就也可以写接口了，再也不用看后端的脸色了。</p>
    <a href="https://github.com/gmingchen/node-server" target="blank">查看详情</a>
  </div>
  <div>
    <h3>个人博客系统</h3>
    <p>是一个基于Vue3 + Vite、Element-plus、Java、Spring boot、Mysql、Mybatis-plus开发的个人博客系统，目前还在开发中 70%。。。</p>
    <a href="https://github.com/gmingchen/vue3-element-plus-blog" target="blank">查看详情</a>
  </div>
</div>

<style>
.home {
  max-width: 1200px!important;
}
.home .hero img {
  height: 200px;
}
.home .hero .description {
  font-size: 14px!important;
}

.btn-box {
  height: 100px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn-box a {
  display: inline-block;
  height: 50px;
  width: 170px;
  line-height: 50px;
  text-align:center;
  font-size: 1rem;
  border-radius: 4px;
}
.btn-box .start {
  background: #46bd87;
  color: #fff;
}
.btn-box .start:hover {
  background: #7dd0ab
}
.btn-box .demo {
  border: 1px solid #46bd87;
  color: #46bd87;
}
.btn-box .demo:hover {
  background: rgba(19, 206, 102, 0.15)
}

.img-box {
  position: relative;
  margin-bottom: 40px;
  text-align: center;
}
.img-box .home-img {
  position: relative;
  width: 70%;
  z-index: 10;
}
.img-box .personal-img {
  position: absolute;
  width: 60%;
  left: 0;
  bottom: 4px;
  z-index: 0;
}
.img-box .file-img {
  position: absolute;
  width: 60%;
  right: 0;
  bottom: 4px;
  z-index: 0;
}

.other-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: center;
  color: #46bd87;
}
.other-box {
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: space-around;
}
.other-box > div {
  position: relative;
  bottom: 0px;
  margin: 0 20px;
  height: 300px;
  width: 260px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  text-align: center;
  transition: all .3s ease-in-out;
}
.other-box > div:hover {
  bottom: 6px;
  box-shadow:0 12px 32px 4px #edeff53d,0 8px 20px #edeff57a;
}
.other-box > div > p {
  font-size: 14px;
  color: #99a9bf;
  padding: 0 25px;
  line-height: 20px;
}
.other-box > div > a {
  height: 53px;
  line-height: 52px;
  font-size: 14px;
  color: #46bd87;
  text-align: center;
  border: 0;
  border-top: 1px solid #dcdfe6;
  padding: 0;
  cursor: pointer;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 5px 5px;
  transition: all .3s;
  text-decoration: none;
  display: block;
}
.other-box > div > a:hover {
  color: white;
  background: #46bd87;
}
</style>
