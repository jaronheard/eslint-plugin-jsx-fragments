# eslint-plugin-jsx-fragments

Ensure that React is imported whenever the fragment syntax is used

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
    "plugins": [
        "jsx-fragments"
    ]
}
```


Then configure the rules you want to use under the rules section. This plugin is designed to be used in combination with [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```json
{
    "rules": {
        "jsx-fragments/react-in-fragment-scope": 2
    }
}
```

## Supported Rules

* [react-in-fragment-scope](https://github.com/jaronheard/eslint-plugin-jsx-fragments/blob/master/docs/rules/react-in-fragment-scope.md): Similar to [react/react-in-jsx-scope] but it ignores pragmas and only checks files that contain fragments.





