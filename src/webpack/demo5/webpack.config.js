const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                // 匹配图片文件
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    // 图片小于8kb进行base64处理，减少请求数量
                    limit: 8*1024,
                    // url-loader的es6的模块化解析
                    esModule: false,
                    // 重命名
                    name: '[hash:10].[ext]'
                }
            },{
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]


}