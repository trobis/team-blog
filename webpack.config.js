var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './main.js'
    ],
    watch: true,
    cache: true,
    debug: true,
    output: {path: __dirname, filename: 'bundle.js'},
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
};
