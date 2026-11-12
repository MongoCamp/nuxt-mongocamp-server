
# JsonSchemaDefinition


## Properties

Name | Type
------------ | -------------
`type` | string
`title` | string
`additionalProperties` | boolean
`required` | Array&lt;string&gt;
`properties` | { [key: string]: { [key: string]: any | null; }; }

## Example

```typescript
import type { JsonSchemaDefinition } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "title": null,
  "additionalProperties": null,
  "required": null,
  "properties": null,
} satisfies JsonSchemaDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JsonSchemaDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


