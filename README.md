# eslint-config-clean-code

Linter rules for clean and fast TypeScript development

## Why?

Because every TypeScript developer deserves not to think about code style and minor approaches.

## Installation

1. Pre-requisite: you need to have both ESLint and TypeScript installed, preferably locally.
1. `npm install --save-dev eslint-config-clean-code`
1. In your  `.eslintrc` file at the project root, add `extends: eslint-config-clean-code`.
1. Also add `parserOptions: { project: 'path.to.tsconfig.json' }`.
1. Customise the rules if required.

## Choices

### TypeScript

Because we believe that quality software development is impossible without types.

### Automatic Code Formatting

We consciously disable rules related to whitespace, indents, etc. and recommend using [`Prettier`](https://prettier.io/docs/en/install.html) instead, as a complementary tool to your linter. Having wasted numerous workdays bickering about minor formatting issues, this is the only sane choice for all projects, in our opinion.

### Consistency over Pluralism

There should be one straightforward way to do anything, and this consistency is enforced by the rules.
