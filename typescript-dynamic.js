import ConfigTypescript from './typescript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigTypescript,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/return-await': ['error', 'never'],
      '@typescript-eslint/await-thenable': 'error',
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error'],
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true
        }
      ],
      '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: false } ]
    }
  }
]
