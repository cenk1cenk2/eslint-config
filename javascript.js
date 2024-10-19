import JavascriptPlugin from '@eslint/js'
import StylisticPlugin from '@stylistic/eslint-plugin'

import ConfigImports from './import.js'
import { EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  JavascriptPlugin.configs.recommended,

  ...ConfigImports,

  {
    name: 'cenk1cenk2/javascript/recommended',
    files: [...EXTENSIONS],
    languageOptions: {
      globals: {
        browser: true,
        es6: true,
        node: true
      },
      parserOptions: {
        createDefaultProgram: true,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      stylistic: StylisticPlugin
    },
    rules: {
      'stylistic/semi': ['error', 'never'],
      'stylistic/linebreak-style': ['error', 'unix'],
      'sort-imports': 'off',
      'stylistic/indent': ['error', 2],
      'stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'stylistic/comma-spacing': ['error', { before: false, after: true }],
      'stylistic/func-call-spacing': ['error', 'never'],
      'stylistic/max-len': [
        'error',
        {
          code: 180,
          comments: 180
        }
      ],
      'stylistic/no-multi-spaces': 'error',
      'stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1
        }
      ],
      'stylistic/space-before-function-paren': ['error', 'never'],
      'stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 3,
            consistent: true
          },
          ObjectPattern: 'never',
          ImportDeclaration: {
            multiline: true,
            minProperties: 10
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 10
          }
        }
      ],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/comma-dangle': ['error', 'never'],
      'stylistic/array-element-newline': ['error', 'consistent'],
      'stylistic/array-bracket-newline': ['error', 'consistent'],
      'stylistic/array-bracket-spacing': [
        'error',
        'never',
        {
          objectsInArrays: true,
          arraysInArrays: true
        }
      ],
      curly: ['error', 'all'],
      complexity: ['error', 25],
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/quote-props': ['error', 'as-needed'],
      'guard-for-in': 'error',
      'id-match': 'off',
      'max-classes-per-file': 'off',
      'stylistic/new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-prototype-builtins': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-empty': 'warn',
      'no-eval': 'error',
      'no-invalid-this': 'off',
      'no-new-wrappers': 'error',
      'no-shadow': [
        'off',
        {
          hoist: 'all'
        }
      ],
      'no-throw-literal': 'error',
      'stylistic/no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-expressions': 'warn',
      'no-unused-vars': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'stylistic/template-curly-spacing': ['error', 'never'],
      radix: 'error',
      'stylistic/spaced-comment': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'warn',
      'stylistic/arrow-parens': ['error', 'always'],
      'stylistic/keyword-spacing': 'error',
      'stylistic/lines-between-class-members': 'off',
      'stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var']
        },
        {
          blankLine: 'always',
          prev: ['case', 'default'],
          next: '*'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['function', 'if', 'try', 'break', 'class', 'for', 'while', 'do']
        }
      ]
    }
  }
]
