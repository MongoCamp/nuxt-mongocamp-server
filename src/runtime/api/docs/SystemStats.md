
# SystemStats


## Properties

Name | Type
------------ | -------------
`uptimeSeconds` | number
`connections` | [ConnectionStats](ConnectionStats.md)
`opcounters` | [OpCounters](OpCounters.md)
`replicaSet` | [ReplicaSetState](ReplicaSetState.md)
`partial` | boolean

## Example

```typescript
import type { SystemStats } from ''

// TODO: Update the object below with actual values
const example = {
  "uptimeSeconds": null,
  "connections": null,
  "opcounters": null,
  "replicaSet": null,
  "partial": null,
} satisfies SystemStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


