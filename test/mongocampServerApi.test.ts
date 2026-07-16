import { describe, expect, it } from 'vitest'
import type { Configuration } from '../src/runtime/api'
import { useMongocampServerApi } from '../src/runtime/server/composables/mongocampServerApi'

function configOf(apis: ReturnType<typeof useMongocampServerApi>): Configuration {
  return (apis.adminApi as unknown as { configuration: Configuration }).configuration
}

describe('useMongocampServerApi', () => {
  it('always sets basePath, even with no credentials', () => {
    const config = configOf(useMongocampServerApi('https://example.com'))
    expect(config.basePath).toBe('https://example.com')
    expect(config.apiKey).toBeUndefined()
    expect(config.accessToken).toBeUndefined()
  })

  it('prefers apiKey over a bearer token when both are given', async () => {
    const config = configOf(useMongocampServerApi('https://example.com', 'my-key', 'my-token'))
    expect(config.basePath).toBe('https://example.com')
    expect(await config.apiKey?.('')).toBe('my-key')
    expect(config.accessToken).toBeUndefined()
  })

  it('falls back to a bearer token when no apiKey is given', async () => {
    const config = configOf(useMongocampServerApi('https://example.com', undefined, 'my-token'))
    expect(config.apiKey).toBeUndefined()
    expect(await config.accessToken?.()).toBe('my-token')
  })

  it('ignores an empty-string apiKey/token', () => {
    const config = configOf(useMongocampServerApi('https://example.com', '', ''))
    expect(config.basePath).toBe('https://example.com')
    expect(config.apiKey).toBeUndefined()
    expect(config.accessToken).toBeUndefined()
  })
})
