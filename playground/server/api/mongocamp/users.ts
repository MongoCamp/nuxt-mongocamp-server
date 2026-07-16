export default defineEventHandler((event) => {
  const { adminApi } = useMongocampApi(event)
  return adminApi.listUsers()
})
