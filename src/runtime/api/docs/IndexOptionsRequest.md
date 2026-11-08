
# IndexOptionsRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`background` | boolean
`defaultLanguage` | string
`textVersion` | number
`expireAfter` | string
`unique` | boolean
`max` | number
`min` | number
`sparse` | boolean
`hidden` | boolean
`partialFilterExpression` | { [key: string]: any; }
`weights` | { [key: string]: number; }
`collation` | { [key: string]: any; }

## Example

```typescript
import type { IndexOptionsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "background": null,
  "defaultLanguage": null,
  "textVersion": null,
  "expireAfter": null,
  "unique": null,
  "max": null,
  "min": null,
  "sparse": null,
  "hidden": null,
  "partialFilterExpression": null,
  "weights": null,
  "collation": null,
} satisfies IndexOptionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndexOptionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


