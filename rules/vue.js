module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'import/no-unresolved': 0, // 关闭 “import 无法识别的依赖”
    'vue/no-v-html': 0, // 关闭 “禁止v-html”
    'vue/require-default-prop': 0, // 关闭 “要求props有默认值”
    'vue/max-len': 0,
    'vue/html-closing-bracket-spacing': 0, // 关闭关闭标签的空格要求，不然换行的话无法保留换行结构，需要清除前面的空格
    'vue/html-self-closing': 0, // 关闭自闭合标签限制，这个限制有问题
    'vue/max-attributes-per-line': 0, // 关闭一行最大属性限制，不然换行多了，代码结构不方便阅读
    'vue/singleline-html-element-content-newline': 0 // 关闭要求标签换行，每个都换行反而代码行数过多，阅读不便利
  }
};
