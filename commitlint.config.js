// https://commitlint.js.org/#/reference-rules
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 新功能
        'feat',
        // 修复
        'fix',
        // 发版
        'release',
        // 修改 CI/CD
        'chore',
        // 重构代码
        'refactor',
        // 单元测试相关
        'test',
        // ts类型相关
        'types',
        // 优化代码
        'perf',
        // 文档相关
        'docs'
      ]
    ],
    'scope-case': [2, 'always',
      [
        'lower-case',
        'camel-case'
      ]
    ]
  }
};
