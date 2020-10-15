const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: ['js'],
    testMatch: ["(/.*|(\\.|/)(test))\\.js?$"],
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ], 
    coverageThreshold: {
        "jest": {
            "coverageThreshold": {
                "global": {
                "branches": 80,
                "functions": 80,
                "lines": 80,
                "statements": -10
                }
            }
        }
    },
};