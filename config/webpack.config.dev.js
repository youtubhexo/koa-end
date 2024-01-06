const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackconfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {children:false}
})

module.exports=webpackconfig