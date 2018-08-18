const path = require('path')

// 路径只想build外一层
exports.resolve = function(dir) {
    return path.join(__dirname, './../', dir)
}
