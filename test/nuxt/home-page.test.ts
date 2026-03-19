import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HomePage from '../../app/pages/index.vue'

describe('home page', () => {
  it('includes the AI SDK feature card', async () => {
    const component = await mountSuspended(HomePage)

    expect(component.text()).toContain('AI SDK')
    expect(component.html()).toContain('/docs/ai-sdk')
  })
})
