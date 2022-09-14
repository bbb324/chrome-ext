/**
 * Created by junxie on 18/5/27.
 */
 const {merge} = require('webpack-merge');
 const base = require('./webpack.config.common');
 
 module.exports = merge(base, {
     mode: 'production',
     devtool: false
 });
 