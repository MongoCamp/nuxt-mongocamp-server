
# DatabaseInfo


## Properties

Name | Type
------------ | -------------
`name` | string
`sizeOnDisk` | number
`empty` | boolean
`fetched` | Date
`map` | { [key: string]: any | null; }

## Example

```typescript
import type { DatabaseInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "sizeOnDisk": null,
  "empty": null,
  "fetched": null,
  "map": null,
} satisfies DatabaseInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatabaseInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


