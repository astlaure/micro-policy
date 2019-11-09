const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'policy-page': './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    resolve: {
        extensions: ['.vue', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.scss$/, loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new ManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};