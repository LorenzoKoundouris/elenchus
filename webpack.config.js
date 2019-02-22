const path = require("path");

module.exports = {
    entry: "./src/app",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "elenchus.min.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};
