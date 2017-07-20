'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const defaultPort = 8000;

/**
 *
 * Get the default modules object for webpack
 *
 * @return {object}
 *
 * 配置默认的参数
 */

let getDefaultModules = () => {
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 加载器的执行顺序，不设置为正常执行。可选值 'pre|post' 前|后
        enforce: 'pre',
        include: srcPath,
        // exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?{browsers:[ "last 2 version" ]}']
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'})
        // use: [
        //   {
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader'
        //   },
        //   {
        //     loader: 'autoprefixer-loader',
        //     options: {
        //       browsers: [
        //         'last 2 version'
        //       ]
        //     }
        //   }
        // ]
      },
      {
        test: /\.less$/,
        // loaders: ['style-loader', 'css-loader?sourceMap', 'autoprefixer-loader?{browsers:["last 2 version"]}', 'less-loader?sourceMap'],
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader']}),
        include: srcPath
      },
      {
        test: /\.scss$/,
        // loaders: ['style-loader', 'css-loader?sourceMap', 'autoprefixer-loader?{browsers:["last 2 version"]}', 'sass-loader?sourceMap&outputStyle=expanded'],
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
        include: srcPath
        // use: [
        //   {
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader'
        //   },
        //   {
        //     loader: 'autoprefixer-loader',
        //     options: {
        //       browsers: [
        //         'last 2 version'
        //       ]
        //     }
        //   },
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       outputStyle: 'expanded&indentedSyntax'
        //     }
        //   }
        //   // 'style-loader',
        //   // 'css-loader',
        //   // 'autoprefixer-loader?{browsers:["last 2 version"]}',
        //   // 'sass-loader?outputStyle=expanded&indentedSyntax'
        // ]
      },
      // {
      //   test: /\.scss/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'autoprefixer-loader?{browsers:["last 2 version"]}',
      //     'sass-loader?outputStyle=expanded'
      //   ]
      // },
      {
        test: /\.styl/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   'stylus-loader'
        // ]
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
        // use: [
        //   'url-loader?limit=8192'
        // ]
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
      // json-loader 在webpack2中默认读取
      // {
      //   test: /\.json$/,
      //   use: [
      //     'json-loader',
      //     {
      //       exclude: /node_modules/
      //     }
      //   ]
      // }
      // ,{
      //   test: /\.(js|jsx)$/, //用babel编译jsx和es6
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     cacheDirectory: true,
      //     presets: ['es2015', 'react'],
      //     plugins: [
      //         ['transform-object-rest-spread'],
      //         ['transform-runtime']
      //     ]
      //   }
      // }
    ]
  }
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: defaultPort,
  getDefaultModules: getDefaultModules,
  ExtractTextPlugin: ExtractTextPlugin
};

