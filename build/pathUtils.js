const path = require('path')

const config = require('./config')

// 打包专用，所有文件打包到dist/static下
exports.resolveAssetsRootDir = function(dir) {
    return path.join(config.assetsSubDir, dir)
}

// 路径指向build外一层
exports.resolve = function(dir) {
    return path.join(__dirname, './../', dir)
}
