const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    roots: [
        '<rootDir>'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: [
        'js',
        'ts',
        'vue',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        '\\.(jpg|png|gif|ttf|eot|svg|woff)$': '<rootDir>/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        '**/tests/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest',
        ...tsjPreset.transform
    },
    globals: {
        window: {},
        plugin: {
            call: () => {}
        }
    }
};
