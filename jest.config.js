module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/src/__helpers__/setup.ts','<rootDir>/node_modules/raf/polyfill']
};