export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mocking stylesheets
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Handle TypeScript files with ts-jest
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', // Point to your project's tsconfig
      },
    },
  };
  