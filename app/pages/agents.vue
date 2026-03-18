<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Agent Skills · NuxtEdge',
  description: 'A rough guide to coding in this repo with the preinstalled agent skills.',
})

const skills = [
  {
    name: 'using-superpowers',
    icon: 'i-lucide-shield-check',
    tone: 'primary',
    summary: 'Always start by checking which skill applies before writing code.',
    use: 'Use this when you are about to answer, plan, inspect, or implement anything.',
    output: 'Shows the workflow and prevents skipping the right repo-specific process.',
  },
  {
    name: 'nuxt',
    icon: 'i-lucide-vuejs',
    tone: 'success',
    summary: 'Nuxt routing, composables, server routes, data fetching, and app structure.',
    use: 'Use this for pages, components, server routes, and framework conventions.',
    output: 'Keeps implementation aligned with Nuxt 4 patterns and this codebase.',
  },
  {
    name: 'nuxthub',
    icon: 'i-lucide-database-zap',
    tone: 'warning',
    summary: 'Blob, KV, cache, and database APIs for edge-first full-stack features.',
    use: 'Use this when touching `hub:blob`, `hub:kv`, `hub:db`, or cached handlers.',
    output: 'Keeps storage and server work consistent with NuxtHub v0.10.x.',
  },
]

const workflow = [
  {
    step: '1',
    title: 'Find the skill',
    text: 'Open the repo skill set and choose the narrowest match before touching code.',
  },
  {
    step: '2',
    title: 'Read the local pattern',
    text: 'Inspect nearby pages, components, and server routes so the change fits the app.',
  },
  {
    step: '3',
    title: 'Implement the slice',
    text: 'Make one bounded change, keep the UI cohesive, and avoid inventing new abstractions.',
  },
  {
    step: '4',
    title: 'Verify the result',
    text: 'Run typecheck or the relevant test command and fix the actual failures you introduced.',
  },
]

const exampleSteps = [
  'Check `./.agents/skills/using-superpowers/SKILL.md` first.',
  'Use `nuxt` for the page route and UI conventions.',
  'Use `nuxthub` if the task touches blob, KV, database, or cache.',
  'Implement the smallest working version.',
  'Verify with `pnpm typecheck` or the relevant feature command.',
]
</script>

