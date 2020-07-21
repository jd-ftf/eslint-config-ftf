const { CLIEngine } = require('eslint');
const { resolve } = require('path');
const eslintrc = require('./fixtures/eslintConfig');
const config = require('../index');

test('should load config correctly', () => {
  const cli = new CLIEngine({
    baseConfig: eslintrc
  });
  const { parser, parserOptions, plugins } = cli.getConfigForFile(resolve(__dirname, 'fixtures', 'empty.vue'));
  expect(parser)
    .toEqual(expect.stringContaining(config.parser));
  expect(parserOptions.parser)
    .toEqual(config.parserOptions.parser);
  expect(plugins)
    .toEqual(expect.arrayContaining(['import', 'jsx-a11y', 'babel', 'vue']));
});
