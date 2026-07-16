# Nuxt Mongocamp Module

Nuxt module wrapping a generated OpenAPI client for [MongoCamp](https://mongocamp.io), with composables for browser-session auth and server-side API-key/bearer auth.

## Setup

```bash
pnpm add @sfxcode/nuxt-mongocamp-server
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@sfxcode/nuxt-mongocamp-server'],
  mongocamp: {
    url: process.env.MONGOCAMP_URL,
    apiKey: process.env.MONGOCAMP_API_KEY, // optional, used by server composables
    refreshToken: true,
    tokenRefreshInterval: 60000,
  },
})
```

### Module options

| Option                  | Type      | Default | Description                                                                                   |
| ------------------------| --------- | ------- | ----------------------------------------------------------------------------------------------|
| `url`                   | `string`  | —       | Required. Base URL of the MongoCamp server.                                                    |
| `apiKey`                | `string`  | —       | Optional. Stored server-side only; picked up automatically by `useMongocampApi(event)`.        |
| `paginationSize`        | `number`  | `500`   | Default rows per page for search/list composables. Values below 10 fall back to the default.   |
| `refreshToken`          | `boolean` | —       | Whether the client auto-refreshes the session token on an interval after login.                |
| `tokenRefreshInterval`  | `number`  | `5000`  | Refresh interval in ms. Values below 5000 fall back to the default.                             |

A missing `url` throws during `nuxi dev`/`nuxi build`/`nuxi generate` (not during `nuxi prepare`, so IDE/type-stub generation still works without a configured backend).

### Client composables (`src/runtime/composables`)

| Composable                          | Purpose                                                                 |
| ------------------------------------| ------------------------------------------------------------------------|
| `useMongocampApi()`                 | Builds all 11 generated API clients, authenticated with the browser session token. |
| `useMongocampAuth()`                | Login/logout, `isLoggedIn`, `userRoles`/`userGrants`, and token-refresh lifecycle. |
| `useMongocampStorage()`             | The session cookie (`{ token, profile }`) backing auth state; SSR-safe.  |
| `useMongocampUser()`                | Reactive current user profile.                                          |
| `useMongocampUrl()`                 | The configured base URL.                                                |
| `useMongocampSearch()`              | `find`/`findAll`/`findByField` document search helpers.                 |
| `usePaginatedFind(collection, opts)`| Reactive pagination wrapper (`page`, `documents`, `pending`, `error`, `nextPage`/`previousPage`/`goToPage`). |
| `useMongocampApiCollection(name)`   | Per-collection insert/update/delete/aggregate/schema helpers.           |
| `useMongocampApiCollections()`      | List collections/databases, database info.                             |
| `useMongocampApiFiles()`            | Bucket and file upload/download/list helpers.                          |
| `useMongocampApiJobs()`             | List/register/update/execute/delete scheduled jobs.                    |
| `useMongocampApiAdmin()`            | User and role management.                                               |

### Server composables (`src/runtime/server/composables`)

| Composable                                    | Purpose                                                                          |
| -----------------------------------------------| -----------------------------------------------------------------------------------|
| `useMongocampApi(event, token?)`               | Builds authenticated API clients using the module's `apiKey`, or the given `token` as a fallback. |
| `useMongocampServerApi(url, key?, token?)`     | Lower-level factory when you need to authenticate against a different URL/credential explicitly. |

```ts
// server/api/mongocamp/users.ts
export default defineEventHandler((event) => {
  const { adminApi } = useMongocampApi(event)
  return adminApi.listUsers()
})
```

## Development

### Setup

Install node:

**Latest node LTS version required (24)**
Use node manager like **nvm** to install.

Install pnpm:
[https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

### Environment

Create .env file in playground with your MongoCamp Parameter for client authentication and API access.

```
MONGOCAMP_URL=
MONGOCAMP_ADMIN_USER=
MONGOCAMP_ADMIN_PASSWORD=
NITRO_MONGOCAMP_API_KEY=
```

### Run

- Run `pnpm dev:prepare` to generate type stubs.
- Use `pnpm dev` to start [playground](./playground) in development mode.


