### 1. 常用的中间件
- koa-router
- koa-body: 解析请求体
- koa-json: 
- @koa/cors: 设置允许跨域
- koa-static: 静态资源处理
- koa-combine-routers: 整合路由
- koa-helmet: 给 http 响应添加安全响应头
- koa-compose: 整合中间件
- koa-compress: 压缩中间件

### 2. 在 Node 中使用 webpack 进行配置

### 3. 在 Node 中使用 ES6 语法，配合热更新
```nodemon --exec babel-node src/index.js```

### 4. webpack 不同环境下的不同配置，以及配置合并
webpack-merge

### 5. webpack 注入 process.env.NODE_ENV 的方法
```
new webpack.DefinePlugin({
  'precess.env': {
    NODE_ENV: (process.env.NODE_ENV === 'prod' ||
      process.env.NODE_ENV === 'production') ?
      "'production'" :
      "'development'"
  }
})
```

### 6. 生产模式下的优化
- webpack 开启 js 压缩和代码分割
- 使用 koa-compress 压缩中间件

### 7. 生成图形验证码
svg-captcha
