import ConfigJavascript from './javascript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigJavascript,
  {
    files: ['**/*.js']
  }
]
