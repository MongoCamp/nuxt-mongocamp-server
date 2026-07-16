import { computed } from 'vue'
import { consola } from 'consola'

import type { Login, LoginResult, UserProfile } from '../api'
import { ResponseError } from '../api'

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
      consola.error(e)
      if (e instanceof ResponseError && (e.response.status === 401 || e.response.status === 403))
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
    startTokenRefresh()

    return result.userProfile
  }

  const logout = (): void => {
    state.value.token = ''
    const profile: UserProfile = { user: '', isAdmin: false }
    state.value.profile = profile
    user.value = profile
    stopTokenRefresh()
  }

  const isLoggedIn = computed(() => {
    const result: boolean = state.value?.token?.length > 0
    if (result)
      startTokenRefresh()
    else
      stopTokenRefresh()
    return result
  })

  const userRoles = computed(() => state.value.profile.roles ?? [])

  const userGrants = computed(() => state.value.profile.grants ?? [])

  return { login, logout, isAuthenticated, isLoggedIn, userRoles, userGrants }
}
