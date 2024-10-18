import ImportPlugin from 'eslint-plugin-import'

import { ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: { import: ImportPlugin },
    rules: {
      'sort-imports': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/export': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error'
    }
  }
]
