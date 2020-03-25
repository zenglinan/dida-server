const path = require('path')
const webpack = require('webpack')
const nodeExcternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'precess.env': {
        NODE_ENV: (process.env.NODE_ENV === 'prod' ||
          process.env.NODE_ENV === 'production') ?
          "'production'" :
          "'development'"
      }
    })
  ],
  externals: [nodeExcternals()],
  node: {
    console: true,
    __filename: true,
    __dirname: true,
    path: true
  }
}
module.exports = webpackConfig