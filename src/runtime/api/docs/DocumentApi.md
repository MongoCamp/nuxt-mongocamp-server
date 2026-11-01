# DocumentApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**_delete**](DocumentApi.md#_delete) | **DELETE** /mongodb/collections/{collectionName}/documents/{documentId} | Delete Document from Collection |
| [**deleteMany**](DocumentApi.md#deletemany) | **DELETE** /mongodb/collections/{collectionName}/documents/many/delete | Delete Many in Collection |
| [**find**](DocumentApi.md#find) | **POST** /mongodb/collections/{collectionName}/documents | Documents in Collection |
| [**getDocument**](DocumentApi.md#getdocument) | **GET** /mongodb/collections/{collectionName}/documents/{documentId} | Document from Collection |
| [**insert**](DocumentApi.md#insert) | **PUT** /mongodb/collections/{collectionName}/documents | Insert Document |
| [**insertMany**](DocumentApi.md#insertmany) | **PUT** /mongodb/collections/{collectionName}/documents/many/insert | Insert many Documents |
| [**listDocuments**](DocumentApi.md#listdocuments) | **GET** /mongodb/collections/{collectionName}/documents | Documents in Collection |
| [**update**](DocumentApi.md#update) | **PATCH** /mongodb/collections/{collectionName}/documents/{documentId} | Update Document in Collection |
| [**updateDocumentPartial**](DocumentApi.md#updatedocumentpartial) | **PATCH** /mongodb/collections/{collectionName}/documents/{documentId}/partial | Update Document Parts in Collection |
| [**updateMany**](DocumentApi.md#updatemany) | **PATCH** /mongodb/collections/{collectionName}/documents/many/update | Update many in Collection |



## _delete

> DeleteResponse _delete(collectionName, documentId)

Delete Document from Collection

Delete one Document from given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { DeleteRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | DocumentId to delete
    documentId: documentId_example,
  } satisfies DeleteRequest;

  try {
    const data = await api._delete(body);
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
| **documentId** | `string` | DocumentId to delete | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

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


## deleteMany

> DeleteResponse deleteMany(collectionName, requestBody)

Delete Many in Collection

Delete many Document in given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { DeleteManyRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // { [key: string]: string; }
    requestBody: Object,
  } satisfies DeleteManyRequest;

  try {
    const data = await api.deleteMany(body);
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
| **requestBody** | `{ [key: string]: string; }` |  | |

### Return type

[**DeleteResponse**](DeleteResponse.md)

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


## find

> Array&lt;{ [key: string]: string; }&gt; find(collectionName, mongoFindRequest, rowsPerPage, page)

Documents in Collection

Alternative to GET Route for more complex queries and URL max. Length

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { FindRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // MongoFindRequest
    mongoFindRequest: {"filter":{"additionalProp1":"string","additionalProp2":123},"sort":{"additionalProp2":-1},"projection":{"additionalProp1":1,"additionalProp2":1}},
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies FindRequest;

  try {
    const data = await api.find(body);
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
| **mongoFindRequest** | [MongoFindRequest](MongoFindRequest.md) |  | |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

**Array<{ [key: string]: string; }>**

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


## getDocument

> { [key: string]: string; } getDocument(collectionName, documentId)

Document from Collection

Get one Document from given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { GetDocumentRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | DocumentId to read
    documentId: documentId_example,
  } satisfies GetDocumentRequest;

  try {
    const data = await api.getDocument(body);
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
| **documentId** | `string` | DocumentId to read | [Defaults to `undefined`] |

### Return type

**{ [key: string]: string; }**

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


## insert

> InsertResponse insert(collectionName, requestBody)

Insert Document

Insert one Document in given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { InsertRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // { [key: string]: string; } | JSON Representation for your Document.
    requestBody: {"key1":"value","key2":true,"key3":{"creationDate":"2026-11-01T17:27:18.162Z"}},
  } satisfies InsertRequest;

  try {
    const data = await api.insert(body);
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
| **requestBody** | `{ [key: string]: string; }` | JSON Representation for your Document. | |

### Return type

[**InsertResponse**](InsertResponse.md)

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


## insertMany

> InsertResponse insertMany(collectionName, requestBody)

Insert many Documents

Insert many documents in given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { InsertManyRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // Array<{ [key: string]: string; }> (optional)
    requestBody: ...,
  } satisfies InsertManyRequest;

  try {
    const data = await api.insertMany(body);
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
| **requestBody** | `Array<{ [key: string]: string; }>` |  | [Optional] |

### Return type

[**InsertResponse**](InsertResponse.md)

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


## listDocuments

> Array&lt;{ [key: string]: string; }&gt; listDocuments(collectionName, filter, sort, projection, rowsPerPage, page)

Documents in Collection

Get Documents paginated from given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { ListDocumentsRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | MongoDB Filter Query by Default all filter (optional)
    filter: filter_example,
    // Array<string> | MongoDB sorting (optional)
    sort: [],
    // Array<string> | MongoDB projection (optional)
    projection: [],
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies ListDocumentsRequest;

  try {
    const data = await api.listDocuments(body);
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
| **filter** | `string` | MongoDB Filter Query by Default all filter | [Optional] [Defaults to `undefined`] |
| **sort** | `Array<string>` | MongoDB sorting | [Optional] |
| **projection** | `Array<string>` | MongoDB projection | [Optional] |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

**Array<{ [key: string]: string; }>**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * x-pagination-count-rows - count all elements <br>  * x-pagination-rows-per-page - Count elements per page <br>  * x-pagination-current-page - Current page <br>  * x-pagination-count-pages - Count pages <br>  |
| **400** | Invalid value for: query parameter filter, Invalid value for: query parameter rowsPerPage, Invalid value for: query parameter page |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update

> UpdateResponse update(collectionName, documentId, requestBody)

Update Document in Collection

\&#39;Replace\&#39; one Document with the new document from Request in Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UpdateRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | DocumentId to update
    documentId: documentId_example,
    // { [key: string]: string; }
    requestBody: Object,
  } satisfies UpdateRequest;

  try {
    const data = await api.update(body);
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
| **documentId** | `string` | DocumentId to update | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: string; }` |  | |

### Return type

[**UpdateResponse**](UpdateResponse.md)

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


## updateDocumentPartial

> UpdateResponse updateDocumentPartial(collectionName, documentId, requestBody)

Update Document Parts in Collection

Update the document Parts with the values from the Request

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UpdateDocumentPartialRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // string | DocumentId to update
    documentId: documentId_example,
    // { [key: string]: string; }
    requestBody: Object,
  } satisfies UpdateDocumentPartialRequest;

  try {
    const data = await api.updateDocumentPartial(body);
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
| **documentId** | `string` | DocumentId to update | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: string; }` |  | |

### Return type

[**UpdateResponse**](UpdateResponse.md)

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


## updateMany

> UpdateResponse updateMany(collectionName, updateRequest)

Update many in Collection

Update many Document in given Collection

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { UpdateManyRequest } from '';

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
  const api = new DocumentApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    collectionName: collectionName_example,
    // UpdateRequest
    updateRequest: ...,
  } satisfies UpdateManyRequest;

  try {
    const data = await api.updateMany(body);
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
| **updateRequest** | [UpdateRequest](UpdateRequest.md) |  | |

### Return type

[**UpdateResponse**](UpdateResponse.md)

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

