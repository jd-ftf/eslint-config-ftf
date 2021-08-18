module.exports = {
  extends: [],
  rules: {
    'import/no-extraneous-dependencies': 1, // 对未出现在 package 中的依赖的引用，进行 warning 警告
    'linebreak-style': 0, // 关闭不同系统的换行校验
    'import/extensions': 0, // 关闭引用时省略后缀名（允许开发者自行设置 webpack 扩展名省略，避免无效）
  },
};
