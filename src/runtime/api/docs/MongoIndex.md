
# MongoIndex


## Properties

Name | Type
------------ | -------------
`name` | string
`fields` | Array&lt;string&gt;
`unique` | boolean
`version` | number
`namespace` | string
`keys` | { [key: string]: any | null; }
`weights` | { [key: string]: any | null; }
`expire` | boolean
`expireAfterSeconds` | number
`text` | boolean
`fetched` | Date
`map` | { [key: string]: any | null; }

## Example

```typescript
import type { MongoIndex } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "fields": null,
  "unique": null,
  "version": null,
  "namespace": null,
  "keys": null,
  "weights": null,
  "expire": null,
  "expireAfterSeconds": null,
  "text": null,
  "fetched": null,
  "map": null,
} satisfies MongoIndex

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MongoIndex
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


