import VueTypescriptConfig from '@vue/eslint-config-typescript'
import VuePlugin from 'eslint-plugin-vue'
import { EXTENSIONS_VUE } from './constants.js'
import ConfigTypescript from './typescript-dynamic.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...VuePlugin.configs['flat/essential'],

  ...VueTypescriptConfig({
    // https://typescript-eslint.io/users/configs#recommended-configurations
    extends: ['recommendedTypeChecked', 'stylistic'],

    supportedScriptLangs: {
      ts: true,
      tsx: false,
      jsx: false,
      js: false
    }
  }),

  ...ConfigTypescript,

  {
    name: 'cenk1cenk2/vue/typescript/recommended',
    files: [...EXTENSIONS_VUE],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
