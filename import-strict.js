import ImportPlugin from 'eslint-plugin-import'

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
