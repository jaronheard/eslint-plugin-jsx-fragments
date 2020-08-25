/**
 * @fileoverview Prevent React to be incorrectly marked as unused for Fragments
 * @author Jaron Heard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const eslint = require("eslint");
const rule = require("eslint/lib/rules/no-unused-vars");

const RuleTester = eslint.RuleTester;

const path = require("path");
const NODE_MODULES = "../../../node_modules";
const parsers = {
  BABEL_ESLINT: path.join(__dirname, NODE_MODULES, "babel-eslint"),
};

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

const settings = {
  react: {
    pragma: "Foo",
  },
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions });
const linter = ruleTester.linter || eslint.linter;
linter.defineRule(
  "fragment-uses-react",
  require("../../../lib/rules/fragment-uses-react")
);

ruleTester.run("no-unused-vars", rule, {
  valid: [
    {
      code: "/*eslint fragment-uses-react:1*/ var React; <></>;",
      parser: parsers.BABEL_ESLINT,
    },
    {
      code:
        "/*eslint fragment-uses-react:1*/ /** @jsx Foo */ var React; <></>;",
      parser: parsers.BABEL_ESLINT,
    },
    {
      code: "/*eslint fragment-uses-react:1*/ var React; <></>;",
      parser: parsers.BABEL_ESLINT,
      settings,
    },
  ],
  invalid: [
    {
      code: "/*eslint fragment-uses-react:1*/ var React;",
      errors: [{ message: "'React' is defined but never used." }],
    },
    {
      code:
        "/*eslint fragment-uses-react:1*/ /** @jsx Foo */ var React; <div />;",
      errors: [{ message: "'React' is defined but never used." }],
    },
    {
      code: "/*eslint fragment-uses-react:1*/ var React; <div />;",
      errors: [{ message: "'React' is defined but never used." }],
      settings,
    },
  ],
});
