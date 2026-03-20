import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import CachePage from '../../app/pages/docs/cache.vue'

describe('cache page', () => {
  it('passes string icon names to UIcon', async () => {
    const component = await mountSuspended(CachePage)
    const iconProps = component.findAllComponents({ name: 'UIcon' }).map(icon => icon.props('name'))

    expect(iconProps.length).toBeGreaterThan(0)
    expect(iconProps.every(name => typeof name === 'string')).toBe(true)
  })
})
