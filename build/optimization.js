const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const constants = require('./constants')
const config = require('./config')


module.exports = constants.APP_ENV === 'dev' ? {} : {
    runtimeChunk: {
        name: 'manifest'
    },
    splitChunks: {
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
    minimizer: [
        new UglifyJsPlugin({
            // 使用文件缓存，当js文件没有变化时候就利用缓存
            cache: true,
            // 采用多线程来加速压缩
            parallel: true,
            // 需要配置source map
            sourceMap: config.sourceMap
        }),
        new OptimizeCSSAssetsPlugin({
            // cssnano用于优化css格式表，使得构建出来的css样式表文件变小
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                reduceIdents: false,
                autoprefixer: false
            }
        })
    ]
}
