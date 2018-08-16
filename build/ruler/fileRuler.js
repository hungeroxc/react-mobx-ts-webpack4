const path = require('path')

module.exports = [
    {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        // 超出限定大小则使用file-loader，所以此处也需要安装file-loader
        loader: 'url-loader',
        query: {
            limit: 10000,
            name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
    },
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: path.join(__dirname, './../../', 'src')
    }
]
