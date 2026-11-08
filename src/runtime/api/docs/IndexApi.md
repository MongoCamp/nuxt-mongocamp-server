# IndexApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createExpiringIndex**](IndexApi.md#createexpiringindex) | **PUT** /mongodb/collections/{collectionName}/index/field/{fieldName}/{duration}/expiring | Create expiring Index by Field for Collection |
| [**createIndex**](IndexApi.md#createindex) | **PUT** /mongodb/collections/{collectionName}/index | Create Index for Collection |
| [**createIndexForField**](IndexApi.md#createindexforfield) | **PUT** /mongodb/collections/{collectionName}/index/field/{fieldName} | Create Index by Field for Collection |
| [**createTextIndex**](IndexApi.md#createtextindex) | **PUT** /mongodb/collections/{collectionName}/index/field/{fieldName}/text | Create text index by field for collection |
| [**createUniqueIndex**](IndexApi.md#createuniqueindex) | **PUT** /mongodb/collections/{collectionName}/index/field/{fieldName}/unique | Create Unique Index |
| [**deleteIndex**](IndexApi.md#deleteindex) | **DELETE** /mongodb/collections/{collectionName}/index/{indexName} | Delete Index |
| [**index**](IndexApi.md#index) | **GET** /mongodb/collections/{collectionName}/index/{indexName} | Index for Collection |
| [**indexDetails**](IndexApi.md#indexdetails) | **GET** /mongodb/collections/{collectionName}/index/details | Indices with details for Collection |
| [**indexStats**](IndexApi.md#indexstats) | **GET** /mongodb/collections/{collectionName}/index/stats | Index usage for Collection |
| [**listIndices**](IndexApi.md#listindices) | **GET** /mongodb/collections/{collectionName}/index | List Indices for Collection |



## createExpiringIndex

> IndexCreateResponse createExpiringIndex(collectionName, fieldName, duration, sortAscending, name)

Create expiring Index by Field for Collection

Create expiring Index by Field for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { CreateExpiringIndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The field Name for your index
    fieldName: fieldName_example,
    // string | Expiring Duration in format 15d (https://www.scala-lang.org/api/2.13.7/scala/concurrent/duration/Duration.html)
    duration: duration_example,
    // boolean | Sort your index ascending (optional)
    sortAscending: true,
    // string | Name for your index (optional)
    name: name_example,
  } satisfies CreateExpiringIndexRequest;

  try {
    const data = await api.createExpiringIndex(body);
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
| **fieldName** | `string` | The field Name for your index | [Defaults to `undefined`] |
| **duration** | `string` | Expiring Duration in format 15d (https://www.scala-lang.org/api/2.13.7/scala/concurrent/duration/Duration.html) | [Defaults to `&#39;15d&#39;`] |
| **sortAscending** | `boolean` | Sort your index ascending | [Optional] [Defaults to `true`] |
| **name** | `string` | Name for your index | [Optional] [Defaults to `undefined`] |

### Return type

[**IndexCreateResponse**](IndexCreateResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sortAscending |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIndex

> IndexCreateResponse createIndex(collectionName, indexCreateRequest)

Create Index for Collection

Create Index for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { CreateIndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // IndexCreateRequest
    indexCreateRequest: ...,
  } satisfies CreateIndexRequest;

  try {
    const data = await api.createIndex(body);
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
| **indexCreateRequest** | [IndexCreateRequest](IndexCreateRequest.md) |  | |

### Return type

[**IndexCreateResponse**](IndexCreateResponse.md)

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


## createIndexForField

> IndexCreateResponse createIndexForField(collectionName, fieldName, sortAscending, indexOptionsRequest)

Create Index by Field for Collection

Create Index by Field for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { CreateIndexForFieldRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The field Name for your index
    fieldName: fieldName_example,
    // boolean | Sort your index ascending (optional)
    sortAscending: true,
    // IndexOptionsRequest (optional)
    indexOptionsRequest: ...,
  } satisfies CreateIndexForFieldRequest;

  try {
    const data = await api.createIndexForField(body);
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
| **fieldName** | `string` | The field Name for your index | [Defaults to `undefined`] |
| **sortAscending** | `boolean` | Sort your index ascending | [Optional] [Defaults to `true`] |
| **indexOptionsRequest** | [IndexOptionsRequest](IndexOptionsRequest.md) |  | [Optional] |

### Return type

[**IndexCreateResponse**](IndexCreateResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sortAscending, Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTextIndex

> IndexCreateResponse createTextIndex(collectionName, fieldName, indexOptionsRequest)

Create text index by field for collection

Create text index by field for given collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { CreateTextIndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The field Name for your index
    fieldName: fieldName_example,
    // IndexOptionsRequest (optional)
    indexOptionsRequest: ...,
  } satisfies CreateTextIndexRequest;

  try {
    const data = await api.createTextIndex(body);
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
| **fieldName** | `string` | The field Name for your index | [Defaults to `undefined`] |
| **indexOptionsRequest** | [IndexOptionsRequest](IndexOptionsRequest.md) |  | [Optional] |

### Return type

[**IndexCreateResponse**](IndexCreateResponse.md)

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


## createUniqueIndex

> IndexCreateResponse createUniqueIndex(collectionName, fieldName, sortAscending, name)

Create Unique Index

Create Unique Index by Field for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { CreateUniqueIndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The field Name for your index
    fieldName: fieldName_example,
    // boolean | Sort your index ascending (optional)
    sortAscending: true,
    // string | Name for your index (optional)
    name: name_example,
  } satisfies CreateUniqueIndexRequest;

  try {
    const data = await api.createUniqueIndex(body);
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
| **fieldName** | `string` | The field Name for your index | [Defaults to `undefined`] |
| **sortAscending** | `boolean` | Sort your index ascending | [Optional] [Defaults to `true`] |
| **name** | `string` | Name for your index | [Optional] [Defaults to `undefined`] |

### Return type

[**IndexCreateResponse**](IndexCreateResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: query parameter sortAscending |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIndex

> IndexDropResponse deleteIndex(collectionName, indexName)

Delete Index

Delete Index by Name for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { DeleteIndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The name of your Index
    indexName: indexName_example,
  } satisfies DeleteIndexRequest;

  try {
    const data = await api.deleteIndex(body);
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
| **indexName** | `string` | The name of your Index | [Defaults to `undefined`] |

### Return type

[**IndexDropResponse**](IndexDropResponse.md)

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


## index

> MongoIndex index(collectionName, indexName)

Index for Collection

Index by Name for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { IndexRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | The name of your Index
    indexName: indexName_example,
  } satisfies IndexRequest;

  try {
    const data = await api.index(body);
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
| **indexName** | `string` | The name of your Index | [Defaults to `undefined`] |

### Return type

[**MongoIndex**](MongoIndex.md)

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


## indexDetails

> Array&lt;IndexInfo&gt; indexDetails(collectionName)

Indices with details for Collection

All Indices of the given Collection as the database reports them: the keys in the order of the index (&#x60;direction&#x60; is 1, -1 or the type of the key, a text index lists its fields), unique, sparse, hidden, partial filter, collation, weights, default language and expiration.

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { IndexDetailsRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
  } satisfies IndexDetailsRequest;

  try {
    const data = await api.indexDetails(body);
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

[**Array&lt;IndexInfo&gt;**](IndexInfo.md)

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


## indexStats

> Array&lt;IndexUsage&gt; indexStats(collectionName)

Index usage for Collection

How often every Index of the given Collection was used since the counting started. Replaces the aggregation stage $indexStats, which is denied by default because its result contains the address of the database server.

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { IndexStatsRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
  } satisfies IndexStatsRequest;

  try {
    const data = await api.indexStats(body);
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

[**Array&lt;IndexUsage&gt;**](IndexUsage.md)

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


## listIndices

> Array&lt;MongoIndex&gt; listIndices(collectionName)

List Indices for Collection

List all Indices for given Collection

### Example

```ts
import {
  Configuration,
  IndexApi,
} from '';
import type { ListIndicesRequest } from '';

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
  const api = new IndexApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
  } satisfies ListIndicesRequest;

  try {
    const data = await api.listIndices(body);
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

[**Array&lt;MongoIndex&gt;**](MongoIndex.md)

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

