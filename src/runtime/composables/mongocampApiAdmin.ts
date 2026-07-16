import type { PasswordUpdateRequest, Role, UpdateRoleRequest, UserInformation } from '../api'
import { useMongocampApi } from './mongocampApi'

export function useMongocampApiAdmin() {
  const { adminApi } = useMongocampApi()

  function listUsers(filter?: string, rowsPerPage?: number, page?: number) {
    return adminApi.listUsers({ filter, rowsPerPage, page })
  }

  function getUser(userId: string) {
    return adminApi.getUser({ userId })
  }

  function addUser(userInformation: UserInformation) {
    return adminApi.addUser({ userInformation })
  }

  function deleteUser(userId: string) {
    return adminApi.deleteUser({ userId })
  }

  function updatePasswordForUser(userId: string, passwordUpdateRequest: PasswordUpdateRequest) {
    return adminApi.updatePasswordForUser({ userId, passwordUpdateRequest })
  }

  function updateRolesForUser(userId: string, roles: string[]) {
    return adminApi.updateRolesForUser({ userId, requestBody: roles })
  }

  function generateNewApiKeyForUser(userId: string) {
    return adminApi.gnerateNewApiKeyForUser({ userId })
  }

  function listRoles(filter?: string, rowsPerPage?: number, page?: number) {
    return adminApi.listRoles({ filter, rowsPerPage, page })
  }

  function getRole(roleName: string) {
    return adminApi.getRole({ roleName })
  }

  function addRole(role: Role) {
    return adminApi.addRole({ role })
  }

  function updateRole(roleName: string, updateRoleRequest: UpdateRoleRequest) {
    return adminApi.updateRole({ roleName, updateRoleRequest })
  }

  function deleteRole(roleName: string) {
    return adminApi.deleteRole({ roleName })
  }

  return { listUsers, getUser, addUser, deleteUser, updatePasswordForUser, updateRolesForUser, generateNewApiKeyForUser, listRoles, getRole, addRole, updateRole, deleteRole }
}
