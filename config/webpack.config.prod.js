const { merge } = require('webpack-merge'); // 注意 webpack-merge 的新用法
const baseWebpackConfig = require('./webpack.config.base');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimize: true, // 确保启用了压缩
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            // 是否注释掉console
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          format: { // 注意这里的变化，`output` 在新版本中改为 `format`
            comments: false,
          },
        },
        extractComments: false, // 如果不想将注释提取到单独的文件，可以使用这个选项
        parallel: true, // 使用多进程并行运行以提高构建速度
        // 不再需要 sourceMap 选项，因为它应该在外面的 `devtool` 配置中设置
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
  // 如果你需要 source maps，可以在这里配置
  // devtool: 'source-map', // 开启 source map，如果不需要可以注释掉
});

module.exports = webpackConfig;