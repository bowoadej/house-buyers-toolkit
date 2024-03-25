module.exports = {

    preset: 'ts-jest',
    // ... other Jest config options

    // Configure Jest to transform TypeScript files using babel-jest
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
        '^.+\\.[tj]sx?$': `ts-jest`,
    },

    // Additional configuration options for TypeScript (optional)
    moduleNameMapper: {
        // Example: map CSS imports to an empty object
        '^.+\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom', // Simulate a browser environment for tests
};