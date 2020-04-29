# Changelog

## 4.1.0

`restrict-template-expression` now allows numbers.

## 4.0.1

**BREAKING CHANGES**, Typescript 3.8.2 required.

Enabled the following rules:

```typescript
'@typescript-eslint/promise-function-async'
'@typescript-eslint/no-misused-new'
'@typescript-eslint/no-misused-promises'
'@typescript-eslint/await-thenable'
'@typescript-eslint/require-await'
'@typescript-eslint/return-await'
'@typescript-eslint/no-unsafe-return'
'@typescript-eslint/prefer-ts-expect-error'
'@typescript-eslint/no-throw-literal',
'@typescript-eslint/no-invalid-void-type'
'@typescript-eslint/switch-exhaustiveness-check'
'@typescript-eslint/no-empty-function'
'@typescript-eslint/no-unnecessary-qualifier',
'@typescript-eslint/method-signature-style': ['error', 'property']
'@typescript-eslint/no-base-to-string'
'@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }]
'@typescript-eslint/prefer-string-starts-ends-with',
'@typescript-eslint/prefer-includes',
'@typescript-eslint/prefer-readonly': 'error',
'@typescript-eslint/prefer-nullish-coalescing': 'error',
'@typescript-eslint/prefer-optional-chain': 'error',
'@typescript-eslint/prefer-as-const': 'error',
'@typescript-eslint/restrict-template-expressions': 'error',
```

## 3.0.2

Removed the unavailable rule `prefer-interface`.

## 3.0.1

Fix the `array-type` bug introduced by a breaking change in rule configuration.

## 3.0.0

Updated minimal dependencies to support latest TypeScript features:

```typescript
    "@typescript-eslint/eslint-plugin": "^2.22.0",
    "@typescript-eslint/parser": "^2.22.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-react": "^7.18.3"
```

## 2.0.0

Enabled [strict boolean expression checking](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md) for better handling of "yes / no / maybe" cases.