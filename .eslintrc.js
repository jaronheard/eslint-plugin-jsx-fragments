"use strict";

module.exports = {
  plugins: ["node", "eslint-plugin", "prettier"],
  extends: [
    "plugin:node/recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:prettier/recommended",
  ],
  env: { mocha: true },
  root: true,
  rules: {
    "eslint-plugin/report-message-format": ["error", "^[^a-z].*\\.$"],
  },
};
