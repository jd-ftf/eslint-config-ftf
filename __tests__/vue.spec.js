const { CLIEngine } = require('eslint');
const { resolve } = require('path');
const { readFileSync } = require('fs');
const eslintrc = require('./fixtures/eslintConfig');

const sourcePath = resolve(__dirname, 'fixtures', 'rules.vue');

test('should check vue template file correctly', () => {
  const cli = new CLIEngine({
    baseConfig: eslintrc,
    useEslintrc: false,
    ignore: false
  });
  const report = cli.executeOnText(readFileSync(sourcePath, 'utf-8'), sourcePath);
  const errors = CLIEngine.getErrorResults(report.results)
    .pop().messages.length;
  expect(errors)
    .toEqual(5);
});
