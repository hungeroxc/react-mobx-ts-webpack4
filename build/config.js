const path = require('path')

const constants = require('./constants')

module.exports = {
    // 如果为dev环境则不进行css代码分离
    extractCss: constants.APP_ENV !== 'dev',
    // 在打包出的文件顶层加一个环境变量文件夹
    assetsRoot: path.resolve(__dirname, `./../dist/${constants.APP_ENV}`),
    // 为以后在正式环境接入sentry做source map准备
    sourceMap: constants.APP_ENV !== 'qa'
}
