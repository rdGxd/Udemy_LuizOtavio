module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    quotes: [2, "double"],
    "import/first": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "linebreak-style": "off",
  },
};
