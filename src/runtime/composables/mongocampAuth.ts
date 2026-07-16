import { computed, watch } from 'vue'
import { consola } from 'consola'

import type { Login, LoginResult, UserProfile } from '../api'
import { toMongocampError } from '../utils/toMongocampError'

import { useMongocampApi } from './mongocampApi'
import { useMongocampStorage } from './mongocampStorage'
import { useMongocampUser } from './mongocampUser'
import { useRuntimeConfig, useState } from '#app'

export function useMongocampAuth() {
  const config = useRuntimeConfig()
  const refreshToken: boolean = config.public.mongocamp?.refreshToken
  const tokenRefreshInterval: number = config.public.mongocamp?.tokenRefreshInterval

  const state = useMongocampStorage()
  const { authApi } = useMongocampApi()
  const user = useMongocampUser()

  // shared across every useMongocampAuth() caller so only one interval ever runs per session
  const updateTokenInterval = useState<number | undefined>('mongocamp.tokenRefreshInterval', () => undefined)

  function startTokenRefresh() {
    if (import.meta.client && refreshToken && !updateTokenInterval.value)
      updateTokenInterval.value = window.setInterval(updateToken, tokenRefreshInterval)
  }

  function stopTokenRefresh() {
    if (import.meta.client && updateTokenInterval.value) {
      window.clearInterval(updateTokenInterval.value)
      updateTokenInterval.value = undefined
    }
  }

  async function isAuthenticated() {
    return await authApi.isAuthenticated()
  }

  async function updateToken() {
    try {
      const result: LoginResult = await authApi.refreshToken()
      updateUserState(result)
    }
    catch (e) {
      const error = await toMongocampError(e)
      consola.error(error.message, error.cause)
      if (error.status === 401 || error.status === 403)
        logout()
    }
  }

  function updateUserState(result: LoginResult) {
    state.value.token = (result.authToken)
    state.value.profile = result.userProfile
    user.value = result.userProfile
  }

  const login = async (loginId: string, loginPassword: string): Promise<UserProfile> => {
    logout()
    const login: Login = { userId: loginId, password: loginPassword }
    const result: LoginResult = await authApi.login({ login })
    updateUserState(result)

    return result.userProfile
  }

  const logout = (): void => {
    if (state.value.token)
      authApi.logout().catch(e => consola.error(e))

    state.value.token = ''
    const profile: UserProfile = { user: '', isAdmin: false }
    state.value.profile = profile
    user.value = profile
  }

  const isLoggedIn = computed(() => (state.value.token?.length ?? 0) > 0)

  // side effect lives in a watcher, not the computed getter above
  if (import.meta.client) {
    watch(isLoggedIn, (loggedIn) => {
      if (loggedIn)
        startTokenRefresh()
      else
        stopTokenRefresh()
    }, { immediate: true })
  }

  const userRoles = computed(() => state.value.profile.roles ?? [])

  const userGrants = computed(() => state.value.profile.grants ?? [])

  return { login, logout, isAuthenticated, isLoggedIn, userRoles, userGrants }
}
