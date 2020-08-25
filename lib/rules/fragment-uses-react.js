/**
 * @fileoverview Prevent React to be incorrectly marked as unused for Fragments
 * @author Jaron Heard
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "Prevent React to be incorrectly marked as unused for Fragments",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: null, // TODO: Make fixable
    schema: [],
  },

  create: function (context) {
    function handleOpeningElement() {
      context.markVariableAsUsed("React");
    }
    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningFragment: handleOpeningElement,
    };
  },
};
