
# CollectionSummary


## Properties

Name | Type
------------ | -------------
`name` | string
`collectionType` | string
`count` | number
`size` | number
`storageSize` | number
`avgObjSize` | number
`nindexes` | number
`totalIndexSize` | number
`available` | boolean

## Example

```typescript
import type { CollectionSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "collectionType": null,
  "count": null,
  "size": null,
  "storageSize": null,
  "avgObjSize": null,
  "nindexes": null,
  "totalIndexSize": null,
  "available": null,
} satisfies CollectionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


