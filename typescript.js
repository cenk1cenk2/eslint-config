import TypescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import TypescriptEslint from 'typescript-eslint'
import ConfigJavascript from './javascript.js'
import { EXTENSIONS_TYPESCRIPT } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigJavascript,
  ...TypescriptEslint.configs.recommended.map((config) => {
    config.files = EXTENSIONS_TYPESCRIPT

    return config
  }),
  {
    files: EXTENSIONS_TYPESCRIPT,
    plugins: {
      '@typescript-eslint': TypescriptEslintPlugin
    },
    rules: {
      // this is a bit buggy at the moment
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: false
        }
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'off',
            constructors: 'no-public',
            methods: 'explicit',
            properties: 'off',
            parameterProperties: 'off'
          }
        }
      ],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            // Index signature
            'signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-instance-field',
            'public-decorated-field',
            'protected-instance-field',
            'protected-decorated-field',
            'private-instance-field',
            'private-decorated-field',

            'public-abstract-field',
            'protected-abstract-field',

            'public-field',
            'protected-field',
            'private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Getters
            // 'public-static-get',
            // 'protected-static-get',
            // 'private-static-get',
            //
            // 'public-instance-get',
            // 'public-decorated-get',
            // 'protected-instance-get',
            // 'protected-decorated-get',
            // 'private-instance-get',
            // 'private-decorated-get',
            //
            // 'public-abstract-get',
            // 'protected-abstract-get',
            // 'private-abstract-get',
            //
            // 'public-get',
            // 'protected-get',
            // 'private-get',
            //
            // 'static-get',
            // 'instance-get',
            // 'abstract-get',
            //
            // 'decorated-get',

            // 'get',

            // Setters
            // 'public-static-set',
            // 'protected-static-set',
            // 'private-static-set',
            //
            // 'public-instance-set',
            // 'public-decorated-set',
            // 'protected-instance-set',
            // 'protected-decorated-set',
            // 'private-instance-set',
            // 'private-decorated-set',
            //
            // 'public-abstract-set',
            // 'protected-abstract-set',
            // 'private-abstract-set',
            //
            // 'public-set',
            // 'protected-set',
            // 'private-set',
            //
            // 'static-set',
            // 'instance-set',
            // 'abstract-set',
            //
            // 'decorated-set',

            // 'set',

            // Methods
            // 'public-static-method',
            // 'protected-static-method',
            // 'private-static-method',
            //
            // 'public-instance-method',
            // 'protected-instance-method',
            // 'private-instance-method',
            'static-method',

            'public-method',
            // 'public-decorated-method',
            'protected-method',
            // 'protected-decorated-method',
            'private-method',
            // 'private-decorated-method',

            'public-abstract-method',
            'protected-abstract-method',

            // 'instance-method',
            // 'decorated-method',
            'abstract-method',

            'method'
          ]
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase']
        },

        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase']
        },

        {
          selector: 'variable',
          format: ['camelCase']
        },

        {
          selector: 'function',
          format: ['camelCase', 'PascalCase']
        },

        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          modifiers: ['unused'],
          leadingUnderscore: 'require'
        },

        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase']
        },

        {
          selector: 'property',
          format: ['camelCase', 'UPPER_CASE', 'snake_case']
        },

        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase']
        },

        {
          selector: 'enumMember',
          format: ['UPPER_CASE', 'camelCase']
        },

        {
          selector: 'typeLike',
          format: ['PascalCase']
        }
      ],
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array' } ],
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' } ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends'
        }
      ],
      '@typescript-eslint/no-extra-non-null-assertion': ['error'],
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowConstructorOnly: true,
          allowEmpty: false,
          allowStaticOnly: true,
          allowWithDecorator: true
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error'
    }
  }
]
