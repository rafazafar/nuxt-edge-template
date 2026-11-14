// Example of a cached event handler
// Learn more on https://nitro.unjs.io/guide/cache

export default cachedEventHandler( async () => {
  return {
    now: Date.now(),
    value: Math.random(),
  }
}, {
  // Lengthened from 5s so the live demo cannot burn KV writes in production.
  maxAge: 3600,
})
