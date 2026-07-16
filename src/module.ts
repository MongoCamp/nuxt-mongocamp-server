import { addImportsDir, addServerImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { consola } from 'consola'
import { name, version } from '../package.json'

export * from './runtime/api'

export interface ModuleOptions {
  url: string
  apiKey?: string
  paginationSize?: number
  refreshToken: boolean
  tokenRefreshInterval: number
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    mongocamp: {
      url: string
      paginationSize: number
      refreshToken: boolean
      tokenRefreshInterval: number
    }
  }
  interface RuntimeConfig {
    mongocampApiKey: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mongocamp',
    compatibility: {
      nuxt: '>=3.16.0',
    },
  },

  setup(options, nuxt) {
    // deferred to the `ready` hook, and skipped during `nuxi prepare` (`_prepare`),
    // so IDE/type-stub generation isn't broken by apps that haven't set a url yet
    nuxt.hook('ready', () => {
      if (nuxt.options._prepare)
        return
      if (!options.url || options.url.length === 0)
        throw new Error('[mongocamp] Missing required "url" module option.')
    })

    if (options.paginationSize !== undefined && options.paginationSize < 10)
      consola.warn(`[mongocamp] paginationSize of ${options.paginationSize} is below the minimum of 10, falling back to 500`)
    if (!options.paginationSize || options.paginationSize < 10)
      options.paginationSize = 500

    if (options.tokenRefreshInterval !== undefined && options.tokenRefreshInterval < 5000)
      consola.warn(`[mongocamp] tokenRefreshInterval of ${options.tokenRefreshInterval} is below the minimum of 5000, falling back to 5000`)
    if (!options.tokenRefreshInterval || options.tokenRefreshInterval < 5000)
      options.tokenRefreshInterval = 5000

    nuxt.options.runtimeConfig.public.mongocamp = defu(nuxt.options.runtimeConfig.public.mongocamp,
      {
        url: options.url,
        paginationSize: options.paginationSize,
        refreshToken: options.refreshToken,
        tokenRefreshInterval: options.tokenRefreshInterval,
      },
    )

    nuxt.options.runtimeConfig.mongocampApiKey = nuxt.options.runtimeConfig.mongocampApiKey ?? options.apiKey ?? ''

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    addImportsDir(resolve(runtimeDir, 'composables'))
    addServerImportsDir(resolve(runtimeDir, 'server/composables'))

    consola.success('mongocamp-nuxt available')
  },
})
