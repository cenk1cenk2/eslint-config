import TypescriptParser from '@typescript-eslint/parser'
import SveltePlugin from 'eslint-plugin-svelte'
import SvelteParser from 'svelte-eslint-parser'
import * as globals from 'globals'

import { EXTENSIONS_SVELTE } from './constants.js'
import ConfigTypescript from './typescript-dynamic.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...SveltePlugin.configs['flat/recommended'],

  ...ConfigTypescript,

  {
    name: 'cenk1cenk2/svelte/typescript/recommended',
    files: [...EXTENSIONS_SVELTE],
    languageOptions: {
      parser: SvelteParser,
      parserOptions: {
        parser: TypescriptParser,
        extraFileExtensions: ['.svelte']
      },
      globals: {
        ...globals.es2020,
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      'max-len': 'off'
    }
  }
]
