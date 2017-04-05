'use strict';

require('core-js/fn/object/assign');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

console.log(config);
new webpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
    console.log('Openng your system brower ... ');
    open('http://localhost:' + config.port + '/webpack-dev-server')
})
