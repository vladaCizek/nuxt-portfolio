<template>
  <div class="container flex flex-col mx-auto min-h-screen font-bod">
    <header class="flex items-center justify-between mb-10">
      <div class="hidden md:block">
        <NuxtLink
          to="/"
          class="text-xl font-semibold py-2 hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-200"
          >Vladislav Cizek</NuxtLink
        >
      </div>

      <div class="flex items-center justify-end space-x-2">
        <Menu />
        <ClientOnly>
          <ColorModeSelector class="hidden md:flex" />
        </ClientOnly>
      </div>
    </header>

    <slot />
    <footer>this is my footer</footer>
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
