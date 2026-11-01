import { describe, expect, it } from 'vitest'
import { ResponseError } from '../src/runtime/api'
import { toMongocampError } from '../src/runtime/utils/toMongocampError'

function responseError(body: string, status = 400) {
  return new ResponseError(new Response(body, { status }), 'failed')
}

describe('toMongocampError', () => {
  it('extracts msg and additionalInfo from a JSON ErrorDescription', async () => {
    const error = responseError(JSON.stringify({ msg: 'Bad filter', additionalInfo: 'field x' }), 422)
    const result = await toMongocampError(error)
    expect(result).toEqual({ status: 422, message: 'Bad filter', additionalInfo: 'field x', cause: error })
  })

  it('falls back to a status message when the body is not JSON', async () => {
    const result = await toMongocampError(responseError('<html>oops</html>', 502))
    expect(result.status).toBe(502)
    expect(result.message).toBe('Request failed with status 502')
    expect(result.additionalInfo).toBeUndefined()
  })

  it('keeps the fallback message when the JSON has no msg', async () => {
    const result = await toMongocampError(responseError('{}', 500))
    expect(result.message).toBe('Request failed with status 500')
  })

  it('maps a plain Error to its message without a status', async () => {
    const error = new Error('network down')
    const result = await toMongocampError(error)
    expect(result).toEqual({ message: 'network down', cause: error })
  })

  it('stringifies non-Error values', async () => {
    const result = await toMongocampError('boom')
    expect(result).toEqual({ message: 'boom', cause: 'boom' })
  })
})
