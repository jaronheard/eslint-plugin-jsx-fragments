# Checks that React in a file where a fragment is used (react-in-fragment-scope)

This rule checks for the presence of a React import whenever a Fragment is used. [This GitHub comment describes how this is necessary using Emotion](https://github.com/yannickcr/eslint-plugin-react/issues/2156#issuecomment-554844831)

## Rule Details

This rule aims to check for the presence of a React import whenever a Fragment is used, regardless of any other jsx pragmas that may have been set.

Examples of **incorrect** code for this rule:

```js
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const HelloWorld = () => {
  return (
    <>
      <div>Hello</div>
      <div>World</div>
    </>
  );
};
```

Examples of **correct** code for this rule:

```js
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

const HelloWorld = () => {
  return (
    <>
      <div>Hello</div>
      <div>World</div>
    </>
  );
};
```

## When Not To Use It

When https://github.com/yannickcr/eslint-plugin-react/issues/2156#issuecomment-554844831 has a better resolution

## Further Reading

- https://github.com/emotion-js/emotion/issues/1549