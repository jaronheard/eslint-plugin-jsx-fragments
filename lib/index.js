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
  recommended: {
    plugins: ["jsx-fragments"],
    rules: {
      "jsx-fragments/react-in-fragment-scope": "error",
      "jsx-fragments/fragment-uses-react": "error",
    },
  },
};
