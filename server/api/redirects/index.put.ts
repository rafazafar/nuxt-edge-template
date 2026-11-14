import { setRedirects } from '../../utils/redirects'

export default eventHandler(async (event) => {
  const body = await readValidatedBody(event, RedirectMapSchema.parse)

  // Used in server/middleware/redirects.ts
  await setRedirects(body)

  return body
})
