
# InsertResponse


## Properties

Name | Type
------------ | -------------
`wasAcknowledged` | boolean
`insertedIds` | Array&lt;string&gt;
`insertedCount` | number
`errors` | [Array&lt;InsertError&gt;](InsertError.md)

## Example

```typescript
import type { InsertResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "wasAcknowledged": null,
  "insertedIds": null,
  "insertedCount": null,
  "errors": null,
} satisfies InsertResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InsertResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


