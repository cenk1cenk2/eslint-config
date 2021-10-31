module.exports = {
  extends: [ './typescript' ],
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/return-await': [ 'error', 'never' ]
      }
    }
  ]
}
