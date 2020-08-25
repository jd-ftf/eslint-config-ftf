module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'import/no-unresolved': 0, // 关闭 “import 无法识别的依赖”
    'vue/no-v-html': 0, // 关闭 “禁止v-html”
    'vue/require-default-prop': 0, // 关闭 “要求props有默认值”
    'vue/max-len': 0
  }
};
