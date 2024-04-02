"use strict";

const avoidCommentsPlugin = require("./avoid-comments-plugin");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "avoid-comments": avoidCommentsPlugin },
    rules: {
      "avoid-comments/avoid-comments": "error",
    },
  },
];
