/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [ 'plugin:svelte/recommended', './typescript-dynamic' ],
  parserOptions: {
    extraFileExtensions: [ '.svelte' ]
  },
  overrides: [
    {
      files: [ '*.svelte' ],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'max-len': 'off',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'off'
      }
    }
  ]
}
