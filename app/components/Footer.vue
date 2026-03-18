<template>
  <UFooter :ui="{ root: 'dark:border-white/5 border-black/8' }">
    <template #left>
      <p class="text-sm text-zinc-500 dark:text-zinc-500 font-mono">
        Built with <span class="text-primary">NuxtHub</span> · Running at the
        edge
      </p>
    </template>
    <template #right>
      <UButton
        icon="i-lucide-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/rafazafar/nuxt-edge-template"
        target="_blank"
        size="sm"
      />
      <UButton
        label="Docs"
        color="neutral"
        variant="ghost"
        to="https://hub.nuxt.com/docs/getting-started"
        target="_blank"
        size="sm"
      />
    </template>
  </UFooter>
</template>