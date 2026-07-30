import type { Ref } from 'vue'
import type { UserProfile } from '../api'
import { useState } from '#app'
import { useMongocampStorage } from './mongocampStorage'

export function useMongocampUser(): Ref<UserProfile> {
  return useState<UserProfile>('mongocamp.user', () => useMongocampStorage().value.profile)
}
