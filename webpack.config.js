const HtmlWebpackPlugin = require('html-webpack-plugin');
const MIniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv-webpack')
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})

const cssPlugin = new MIniCssExtractPlugin({
    filename:'index.css',
    template:'./src/index.css'
})

module.exports = {
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader','eslint-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }

        ]
    },
    plugins:[htmlPlugin,cssPlugin, new dotenv()]
}