### 1. 常用的中间件
- koa-router
- koa-body
- koa-json
- @koa/cors
- koa-static
- koa-combine-routers
- koa-helmet
- koa-compose

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
