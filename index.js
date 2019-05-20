module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['eslint-plugin-import', '@typescript-eslint/eslint-plugin'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', 'array'],
        '@typescript-eslint/await-thenable': 'error',
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
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': ['error', { staticOnly: true }],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-interface': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/unbound-method': 'error',
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
