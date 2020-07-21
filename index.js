module.exports = {
  extends: [
    './rules/airbnb',
    './rules/jsx',
    './rules/babel',
    './rules/vue',
    './rules/custom'
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {}
};
