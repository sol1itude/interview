let path = require('path');


module.exports = {
    // 入口文件
    entry: "./src/index.js",
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // 模式
    mode: 'development',


    // 模块loader配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}