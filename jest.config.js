module.exports = {
  modulePaths: ['<rootDir>/src'],

  clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],

  coverageDirectory: 'coverage',

  coverageThreshold: {
    global: {
      'branches': 50,
      'functions': 50,
      'lines': 50,
      'statements': -10,
    },
  },

  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  transformIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    '\\.(css|less|sass|scss|png)$': 'identity-obj-proxy',
  },

  rootDir: './src',

  setupFiles: ['<rootDir>/jest.setup.js'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  snapshotResolver: './src/tests/snapshotResolver.js',

  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
