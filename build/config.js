

const env = require('./env')

module.exports = {
    // 如果为dev环境则不进行css代码分离
    extractCss: env.APP_ENV !== 'dev'
}
