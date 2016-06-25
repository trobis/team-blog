const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './main.js'
    ],
    output: {path: __dirname, filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
