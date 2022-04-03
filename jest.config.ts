import type {Config} from '@jest/types';

const esModules = ['', '', ''].join('|');

const config: Config.InitialOptions = {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
        "\\.[jt]sx?$": 'esbuild-jest',
        '\\.(css|scss)$': 'jest-transform-stub'
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
export default config;
