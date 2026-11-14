import { getRedirects } from '../../utils/redirects'

export default eventHandler(async () => {
  return (await getRedirects()) || {}
})
