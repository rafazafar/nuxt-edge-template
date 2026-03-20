import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HomePage from '../../app/pages/index.vue'

describe('home page', () => {
  it('includes the AI SDK feature card', async () => {
    const component = await mountSuspended(HomePage)

    expect(component.text()).toContain('AI SDK')
    expect(component.html()).toContain('/docs/ai-sdk')
  })

  it('keeps terminal prompts primary and muted lines semantic', async () => {
    const component = await mountSuspended(HomePage)
    const html = component.html()

    expect(html).toContain('<span class="text-primary mr-2">❯</span><span>pnpm install</span>')
    expect(html).toContain('class="leading-relaxed min-h-[1.5rem] text-muted"')
    expect(html).not.toContain('text-zinc-500')
  })
})
