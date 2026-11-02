# CollectionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**aggregate**](CollectionApi.md#aggregate) | **POST** /mongodb/collections/{collectionName}/aggregate | Aggregate in Collection |
| [**clearCollection**](CollectionApi.md#clearcollection) | **DELETE** /mongodb/collections/{collectionName}/clear | Clear Collection |
| [**deleteCollection**](CollectionApi.md#deletecollection) | **DELETE** /mongodb/collections/{collectionName} | Delete Collection |
| [**distinct**](CollectionApi.md#distinct) | **POST** /mongodb/collections/{collectionName}/distinct/{field} | Distinct in Collection |
| [**getCollectionFields**](CollectionApi.md#getcollectionfields) | **GET** /mongodb/collections/{collectionName}/fields | Collection Fields |
| [**getCollectionInformation**](CollectionApi.md#getcollectioninformation) | **GET** /mongodb/collections/{collectionName} | Collection Information |
| [**getJsonSchema**](CollectionApi.md#getjsonschema) | **GET** /mongodb/collections/{collectionName}/schema | Collection Fields |
| [**getSchemaAnalysis**](CollectionApi.md#getschemaanalysis) | **GET** /mongodb/collections/{collectionName}/schema/analysis | Collection Fields |
| [**listCollections**](CollectionApi.md#listcollections) | **GET** /mongodb/collections | List of Collections |
| [**listCollectionsByDatabase**](CollectionApi.md#listcollectionsbydatabase) | **GET** /mongodb/databases/{databaseName}/collections | List of Collections |



## aggregate

> Array&lt;{ [key: string]: any; }&gt; aggregate(collectionName, mongoAggregateRequest, rowsPerPage, page)

Aggregate in Collection

Aggregate in a given Collection. The value of a stage is any JSON value. Operators that run JavaScript on the database server or write to collections (&#x60;$function&#x60;, &#x60;$accumulator&#x60;, &#x60;$where&#x60;, &#x60;$out&#x60;, &#x60;$merge&#x60;, &#x60;$currentOp&#x60;, &#x60;$listSessions&#x60; by default, configured with AGGREGATION_STAGES_DENIED) are refused with 403.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { AggregateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // MongoAggregateRequest
    mongoAggregateRequest: ...,
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies AggregateRequest;

  try {
    const data = await api.aggregate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **mongoAggregateRequest** | [MongoAggregateRequest](MongoAggregateRequest.md) |  | |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

**Array<{ [key: string]: any; }>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * x-pagination-count-rows - count all elements <br>  * x-pagination-rows-per-page - Count elements per page <br>  * x-pagination-current-page - Current page <br>  * x-pagination-count-pages - Count pages <br>  |
| **400** | Invalid value for: body, Invalid value for: query parameter rowsPerPage, Invalid value for: query parameter page |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearCollection

> JsonValueBoolean clearCollection(collectionName)

Clear Collection

Delete all Document in Collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { ClearCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
  } satisfies ClearCollectionRequest;

  try {
    const data = await api.clearCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCollection

> JsonValueBoolean deleteCollection(collectionName)

Delete Collection

Delete a given Collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { DeleteCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
  } satisfies DeleteCollectionRequest;

  try {
    const data = await api.deleteCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |

### Return type

[**JsonValueBoolean**](JsonValueBoolean.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## distinct

> Array&lt;any&gt; distinct(collectionName, field, rowsPerPage, page)

Distinct in Collection

Distinct for Field in a given Collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { DistinctRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The field for your distinct Request.
    field: field_example,
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies DistinctRequest;

  try {
    const data = await api.distinct(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **field** | `string` | The field for your distinct Request. | [Defaults to `undefined`] |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

**Array<any>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * x-pagination-count-rows - count all elements <br>  * x-pagination-rows-per-page - Count elements per page <br>  * x-pagination-current-page - Current page <br>  * x-pagination-count-pages - Count pages <br>  |
| **400** | Invalid value for: query parameter rowsPerPage, Invalid value for: query parameter page |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionFields

> Array&lt;string&gt; getCollectionFields(collectionName, sampleSize)

Collection Fields

List the Fields in a given collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetCollectionFieldsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // number | Use sample size greater 0 (e.g. 1000) for better performance on big collections (optional)
    sampleSize: 1000,
  } satisfies GetCollectionFieldsRequest;

  try {
    const data = await api.getCollectionFields(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **sampleSize** | `number` | Use sample size greater 0 (e.g. 1000) for better performance on big collections | [Optional] [Defaults to `undefined`] |

### Return type

**Array<string>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sample size |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionInformation

> CollectionStatus getCollectionInformation(collectionName, includeDetails)

Collection Information

All Information about a single Collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetCollectionInformationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // boolean | Include all details for the Collection (optional)
    includeDetails: true,
  } satisfies GetCollectionInformationRequest;

  try {
    const data = await api.getCollectionInformation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **includeDetails** | `boolean` | Include all details for the Collection | [Optional] [Defaults to `false`] |

### Return type

[**CollectionStatus**](CollectionStatus.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter includeDetails |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJsonSchema

> JsonSchema getJsonSchema(collectionName, sampleSize, deepth)

Collection Fields

List the Fields in a given collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetJsonSchemaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // number | Use sample size greater 0 (e.g. 5000) for better performance on big collections (optional)
    sampleSize: 5000,
    // number | How deep should the objects extracted (optional)
    deepth: 56,
  } satisfies GetJsonSchemaRequest;

  try {
    const data = await api.getJsonSchema(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **sampleSize** | `number` | Use sample size greater 0 (e.g. 5000) for better performance on big collections | [Optional] [Defaults to `undefined`] |
| **deepth** | `number` | How deep should the objects extracted | [Optional] [Defaults to `3`] |

### Return type

[**JsonSchema**](JsonSchema.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sampleSize, Invalid value for: query parameter deepth |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSchemaAnalysis

> SchemaAnalysis getSchemaAnalysis(collectionName, sampleSize, deepth)

Collection Fields

List the Fields in a given collection

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetSchemaAnalysisRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // number | Use sample size greater 0 (e.g. 5000) for better performance on big collections (optional)
    sampleSize: 5000,
    // number | How deep should the objects extracted (optional)
    deepth: 56,
  } satisfies GetSchemaAnalysisRequest;

  try {
    const data = await api.getSchemaAnalysis(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **sampleSize** | `number` | Use sample size greater 0 (e.g. 5000) for better performance on big collections | [Optional] [Defaults to `undefined`] |
| **deepth** | `number` | How deep should the objects extracted | [Optional] [Defaults to `3`] |

### Return type

[**SchemaAnalysis**](SchemaAnalysis.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sampleSize, Invalid value for: query parameter deepth |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollections

> Array&lt;string&gt; listCollections()

List of Collections

List of all Collections of the default database

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { ListCollectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  try {
    const data = await api.listCollections();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<string>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollectionsByDatabase

> Array&lt;string&gt; listCollectionsByDatabase(databaseName)

List of Collections

List of all Collections of the given database

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { ListCollectionsByDatabaseRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: httpAuth1
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: httpAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionApi(config);

  const body = {
    // string | Name of your Database
    databaseName: databaseName_example,
  } satisfies ListCollectionsByDatabaseRequest;

  try {
    const data = await api.listCollectionsByDatabase(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **databaseName** | `string` | Name of your Database | [Defaults to `undefined`] |

### Return type

**Array<string>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

