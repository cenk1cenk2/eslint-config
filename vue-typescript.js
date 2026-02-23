import VueTypescriptConfig from '@vue/eslint-config-typescript'
import VuePlugin from 'eslint-plugin-vue'
import { EXTENSIONS_VUE } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...VuePlugin.configs['flat/essential'],

  ...VueTypescriptConfig({
    // https://typescript-eslint.io/users/configs#recommended-configurations
    extends: [],

    supportedScriptLangs: {
      ts: true,
      tsx: false,
      jsx: false,
      js: false
    }
  }),

  {
    name: 'cenk1cenk2/vue/typescript/recommended',
    files: [...EXTENSIONS_VUE],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
