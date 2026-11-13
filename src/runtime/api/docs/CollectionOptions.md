
# CollectionOptions


## Properties

Name | Type
------------ | -------------
`capped` | boolean
`sizeInBytes` | number
`maxDocuments` | number
`validator` | { [key: string]: any | null; }
`validationLevel` | string
`validationAction` | string
`collation` | [CollectionCollation](CollectionCollation.md)

## Example

```typescript
import type { CollectionOptions } from ''

// TODO: Update the object below with actual values
const example = {
  "capped": null,
  "sizeInBytes": null,
  "maxDocuments": null,
  "validator": null,
  "validationLevel": null,
  "validationAction": null,
  "collation": null,
} satisfies CollectionOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


