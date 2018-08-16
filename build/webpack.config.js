const path = require('path')
// 这个插件用于将tsconfig的paths里面的路径映射到webpack解析路径中去
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')


const config = require('./config')
const optimization = require('./optimization')
const styleRuler = require('./ruler/styleRuler')
const jsRuler = require('./ruler/jsRuler')
const fileRuler = require('./ruler/fileRuler')
const plugins = require('./plugins')

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
            ...jsRuler,
            ...styleRuler,
            ...fileRuler
        ]
    },
    plugins,
    optimization
}

