# Playora

Single-page web app shipped as one self-contained HTML file and deployed on Railway.

## Layout

- `index.html` – the full app (HTML, CSS and JS inlined, ~11 MB). This is what gets served.
- `playora-standalone.html` – byte-for-byte copy of `index.html`. Keep the two in sync, or delete one; do not let them drift.
- `rpc.ts` – tiny fetch-based API client. Reads `EXPO_PUBLIC_API_URL`, falls back to `http://localhost:3000`.
- `auth/jwt.ts` – `signJwt` / `verifyJwt` helpers built on `jsonwebtoken`. Requires `JWT_SECRET`; throws if unset.
- `.env.example` – documents the two environment variables above.
- `railway.json`, `nixpacks.toml` – Railway build and start configuration.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `EXPO_PUBLIC_API_URL` | Public API base URL used by the client. Set to the Railway service domain in production. |
| `JWT_SECRET` | Secret for signing and verifying JWTs. Set in Railway, never commit it. |

## Known gaps

The Railway config expects `npm install && node build.mjs` for the build and `node dist/host.mjs` for start,
but the repo has no `package.json`, no `build.mjs` and no `dist/` directory. Deploys will fail until those
files are added or the config is changed to serve `index.html` directly.

`rpc.ts` and `auth/jwt.ts` are TypeScript and are not referenced by `index.html`. There is no tsconfig,
bundler or test setup yet.

## Working in this repo

- `index.html` is large and inlined. Prefer targeted `grep` / `sed` edits over reading the whole file.
- The page sets a strict Content-Security-Policy (`connect-src 'none'`), so any API calls added to the
  HTML will need that header updated.
- Do not commit real secrets. Use `.env.example` to document new variables.
