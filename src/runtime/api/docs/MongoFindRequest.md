
# MongoFindRequest


## Properties

Name | Type
------------ | -------------
`filter` | { [key: string]: any | null; }
`sort` | { [key: string]: any | null; }
`projection` | { [key: string]: any | null; }

## Example

```typescript
import type { MongoFindRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "filter": null,
  "sort": null,
  "projection": null,
} satisfies MongoFindRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MongoFindRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


