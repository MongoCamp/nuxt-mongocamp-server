import type { ErrorDescription } from '../api'
import { ResponseError } from '../api'

export interface MongocampError {
  status?: number
  message: string
  additionalInfo?: string
  cause: unknown
}

export async function toMongocampError(error: unknown): Promise<MongocampError> {
  if (error instanceof ResponseError) {
    const status = error.response.status
    let message = `Request failed with status ${status}`
    let additionalInfo: string | undefined

    try {
      const body = await error.response.clone().json() as Partial<ErrorDescription>
      if (body?.msg)
        message = body.msg
      additionalInfo = body?.additionalInfo
    }
    catch {
      // response body wasn't a JSON ErrorDescription, keep the fallback message
    }

    return { status, message, additionalInfo, cause: error }
  }

  if (error instanceof Error)
    return { message: error.message, cause: error }

  return { message: String(error), cause: error }
}
