# CollectionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**aggregate**](CollectionApi.md#aggregate) | **POST** /mongodb/collections/{collectionName}/aggregate | Aggregate in Collection |
| [**clearCollection**](CollectionApi.md#clearcollection) | **DELETE** /mongodb/collections/{collectionName}/clear | Clear Collection |
| [**copyCollection**](CollectionApi.md#copycollection) | **POST** /mongodb/collections/{collectionName}/copy | Copy Collection |
| [**createCollection**](CollectionApi.md#createcollection) | **PUT** /mongodb/collections/{collectionName} | Create Collection |
| [**deleteCollection**](CollectionApi.md#deletecollection) | **DELETE** /mongodb/collections/{collectionName} | Delete Collection |
| [**distinct**](CollectionApi.md#distinct) | **POST** /mongodb/collections/{collectionName}/distinct/{field} | Distinct in Collection |
| [**getCollectionFields**](CollectionApi.md#getcollectionfields) | **GET** /mongodb/collections/{collectionName}/fields | Collection Fields |
| [**getCollectionInformation**](CollectionApi.md#getcollectioninformation) | **GET** /mongodb/collections/{collectionName} | Collection Information |
| [**getCollectionOptions**](CollectionApi.md#getcollectionoptions) | **GET** /mongodb/collections/{collectionName}/options | Collection Options |
| [**getFieldDetails**](CollectionApi.md#getfielddetails) | **GET** /mongodb/collections/{collectionName}/fields/detail | Fields of a Collection with types |
| [**getJsonSchema**](CollectionApi.md#getjsonschema) | **GET** /mongodb/collections/{collectionName}/schema | Collection Fields |
| [**getSchemaAnalysis**](CollectionApi.md#getschemaanalysis) | **GET** /mongodb/collections/{collectionName}/schema/analysis | Collection Fields |
| [**listCollectionInformation**](CollectionApi.md#listcollectioninformation) | **GET** /mongodb/collections/info | Information of all Collections |
| [**listCollections**](CollectionApi.md#listcollections) | **GET** /mongodb/collections | List of Collections |
| [**listCollectionsByDatabase**](CollectionApi.md#listcollectionsbydatabase) | **GET** /mongodb/databases/{databaseName}/collections | List of Collections |
| [**modifyCollectionOptions**](CollectionApi.md#modifycollectionoptions) | **PATCH** /mongodb/collections/{collectionName}/options | Change the Validation of a Collection |
| [**renameCollection**](CollectionApi.md#renamecollection) | **POST** /mongodb/collections/{collectionName}/rename | Rename Collection |



## aggregate

> Array&lt;{ [key: string]: any | null; }&gt; aggregate(collectionName, mongoAggregateRequest, rowsPerPage, page, filter, extendedJson)

Aggregate in Collection

Aggregate in a given Collection. The value of a stage is any JSON value. Operators that run JavaScript on the database server or write to collections (&#x60;$function&#x60;, &#x60;$accumulator&#x60;, &#x60;$where&#x60;, &#x60;$out&#x60;, &#x60;$merge&#x60;, &#x60;$currentOp&#x60;, &#x60;$listSessions&#x60;, &#x60;$collStats&#x60;, &#x60;$indexStats&#x60; by default, configured with AGGREGATION_STAGES_DENIED) are refused with 403.

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
    // string | Filter Query like on the list of documents, applied as the first stage of the pipeline. Not possible for a pipeline that starts with $geoNear, $search or $vectorSearch. (optional)
    filter: filter_example,
    // string | relaxed or canonical: the documents with the types of their values as MongoDB Extended JSON ({\"$oid\": ...}, {\"$date\": ...}, {\"$numberDecimal\": ...}, canonical also {\"$numberInt\": ...}, {\"$numberLong\": ...} and {\"$numberDouble\": ...}). Without the parameter the documents are returned as before. (optional)
    extendedJson: extendedJson_example,
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
| **filter** | `string` | Filter Query like on the list of documents, applied as the first stage of the pipeline. Not possible for a pipeline that starts with $geoNear, $search or $vectorSearch. | [Optional] [Defaults to `undefined`] |
| **extendedJson** | `string` | relaxed or canonical: the documents with the types of their values as MongoDB Extended JSON ({\&quot;$oid\&quot;: ...}, {\&quot;$date\&quot;: ...}, {\&quot;$numberDecimal\&quot;: ...}, canonical also {\&quot;$numberInt\&quot;: ...}, {\&quot;$numberLong\&quot;: ...} and {\&quot;$numberDouble\&quot;: ...}). Without the parameter the documents are returned as before. | [Optional] [Defaults to `undefined`] |

### Return type

**Array<{ [key: string]: any | null; }>**

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


## copyCollection

> CopyResponse copyCollection(collectionName, copyRequest)

Copy Collection

Copy a Collection in the database, optionally only the documents that match a Lucene filter, with its indices (withIndexes, true by default). The target is a name in the database of the Collection. The read grant for the Collection and the write grant for the target are needed. An existing target is a conflict (409), unless dropTarget is true and the user has the administrate grant for it: it is replaced when the copy is complete. The copy is made in one request, a big collection takes its time.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { CopyCollectionRequest } from '';

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
    // CopyRequest
    copyRequest: {"target":"copyOfCollection","filter":"type:company","withIndexes":true,"dropTarget":false},
  } satisfies CopyCollectionRequest;

  try {
    const data = await api.copyCollection(body);
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
| **copyRequest** | [CopyRequest](CopyRequest.md) |  | |

### Return type

[**CopyResponse**](CopyResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCollection

> CreateCollectionResponse createCollection(collectionName, collectionOptions)

Create Collection

Create a Collection with options: capped (&#x60;capped&#x60;, &#x60;sizeInBytes&#x60;, &#x60;maxDocuments&#x60;), a validator (&#x60;validator&#x60;, &#x60;validationLevel&#x60; off, moderate or strict, &#x60;validationAction&#x60; error or warn) and a collation. Without a body an empty Collection is created. The administrate grant for the name is needed; a name of another database is &#x60;database:name&#x60;. An existing Collection is a conflict (409), reserved names (system collections, the prefix of the server, the collections of a bucket) and options that do not fit are 400.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { CreateCollectionRequest } from '';

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
    // CollectionOptions | The options of the new Collection, all of them are optional (optional)
    collectionOptions: ...,
  } satisfies CreateCollectionRequest;

  try {
    const data = await api.createCollection(body);
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
| **collectionOptions** | [CollectionOptions](CollectionOptions.md) | The options of the new Collection, all of them are optional | [Optional] |

### Return type

[**CreateCollectionResponse**](CreateCollectionResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
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


## getCollectionOptions

> CollectionOptions getCollectionOptions(collectionName)

Collection Options

The options of a Collection: capped, the validator with its level and action, the collation. 404 for a Collection that does not exist.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetCollectionOptionsRequest } from '';

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
  } satisfies GetCollectionOptionsRequest;

  try {
    const data = await api.getCollectionOptions(body);
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

[**CollectionOptions**](CollectionOptions.md)

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


## getFieldDetails

> Array&lt;FieldInfo&gt; getFieldDetails(collectionName, sampleSize, depth)

Fields of a Collection with types

All fields of a collection as a flat list, one entry per path (&#x60;address.city&#x60;, &#x60;tags[]&#x60; for the elements of an array) with the types of the values and how often every type was found in the analysed documents.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { GetFieldDetailsRequest } from '';

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
    // number | Number of documents that are analysed, 1000 by default. A greater sample is more exact and slower on big collections. (optional)
    sampleSize: 1000,
    // number | How deep should the objects extracted (optional)
    depth: 56,
  } satisfies GetFieldDetailsRequest;

  try {
    const data = await api.getFieldDetails(body);
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
| **sampleSize** | `number` | Number of documents that are analysed, 1000 by default. A greater sample is more exact and slower on big collections. | [Optional] [Defaults to `1000`] |
| **depth** | `number` | How deep should the objects extracted | [Optional] [Defaults to `3`] |

### Return type

[**Array&lt;FieldInfo&gt;**](FieldInfo.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sampleSize, Invalid value for: query parameter depth |  -  |
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


## listCollectionInformation

> Array&lt;CollectionSummary&gt; listCollectionInformation(name, database)

Information of all Collections

The numbers of all Collections of the default database (or of the database in &#x60;database&#x60;) that the user may read in one request (count, size, storage size, average size of a document, number and size of the indices). A Collection without statistics, for example a view, is listed with available false. A database that does not exist is a 404 for an administrator and an empty list for every other user: they cannot find out which databases exist.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { ListCollectionInformationRequest } from '';

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
    // Array<string> | Only the Collections with these names, by default all Collections that the user may read. With `database` the names are the names inside that database (`locations`), the full name (`geodata:locations`) of that database is accepted too. (optional)
    name: ...,
    // string | The Collections of this database, by default the default database. The names in the answer are the full names (`geodata:locations`), as they are used in the paths of the other routes. (optional)
    database: database_example,
  } satisfies ListCollectionInformationRequest;

  try {
    const data = await api.listCollectionInformation(body);
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
| **name** | `Array<string>` | Only the Collections with these names, by default all Collections that the user may read. With &#x60;database&#x60; the names are the names inside that database (&#x60;locations&#x60;), the full name (&#x60;geodata:locations&#x60;) of that database is accepted too. | [Optional] |
| **database** | `string` | The Collections of this database, by default the default database. The names in the answer are the full names (&#x60;geodata:locations&#x60;), as they are used in the paths of the other routes. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;CollectionSummary&gt;**](CollectionSummary.md)

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


## modifyCollectionOptions

> CollectionOptions modifyCollectionOptions(collectionName, collectionOptions)

Change the Validation of a Collection

Change the validator, the validationLevel and the validationAction of a Collection (collMod), the answer is the options after the change. A capped Collection and the collation cannot be changed after the creation (400). The administrate grant is needed.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { ModifyCollectionOptionsRequest } from '';

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
    // CollectionOptions
    collectionOptions: ...,
  } satisfies ModifyCollectionOptionsRequest;

  try {
    const data = await api.modifyCollectionOptions(body);
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
| **collectionOptions** | [CollectionOptions](CollectionOptions.md) |  | |

### Return type

[**CollectionOptions**](CollectionOptions.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameCollection

> RenameResponse renameCollection(collectionName, renameRequest)

Rename Collection

Rename a Collection in the database, with its Documents and Indices. The target is a name in the database of the Collection. The administrate grant for the Collection and the write grant for the target are needed. An existing target is a conflict (409), unless dropTarget is true and the user has the administrate grant for it: it is replaced then.

### Example

```ts
import {
  Configuration,
  CollectionApi,
} from '';
import type { RenameCollectionRequest } from '';

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
    // RenameRequest
    renameRequest: {"target":"newName","dropTarget":false},
  } satisfies RenameCollectionRequest;

  try {
    const data = await api.renameCollection(body);
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
| **renameRequest** | [RenameRequest](RenameRequest.md) |  | |

### Return type

[**RenameResponse**](RenameResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

