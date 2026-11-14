// Belt-and-suspenders: never let 4xx/5xx responses be stored in Nitro/KV cache,
// even if a route rule would otherwise apply (e.g. a known page that errors).
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    const status = getResponseStatus(event)
    if (status >= 400) {
      setResponseHeader(event, 'Cache-Control', 'no-store')
    }
  })
})
