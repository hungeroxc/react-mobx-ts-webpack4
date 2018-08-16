const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./../config')

module.exports = [
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            // 如果为dev环境就使用css代码分离，否则使用style-loader
            config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
]
