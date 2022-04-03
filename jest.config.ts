import type {Config} from '@jest/types';

const esModules = ['@storybook/addon-docs',].join('|');

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "\\.[jt]sx?$": 'esbuild-jest',
        '^.+\\.js$': 'babel-jest',
        '\\.(css|scss)$': 'jest-transform-stub',
        "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    moduleNameMapper: {
        "^@/(.+)": "<rootDir>/src/$1"
    }
};
export default config;
