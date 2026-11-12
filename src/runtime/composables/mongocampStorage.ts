import type { CookieRef } from '#app'
import type { UserProfile } from '../api'
import { useCookie, useNuxtApp, useRuntimeConfig } from '#app'

export interface MongocampSession {
  token: string
  profile: UserProfile
}

/**
 * Returns the session cookie ref. Every caller (auth, API client, 401 handler, user) must
 * see the same ref: separate `useCookie` refs for the same cookie are not synchronously kept
 * in sync, so a token written by login would be invisible to an API client created earlier.
 */
export function useMongocampStorage(): CookieRef<MongocampSession> {
  const nuxtApp = useNuxtApp() as ReturnType<typeof useNuxtApp> & { _mongocampSession?: CookieRef<MongocampSession> }
  if (!nuxtApp._mongocampSession) {
    const config = useRuntimeConfig()
    nuxtApp._mongocampSession = useCookie<MongocampSession>('mongocamp-session', {
      default: () => ({ token: '', profile: { user: '', isAdmin: false } }),
      maxAge: config.public.mongocamp?.sessionMaxAge ?? 60 * 60 * 24 * 30,
      sameSite: 'lax',
      secure: !import.meta.dev,
    })
  }
  return nuxtApp._mongocampSession
}
