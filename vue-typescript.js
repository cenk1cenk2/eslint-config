import VuePlugin from 'eslint-plugin-vue'
import VueTypescriptConfig from '@vue/eslint-config-typescript'
import ConfigTypescript from './typescript-dynamic.js'
import { EXTENSIONS, EXTENSIONS_TYPESCRIPT, EXTENSIONS_VUE } from './constants.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigTypescript.map((config) => {
    config.files = [...EXTENSIONS_VUE, EXTENSIONS_TYPESCRIPT]

    return config
  }),

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

  {
    files: [...EXTENSIONS],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
