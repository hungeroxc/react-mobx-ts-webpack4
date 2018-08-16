const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, './tpl/index.html')
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
    })
]
