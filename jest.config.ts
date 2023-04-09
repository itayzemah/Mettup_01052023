/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "preset": "ts-jest",
    "modulePathIgnorePatterns": [
        "<rootDir>/dist/"
    ]
};
