
# MongoCampConfiguration


## Properties

Name | Type
------------ | -------------
`key` | string
`value` | any
`configType` | string
`comment` | string
`needsRestartForActivation` | boolean

## Example

```typescript
import type { MongoCampConfiguration } from ''

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "value": null,
  "configType": null,
  "comment": null,
  "needsRestartForActivation": null,
} satisfies MongoCampConfiguration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MongoCampConfiguration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


