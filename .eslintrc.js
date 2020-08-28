module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'brace-style': ['error', 'stroustrup', {
            allowSingleLine: false
        }],
        camelcase: 'error',
        indent: 'off',
        'func-style': ['error', 'declaration', {
            allowArrowFunctions: true
        }],
        'linebreak-style': ['error', 'unix'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-extra-semi': 'off',
        quotes: 'off',
        semi: 'off',
        'space-before-function-paren': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/quotes': ['error', 'single', {
            allowTemplateLiterals: true
        }],
        '@typescript-eslint/semi': 'error',
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            registeredComponentsOnly: true
        }],
        'vue/component-tags-order': ['error', {
            order: [
                'script',
                'style',
                'template'
            ]
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never'
        }],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'always'
            },
            svg: 'never',
            math: 'never'
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 4,
            'multiline': {
                max: 1,
                allowFirstLine: true
            }
        }],
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: false
        }]
    },
    overrides: [
        {
            files: '**/*.js',
            extends: [
                'plugin:vue/vue3-recommended',
                'eslint:recommended'
            ],
            rules: {
                indent: ['error', 4],
                quotes: ['error', 'single', {
                    allowTemplateLiterals: true
                }],
                semi: 'error',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/quotes': 'off',
                '@typescript-eslint/semi': 'off'
            }
        }
    ]
}
