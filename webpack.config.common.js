/**
 * Created by junxie on 18/5/27.
 */
const path = require('path');
const webpack = require('webpack');

const entryConfig = require('./entry.json');


module.exports = {
    entry: {
        'babel-polyfill': ['babel-polyfill'],
        ...entryConfig
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    devtool: 'cheap-module-source-map',
    optimization: {
        emitOnErrors: true,
        moduleIds: 'named',
        chunkIds: 'named',
        minimize: true
    },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};
