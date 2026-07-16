import { Configuration } from '../api'
import { createMongocampApis } from '../utils/createMongocampApis'

import { useMongocampUrl } from './mongocampUrl'
import { useMongocampStorage } from './mongocampStorage'

export function useMongocampApi() {
  const url = useMongocampUrl()
  const state = useMongocampStorage()

  const configuration = new Configuration({ basePath: url, accessToken: () => state.value.token })

  return createMongocampApis(configuration)
}
