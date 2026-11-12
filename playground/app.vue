<script setup lang='ts'>
import { consola } from 'consola'

const url = useMongocampUrl()
const config = useRuntimeConfig()

const { systemApi } = useMongocampApi()
const { findByField } = useMongocampSearch()
const collectionsApi = useMongocampApiCollections()

const { login, logout, isLoggedIn, userGrants } = useMongocampAuth()
const state = useMongocampStorage()
const user = useMongocampUser()

const loginError = ref('')
const loginPending = ref(false)

const { data: version, error: versionError, refresh: reloadVersion } = await useLazyAsyncData('version', () => systemApi.version())

const { data: adminRole, refresh: reloadRole } = await useLazyAsyncData('adminRole', () => findByField('mc_roles', 'name', 'admin*'))

const { data: roles, refresh: reloadRoles } = useFetch('/api/mongocamp/roles')
const { data: users, refresh: reloadUsers } = useFetch('/api/mongocamp/users')

// client-side only: depends on the browser session token
const collections = ref<string[]>([])
const collectionsError = ref('')
const userCollections = computed(() => collections.value.filter(name => !name.startsWith('mc_')))
const mcCollections = computed(() => collections.value.filter(name => name.startsWith('mc_')))
const selected = ref('')
const browser = shallowRef<ReturnType<typeof usePaginatedFind> | null>(null)

async function loadCollections() {
  collectionsError.value = ''
  try {
    collections.value = await collectionsApi.list()
  }
  catch (e) {
    collections.value = []
    collectionsError.value = String(e)
  }
}

async function selectCollection(name: string) {
  selected.value = name
  browser.value = usePaginatedFind(name, { rowsPerPage: 5 })
  await browser.value.load()
}

async function actionLogin() {
  loginError.value = ''
  loginPending.value = true
  try {
    await login(config.public.MONGOCAMP_ADMIN_USER, config.public.MONGOCAMP_ADMIN_PASSWORD)
  }
  catch (e) {
    loginError.value = String(e)
    consola.error(e)
  }
  finally {
    loginPending.value = false
  }
}

function actionLogout() {
  logout()
}

function actionReload() {
  reloadVersion()
  reloadRoles()
  reloadUsers()
  reloadRole()
  if (isLoggedIn.value) loadCollections()
}

watch(isLoggedIn, (loggedIn) => {
  if (loggedIn) {
    loadCollections()
  }
  else {
    collections.value = []
    selected.value = ''
    browser.value = null
  }
})

onMounted(() => {
  reloadVersion()
  if (isLoggedIn.value) loadCollections()
})
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto font-sans">
    <h2 class="text-2xl font-bold">
      MongoCamp Playground
    </h2>
    <div class="text-gray-500">
      {{ url }}
    </div>

    <h3 class="mt-6 font-semibold">
      Server
    </h3>
    <div class="text-lg">
      <span
        v-if="versionError"
        class="text-red-500"
      >unreachable: {{ versionError.message }}</span>
      <pre v-else>{{ version }}</pre>
    </div>

    <h3 class="mt-6 font-semibold">
      Session
    </h3>
    <div class="text-lg">
      logged in:
      <span :class="isLoggedIn ? 'text-green-600' : 'text-red-500'">{{ isLoggedIn }}</span>
      <span v-if="isLoggedIn"> · user: {{ user.user }} ({{ user.isAdmin ? 'admin' : 'user' }})</span>
    </div>
    <div class="mt-2">
      <button
        class="btn-green"
        :disabled="loginPending"
        @click="actionLogin"
      >
        Login
      </button>
      <button
        class="ml-4 btn-red"
        @click="actionLogout"
      >
        Logout
      </button>
      <button
        class="ml-4 btn-blue"
        @click="actionReload"
      >
        Reload all
      </button>
    </div>
    <div
      v-if="loginError"
      class="mt-2 text-red-500"
    >
      {{ loginError }}
    </div>

    <h4 class="mt-4 font-semibold">
      Token
    </h4>
    <textarea
      v-model="state.token"
      rows="4"
      class="w-full"
    />

    <h4 class="mt-4 font-semibold">
      Grants (Client)
    </h4>
    <pre>{{ userGrants }}</pre>

    <h3 class="mt-6 font-semibold">
      Collections (Client API)
    </h3>
    <div
      v-if="!isLoggedIn"
      class="text-gray-500"
    >
      Log in to list collections.
    </div>
    <div v-else>
      <div
        v-if="collectionsError"
        class="text-red-500"
      >
        {{ collectionsError }}
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="name in userCollections"
          :key="name"
          :class="name === selected ? 'btn-blue' : 'btn-green'"
          @click="selectCollection(name)"
        >
          {{ name }}
        </button>
        <span
          v-if="!userCollections.length && !collectionsError"
          class="text-gray-500"
        >
          no user collections
        </span>
      </div>
    </div>

    <h3 class="mt-6 font-semibold">
      MongoCamp Collections (mc_*)
    </h3>
    <div
      v-if="!isLoggedIn"
      class="text-gray-500"
    >
      Log in to list collections.
    </div>
    <div
      v-else
      class="flex flex-wrap gap-2"
    >
      <button
        v-for="name in mcCollections"
        :key="name"
        :class="name === selected ? 'btn-blue' : 'btn-green'"
        @click="selectCollection(name)"
      >
        {{ name }}
      </button>
    </div>

    <div
      v-if="browser"
      class="mt-4"
    >
      <h4 class="font-semibold">
        {{ selected }} — page {{ browser.page.value }}
      </h4>
      <div>
        <button
          class="btn-blue"
          :disabled="browser.page.value <= 1 || browser.pending.value"
          @click="browser.previousPage()"
        >
          Previous
        </button>
        <button
          class="ml-4 btn-blue"
          :disabled="browser.pending.value"
          @click="browser.nextPage()"
        >
          Next
        </button>
      </div>
      <div
        v-if="browser.error.value"
        class="text-red-500"
      >
        {{ browser.error.value }}
      </div>
      <div v-else-if="browser.pending.value">
        loading…
      </div>
      <pre v-else>{{ browser.documents.value }}</pre>
    </div>

    <h3 class="mt-6 font-semibold">
      Server API
    </h3>
    <h4 class="font-semibold">
      Roles
    </h4>
    <pre>{{ roles }}</pre>
    <h4 class="font-semibold">
      Users
    </h4>
    <pre>{{ users }}</pre>
    <h4 class="font-semibold">
      Admin role (search)
    </h4>
    <pre>{{ adminRole }}</pre>
  </div>
</template>
