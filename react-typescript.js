import ReactPlugin from 'eslint-plugin-react'
import ReactHooksPlugin from 'eslint-plugin-react-hooks'
import react from './react.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...react,
  {
    files: ['**/*.tsx'],
    plugins: {
      react: ReactPlugin,
      'react-hooks': /** @type {import("eslint").ESLint.Plugin} */ (ReactHooksPlugin)
    },
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
