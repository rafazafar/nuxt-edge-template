import { blob } from 'hub:blob'

export default eventHandler(async (event) => {
  const { pathname } = event.context.params || {}
  const resolvedPathname = Array.isArray(pathname) ? pathname.join('/') : pathname

  if (!resolvedPathname) {
    throw createError({ statusCode: 404, statusMessage: 'Image not found' })
  }

  setHeader(event, 'Content-Security-Policy', 'default-src \'none\';')
  return blob.serve(event, resolvedPathname)
})
