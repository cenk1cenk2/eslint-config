# @cenk1cenk2/eslint-config

[![Build Status](https://drone.kilic.dev/api/badges/cenk1cenk2/eslint-config/status.svg)](https://drone.kilic.dev/cenk1cenk2/eslint-config)

<!-- toc -->

- [Extend Typescript Import Path Order](#extend-typescript-import-path-order)
- [moer headers](#moer-headers)
- [for test](#for-test)

<!-- tocstop -->

## Supported Functionality

```
index -> javascript
react-typescript
typescript
```

## Extend Typescript Import Path Order

```javascript
module.exports = {
  extends: ['@cenk1cenk2/eslint-config/typescript'],
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@root/**',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          ['builtin', 'external'],
          ['index', 'parent', 'sibling'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
```

## moer headers

### for test
