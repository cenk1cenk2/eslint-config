const { ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS } = require('./constants')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ALL_KNOWN_JAVASCRIPT_FILE_EXTENSIONS,
      plugins: [ 'import' ],
      rules: {
        'sort-imports': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: '@{cenk1cenk2,cenk1cenk2-*}/**',
                group: 'index'
              },
              {
                pattern: '@{src,interfaces,utils,constants,commands}/**',
                group: 'index'
              },
              {
                pattern: '@{src,interfaces,utils,constants,commands}',
                group: 'index'
              }
            ],
            pathGroupsExcludedImportTypes: [ 'builtin' ],
            groups: [
              [ 'builtin', 'external' ],
              [ 'index', 'parent', 'sibling' ]
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ],
        'import/export': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error'
      }
    }
  ]
}
