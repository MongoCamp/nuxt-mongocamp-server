import type { MongoFindRequest, UpdateFileInformationRequest } from '../api'
import { useMongocampApi } from './mongocampApi'

export function useMongocampApiFiles() {
  const { fileApi, bucketApi } = useMongocampApi()

  function listBuckets() {
    return bucketApi.listBuckets()
  }

  function getBucket(bucketName: string) {
    return bucketApi.getBucket({ bucketName })
  }

  function clearBucket(bucketName: string) {
    return bucketApi.clearBucket({ bucketName })
  }

  function deleteBucket(bucketName: string) {
    return bucketApi.deleteBucket({ bucketName })
  }

  function list(bucketName: string, filter?: string, sort?: string, projection?: string, rowsPerPage?: number, page?: number) {
    return fileApi.listFiles({ bucketName, filter, sort, projection, rowsPerPage, page })
  }

  function find(bucketName: string, mongoFindRequest: MongoFindRequest, rowsPerPage?: number, page?: number) {
    return fileApi.findFiles({ bucketName, mongoFindRequest, rowsPerPage, page })
  }

  function info(bucketName: string, fileId: string) {
    return fileApi.getFileInformation({ bucketName, fileId })
  }

  function download(bucketName: string, fileId: string) {
    return fileApi.getFile({ bucketName, fileId })
  }

  function upload(bucketName: string, file: Blob, metaData: string, fileName?: string) {
    return fileApi.insertFile({ bucketName, file, metaData, fileName })
  }

  function update(bucketName: string, fileId: string, updateFileInformationRequest: UpdateFileInformationRequest) {
    return fileApi.updateFileInformation({ bucketName, fileId, updateFileInformationRequest })
  }

  function remove(bucketName: string, fileId: string) {
    return fileApi.deleteFile({ bucketName, fileId })
  }

  return { listBuckets, getBucket, clearBucket, deleteBucket, list, find, info, download, upload, update, remove }
}
