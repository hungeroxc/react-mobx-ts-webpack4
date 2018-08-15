const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 这个插件用于将tsconfig的paths里面的路径映射到webpack解析路径中去
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// 这个插件用于引入antd的代码分割，否则引入一个antd的组件就会把整个antd都引入进来
const tsImportPluginFactory = require('ts-import-plugin')

const config = require('./config')
const optimization = require('./optimization')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: config.assetsRoot,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
                        loader: 'awesome-typescript-loader',
                        options: {
                            // babel的使用移到awesome-typescript-loader中，这样就不用编写.babelrc文件
                            useBabel: true,
                            babelOptions: {
                                // 不适用babelrc文件
                                babelrc: false,
                                plugins: ['react-hot-loader/babel']
                            },
                            getCustomTransformers: () => ({
                                before: [
                                    tsImportPluginFactory({
                                        libraryName: 'antd',
                                        libraryDirectory: 'lib',
                                        // true的话会将antd里面的less抽离出来，填写css的话则会抽离css，但是抽离css的话就不能自定义antd的主题
                                        style: 'css'
                                    })
                                ]
                            })
                        }
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
                ]
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

