// const nextJest = require("next/jest");
// const createJestConfig = nextJest({
//   dir: "./",
// });
// const customJestConfig = {
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "node",
// };
// module.exports = createJestConfig(customJestConfig);

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
