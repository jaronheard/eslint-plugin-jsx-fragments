# Prevent React to be incorrectly marked as unused for Fragments (fragment-uses-react)

This rule marks React as used in a file that contains a fragment.

## Rule Details

This rule ignores the @jsx pragma and any shared settings.

This rule has no effect if the no-unused-vars rule is not enabled.

Examples of **incorrect** code for this rule:

```js
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

const NoFragmentHere = () => <div css={css`color: blue;`}>Hello World</div>;

// This will trigger a no-unused-vars error, because no fragment is present
```

Examples of **correct** code for this rule:

```js
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

const FragmentedWorld = () => (
  <>
    <div css={css`color: blue;`}>Hello</div>
    <div css={css`color: red;`}>World</div>
  </>
);

// All good!
```

## When Not To Use It

When https://github.com/yannickcr/eslint-plugin-react/issues/2156#issuecomment-554844831 has a better resolution

## Further Reading

- https://github.com/emotion-js/emotion/issues/1549