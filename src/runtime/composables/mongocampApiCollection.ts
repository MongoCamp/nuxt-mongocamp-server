import type { MongoAggregateRequest } from '../api'
import { useMongocampApi } from './mongocampApi'
import { useRuntimeConfig } from '#app'

export function useMongocampApiCollection(collectionName: string) {
  const { documentApi, collectionApi } = useMongocampApi()
  const config = useRuntimeConfig()

  function insert(document: { [key: string]: string }) {
    return documentApi.insert({ collectionName, requestBody: document })
  }

  function insertMany(documents: Array<{ [key: string]: string }>) {
    return documentApi.insertMany({ collectionName, requestBody: documents })
  }

  function update(documentId: string, document: { [key: string]: string }) {
    return documentApi.update({ collectionName, documentId, requestBody: document })
  }

  function updatePartial(documentId: string, document: { [key: string]: string }) {
    return documentApi.updateDocumentPartial({ collectionName, documentId, requestBody: document })
  }

  function remove(documentId: string) {
    return documentApi._delete({ collectionName, documentId })
  }

  function removeMany(query: { [key: string]: string }) {
    return documentApi.deleteMany({ collectionName, requestBody: query })
  }

  function aggregate(mongoAggregateRequest: MongoAggregateRequest, rowsPerPage: number = config.public.mongocamp?.paginationSize, page = 1) {
    return collectionApi.aggregate({ collectionName, mongoAggregateRequest, rowsPerPage, page })
  }

  function information(includeDetails = false) {
    return collectionApi.getCollectionInformation({ collectionName, includeDetails })
  }

  function schemaAnalysis() {
    return collectionApi.getSchemaAnalysis({ collectionName })
  }

  function distinct(field: string) {
    return collectionApi.distinct({ collectionName, field })
  }

  function clear() {
    return collectionApi.clearCollection({ collectionName })
  }

  return { insert, insertMany, update, updatePartial, remove, removeMany, aggregate, information, schemaAnalysis, distinct, clear }
}
