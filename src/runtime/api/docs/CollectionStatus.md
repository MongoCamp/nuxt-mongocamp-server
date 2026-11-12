
# CollectionStatus


## Properties

Name | Type
------------ | -------------
`ns` | string
`collectionType` | string
`scaleFactor` | number
`size` | number
`count` | number
`storageSize` | number
`avgObjSize` | number
`nindexes` | number
`indexSizes` | { [key: string]: number; }
`totalIndexSize` | number
`ok` | number
`fetched` | Date
`map` | { [key: string]: any | null; }

## Example

```typescript
import type { CollectionStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "ns": null,
  "collectionType": null,
  "scaleFactor": null,
  "size": null,
  "count": null,
  "storageSize": null,
  "avgObjSize": null,
  "nindexes": null,
  "indexSizes": null,
  "totalIndexSize": null,
  "ok": null,
  "fetched": null,
  "map": null,
} satisfies CollectionStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


