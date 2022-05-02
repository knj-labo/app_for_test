const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./base");

module.exports = merge(base, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        compress: true,
        port: 9000,
    },
    devtool: "source-map",
});