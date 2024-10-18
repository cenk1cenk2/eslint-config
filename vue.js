import base from './base.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  {
    files: ['**/*.vue'],
    extends: ['@nuxtjs'],
    rules: {
      'vue/singleline-html-element-content-newline': 0,
      'vue/multiline-html-element-content-newline': 0,
      'vue/html-self-closing': 0,
      'vue/no-v-html': 0,
      'array-element-newline': ['error', 'consistent'],
      'array-bracket-spacing': [
        'error',
        'always',
        {
          objectsInArrays: true,
          arraysInArrays: true
        }
      ]
    }
  }
]
