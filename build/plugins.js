const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {resolveAssetsRootDir} = require('./pathUtils')
const constants = require('./constants')

const devPlugins = [
    // 忽略src文件中index.scss.d.ts文件的变化
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'build/tpl/index.html',
        // js注入放置在body的底部
        inject: true
    })
]

const prodPlugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'build/tpl/index.html',
        inject: true,
        // 使用的是该插件内部集成的HTMLMinifier
        minify: {
            /** 
             * @description
             * 删除注释、空格，尽可能删除属性的引号
             * 
             * 更多选项查看
             * https://github.com/kangax/html-minifier#options-quick-reference
             */
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: resolveAssetsRootDir('css/[name].[hash].css'),
        chunkFilename: resolveAssetsRootDir('css/[name].[id].[hash].css')
    })
]

module.exports = constants.APP_ENV === 'dev' ? devPlugins : prodPlugins
