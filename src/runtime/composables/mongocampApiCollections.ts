import { useMongocampApi } from './mongocampApi'

export function useMongocampApiCollections() {
  const { collectionApi, databaseApi } = useMongocampApi()

  function list() {
    return collectionApi.listCollections()
  }

  function listByDatabase(databaseName: string) {
    return collectionApi.listCollectionsByDatabase({ databaseName })
  }

  function listDatabases() {
    return databaseApi.listDatabases()
  }

  function databaseInfo(databaseName: string) {
    return databaseApi.getDatabaseInfo({ databaseName })
  }

  function databaseInfos() {
    return databaseApi.databaseInfos()
  }

  function deleteDatabase(databaseName: string) {
    return databaseApi.deleteDatabase({ databaseName })
  }

  return { list, listByDatabase, listDatabases, databaseInfo, databaseInfos, deleteDatabase }
}
