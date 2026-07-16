import type { Ref } from 'vue'
import type { UserProfile } from '../api'
import { useState } from '#app'

export function useMongocampUser(): Ref<UserProfile> {
  return useState<UserProfile>('mongocamp.user', () => ({ user: '', isAdmin: false }))
}
