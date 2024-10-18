import svelte from 'eslint-plugin-svelte'

import typescript from './typescript-dynamic.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...svelte.configs['flat/recommended'],
  ...typescript,
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    },
    files: ['*.svelte'],
    parser: 'svelte-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    rules: {
      'max-len': 'off',
      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': 'off'
    }
  }
]
