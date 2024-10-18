import ImportPlugin from 'eslint-plugin-import'

import { ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS } from './constants.js'
/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: {
      import: ImportPlugin
    },
    rules: {
      'import/no-extraneous-dependencies': 'error',
      'import/exports-last': 'error'
    }
  }
]
