import type { JobConfig } from '../api'
import { useMongocampApi } from './mongocampApi'

export function useMongocampApiJobs() {
  const { jobApi } = useMongocampApi()

  function list() {
    return jobApi.jobsList()
  }

  function listAvailable() {
    return jobApi.possibleJobsList()
  }

  function register(jobConfig: JobConfig) {
    return jobApi.registerJob({ jobConfig })
  }

  function update(jobGroup: string, jobName: string, jobConfig: JobConfig) {
    return jobApi.updateJob({ jobGroup, jobName, jobConfig })
  }

  function remove(jobGroup: string, jobName: string) {
    return jobApi.deleteJob({ jobGroup, jobName })
  }

  function execute(jobGroup: string, jobName: string) {
    return jobApi.executeJob({ jobGroup, jobName })
  }

  return { list, listAvailable, register, update, remove, execute }
}
