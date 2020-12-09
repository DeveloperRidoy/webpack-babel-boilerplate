const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]    
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules/'),
                use:[
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: './src/index.html',
                filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
                chunkFilename: '[id].css'
            }
        )
    ]
}