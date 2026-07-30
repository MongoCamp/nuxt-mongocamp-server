import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { UserProfile } from '../api'
import { useMongocampStorage } from './mongocampStorage'

export function useMongocampUser(): ComputedRef<UserProfile> {
  const state = useMongocampStorage()
  return computed(() => state.value.profile)
}
