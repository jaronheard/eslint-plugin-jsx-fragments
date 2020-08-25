/**
 * @fileoverview Checks that React in a file where a fragment is used
 * @author Jaron Heard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/react-in-jsx-fragment-scope");

const path = require("path");
const NODE_MODULES = "../../../node_modules";
const parsers = {
  BABEL_ESLINT: path.join(__dirname, NODE_MODULES, 'babel-eslint'),
}

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run("react-in-jsx-fragment-scope", rule, {
  valid: [
    { code: "var React; <>fragment</>;", parser: parsers.BABEL_ESLINT },
    { code: "var App, a = <App />;" },
    { code: "var React; <img />;" },
  ],

  invalid: [
    {
      code: "var a = <>fragment</>;",
      parser: parsers.BABEL_ESLINT,
      errors: [{ message: "'React' must be in scope when using Fragment" }],
    },
    {
      code: "/** @jsx jsx */ var a = <>fragment</>;",
      errors: [{ message: "'React' must be in scope when using Fragment" }],
    },
  ],
});
