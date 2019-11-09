const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'policy-page': './src/dev.js'
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
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'policy.css'
        })
    ]
};