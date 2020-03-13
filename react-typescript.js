module.exports = {
  extends: [
    '@cenk1cenk2/eslint-config/typescript'
  ],
  plugins: [ 'react' ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-curly-newline': [ 'error', 'consistent' ],
    'react/jsx-fragments': [ 'error', 'element' ],
    'react/require-render-return': 'error',
    'react/self-closing-comp': [ 'error', {
      component: true,
      html: true
    } ],
    'react/jsx-tag-spacing': [ 'error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    } ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [ 'error', { props: 'never', children: 'never'} ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-space-before-closing': [ 'error', 'always' ],
    'react/jsx-wrap-multilines': [ 'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      } ]

  }
}