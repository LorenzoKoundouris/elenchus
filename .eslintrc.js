module.exports = {
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    env: {
        node: true,
        browser: true
    },
    rules: {
        "no-prototype-builtins": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
    },
};
