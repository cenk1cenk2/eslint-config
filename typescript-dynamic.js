import typescript from './typescript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...typescript,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.svelte', '**/*.vue'],
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
