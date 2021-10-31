module.exports = {
  extends: [ './index', './typescript' ],
  overrides: [
    {
      files: [ '*.vue' ],
      extends: [ './index', '@nuxtjs/eslint-config-typescript/index' ],
      rules: {}
    }
  ]
}
