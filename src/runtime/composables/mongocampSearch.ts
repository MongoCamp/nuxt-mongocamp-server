import type { FindRequest, MongoFindRequest } from '../api'

import { useMongocampApi } from './mongocampApi'
import { useRuntimeConfig } from '#app'

export function useMongocampSearch() {
  const { documentApi } = useMongocampApi()

  const config = useRuntimeConfig()

  const mongoFindRequest = (filter: object = {}, sort: object = {}, projection: object = {}) => {
    return <MongoFindRequest>{ filter, sort, projection }
  }

  const findRequest = (collection: string, searchParameter: MongoFindRequest = mongoFindRequest(), rows: number = config.public.mongocamp?.paginationSize, actualPage = 1) => {
    return <FindRequest>{ collectionName: collection, mongoFindRequest: searchParameter, rowsPerPage: rows, page: actualPage } as FindRequest
  }

  function find(collectionName: string, filter: string | undefined, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    return documentApi.listDocuments({ collectionName, filter, sort, projection, page, rowsPerPage })
  }

  function findAll(collectionName: string, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    return find(collectionName, undefined, page, sort, projection, rowsPerPage)
  }
  function findByField(collectionName: string, field: string, value: string, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    const escapedValue = value.replace(/"/g, '\\"')
    const expression = `${field}: "${escapedValue}"`
    return find(collectionName, expression, page, sort, projection, rowsPerPage)
  }

  return { mongoFindRequest, findRequest, find, findAll, findByField }
}
