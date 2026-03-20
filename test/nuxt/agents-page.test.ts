import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AgentsPage from '../../app/pages/docs/agents.vue'

describe('agents page', () => {
  it('does not reference the unsupported lucide vuejs icon', async () => {
    const component = await mountSuspended(AgentsPage)
    const iconProps = component.findAllComponents({ name: 'UIcon' }).map(icon => icon.props('name'))

    expect(iconProps).not.toContain('i-lucide-vuejs')
  })
})
