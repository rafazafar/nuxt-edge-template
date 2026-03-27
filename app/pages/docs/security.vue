<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('docs.security.seo.title'),
  description: () => t('docs.security.seo.description'),
})

const originalDocs = {
  label: t('docs.security.button'),
  href: 'https://nuxt-security.vercel.app/',
}

const sections = computed(() => [
  {
    key: 'headers',
    title: t('docs.security.sections.headers.title'),
    body: t('docs.security.sections.headers.body'),
  },
  {
    key: 'csp',
    title: t('docs.security.sections.csp.title'),
    body: t('docs.security.sections.csp.body'),
  },
  {
    key: 'routeRules',
    title: t('docs.security.sections.routeRules.title'),
    body: t('docs.security.sections.routeRules.body'),
  },
])
</script>

<template>
  <UContainer class="py-16 max-w-4xl">
    <div class="mb-10">
      <div class="flex items-center gap-2 mb-4">
        <UIcon name="i-lucide-shield" class="size-5 text-primary" />
        <span class="font-mono text-xs text-primary uppercase tracking-widest">nuxt-security</span>
      </div>
      <h1 class="text-4xl font-black tracking-tight text-highlighted mb-3">{{ t('docs.security.title') }}</h1>
      <p class="text-muted text-base leading-relaxed mb-5">
        {{ t('docs.security.lead.beforeCode') }}
        <code class="text-primary">nuxt-security</code>
        {{ t('docs.security.lead.afterCode') }}
      </p>
      <div class="mb-5">
        <UButton
          :label="originalDocs.label"
          :to="originalDocs.href"
          target="_blank"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-external-link"
        />
      </div>
      <div class="rounded-lg border dark:border-zinc-800 border-zinc-200 border-l-2 border-l-primary dark:bg-zinc-900 bg-zinc-100 px-4 py-3 font-mono text-sm leading-loose text-muted overflow-x-auto">
        <span class="text-violet-400">export default</span> <span class="text-primary">defineNuxtConfig</span>({<br>
        &nbsp;&nbsp;modules: [<span class="text-amber-400">'nuxt-security'</span>],<br>
        &nbsp;&nbsp;security: {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;headers: <span class="text-violet-400">true</span><br>
        &nbsp;&nbsp;}<br>
        })
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <UCard
        v-for="section in sections"
        :key="section.key"
        :ui="{ root: 'dark:bg-zinc-900 dark:border-zinc-800 h-full' }"
      >
        <template #header>
          <span class="font-semibold text-sm text-highlighted">{{ section.title }}</span>
        </template>

        <p class="text-sm text-muted leading-relaxed">
          {{ section.body }}
        </p>
      </UCard>
    </div>
  </UContainer>
</template>
