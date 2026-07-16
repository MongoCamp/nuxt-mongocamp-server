import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'
import { Configuration } from '../../api'
import { createMongocampApis } from '../../utils/createMongocampApis'

export function useMongocampServerApi(url: string, key?: string, token?: string) {
  let configuration = new Configuration({ basePath: url })

  if (key && key.length > 0)
    configuration = new Configuration({ basePath: url, apiKey: key })
  else if (token && token.length > 0)
    configuration = new Configuration({ basePath: url, accessToken: token })

  return createMongocampApis(configuration)
}

export function useMongocampApi(event: H3Event, token?: string) {
  const config = useRuntimeConfig(event)
  const url = config.public.mongocamp?.url
  const apiKey = config.mongocampApiKey

  return useMongocampServerApi(url, apiKey, token)
}
