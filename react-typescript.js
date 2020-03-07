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
  'react/jsx-indent': [ 'error', 2 ],
  'react/jsx-indent-props': [ 'error', 2 ],
  'react/jsx-curly-newline': [ 'error', 'consistent' ]
}