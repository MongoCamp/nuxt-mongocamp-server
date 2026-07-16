import { Configuration } from '../../api'
import { createMongocampApis } from '../../utils/createMongocampApis'

export function useMongocampServerApi(url: string, key?: string, token?: string) {
  let configuration = new Configuration({ basePath: url })

  if (key && key.length > 0)
    configuration = new Configuration({ basePath: url, apiKey: key })
  else if (token && token.length > 0)
    configuration = new Configuration({ basePath: url, accessToken: token })

  return createMongocampApis(configuration)
}
