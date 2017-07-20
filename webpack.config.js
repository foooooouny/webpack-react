'use strict';

const path = require('path'); // node 原生 path 模块
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'dist', 'test'];

let env;

if (args._.length > 0 && args._.indexOf('start') !== -1) {
    env = 'test';
} else if (args.env) {
    env = args.env;
} else {
    env = 'dev';
}

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return Object} Webpack config
 */

function buildConfig (myEnv) {
    let isValid = myEnv && myEnv.length > 0 && allowedEnvs.indexOf(myEnv) !== -1;
    let validEnv = isValid ? myEnv : 'dev';
    let config = require(path.join(__dirname, 'cfg/' + validEnv));
    return config;
}

module.exports = buildConfig(env);

// var webpack = require('webpack');
// var glob = require('glob'); // glob模块，用于读取webpack入口目录文件
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var CleanPlugin = require('clean-webpack-plugin');  // 用于清除目录文件
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;  // 处理 trunk
