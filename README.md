# vue单页面应用

> 介绍

项目基于 spa 方式实现前后端分离，适合于移动端单页面应用，快速搭建项目原型，项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`、`axios`
- 编译/打包工具：`webpack`、`babel`、`node-sass` 、`node-less`
- UI库：`vux`
- 单元测试工具：`unit`、`e2e`
- 本地服务器：`express`

## 快速开始

``` bash

git clone https://github.com/rumengkai/vue-spa.git
cd vue-spa

# install dependencies
npm install

# serve with hot reload at localhost:8889
npm run dev

```

## 命令列表：

``` bash

# serve with hot reload at localhost:8889
npm run dev

# build for production with minification
npm run build

# build for test with minification
npm run build:sit

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── build                           构建脚本目录
    │   ├── build.js                        运行本地构建服务器，可以访问构建后的页面
    │   ├── check-version.js                版本检测
    │   ├── utils.js                        构建相关工具方法
    │   ├── vue-loader.js                   vue-loader
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── mock                            mock数据目录
    │   └── hello.js
    ├── src                             源码目录    
    │   ├── api                             请求接口抽离
    │   │    └── index.js                  
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── components                      公共组件目录
    │   │   └── HelloWorld.vue
    │   ├── filters                        	全局过滤器
    │   │		└── index.js   
    │   ├── routes                          前端路由
    │   │   └── index.js
    │   ├── style                           样式
    │   │   ├── index.scss									
    │   │   └── theme.scss                  主题
    │   ├── store                           应用级数据（state）
    │   │   └── index.js
    │   ├── utils                           常用工具
    │   │    ├── assembly.js                    工具
    │   │    ├── auth.js                        授权相关操作
    │   │    ├── fetch.js                       异步请求封装（axios）
    │   │    ├── index.js                       公共js
    │   │    └── validate.js                    验证js
    │   ├── views                           页面目录
    │   │    └── helloworld
    │   │        └── index.vue
    │   ├── main.js                         入口js文件
    │   ├── App.vue                         根组件
    │   └── vux.js                          vux全局注册组件
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            └── specs                           单测case目录
                └── Hello.spec.js

## 组件化

整个应用通过 vue 组件的方式搭建起来，通过 vue-router 控制相应组件的展现，组件树结构如下：

    app.vue                         根组件（整个应用只有一个）
        ├──view1.vue                    页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
        │   ├──component1.vue               功能组件，公用的放在 components 目录，否则放在 views 子目录
        │   ├──component2.vue
        │   └──component3.vue
        ├──view2.vue
        │   ├──component1.vue
        │   └──component4.vue
        └──view3.vue
            ├──component5.vue
            ……

## 相关资源

- QQ群：793809641
- vue.js 官网：[https://vuejs.org/](https://vuejs.org/)
- vue.js 中文网： [http://vuefe.cn/](http://vuefe.cn/)
- vue-router 文档：[http://router.vuejs.org/zh-cn/index.html/](http://router.vuejs.org/zh-cn/index.html)
- vux 文档：[http://doc.vux.li/](http://doc.vux.li/)
- vuex 文档：[http://vuex.vuejs.org/](http://vuex.vuejs.org/)
- webpack 文档：[https://webpack.github.io/docs/](https://webpack.github.io/docs/)
- ES2015 入门教程：[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)
- scss 文档：[http://sass-lang.com/documentation/file.SASS_REFERENCE.html](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- mocha 文档: [http://mochajs.org/](http://mochajs.org/)
- express 中文官网：[http://expressjs.com/zh-cn/](http://expressjs.com/zh-cn/) 

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
