const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./../config')
const theme = require('./../../theme')

const cssLoader = {
    test: /\.css$/,
    // 因为只有node_modules里面有css，所以只针对该文件夹下文件进行编译
    include: [path.join(__dirname, './../../', 'node_modules')],
    use: [
        config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader'
    ]
}

const scssLoader = {
    test: /\.scss$/,
    // 只针对src下的scss进行编译
    include: [path.join(__dirname, './../../', 'src')],
    use: [
        config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'sass-loader'
    ]
}

const lessLoader = {
    test: /\.less$/,
    use: [
        config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        {
            loader: 'less-loader',
            options: {
                // 禁用内联js代码，这个功能用于禁用在样式表里面写js代码
                javascriptEnabled: true,
                // 根据antd官网进行主题修改
                modifyVars: theme
            }
        }
    ]
}

module.exports = [
    cssLoader, scssLoader, lessLoader
]
