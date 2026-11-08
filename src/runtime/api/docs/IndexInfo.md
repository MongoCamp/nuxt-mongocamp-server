
# IndexInfo


## Properties

Name | Type
------------ | -------------
`name` | string
`keys` | [Array&lt;IndexKey&gt;](IndexKey.md)
`unique` | boolean
`sparse` | boolean
`hidden` | boolean
`partialFilterExpression` | { [key: string]: any; }
`collation` | { [key: string]: any; }
`weights` | { [key: string]: any; }
`defaultLanguage` | string
`expireAfterSeconds` | number
`version` | number

## Example

```typescript
import type { IndexInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "keys": null,
  "unique": null,
  "sparse": null,
  "hidden": null,
  "partialFilterExpression": null,
  "collation": null,
  "weights": null,
  "defaultLanguage": null,
  "expireAfterSeconds": null,
  "version": null,
} satisfies IndexInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndexInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


