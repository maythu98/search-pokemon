// // const nextJest = require("next/jest");
// // const createJestConfig = nextJest({
// //   dir: "./",
// // });
// // const customJestConfig = {
// //   moduleDirectories: ["node_modules", "<rootDir>/"],
// //   testEnvironment: "node",
// // };
// // module.exports = createJestConfig(customJestConfig);

// /** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   // testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
//   testEnvironment: "jsdom",
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.jest.json",
//     },
//   },
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//   },
// };

// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/graphQL/(.*)$": "<rootDir>/graphQL/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
