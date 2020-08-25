/**
 * @fileoverview Ensure that React is imported whenever the fragment syntax is used
 * @author Jaron Heard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// configurations
module.exports.configs = {
  react: {
    plugins: ["react", "jsx-fragments"],
    rules: {
      "react/react-in-jsx-scope": "error",
      "jsx-fragments/react-in-fragment-scope": "error",
    },
  },
  reactOpinionated: {
    plugins: ["react", "jsx-fragments"],
    rules: {
      "react/react-in-jsx-scope": "error",
      "jsx-fragments/react-in-fragment-scope": "error",
      "no-unused-vars": [2, { varsIgnorePattern: "React" }],
      "react/jsx-fragments": [1, "syntax"],
    },
  },
};
