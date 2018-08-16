const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./../config')


console.log(path.join(__dirname, './../../', 'src'))

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

module.exports = [
    cssLoader, scssLoader
]
