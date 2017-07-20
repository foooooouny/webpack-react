'use strict';

require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.devServer.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.devServer.port);
    console.log('Openng your system brower ... ');
    // 日日日日日日日日日日日日日日，/webpack-dev-server/ 后面有斜杠
    open('http://localhost:' + config.devServer.port + '/webpack-dev-server/');
});
