/**
 * @fileoverview Checks that React in a file where a fragment is used
 * @author Jaron Heard
 */
"use strict";

const variableUtil = require("../utils/variable");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks for React in a file where a fragment is used",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: null, // TODO: Make fixable
    schema: [],
  },

  create: function (context) {
    const reactPragma = "React";
    const fragmentPragma = "Fragment";
    const NOT_DEFINED_MESSAGE = `'${reactPragma}' must be in scope when using ${fragmentPragma}`;

    function checkIfReactIsInScope(node) {
      const variables = variableUtil.variablesInScope(context);
      if (variableUtil.findVariable(variables, reactPragma)) {
        return;
      }
      context.report({
        node,
        message: NOT_DEFINED_MESSAGE,
        data: {
          name: reactPragma,
        },
      });
    }

    return {
      JSXOpeningFragment: checkIfReactIsInScope,
    };
  },
};
