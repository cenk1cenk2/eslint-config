/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ['**/*.vue'],
    extends: ['./index', '@nuxtjs/eslint-config-typescript/index'],
    rules: {}
  }
]