<template>
  <UContainer class="py-16 sm:py-20 max-w-6xl">
    <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
      <div class="space-y-6">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-bot" class="size-5 text-primary" />
          <span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">agent skills</span>
        </div>

        <div class="space-y-4">
          <h1 class="text-5xl sm:text-6xl font-black tracking-tight text-highlighted leading-[0.95]">
            Code with
            <span class="text-primary">repo skills</span>
          </h1>
          <p class="max-w-2xl text-lg text-muted leading-relaxed">
            This repo ships with a few preinstalled skills. The rough workflow is simple:
            pick the right skill, inspect the local patterns, implement the slice, and verify the result.
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <UBadge label="Preinstalled" color="primary" variant="subtle" class="font-mono" />
          <UBadge label="Nuxt 4" color="success" variant="subtle" class="font-mono" />
          <UBadge label="NuxtHub" color="warning" variant="subtle" class="font-mono" />
        </div>

        <UCard :ui="{ root: 'dark:bg-zinc-900 dark:border-zinc-800' }">
          <template #header>
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-sm font-semibold text-highlighted">What the skills do</p>
                <p class="text-xs text-muted">Use the smallest skill that matches the task.</p>
              </div>
              <UBadge label="Skill-first" color="neutral" variant="subtle" size="sm" class="font-mono" />
            </div>
          </template>

          <div class="space-y-3">
            <div v-for="item in skills" :key="item.name" class="rounded-xl border dark:border-zinc-800 border-zinc-200 p-4">
              <div class="flex items-start justify-between gap-4">
                <div class="flex items-start gap-3">
                  <div
                    class="size-10 rounded-lg flex items-center justify-center border"
                    :class="item.tone === 'success'
                      ? 'border-success/20 bg-success/10 text-success'
                      : item.tone === 'warning'
                        ? 'border-amber-500/20 bg-amber-500/10 text-amber-400'
                        : 'border-primary/20 bg-primary/10 text-primary'"
                  >
                    <UIcon :name="item.icon" class="size-5" />
                  </div>
                  <div>
                    <p class="font-semibold text-highlighted">{{ item.name }}</p>
                    <p class="text-sm text-muted leading-relaxed mt-1">{{ item.summary }}</p>
                  </div>
                </div>
                <UBadge :label="item.tone === 'warning' ? 'Edge' : item.tone === 'success' ? 'Framework' : 'Process'" variant="subtle" size="sm" class="font-mono" />
              </div>
              <USeparator class="my-3" />
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p class="text-[10px] uppercase tracking-wider font-mono text-dimmed mb-1">Use it for</p>
                  <p class="text-muted leading-relaxed">{{ item.use }}</p>
                </div>
                <div>
                  <p class="text-[10px] uppercase tracking-wider font-mono text-dimmed mb-1">Why it matters</p>
                  <p class="text-muted leading-relaxed">{{ item.output }}</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <div class="space-y-6">
        <UCard :ui="{ root: 'dark:bg-zinc-900 dark:border-zinc-800 overflow-hidden' }">
          <template #header>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-highlighted">Rough coding flow</p>
                <p class="text-xs text-muted">How a task should move through the repo.</p>
              </div>
              <UIcon name="i-lucide-route" class="size-5 text-primary" />
            </div>
          </template>

          <div class="space-y-3">
            <div v-for="item in workflow" :key="item.step" class="flex items-start gap-3">
              <div class="size-8 shrink-0 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center font-mono text-xs font-bold text-primary">
                {{ item.step }}
              </div>
              <div class="rounded-xl border dark:border-zinc-800 border-zinc-200 bg-zinc-50/60 dark:bg-zinc-950/40 px-4 py-3 flex-1">
                <p class="font-semibold text-highlighted text-sm">{{ item.title }}</p>
                <p class="text-sm text-muted leading-relaxed mt-1">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </UCard>

        <UCard :ui="{ root: 'dark:bg-zinc-900 dark:border-zinc-800' }">
          <template #header>
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-sm font-semibold text-highlighted">Example run</p>
                <p class="text-xs text-muted">A lightweight recipe for using skills on a real task.</p>
              </div>
              <UBadge label="Example" color="success" variant="subtle" size="sm" class="font-mono" />
            </div>
          </template>

          <div class="rounded-2xl border dark:border-zinc-800 border-zinc-200 bg-zinc-950 px-4 py-4 font-mono text-sm text-zinc-200">
            <div class="flex items-center gap-2 text-xs text-zinc-500 mb-3">
              <span class="size-2 rounded-full bg-red-500/80" />
              <span class="size-2 rounded-full bg-yellow-500/80" />
              <span class="size-2 rounded-full bg-green-500/80" />
              <span class="ml-1">agent-workflow.sh</span>
            </div>
            <div class="space-y-2 leading-relaxed">
              <div v-for="line in exampleSteps" :key="line" class="flex gap-2">
                <span class="text-primary shrink-0">❯</span>
                <span>{{ line }}</span>
              </div>
            </div>
          </div>
        </UCard>

        <UCard :ui="{ root: 'dark:bg-zinc-900 dark:border-zinc-800' }">
          <template #header>
            <p class="text-sm font-semibold text-highlighted">Where the skills live</p>
          </template>
          <div class="space-y-3 text-sm text-muted leading-relaxed">
            <p>Loaded skills in this repo:</p>
            <ul class="space-y-2 font-mono text-xs">
              <li class="rounded-lg border dark:border-zinc-800 border-zinc-200 px-3 py-2">`./.agents/skills/using-superpowers/SKILL.md`</li>
              <li class="rounded-lg border dark:border-zinc-800 border-zinc-200 px-3 py-2">`./.agents/skills/nuxt/SKILL.md`</li>
              <li class="rounded-lg border dark:border-zinc-800 border-zinc-200 px-3 py-2">`./.agents/skills/nuxthub/SKILL.md`</li>
            </ul>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
