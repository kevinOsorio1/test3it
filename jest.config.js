const {defaults} = require('jest-config');
module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/__tests__/setup/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup'],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    ...defaults.moduleFileExtensions,
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
