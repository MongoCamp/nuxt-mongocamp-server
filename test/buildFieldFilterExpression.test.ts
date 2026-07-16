import { describe, expect, it } from 'vitest'
import { buildFieldFilterExpression } from '../src/runtime/utils/buildFieldFilterExpression'

describe('buildFieldFilterExpression', () => {
  it('quotes string values', () => {
    expect(buildFieldFilterExpression('name', 'admin')).toBe('name: "admin"')
  })

  it('escapes embedded quotes in string values', () => {
    expect(buildFieldFilterExpression('name', 'a"b')).toBe('name: "a\\"b"')
  })

  it('does not quote number values', () => {
    expect(buildFieldFilterExpression('age', 42)).toBe('age: 42')
  })

  it('does not quote boolean values', () => {
    expect(buildFieldFilterExpression('active', true)).toBe('active: true')
  })

  it('serializes Date values as a quoted ISO string', () => {
    const date = new Date('2026-01-01T00:00:00.000Z')
    expect(buildFieldFilterExpression('createdAt', date)).toBe('createdAt: "2026-01-01T00:00:00.000Z"')
  })
})
