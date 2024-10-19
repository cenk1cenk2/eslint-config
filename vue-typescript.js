import VuePlugin from 'eslint-plugin-vue'
import VueTypescriptConfig from '@vue/eslint-config-typescript'
import ConfigTypescript from './typescript-dynamic.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...ConfigTypescript,

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
  })
]
