import { describe, expect, it, vi, afterEach } from 'vitest'
import { createMemoryTtlCache } from '../../server/utils/memory-ttl-cache'

describe('createMemoryTtlCache', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns undefined on a miss and the stored value within the TTL', () => {
    const cache = createMemoryTtlCache<string>(1_000)
    expect(cache.get()).toBeUndefined()
    cache.set('redirects')
    expect(cache.get()).toBe('redirects')
  })

  it('expires after the TTL and can be invalidated early', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-11-14T00:00:00Z'))
    const cache = createMemoryTtlCache<string>(1_000)
    cache.set('stale')
    expect(cache.get()).toBe('stale')
    vi.advanceTimersByTime(1_001)
    expect(cache.get()).toBeUndefined()
    cache.set('fresh')
    cache.invalidate()
    expect(cache.get()).toBeUndefined()
  })

  it('stores null without treating it as a miss', () => {
    const cache = createMemoryTtlCache<string | null>(1_000)
    cache.set(null)
    expect(cache.get()).toBeNull()
  })
})
