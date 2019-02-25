module.exports = {
    entry: "./src/app",
    output: {
        library: "elenchus",
        libraryTarget: "umd",
        filename: "elenchus.min.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    target: "node",
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
