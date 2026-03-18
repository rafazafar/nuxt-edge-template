<template>
  <UHeader
    :ui="{
      root: 'dark:bg-[#05050e]/80 bg-[#f7f6f3]/80 dark:border-white/5 border-black/8 backdrop-blur-xl',
    }"
  >
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <UIcon name="i-lucide-layers" class="size-5 text-primary" />
        <span class="font-bold text-base tracking-tight">NuxtEdge</span>
        <UBadge
          :label="t('nav.badge')"
          variant="subtle"
          size="sm"
          class="uppercase font-mono text-[10px]"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="navItems" />

    <template #right>
      <USelectMenu
        v-model="selectedLocale"
        :aria-label="t('nav.switcherAriaLabel')"
        :items="localeOptions"
        value-key="code"
        label-key="label"
        :search-input="false"
        class="w-32"
      />

      <UColorModeButton>
        <template #fallback>
          <UButton loading variant="ghost" color="neutral" />
        </template>
      </UColorModeButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import { computed, ref, watch } from "vue";

type LocaleOption = {
  code: string;
  label: string;
};

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const fallbackLocaleLabel = (code: string) => code.toUpperCase();

const navItems = computed<NavigationMenuItem[]>(() => [
  { label: t("nav.items.agents"), to: "/docs/agents", icon: "i-lucide-bot" },
  { label: t("nav.items.db"), to: "/docs/db", icon: "i-lucide-database" },
  { label: t("nav.items.blob"), to: "/docs/blob", icon: "i-lucide-image" },
  { label: t("nav.items.kv"), to: "/docs/kv", icon: "i-lucide-key-round" },
  { label: t("nav.items.cache"), to: "/docs/cache", icon: "i-lucide-zap" },
  { label: t("nav.items.email"), to: "/docs/email", icon: "i-lucide-mail" },
  { label: t("nav.items.i18n"), to: "/docs/i18n", icon: "i-lucide-languages" },
]);

const localeOptions = computed<LocaleOption[]>(() =>
  locales.value.map((entry) => {
    if (typeof entry === "string") {
      return { code: entry, label: fallbackLocaleLabel(entry) };
    }

    return {
      code: entry.code,
      label: entry.name ?? fallbackLocaleLabel(String(entry.code)),
    };
  }),
);

const selectedLocale = ref(locale.value);

watch(locale, (currentLocale) => {
  selectedLocale.value = currentLocale;
});

watch(selectedLocale, async (nextLocale, previousLocale) => {
  if (!nextLocale || nextLocale === previousLocale) {
    return;
  }

  const targetPath = switchLocalePath(nextLocale);
  if (!targetPath) {
    return;
  }

  await navigateTo(targetPath);
});
</script>

<style></style>
