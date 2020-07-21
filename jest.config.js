// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  roots: [
    '<rootDir>'
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/__tests__/*.spec.js'
  ]
};
