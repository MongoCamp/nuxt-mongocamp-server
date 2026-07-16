import { addImportsDir, addServerImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { consola } from 'consola'
import { name, version } from '../package.json'

export * from './runtime/api/models'

export interface ModuleOptions {
  url: string
  apiKey?: string
  paginationSize?: number
  refreshToken: boolean
  tokenRefreshIntervall: number
}

export * from './runtime/api/models'

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
    if (!options.url || options.url.length === 0) {
      consola.error('Missing Mongocamp Base Url !')
    }

    if (!options.paginationSize || options.paginationSize < 10) {
      options.paginationSize = 500
    }
    if (!options.tokenRefreshIntervall || options.tokenRefreshIntervall < 5000) {
      options.tokenRefreshIntervall = 5000
    }

    nuxt.options.runtimeConfig.public.mongocamp = defu(nuxt.options.runtimeConfig.public.mongocamp,
      {
        url: options.url,
        paginationSize: options.paginationSize,
        refreshToken: options.refreshToken,
        tokenRefreshIntervall: options.tokenRefreshIntervall,
      },
    )

    nuxt.options.runtimeConfig.mongocampApiKey = defu(nuxt.options.runtimeConfig.mongocampApiKey, options.apiKey ?? '')

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    addImportsDir(resolve(runtimeDir, 'composables'))
    addServerImportsDir(resolve(runtimeDir, 'server/composables'))

    consola.success('mongocamp-nuxt available')
  },
})
