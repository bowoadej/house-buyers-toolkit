import type {
  Config
} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  automock: false,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(css|less|woff2)$": "../tests/mocks/styleMock.ts"
  }
};

export default config;

