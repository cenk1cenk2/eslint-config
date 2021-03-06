# @cenk1cenk2/eslint-config

[![Build Status](https://drone.kilic.dev/api/badges/cenk1cenk2/eslint-config/status.svg)](https://drone.kilic.dev/cenk1cenk2/eslint-config) [![Version](https://img.shields.io/npm/v/@cenk1cenk2/eslint-config.svg)](https://npmjs.org/package/@cenk1cenk2/eslint-config) [![Downloads/week](https://img.shields.io/npm/dw/@cenk1cenk2/eslint-config.svg)](https://npmjs.org/package/@cenk1cenk2/eslint-config) [![Dependencies](https://img.shields.io/librariesio/release/npm/@cenk1cenk2/eslint-config)](https://npmjs.org/package/@cenk1cenk2/eslint-config) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<!-- toc -->

- [Extend Typescript Import Path Order](#extend-typescript-import-path-order)
- [moer headers](#moer-headers)
- [for test](#for-test)

<!-- tocstop -->

## Supported Functionality

```
default -> javascript
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
            group: 'parent'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          ['builtin', 'external'],
          ['index', 'parent', 'sibling']
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
```
