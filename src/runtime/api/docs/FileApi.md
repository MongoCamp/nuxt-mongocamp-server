# FileApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteFile**](FileApi.md#deletefile) | **DELETE** /mongodb/buckets/{bucketName}/files/{fileId} | Delete File from Bucket |
| [**findFiles**](FileApi.md#findfiles) | **POST** /mongodb/buckets/{bucketName}/files | Files in Bucket |
| [**getFile**](FileApi.md#getfile) | **GET** /mongodb/buckets/{bucketName}/files/{fileId}/file | File from Bucket |
| [**getFileInformation**](FileApi.md#getfileinformation) | **GET** /mongodb/buckets/{bucketName}/files/{fileId} | FileInformation from Bucket |
| [**insertFile**](FileApi.md#insertfile) | **PUT** /mongodb/buckets/{bucketName}/files | Insert File |
| [**listFiles**](FileApi.md#listfiles) | **GET** /mongodb/buckets/{bucketName}/files | Files in Bucket |
| [**updateFileInformation**](FileApi.md#updatefileinformationoperation) | **PATCH** /mongodb/buckets/{bucketName}/files/{fileId} | Update FileInformation in Bucket |



## deleteFile

> DeleteResponse deleteFile(bucketName, fileId)

Delete File from Bucket

Delete one File from given Bucket

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { DeleteFileRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // string | fileId to delete
    fileId: fileId_example,
  } satisfies DeleteFileRequest;

  try {
    const data = await api.deleteFile(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **fileId** | `string` | fileId to delete | [Defaults to `undefined`] |

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


## findFiles

> Array&lt;FileInformation&gt; findFiles(bucketName, mongoFindRequest, rowsPerPage, page)

Files in Bucket

Alternative to GET Route for more complex queries and URL max. Length

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { FindFilesRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // MongoFindRequest
    mongoFindRequest: {"filter":{"filename":"myfile.json","uploadDate":{"$gte":"2022-03-15T00:00:00.000Z"}},"sort":{"uploadDate":-1},"projection":{}},
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies FindFilesRequest;

  try {
    const data = await api.findFiles(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **mongoFindRequest** | [MongoFindRequest](MongoFindRequest.md) |  | |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;FileInformation&gt;**](FileInformation.md)

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


## getFile

> Blob getFile(bucketName, fileId)

File from Bucket

Get File from given Bucket

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { GetFileRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // string | FileId to read
    fileId: fileId_example,
  } satisfies GetFileRequest;

  try {
    const data = await api.getFile(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **fileId** | `string` | FileId to read | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Content-Length -  <br>  * Content-Disposition -  <br>  * Content-Type -  <br>  * cache-control -  <br>  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFileInformation

> FileInformation getFileInformation(bucketName, fileId)

FileInformation from Bucket

Get one FileInformation from given Bucket

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { GetFileInformationRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // string | fileId to read
    fileId: fileId_example,
  } satisfies GetFileInformationRequest;

  try {
    const data = await api.getFileInformation(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **fileId** | `string` | fileId to read | [Defaults to `undefined`] |

### Return type

[**FileInformation**](FileInformation.md)

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


## insertFile

> InsertResponse insertFile(bucketName, file, metaData, fileName)

Insert File

Insert one File in given Bucket

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { InsertFileRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // Blob
    file: BINARY_DATA_HERE,
    // string
    metaData: metaData_example,
    // string | override filename of uploaded file (optional)
    fileName: fileName_example,
  } satisfies InsertFileRequest;

  try {
    const data = await api.insertFile(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **metaData** | `string` |  | [Defaults to `undefined`] |
| **fileName** | `string` | override filename of uploaded file | [Optional] [Defaults to `undefined`] |

### Return type

[**InsertResponse**](InsertResponse.md)

### Authorization

[httpAuth1](../README.md#httpAuth1), [httpAuth](../README.md#httpAuth), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid value for: body |  -  |
| **0** |  |  * x-error-code - Error Code <br>  * x-error-message - Message of the MongoCampException <br>  * x-error-additional-info - Additional information for the MongoCampException <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFiles

> Array&lt;FileInformation&gt; listFiles(bucketName, filter, sort, projection, rowsPerPage, page)

Files in Bucket

Get Files paginated from given Bucket

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { ListFilesRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // string | MongoDB Filter Query by Default all filter (optional)
    filter: {},
    // string | MongoDB sorting (optional)
    sort: {},
    // string | MongoDB projection (optional)
    projection: {},
    // number | Count elements per page (optional)
    rowsPerPage: 100,
    // number | Requested page of the ResultSets (optional)
    page: 1,
  } satisfies ListFilesRequest;

  try {
    const data = await api.listFiles(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **filter** | `string` | MongoDB Filter Query by Default all filter | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | MongoDB sorting | [Optional] [Defaults to `undefined`] |
| **projection** | `string` | MongoDB projection | [Optional] [Defaults to `undefined`] |
| **rowsPerPage** | `number` | Count elements per page | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Requested page of the ResultSets | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;FileInformation&gt;**](FileInformation.md)

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


## updateFileInformation

> UpdateResponse updateFileInformation(bucketName, fileId, updateFileInformationRequest)

Update FileInformation in Bucket

Replace MetaData and potential update FileName

### Example

```ts
import {
  Configuration,
  FileApi,
} from '';
import type { UpdateFileInformationOperationRequest } from '';

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
  const api = new FileApi(config);

  const body = {
    // string | The name of your MongoDb Collection
    bucketName: bucketName_example,
    // string | fileId to update
    fileId: fileId_example,
    // UpdateFileInformationRequest
    updateFileInformationRequest: ...,
  } satisfies UpdateFileInformationOperationRequest;

  try {
    const data = await api.updateFileInformation(body);
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
| **bucketName** | `string` | The name of your MongoDb Collection | [Defaults to `undefined`] |
| **fileId** | `string` | fileId to update | [Defaults to `undefined`] |
| **updateFileInformationRequest** | [UpdateFileInformationRequest](UpdateFileInformationRequest.md) |  | |

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

