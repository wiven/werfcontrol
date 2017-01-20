var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/dst/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        })
    ]
};