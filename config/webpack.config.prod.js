const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge(baseConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimize: [
      new TerserWebpackPlugin({
        compress: {
          warnings: false,
          drop_console: false
        },
        sourceMap: false
      })
    ]
  }
})

module.exports = webpackConfig