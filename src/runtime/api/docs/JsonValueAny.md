
# JsonValueAny


## Properties

Name | Type
------------ | -------------
`value` | any

## Example

```typescript
import type { JsonValueAny } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies JsonValueAny

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JsonValueAny
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


