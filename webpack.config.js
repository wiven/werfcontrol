var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/dst/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        })
    ]
};