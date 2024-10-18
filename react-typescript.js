import react from './react.js'
import typescript from './typescript.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...typescript,
  ...react,
  {
    files: ['**/*.tsx'],
    plugins: ['react', 'react-hooks'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/indent': ['error', 2]
    }
  }
]
