const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 这个插件用于将tsconfig的paths里面的路径映射到webpack解析路径中去
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config = require('./config')
const optimization = require('./optimization')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
        path: config.assetsRoot,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                // 引用的ts配置文件和需要解析的扩展文件类型
                configFile: path.join(__dirname, './../', 'tsconfig.json'),
                extensions: ['.ts', '.tsx', '.js', '.jsx']
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // 如果为dev环境就使用css代码分离，否则使用style-loader
                    config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: path.join(__dirname, './../src')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './tpl/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),

    ],
    optimization
}

