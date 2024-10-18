import ImportPlugin from 'eslint-plugin-import'
import { EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: [...EXTENSIONS],
    plugins: {
      import: ImportPlugin
    },
    rules: {
      'import/no-extraneous-dependencies': 'error',
      'import/exports-last': 'error'
    }
  }
]
