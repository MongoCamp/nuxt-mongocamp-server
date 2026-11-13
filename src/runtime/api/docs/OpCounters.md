
# OpCounters


## Properties

Name | Type
------------ | -------------
`insert` | number
`query` | number
`update` | number
`_delete` | number
`getmore` | number
`command` | number

## Example

```typescript
import type { OpCounters } from ''

// TODO: Update the object below with actual values
const example = {
  "insert": null,
  "query": null,
  "update": null,
  "_delete": null,
  "getmore": null,
  "command": null,
} satisfies OpCounters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpCounters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


