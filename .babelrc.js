module.exports = {
    presets: [
        "@babel/env",
        "@babel/typescript",
    ],
    plugins: [
        // class { handleThing = () => { } }
        "@babel/proposal-class-properties",
        // { ...spread }
        "@babel/proposal-object-rest-spread",
    ],
};