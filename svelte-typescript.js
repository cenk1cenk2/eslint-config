import svelte from 'eslint-plugin-svelte'

import typescript from './typescript-dynamic.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...svelte.configs['flat/recommended'],
  ...typescript,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      'max-len': 'off',
      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': 'off'
    }
  }
]
