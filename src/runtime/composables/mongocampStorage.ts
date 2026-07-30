import type { UserProfile } from '../api'
import { useCookie, useRuntimeConfig } from '#app'

export interface MongocampSession {
  token: string
  profile: UserProfile
}

export function useMongocampStorage() {
  const config = useRuntimeConfig()
  return useCookie<MongocampSession>('mongocamp-session', {
    default: () => ({ token: '', profile: { user: '', isAdmin: false } }),
    maxAge: config.public.mongocamp?.sessionMaxAge ?? 60 * 60 * 24 * 30,
    sameSite: 'lax',
    secure: !import.meta.dev,
  })
}
