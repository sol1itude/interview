const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 模式
    mode: 'development',

    // 模块
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

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    // devserver热更新
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),//项目构建路劲
        compress: true,//启动gzip压缩
        port: 3000,//端口号
        open: true//启动浏览器
    }


}