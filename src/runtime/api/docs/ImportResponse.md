
# ImportResponse


## Properties

Name | Type
------------ | -------------
`read` | number
`inserted` | number
`failed` | number
`errors` | [Array&lt;InsertError&gt;](InsertError.md)
`errorsTruncated` | boolean

## Example

```typescript
import type { ImportResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "read": null,
  "inserted": null,
  "failed": null,
  "errors": null,
  "errorsTruncated": null,
} satisfies ImportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


