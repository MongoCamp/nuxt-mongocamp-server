import { ref } from 'vue'
import type { FindRequest, MongoFindRequest } from '../api'
import type { FilterFieldValue } from '../utils/buildFieldFilterExpression'
import { buildFieldFilterExpression } from '../utils/buildFieldFilterExpression'

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

  function findByField(collectionName: string, field: string, value: FilterFieldValue, page = 1, sort: string[] | undefined = undefined, projection: string[] | undefined = undefined, rowsPerPage: number = config.public.mongocamp?.paginationSize) {
    const expression = buildFieldFilterExpression(field, value)
    return find(collectionName, expression, page, sort, projection, rowsPerPage)
  }

  return { mongoFindRequest, findRequest, find, findAll, findByField }
}

export interface PaginatedFindOptions {
  filter?: string
  sort?: string[]
  projection?: string[]
  rowsPerPage?: number
}

export function usePaginatedFind(collectionName: string, options: PaginatedFindOptions = {}) {
  const { find } = useMongocampSearch()
  const config = useRuntimeConfig()

  const page = ref(1)
  const rowsPerPage = ref(options.rowsPerPage ?? config.public.mongocamp?.paginationSize)
  const documents = ref<Array<{ [key: string]: string }>>([])
  const pending = ref(false)
  const error = ref<unknown>(null)

  async function load() {
    pending.value = true
    error.value = null
    try {
      documents.value = await find(collectionName, options.filter, page.value, options.sort, options.projection, rowsPerPage.value)
    }
    catch (e) {
      error.value = e
    }
    finally {
      pending.value = false
    }
  }

  function goToPage(target: number) {
    page.value = Math.max(1, target)
    return load()
  }

  function nextPage() {
    return goToPage(page.value + 1)
  }

  function previousPage() {
    return goToPage(page.value - 1)
  }

  return { documents, page, rowsPerPage, pending, error, load, nextPage, previousPage, goToPage }
}
