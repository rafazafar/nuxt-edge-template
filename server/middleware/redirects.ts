import { parseURL } from 'ufo'
import { getRedirects } from '../utils/redirects'

export default eventHandler(async (event) => {
  // Skip during prerendering
  if (import.meta.prerender) return

  const { pathname } = parseURL(event.path)
  const redirects = await getRedirects()

  if (redirects?.[pathname]) {
    return sendRedirect(event, redirects[pathname])
  }
})
