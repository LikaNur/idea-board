import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/_tests_/setup-test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$":
      "<rootDir>/src/_tests_/_mocks_/fileMock.js",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@styles/(.*)$": "<rootDir>/src/shared/styles/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@pkgr/core$": "<rootDir>/src/_tests_/_mocks_/emptyModule.js",
    "^synckit$": "<rootDir>/src/_tests_/_mocks_/emptyModule.js",
  },
  testMatch: ["<rootDir>/src/**/*.(test|spec).[jt]s?(x)"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

export default config;
