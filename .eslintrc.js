module.exports = {
  extends: ["eslint:recommended"], // 官方規則
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "no-var": 2,
    "array-callback-return": 2,
    "eqeqeq": 2,
    "no-extend-native": 2,
    "no-multi-spaces": 2,
    "no-return-assign": 2,
  }
}