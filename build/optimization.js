const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const env = require('./env')


module.exports = env.APP_ENV === 'dev' ? {} : {
    minimizer: [
        new UglifyJsPlugin({
            // 使用文件缓存，当js文件没有变化时候就利用缓存
            cache: true,
            // 采用多线程来加速压缩
            parallel: true
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
