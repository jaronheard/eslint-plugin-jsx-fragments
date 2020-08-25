# eslint-plugin-jsx-fragments

Ensure that React is imported and marked used in any file with a Fragment, ignoring any JSX pragmas and shared settings.



## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsx-fragments`:

```
$ npm install eslint-plugin-jsx-fragments --save-dev
```

## Usage

Add `jsx-fragments` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jsx-fragments"]
}
```

### Recommended configuration

The `recommended` configuration can be used in conjunction with [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```json
{
  "extends": ["plugin:react/recommended", "plugin:jsx-fragments/recommended"]
}
```

It applies these rules.

```json
{
  "rules": {
    "jsx-fragments/react-in-fragment-scope": "error",
    "jsx-fragments/fragment-uses-react": "error"
  }
}
```

### Manual rule setup

You can also use the rule manually.

```json
{
  "rules": {
    "jsx-fragments/react-in-fragment-scope": "error",
    "jsx-fragments/fragment-uses-react": "warning"
  }
}
```

## Supported Rules

- [jsx-fragments/react-in-fragment-scope](https://github.com/jaronheard/eslint-plugin-jsx-fragments/blob/master/docs/rules/react-in-fragment-scope.md): Similar to [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) but it ignores custom pragmas and only checks files that contain fragments.
- [jsx-fragments/fragment-uses-react](https://github.com/jaronheard/eslint-plugin-jsx-fragments/blob/master/docs/rules/fragment-uses-react.md): Similar to [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md) but it ignores custom pragmas and only checks files that contain fragments.
