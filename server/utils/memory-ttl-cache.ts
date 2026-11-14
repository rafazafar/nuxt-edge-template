export function createMemoryTtlCache<T>(ttlMs: number) {
  let entry: { value: T, expires: number } | null = null

  return {
    get(): T | undefined {
      if (entry && Date.now() < entry.expires) return entry.value
      entry = null
      return undefined
    },
    set(value: T) {
      entry = { value, expires: Date.now() + ttlMs }
    },
    invalidate() {
      entry = null
    },
  }
}
