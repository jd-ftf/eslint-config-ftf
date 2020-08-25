module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'no-unused-vars': 1,
    'no-plusplus': 0, // 关闭禁止一元 -- ++
    'max-len': 0, // 使用 `` 进行字符串拼接时，容易超100
    'no-param-reassign': 0, // 对于 vuex 的 mutations 来说，直接操作的传入参数 state 的属性，因此这条规则得关掉
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: false,
        object: true
      }
    }] // 将 array 的解构赋值关掉，没有对象好操作
  }
};
