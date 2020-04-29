module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'eslint-plugin-import',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-react',
    ],
    rules: {
        // Necessary to prevent "unused React" trigger by no-unused-vars.
        // -
        'react/jsx-uses-react': 'error',
        // Necessary to prevent no-unused-vars triggered by vars used inside JSX.
        // -
        'react/jsx-uses-vars': 'error',
        // Necessary to prevent "unused React" and JSX-only variables trigger by no-unused-vars.
        // -
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/await-thenable': 'error',
        // Require await section.
        // -
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        // Returning awaited values section.
        // -
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        // -
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    String: {
                        message: 'Use lowercase string instead',
                        fixWith: 'string',
                    },
                },
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/generic-type-naming': [
            'error',
            '^T[A-Z][a-zA-Z]+$',
        ],
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                // Single assertion style in TS / TSX files.
                // -
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow',
            },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-extraneous-class': [
            'error',
            { allowStaticOnly: true },
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-condition': [
            'error',
            { allowConstantLoopConditions: true },
        ],
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        // Useless constructor section
        // -
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // -
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: [
                    'is',
                    'should',
                    'has',
                    'can',
                    'did',
                    'will',
                    'does',
                    'are',
                    'do',
                ],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T'],
            },
        ],
        '@typescript-eslint/restrict-template-expressions': [
            'error',
            { allowNumber: true },
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'multiline-block-like',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-block-like',
            },
            {
                blankLine: 'always',
                prev: 'multiline-const',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-const',
            },
            {
                blankLine: 'always',
                prev: 'multiline-var',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-var',
            },
            {
                blankLine: 'always',
                prev: 'multiline-let',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-let',
            },
            {
                blankLine: 'always',
                prev: 'multiline-expression',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'multiline-expression',
            },
        ],
    },
};
