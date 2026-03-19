import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AiSdkPage from '../../app/pages/docs/ai-sdk.vue'

describe('ai sdk page', () => {
  it('renders the demo controls and code sample', async () => {
    const component = await mountSuspended(AiSdkPage)

    expect(component.text()).toContain('AI SDK')
    expect(component.text()).toContain('createWorkersAI()')
    expect(component.text()).toContain('Generate')
    expect(component.text()).toContain('Stream')
  })
})
