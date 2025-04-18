import ImportPlugin from 'eslint-plugin-import'
import { EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'cenk1cenk2/import/recommended',
    files: [...EXTENSIONS],
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
