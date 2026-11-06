# DocumentApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**_delete**](DocumentApi.md#_delete) | **DELETE** /mongodb/collections/{collectionName}/documents/{documentId} | Delete Document from Collection |
| [**countDocuments**](DocumentApi.md#countdocuments) | **GET** /mongodb/collections/{collectionName}/documents/count | Count Documents in Collection |
| [**deleteMany**](DocumentApi.md#deletemany) | **DELETE** /mongodb/collections/{collectionName}/documents/many/delete | Delete Many in Collection |
| [**find**](DocumentApi.md#find) | **POST** /mongodb/collections/{collectionName}/documents | Documents in Collection |
| [**getDocument**](DocumentApi.md#getdocument) | **GET** /mongodb/collections/{collectionName}/documents/{documentId} | Document from Collection |
| [**insert**](DocumentApi.md#insert) | **PUT** /mongodb/collections/{collectionName}/documents | Insert Document |
| [**insertMany**](DocumentApi.md#insertmany) | **PUT** /mongodb/collections/{collectionName}/documents/many/insert | Insert many Documents |
| [**listDocuments**](DocumentApi.md#listdocuments) | **GET** /mongodb/collections/{collectionName}/documents | Documents in Collection |
| [**searchDocuments**](DocumentApi.md#searchdocuments) | **POST** /mongodb/collections/{collectionName}/documents/search | Search Documents in Collection |
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


## countDocuments

> CountResponse countDocuments(collectionName, filter)

Count Documents in Collection

Count the Documents of the given Collection that match the filter without loading them

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { CountDocumentsRequest } from '';

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
    // string | Filter Query like on the list of documents, by default all documents are counted (optional)
    filter: filter_example,
  } satisfies CountDocumentsRequest;

  try {
    const data = await api.countDocuments(body);
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
| **filter** | `string` | Filter Query like on the list of documents, by default all documents are counted | [Optional] [Defaults to `undefined`] |

### Return type

[**CountResponse**](CountResponse.md)

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

> DeleteResponse deleteMany(collectionName, requestBody, matchAll, filter)

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
    // { [key: string]: any; }
    requestBody: Object,
    // boolean | Allow an empty filter, that matches all documents of the collection (optional)
    matchAll: true,
    // string | Filter Query like on the list of documents, as an alternative to the filter of the request body. Use only one of both. (optional)
    filter: filter_example,
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
| **requestBody** | `{ [key: string]: any; }` |  | |
| **matchAll** | `boolean` | Allow an empty filter, that matches all documents of the collection | [Optional] [Defaults to `false`] |
| **filter** | `string` | Filter Query like on the list of documents, as an alternative to the filter of the request body. Use only one of both. | [Optional] [Defaults to `undefined`] |

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
| **400** | Invalid value for: body, Invalid value for: query parameter matchAll |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## find

> Array&lt;{ [key: string]: any; }&gt; find(collectionName, mongoFindRequest, rowsPerPage, page)

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


## getDocument

> { [key: string]: any; } getDocument(collectionName, documentId)

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

**{ [key: string]: any; }**

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
    // { [key: string]: any; } | JSON Representation for your Document.
    requestBody: {"key1":"value","key2":true,"key3":{"creationDate":"2026-11-06T06:04:09.291Z"}},
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
| **requestBody** | `{ [key: string]: any; }` | JSON Representation for your Document. | |

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

> InsertResponse insertMany(collectionName, ordered, requestBody)

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
    // boolean | true (default): the insert stops at the first document that fails (answer 409 for a duplicate key). false: all documents that can be stored are stored, the others are listed in `errors` of the answer. (optional)
    ordered: true,
    // Array<{ [key: string]: any; }> (optional)
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
| **ordered** | `boolean` | true (default): the insert stops at the first document that fails (answer 409 for a duplicate key). false: all documents that can be stored are stored, the others are listed in &#x60;errors&#x60; of the answer. | [Optional] [Defaults to `true`] |
| **requestBody** | `Array<{ [key: string]: any; }>` |  | [Optional] |

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
| **400** | Invalid value for: body, Invalid value for: query parameter ordered |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDocuments

> Array&lt;{ [key: string]: any; }&gt; listDocuments(collectionName, filter, sort, projection, rowsPerPage, page)

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

**Array<{ [key: string]: any; }>**

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


## searchDocuments

> Array&lt;{ [key: string]: any; }&gt; searchDocuments(collectionName, searchRequest, rowsPerPage, page)

Search Documents in Collection

The list of documents with the parameters in the request body: for filters that are too long for the URL (a URL of more than 2048 characters is refused by the server before the request is handled, without CORS headers). The filter is a Lucene query like in the list, the answer and the pagination headers are the same.

### Example

```ts
import {
  Configuration,
  DocumentApi,
} from '';
import type { SearchDocumentsRequest } from '';

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
    // SearchRequest
    searchRequest: {"filter":"name:John AND age:[18 TO 65]","sort":["-age"],"projection":["name","age"]},
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies SearchDocumentsRequest;

  try {
    const data = await api.searchDocuments(body);
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
| **searchRequest** | [SearchRequest](SearchRequest.md) |  | |
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
    // { [key: string]: any; }
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
| **requestBody** | `{ [key: string]: any; }` |  | |

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
    // { [key: string]: any; }
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
| **requestBody** | `{ [key: string]: any; }` |  | |

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

> UpdateResponse updateMany(collectionName, updateRequest, matchAll, filter)

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
    // boolean | Allow an empty filter, that matches all documents of the collection (optional)
    matchAll: true,
    // string | Filter Query like on the list of documents, as an alternative to the filter of the request body. Use only one of both. (optional)
    filter: filter_example,
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
| **matchAll** | `boolean` | Allow an empty filter, that matches all documents of the collection | [Optional] [Defaults to `false`] |
| **filter** | `string` | Filter Query like on the list of documents, as an alternative to the filter of the request body. Use only one of both. | [Optional] [Defaults to `undefined`] |

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
| **400** | Invalid value for: body, Invalid value for: query parameter matchAll |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

