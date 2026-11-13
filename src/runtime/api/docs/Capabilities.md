
# Capabilities


## Properties

Name | Type
------------ | -------------
`serverVersion` | string
`mongoDbMajor` | number
`features` | Array&lt;string&gt;
`limits` | [CapabilityLimits](CapabilityLimits.md)
`aggregationStagesDenied` | Array&lt;string&gt;

## Example

```typescript
import type { Capabilities } from ''

// TODO: Update the object below with actual values
const example = {
  "serverVersion": null,
  "mongoDbMajor": null,
  "features": null,
  "limits": null,
  "aggregationStagesDenied": null,
} satisfies Capabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Capabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


