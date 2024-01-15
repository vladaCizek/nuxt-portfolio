<template>
  <div>
    <header class="flex items-center justify-between mb-10">
      <NuxtLink to="/" class="text-xl font-semibold py-2 hover:bg-gray-200"
        >Vladislav Cizek</NuxtLink
      >

      <div class="flex items-center justify-end space-x-2">
        <Menu />
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </header>
    <div>This is the custom layout</div>
    <slot />
    <footer>Footer yo.</footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Vladislav Cizek",
});
</script>

<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
