module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  "parser": "vue-eslint-parser",
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended"
  ],
  "plugins": ["vue"],
  parserOptions: {
    "sourceType": "module",
    "vueFeatures": {
      "filter": true,
      "interpolationAsNonHTML": false,
    },
    "ecmaVersion": 2022
  },
  rules: {
    'no-console': 'off',
    "semi": ['error', 'never'],
    'vue/require-default-prop': 'off',
    "vue/singleline-html-element-content-newline": "off"
  }
}
