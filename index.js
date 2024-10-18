import ConfigBase from './base.js'
import ConfigImport from './import.js'
import ConfigImportStrict from './import-strict.js'
import ConfigTypescript from './typescript.js'
import ConfigTypescriptDynamic from './typescript-dynamic.js'
import * as utils from './utils.js'

export const configs = {
  ['js']: ConfigBase,
  ['import']: ConfigImport,
  ['import-strict']: ConfigImportStrict,
  ['typescript']: ConfigTypescript,
  ['typescript-dynamic']: ConfigTypescriptDynamic
}

export { utils }
