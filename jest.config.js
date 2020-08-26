module.exports = {
    preset: 'ts-jest',
    roots: [
        '<rootDir>'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    testMatch: [
        '**/tests/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
