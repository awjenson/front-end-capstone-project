// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

module.exports = {
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };