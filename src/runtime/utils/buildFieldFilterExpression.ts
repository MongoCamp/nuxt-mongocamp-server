export type FilterFieldValue = string | number | boolean | Date

export function buildFieldFilterExpression(field: string, value: FilterFieldValue): string {
  if (typeof value === 'number' || typeof value === 'boolean')
    return `${field}: ${value}`

  const stringValue = value instanceof Date ? value.toISOString() : value
  const escapedValue = stringValue.replace(/"/g, '\\"')
  return `${field}: "${escapedValue}"`
}
