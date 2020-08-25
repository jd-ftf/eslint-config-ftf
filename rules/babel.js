module.exports = {
  plugins: [
    'babel'
  ],
  rules: {
    'babel/new-cap': 1, // 构造函数大写开头
    'babel/camelcase': 1, // 使用驼峰法
    'babel/no-invalid-this': 1, // 禁止类或对象以外使用 this
    'babel/object-curly-spacing': 0, // doesn't complain about export x from "mod"; or export * as x from "mod"
    'babel/quotes': [1, 'single'], // 使用单引号
    'babel/semi': 1, // doesn't fail when using for await (let something of {}). Includes class properties
    'babel/no-unused-expressions': 1, // doesn't fail when using do expressions or optional chaining (a?.b())
    'babel/valid-typeof': 1 // doesn't complain when used with BigInt (typeof BigInt(9007199254740991) === 'bigint')
  }
};
