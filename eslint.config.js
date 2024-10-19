import { EXTENSIONS_JAVASCRIPT } from './constants.js'
import ConfigJavascript from './javascript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigJavascript,
  {
    files: [...EXTENSIONS_JAVASCRIPT]
  }
]
