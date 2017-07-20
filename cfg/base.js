'use strict';

let path = require('path');
let defaultSettings = require('./default');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];

// 额外的项目插件，放在 additionalPaths 数组里面

// let additionalPaths = [];
console.log(defaultSettings.srcPath);
module.exports = {
  // additionalPaths: additionalPaths,
  // port: defaultSettings.port,
  // debug: true,
  devtool: 'eval',
  // context: path.join(__dirname, '/../src'),
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: path.join(__dirname, '/../src'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    proxy: {
      '/api': {
        target: 'http://m.maoyan.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
    // proxy: [
    //   {
    //     context: ['movie', 'show'],
    //     '/movie': {
    //         target: 'http://m.maoyan.com',
    //         secure: false,
    //         changeOrigin: true
    //     }
    //   }
    // ]
  },
  // resolve 指定可以被 import 的文件后缀
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.sass', '.scss'],
    // resolve.alias 路径的别名，方便引入文件的时候简写.
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
      // moment: 'moment/min/moment-with-locales.min.js'
    },
    modules: [
      path.resolve(__dirname, 'src'), 'node_modules'
    ]
  }
  // modules: {
  //   //  确定moment模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
  //   noParse: [/moment-with-locales/]
  // }
}
