import SveltePlugin from 'eslint-plugin-svelte'
import TypescriptParser from '@typescript-eslint/parser'
import SvelteParser from 'svelte-eslint-parser'

import ConfigTypescript from './typescript-dynamic.js'
import { EXTENSIONS_SVELTE, EXTENSIONS_TYPESCRIPT } from './constants.js'

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
      }
    },
    rules: {
      'max-len': 'off'
    }
  }
]
