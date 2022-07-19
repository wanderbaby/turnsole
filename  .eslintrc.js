module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended"
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    "sourceType": "module",
    "ecmaVersion": 2020
  },
  rules: {
    "semi": ['error', 'never'],
    "quotes": ["error", "single"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
