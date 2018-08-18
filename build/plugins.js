const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'build/tpl/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[id].[hash].css'
    })
]
