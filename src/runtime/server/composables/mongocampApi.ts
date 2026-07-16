import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'
import { useMongocampServerApi } from './mongocampServerApi'

export function useMongocampApi(event: H3Event, token?: string) {
  const config = useRuntimeConfig(event)
  const url = config.public.mongocamp?.url
  const apiKey = config.mongocampApiKey

  return useMongocampServerApi(url, apiKey, token)
}
