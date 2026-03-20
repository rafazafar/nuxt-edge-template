import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlobPage from '../../app/pages/docs/blob.vue'

describe('blob page', () => {
  it('passes string icon names to UIcon', async () => {
    const component = await mountSuspended(BlobPage)
    const iconProps = component.findAllComponents({ name: 'UIcon' }).map(icon => icon.props('name'))

    expect(iconProps.length).toBeGreaterThan(0)
    expect(iconProps.every(name => typeof name === 'string')).toBe(true)
  })
})
