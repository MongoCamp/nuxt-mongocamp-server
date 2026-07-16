import type { UserProfile } from '../api'
import { useCookie } from '#app'

export interface MongocampSession {
  token: string
  profile: UserProfile
}

export function useMongocampStorage() {
  return useCookie<MongocampSession>('mongocamp', {
    default: () => ({ token: '', profile: { user: '', isAdmin: false } }),
  })
}
