module.exports = {
  extends: [ './index', './typescript' ],
  overrides: [
    {
      files: [ '*.vue' ],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      extends: [ './index' ],
      rules: {}
    }
  ]
}
