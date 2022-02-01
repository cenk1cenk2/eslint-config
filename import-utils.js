const { loadTsConfig } = require('load-tsconfig')

/**
 * @param {{ paths?: string[] tsconfig?: string, tsconfigDir?: string}} options
 * @returns {import("eslint").Linter.Config['rules']}
 */
function generateImportPluginGroupCases (options) {
  const defaults = [ '@cenk1cenk2', '@cenk1cenk2-*' ]

  options.paths = options.paths ? options.paths.push(...defaults) : defaults

  /** @type {string[]} */
  let tsConfigPaths = []

  if (options.tsconfigDir) {
    const tsconfig = loadTsConfig(options.tsconfigDir, options.tsconfig)

    if (tsconfig.data?.compilerOptions?.paths) {
      tsConfigPaths = Object.keys(tsconfig.data.compilerOptions.paths).map((path) => {
        return path.replace('*', '**')
      })
    }
  }

  return {
    'import/order': [
      'error',
      {
        pathGroups: [
          ...options.paths.flatMap((path) => {
            return [
              {
                pattern: `${path}/**`,
                group: 'internal'
              },

              {
                pattern: `${path}`,
                group: 'internal'
              }
            ]
          }),
          ...tsConfigPaths.flatMap((path) => {
            return [
              {
                pattern: `${path}`,
                group: 'internal'
              }
            ]
          })
        ],
        pathGroupsExcludedImportTypes: [ 'builtin' ],
        groups: [
          [ 'builtin', 'external' ],
          [ 'internal', 'index', 'parent', 'sibling' ]
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}

module.exports = generateImportPluginGroupCases
