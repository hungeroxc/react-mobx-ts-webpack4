const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./../config')
const theme = require('./../../theme')
const { resolve } = require('./../pathUtils')

const cacheLoader = {
    loader: 'cache-loader',
    options: {
        // css编译也进行缓存
        cacheDirectory: resolve('.cache-loader')
    }
}

const cssLoader = {
    test: /\.css$/,
    // 因为只有node_modules里面有css，所以只针对该文件夹下文件进行编译
    include: [resolve('node_modules')],
    use: [config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader', cacheLoader, 'css-loader', 'postcss-loader']
}

// 使用css modules的形式来书写元素类名
const typingsForCssModulesLoader = {
    loader: 'typings-for-css-modules-loader',
    options: {
        modules: true,
        namedExport: true,
        camelCase: true,
        sass: true
    }
}

const scssLoader = {
    test: /\.scss$/,
    // 只针对src下的scss进行编译
    include: [resolve('src')],
    use: [
        config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
        typingsForCssModulesLoader,
        'postcss-loader',
        {
            loader: 'sass-loader',
            options: {
                includePaths: [resolve('src/styles')]
            }
        }
    ]
}

const lessLoader = {
    test: /\.less$/,
    use: [
        config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader',
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

module.exports = [cssLoader, scssLoader, lessLoader]
