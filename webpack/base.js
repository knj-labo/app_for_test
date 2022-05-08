const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "../public"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};