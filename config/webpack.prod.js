const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require("./webpack.common");
const { default: merge } = require('webpack-merge');


/** @type {import('webpack').Configuration} */

const prodConfig ={
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
            test: /\.(css|scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    optimization:{
        splitChunks:{
            chunks: "all",
            name: false
        }
    },plugins: [new MiniCssExtractPlugin()]

}

module.exports = merge(common, prodConfig)