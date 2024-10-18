import { ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS } from './constants.js'

/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS,
      plugins: ['import'],
      rules: {
        'import/no-extraneous-dependencies': 'error',
        'import/exports-last': 'error'
      }
    }
  ]
}
