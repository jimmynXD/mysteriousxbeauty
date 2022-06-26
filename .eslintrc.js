/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    // "./configs/eslint/typescript.js",
    "./configs/eslint/react.js",
    "./configs/eslint/index.js",
    "next/core-web-vitals",
  ],
};

module.exports = config;
