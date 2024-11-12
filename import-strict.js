import ImportPlugin from 'eslint-plugin-import'
import { EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'cenk1cenk2/import/strict',
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
