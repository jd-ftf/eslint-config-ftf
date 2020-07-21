# eslint-config-ftf
FTF's ESLint config, following our styleguide.

## Usage with eslint

```shell script
npm i -D eslint-config-ftf eslint
```
touch a new file named `.eslintrc`, and then use the following content to config eslint.

```json
{
  "extends": [
    "ftf"
  ]
}
```

## Development

```shell script
cd eslint-config-ftf
# 先安装依赖包
npm ci
# 将本地工程映射为 node package
npm link eslint-config-ftf
# 单元测试
npm test
```
