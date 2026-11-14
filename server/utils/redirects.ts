import { kv } from 'hub:kv'
import { createMemoryTtlCache } from './memory-ttl-cache'

const REDIRECTS_TTL_MS = 60_000
const cache = createMemoryTtlCache<RedirectMap | null>(REDIRECTS_TTL_MS)

export async function getRedirects(): Promise<RedirectMap | null> {
  const cached = cache.get()
  if (cached !== undefined) return cached
  const value = (await kv.get<RedirectMap>('redirects')) ?? null
  cache.set(value)
  return value
}

export async function setRedirects(value: RedirectMap): Promise<RedirectMap> {
  await kv.set('redirects', value)
  cache.set(value)
  return value
}
