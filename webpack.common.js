const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: { 
        app: './src/main.js',
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$|\.ico$|\.png$|\.svg$|\.woff$|\.ttf$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Funda | Search homes in the Netherlands',
            favicon: 'src/public/favicon-32x32.png',
            template: 'src/public/index.html',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
}