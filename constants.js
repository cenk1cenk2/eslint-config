export function mapExtensions(extensions) {
  return extensions.flatMap((ext) => [`*.${ext}`, `**/*.${ext}`])
}

const javascript = ['js', 'mjs', 'cjs', 'jsx']
const typescript = ['ts', 'mts', 'cts', 'tsx']
const vue = ['vue']
const svelte = ['svelte']

export const EXTENSIONS_JAVASCRIPT = mapExtensions(javascript)
export const EXTENSIONS_TYPESCRIPT = mapExtensions(typescript)
export const EXTENSIONS_VUE = mapExtensions(vue)
export const EXTENSIONS_SVELTE = mapExtensions(svelte)

export const EXTENSIONS = [...EXTENSIONS_JAVASCRIPT, ...EXTENSIONS_TYPESCRIPT, ...EXTENSIONS_VUE, ...EXTENSIONS_SVELTE]
