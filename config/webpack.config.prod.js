const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge(baseConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({ // 压缩 js
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: false
          },
          sourceMap: false
        }
      })
    ],
    splitChunks: {  // 代码分割
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackConfig