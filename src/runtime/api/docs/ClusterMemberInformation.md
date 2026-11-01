
# ClusterMemberInformation


## Properties

Name | Type
------------ | -------------
`name` | string
`siteMaster` | boolean
`siteAddress` | boolean
`multicast` | boolean
`coordinator` | boolean

## Example

```typescript
import type { ClusterMemberInformation } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "siteMaster": null,
  "siteAddress": null,
  "multicast": null,
  "coordinator": null,
} satisfies ClusterMemberInformation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClusterMemberInformation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


