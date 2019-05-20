module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['eslint-plugin-import'],
    rules: {
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
