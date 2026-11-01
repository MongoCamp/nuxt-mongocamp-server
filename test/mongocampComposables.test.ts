import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

const cookieOptions: Record<string, unknown>[] = []
let runtimeConfig: Record<string, unknown> = { public: { mongocamp: {} } }
const authApi = {
  login: vi.fn(),
  logout: vi.fn(),
  refreshToken: vi.fn(),
  isAuthenticated: vi.fn(),
}

vi.mock('#app', () => ({
  useRuntimeConfig: () => runtimeConfig,
  useState: (_key: string, init: () => unknown) => ref(init()),
  useCookie: (_name: string, options: { default: () => unknown } & Record<string, unknown>) => {
    cookieOptions.push(options)
    return ref(options.default())
  },
}))

vi.mock('../src/runtime/composables/mongocampApi', () => ({
  useMongocampApi: () => ({ authApi }),
}))

// shared cookie ref so every composable sees the same session
let sharedSession: ReturnType<typeof ref> | undefined
vi.mock('../src/runtime/composables/mongocampStorage', async (importOriginal) => {
  const original = await importOriginal<typeof import('../src/runtime/composables/mongocampStorage')>()
  return {
    useMongocampStorage: () => (sharedSession ??= original.useMongocampStorage() as never),
  }
})

const { useMongocampStorage } = await vi.importActual<typeof import('../src/runtime/composables/mongocampStorage')>('../src/runtime/composables/mongocampStorage')
const { useMongocampAuth } = await import('../src/runtime/composables/mongocampAuth')
const { useMongocampUser } = await import('../src/runtime/composables/mongocampUser')

const loginResult = {
  authToken: 'tok',
  userProfile: { user: 'alice', isAdmin: true, roles: ['admin'], grants: [{ name: 'g' }] },
}

beforeEach(() => {
  sharedSession = undefined
  cookieOptions.length = 0
  runtimeConfig = { public: { mongocamp: {} } }
  Object.values(authApi).forEach(fn => fn.mockReset())
  authApi.logout.mockResolvedValue(undefined)
})

describe('useMongocampStorage', () => {
  it('defaults to an empty session', () => {
    expect(useMongocampStorage().value).toEqual({ token: '', profile: { user: '', isAdmin: false } })
  })

  it('uses a 30 day maxAge by default and honours sessionMaxAge', () => {
    useMongocampStorage()
    expect(cookieOptions[0].maxAge).toBe(60 * 60 * 24 * 30)

    runtimeConfig = { public: { mongocamp: { sessionMaxAge: 120 } } }
    useMongocampStorage()
    expect(cookieOptions[1].maxAge).toBe(120)
  })

  it('hardens the cookie with sameSite lax', () => {
    useMongocampStorage()
    expect(cookieOptions[0].sameSite).toBe('lax')
  })
})

describe('useMongocampAuth', () => {
  it('login stores token and profile and exposes roles/grants', async () => {
    authApi.login.mockResolvedValue(loginResult)
    const auth = useMongocampAuth()
    expect(auth.isLoggedIn.value).toBe(false)

    const profile = await auth.login('alice', 'secret')

    expect(authApi.login).toHaveBeenCalledWith({ login: { userId: 'alice', password: 'secret' } })
    expect(profile).toEqual(loginResult.userProfile)
    expect(auth.isLoggedIn.value).toBe(true)
    expect(auth.userRoles.value).toEqual(['admin'])
    expect(auth.userGrants.value).toEqual([{ name: 'g' }])
  })

  it('login clears a previous session first', async () => {
    authApi.login.mockResolvedValue(loginResult)
    const auth = useMongocampAuth()
    await auth.login('alice', 'secret')
    await auth.login('alice', 'secret')
    expect(authApi.logout).toHaveBeenCalledTimes(1)
  })

  it('failed login leaves the user logged out', async () => {
    authApi.login.mockRejectedValue(new Error('nope'))
    const auth = useMongocampAuth()
    await expect(auth.login('alice', 'bad')).rejects.toThrow('nope')
    expect(auth.isLoggedIn.value).toBe(false)
  })

  it('logout resets the session and only calls the API when a token exists', async () => {
    authApi.login.mockResolvedValue(loginResult)
    const auth = useMongocampAuth()

    auth.logout()
    expect(authApi.logout).not.toHaveBeenCalled()

    await auth.login('alice', 'secret')
    auth.logout()
    expect(authApi.logout).toHaveBeenCalledTimes(1)
    expect(auth.isLoggedIn.value).toBe(false)
    expect(auth.userRoles.value).toEqual([])
    expect(auth.userGrants.value).toEqual([])
    expect(useMongocampStorage().value.profile).toEqual({ user: '', isAdmin: false })
  })

  it('isAuthenticated delegates to the API', async () => {
    authApi.isAuthenticated.mockResolvedValue(true)
    expect(await useMongocampAuth().isAuthenticated()).toBe(true)
  })
})

describe('useMongocampUser', () => {
  it('reflects the session profile reactively', async () => {
    authApi.login.mockResolvedValue(loginResult)
    const user = useMongocampUser()
    expect(user.value).toEqual({ user: '', isAdmin: false })

    await useMongocampAuth().login('alice', 'secret')
    expect(user.value.user).toBe('alice')
    expect(user.value.isAdmin).toBe(true)
  })
})
