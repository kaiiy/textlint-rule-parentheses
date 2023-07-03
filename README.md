# textlint-rule-parentheses

[![test](https://github.com/kaiiy/textlint-rule-parentheses/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/kaiiy/textlint-rule-parentheses/actions/workflows/test.yml)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-parentheses

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "parentheses": true
    }
}
```

Via CLI

```
textlint --rule parentheses README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © 
