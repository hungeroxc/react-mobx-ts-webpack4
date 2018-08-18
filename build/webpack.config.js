// 这个插件用于将tsconfig的paths里面的路径映射到webpack解析路径中去
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')


const config = require('./config')
const constants = require('./constants')
const optimization = require('./optimization')
const styleRuler = require('./ruler/styleRuler')
const jsRuler = require('./ruler/jsRuler')
const fileRuler = require('./ruler/fileRuler')
const plugins = require('./plugins')
const { resolve } = require('./pathUtils')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: config.assetsRoot,
        filename: constants.APP_ENV === 'dev' ? '[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: constants.APP_ENV === 'dev' ? '[name].js' : 'js/[name].[id].[chunkhash].js'
    },
    resolve: {
        extensions: constants.fileType,
        plugins: [
            new TsconfigPathsPlugin({
                // 引用的ts配置文件和需要解析的扩展文件类型
                configFile: resolve('tsconfig.json'),
                extensions: constants.fileType
            })
        ]
    },
    module: {
        rules: [
            ...jsRuler,
            ...styleRuler,
            ...fileRuler
        ]
    },
    plugins,
    optimization
}

