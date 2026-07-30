import { Configuration } from '../api'
import { createMongocampApis } from '../utils/createMongocampApis'

import { useMongocampUrl } from './mongocampUrl'
import { useMongocampStorage } from './mongocampStorage'

export function useMongocampApi() {
  const url = useMongocampUrl()
  const state = useMongocampStorage()

  const configuration = new Configuration({
    basePath: url,
    accessToken: () => state.value.token,
    middleware: [{
      // a 401 means the token itself is invalid/expired, so clear it everywhere.
      // a 403 is left alone here — it usually means "authenticated but missing a grant
      // for this specific action", not "the session is dead".
      post: async ({ response }) => {
        if (response.status === 401 && state.value.token) {
          state.value.token = ''
          state.value.profile = { user: '', isAdmin: false }
        }
        return response
      },
    }],
  })

  return createMongocampApis(configuration)
}
