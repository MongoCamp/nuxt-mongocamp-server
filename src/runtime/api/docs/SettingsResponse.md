
# SettingsResponse


## Properties

Name | Type
------------ | -------------
`routesPlugins` | Array&lt;string&gt;
`filePlugins` | Array&lt;string&gt;
`ignoredPlugins` | Array&lt;string&gt;
`configurations` | { [key: string]: any; }

## Example

```typescript
import type { SettingsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "routesPlugins": null,
  "filePlugins": null,
  "ignoredPlugins": null,
  "configurations": null,
} satisfies SettingsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SettingsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


