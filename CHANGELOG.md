# 3.0.2

Removed the unavailable rule `prefer-interface`.

# 3.0.1

Fix the `array-type` bug introduced by a breaking change in rule configuration.

# 3.0.0

Updated minimal dependencies to support latest TypeScript features:

```typescript
    "@typescript-eslint/eslint-plugin": "^2.22.0",
    "@typescript-eslint/parser": "^2.22.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-react": "^7.18.3"
```

# 2.0.0

Enabled [strict boolean expression checking](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md) for better handling of "yes / no / maybe" cases.