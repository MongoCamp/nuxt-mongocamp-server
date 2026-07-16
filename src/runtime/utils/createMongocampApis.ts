import type { Configuration } from '../api'
import {
  AdminApi,
  ApplicationApi,
  AuthApi,
  BucketApi,
  CollectionApi,
  DatabaseApi,
  DocumentApi,
  FileApi,
  IndexApi,
  InformationApi,
  JobsApi,
} from '../api'

export function createMongocampApis(configuration: Configuration) {
  return {
    adminApi: new AdminApi(configuration),
    applicationApi: new ApplicationApi(configuration),
    authApi: new AuthApi(configuration),
    bucketApi: new BucketApi(configuration),
    collectionApi: new CollectionApi(configuration),
    databaseApi: new DatabaseApi(configuration),
    documentApi: new DocumentApi(configuration),
    fileApi: new FileApi(configuration),
    indexApi: new IndexApi(configuration),
    informationApi: new InformationApi(configuration),
    jobApi: new JobsApi(configuration),
  }
}
