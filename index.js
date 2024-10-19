import ConfigImportStrict from './import-strict.js'
import ConfigImport from './import.js'
import ConfigJavascript from './javascript.js'
import ConfigTypescriptDynamic from './typescript-dynamic.js'
import ConfigTypescript from './typescript.js'
import * as utils from './utils.js'

export const configs = {
  ['javascript']: ConfigJavascript,
  ['import']: ConfigImport,
  ['import-strict']: ConfigImportStrict,
  ['typescript']: ConfigTypescript,
  ['typescript-dynamic']: ConfigTypescriptDynamic
}

export { utils }
