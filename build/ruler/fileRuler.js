const path = require('path')

const {resolve,resolveAssetsRootDir} = require('./../pathUtils')

module.exports = [
    {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        // 超出限定大小则使用file-loader，所以此处也需要安装file-loader
        loader: 'url-loader',
        query: {
            limit: 8192,
            name: resolveAssetsRootDir('img/[name].[hash:7].[ext]')
        }
    },
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: resolve('src')
    }
]
