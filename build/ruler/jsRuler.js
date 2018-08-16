// 这个插件用于引入antd的代码分割，否则引入一个antd的组件就会把整个antd都引入进来
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = [
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
                                style: true
                            })
                        ]
                    })
                }
            }
        ]
    }
]
